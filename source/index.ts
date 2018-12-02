import { resolve as resolvePath } from 'path';
import Args from 'vamtiger-argv/build/main';
import getHelp from 'vamtiger-commandline-help';
import generateEnumFrom from './generate-enum-from';

export const regex = {
    space: /\s/,
    spaces: new RegExp('')
};

export enum StringConstant {
    newline = '\n',
    comma = ','
}

export enum GenerateEnumFrom {
    folderContent = 'folderContent'
}

export enum ErrorMessage {
    cannotGenerateEnumFrom = 'Cannot generate enum from',
    noEnumFrom = 'No "from" option defined'
}

export enum CommandlineArg {
    from = 'from',
    help = 'help',
    name = 'name',
    clipboard = 'clipboard',
    directory = 'directory'
}

export type Regex = {
    [K in keyof typeof regex]: RegExp
}

export interface IEnumObject {
    [key: string]: string;
}

export interface IGenerateEnum {
    params: {
        from: GenerateEnumFrom;
        path: string;
        name?: string;
        clipboard?: boolean;
    }
}

export interface IEnumFromContent {
    params: Pick<IGenerateEnum['params'], Exclude<keyof IGenerateEnum['params'], 'from'>>;
}

export interface IGetEnum {
    params: {
        name: string;
        enumObject: IEnumObject;
    }
}

export interface ISaveEnum {
    params: Pick<IGenerateEnum['params'], 'clipboard'> & IGetEnum['params']
}

export const ShortCommandlineArgs = {
    [CommandlineArg.from]: 'f',
    [CommandlineArg.help]: 'h',
    [CommandlineArg.name]: 'n',
    [CommandlineArg.clipboard]: 'c',
    [CommandlineArg.directory]: 'd'
}

export const CommandlineDescription = {
    [CommandlineArg.from]: 'Generate enum from (e.g folder content)',
    [CommandlineArg.name]: 'Name of the enum declaration',
    [CommandlineArg.clipboard]: 'copy enum to clipboard',
    [CommandlineArg.directory]: 'Path for enum from folder content',
    [CommandlineArg.help]: 'Help',
}

export default generateEnumFrom;

const args = new Args();
const from = (args.get(CommandlineArg.from) || args.get(ShortCommandlineArgs[CommandlineArg.from])) as GenerateEnumFrom;
const name = (args.get(CommandlineArg.name) || args.get(ShortCommandlineArgs[CommandlineArg.name])) || '';
const directory = (args.get(CommandlineArg.directory) || args.get(ShortCommandlineArgs[CommandlineArg.directory])) || '';
const clipboard = args.has(CommandlineArg.clipboard) || args.has(ShortCommandlineArgs[CommandlineArg.clipboard]);
const params = from && {
    from,
    name,
    path: resolvePath(
        process.cwd(),
        directory
    ),
    clipboard
};
const help = (args.has(CommandlineArg.help) || args.has(ShortCommandlineArgs[CommandlineArg.help])) && getHelp({
    args: Object.assign(CommandlineArg),
    short: ShortCommandlineArgs,
    description: CommandlineDescription
});

if (help) {
    console.log(help);
} else if (params) {
    generateEnumFrom(params);
}