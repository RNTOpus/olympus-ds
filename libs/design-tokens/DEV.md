# @olympus-ds/design-tokens

> *for developers*

This library uses [style-dictionary](https://amzn.github.io/style-dictionary/#/) to generate the tokens.

## Updating

To update or create new tokens, follow the pattern below:

### Structure
```
├── ...
├── src/lib/tokens/
│   ├──────── {category}/
│             ├── {type}.json
│
│             {category}.json
│   ...
```
### Token
```json
{
  "font": {
    "size": {
      "small" : { "value": "10px" },
      "medium": { "value": "16px" },
      "large" : { "value": "24px" },
      "base"  : { "value": "{font.size.medium.value}" }
    }
  }
}
```

This library was generated with [Nx](https://nx.dev).

## Building

At the root of the monorepo, run `nx build design-tokens` or `nx run design-tokens:build` to build the library.

or in the library directory **(libs/design-token)**, run `npm run build` or `yarn build` to build the library.

> after the build, the **dist** folder will be generated inside the library directory.

## Publishing

> You might need to authenticate with NPM before running this script.

At the root of the monorepo:

### Building and publish the library, run:
```bash
  nx publish design-tokens --ver={version} --tag={tag}
```
or `nx run design-tokens:publish`

### Just publish the library, run:
```bash
 node tools/scripts/publish.mjs design-tokens {version} {tag}
```
> Semantic Versioning, expected: #.#.#-tag.# or #.#.#

> Default "tag" to "next" so we won't publish the "latest" tag by accident.
