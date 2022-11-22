
# Development

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

## [Handle the component package](../components/development.md)

## [Handle the token package](../tokens/development.md)


## Officcial documentation

- Component documentation is imported into official documentation.

- [VitePress](https://vitepress.vuejs.org/) is used to generate static documentation.

### Structure

```
├── ...
├── docs/**
│   ├──────{category}|{**}/
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

