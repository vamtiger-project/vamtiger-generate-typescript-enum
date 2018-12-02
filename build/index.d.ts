import generateEnumFrom from './generate-enum-from';
export declare const regex: {
    space: RegExp;
    spaces: RegExp;
};
export declare enum StringConstant {
    newline = "\n",
    comma = ","
}
export declare enum GenerateEnumFrom {
    folderContent = "folderContent"
}
export declare enum ErrorMessage {
    cannotGenerateEnumFrom = "Cannot generate enum from",
    noEnumFrom = "No \"from\" option defined"
}
export declare enum CommandlineArg {
    from = "from",
    help = "help",
    clipboard = "clipboard",
    directory = "directory"
}
export declare type Regex = {
    [K in keyof typeof regex]: RegExp;
};
export interface IEnumObject {
    [key: string]: string;
}
export interface IGenerateEnum {
    params: {
        from: GenerateEnumFrom;
        path: string;
        name?: string;
        clipboard?: boolean;
    };
}
export interface IEnumFromContent {
    params: Pick<IGenerateEnum['params'], Exclude<keyof IGenerateEnum['params'], 'from'>>;
}
export interface IGetEnum {
    params: {
        name: string;
        enumObject: IEnumObject;
    };
}
export interface ISaveEnum {
    params: Pick<IGenerateEnum['params'], 'clipboard'> & IGetEnum['params'];
}
export declare const ShortCommandlineArgs: {
    [CommandlineArg.from]: string;
    [CommandlineArg.help]: string;
    [CommandlineArg.clipboard]: string;
    [CommandlineArg.directory]: string;
};
export declare const CommandlineDescription: {
    [CommandlineArg.from]: string;
    [CommandlineArg.clipboard]: string;
    [CommandlineArg.directory]: string;
    [CommandlineArg.help]: string;
};
export default generateEnumFrom;
