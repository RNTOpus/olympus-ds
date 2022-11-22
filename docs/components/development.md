
# Component development

Workspace created with [NX.dev](https://nx.dev/)

## Commits

**[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** are used.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

```bash
git add .
yarn commit
```


## Starting

```bash
git clone https://YOUR_BITBUCKET_USERNAME@bitbucket.org/opusbr/opus-olympus-design-system.git
cd opus-olympus-design-system
yarn
```


## Create or update a component

```bash
yarn create:component
```

```bash
yarn update:component
```

> See more about [NX generators](https://nx.dev/recipes/generators)

## Build component package

```bash
yarn build:components
```

> See more about [NX Executors](https://nx.dev/recipes/executors)

## Tests

- [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/) is used to test web components.

```bash
yarn test
```

- Watch

```bash
yarn test:watch
```

- Coverage

```bash
yarn test:coverage
```

## Documentation

Each component has its own documentation

#### Structure

```
├── ...
├── packages/components/src
│   ├──────{category}|{component}/
│          ├── docs
│              ├── {doc-name}.md
│          README.md
│   ...
```

### Officcial documentation

- Component documentation is imported into official documentation.

- [VitePress](https://vitepress.vuejs.org/) is used to generate static documentation.

### Structure

```
├── ...
├── docs/components
│   ├──────{category}|{component}/
│          ├── {doc-name}.md
│   ...
```

### Usage

- Development

```bash
yarn docs:dev
```

- Build

```bash
yarn docs:build
```

- Serve

```bash
yarn docs:serve
```

