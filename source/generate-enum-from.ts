import enumFromFolderContent from './enum-from-folder-content';
import { IGenerateEnum, GenerateEnumFrom, ErrorMessage } from '.';

export default async function ({ from, clipboard, name, path }: IGenerateEnum['params']) {
    const action = {
        [GenerateEnumFrom.folderContent]: enumFromFolderContent
    };
    const currentAction = action[from];
    const params = {
        clipboard,
        name,
        path
    };

    if (!currentAction) {
        throw new Error(`${ErrorMessage.cannotGenerateEnumFrom}: ${from}`);
    }

    await currentAction(params);
}