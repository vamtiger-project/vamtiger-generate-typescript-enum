# [VAMTIGER Generate Typescript Enum](https://github.com/vamtiger-project/vamtiger-generate-typescript-enum)
Generate a typescript enum for defined option(s).

## Installation
[VAMTIGER Generate Typescript Enum](https://github.com/vamtiger-project/vamtiger-generate-typescript-enum) can be installed using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/):
```bash
npm i --global vamtiger-generate-typescript-enum
```
or
```bash
yarn add global vamtiger-generate-typescript-enum
```

# Usage
Enum declarations can be generated from:
- Folder Content: Enum from files for defined relative directory path

```bash
vamtiger-generate-typescript-enum --from folderContent --directory build --clipboard
```

## Usage Options
Customiseable options can be listed:
```bash
vamtiger-generate-typescript-enum --help
```
| Argument | Short | Description |
|----------|-------|-------------|
| --from | -f | Generate enum from (see From Options) |
| --name | -n | Name of the enum declaration |
| --clipboard | -c | copy enum to clipboard |
| --directory | -d | Path for enum from folder content |
| --help | -h | List help options |

## From Options
| option | Description |
|--------|-------------|
| folderContent | Folder Content |