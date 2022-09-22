import {
  Tree,
  visitNotIgnoredFiles,
  readProjectConfiguration,
  names,
  formatFiles,
  getWorkspaceLayout,
  updateJson,
} from '@nrwl/devkit';
import { WebComponentSchema, NxDevKitNames } from '../types/web-component';

interface NormalizedOptions extends WebComponentSchema, NxDevKitNames {
  npmScope: string;
}

function normalizeOptions(
  tree: Tree,
  options: WebComponentSchema
): NormalizedOptions {
  const { npmScope } = getWorkspaceLayout(tree);
  return {
    ...options,
    ...names(options.name),
    npmScope,
  };
}

function removeFiles(tree: Tree, options: NormalizedOptions) {
  const project = readProjectConfiguration(tree, options.name);
  visitNotIgnoredFiles(tree, project.root, (file) => {
    tree.delete(file);
  });
  tree.delete(project.root);
}

function updateRootTsConfig(host: Tree, options: NormalizedOptions) {
  updateJson(host, './tsconfig.base.json', (json) => {
    const componentPathKey = `${options.npmScope}/${options.fileName}`;
    const c = json.compilerOptions;
    c.paths = c.paths || {};
    delete c.paths[componentPathKey];
    return json;
  });
}

function removeProjectToWorkspaceJson(host: Tree, options: NormalizedOptions) {
  updateJson(host, './workspace.json', (json) => {
    const projectKey = `${options.fileName}`;
    delete json.projects[projectKey];
    return json;
  });
}

export async function removeWebComponentGenerator(
  tree: Tree,
  options: WebComponentSchema
) {
  const normalizedOptions = normalizeOptions(tree, options);
  removeFiles(tree, normalizedOptions);
  updateRootTsConfig(tree, normalizedOptions);
  removeProjectToWorkspaceJson(tree, normalizedOptions);
  await formatFiles(tree);
}

export default removeWebComponentGenerator;
