# Development

![Badge](https://img.shields.io/static/v1?label=@olympus/tokens&message=0.0.1&color=f42550&style=flat-square)

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

## Building

```bash
yarn tokens:build
```

## Publishing

> You might need to authenticate with NPM before running this script.

```bash
yarn tokens:publish -- --ver={version} --tag={tag}
```

> Semantic Versioning, expected: #.#.#-tag.# or #.#.#

> Default "tag" to "next" so we won't publish the "latest" tag by accident.
