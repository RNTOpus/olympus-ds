# Olympus Design System

Monorepo created with [NX.dev](./NX.md)

## Commits

**[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** are used.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> It's not mandatory, but to keep the commit pattern, run:

```bash
git add .
yarn commit
```

## Packages

| Name                                          | Description                                                                       | Version |
| :-------------------------------------------- | :-------------------------------------------------------------------------------- | :------ |
| [`Components`](packages/components/README.md) | Web components with [lit](https://lit.dev/)                                       | `0.0.1` |
| [`Tokens`](packages/tokens/README.md)         | Design Tokens with [style-dictionary](https://amzn.github.io/style-dictionary/#/) | `0.0.1` |

## [Generators](https://nx.dev/recipes/generators) and [Executors](https://nx.dev/recipes/executors)

- Create a component base structure (**custom generator**)

```bash
  yarn create:component
```
> 

- Updates a created component base structure (**custom generator**)

```bash
  yarn update:component
```

- Build components (**custom executor**)

```bash
  yarn build:components
```

## Documentation

- The component has its own documentation

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
