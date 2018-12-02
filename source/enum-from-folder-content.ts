import { basename } from 'path';
import getFolderContent, { ClassifiedDirectoryContent } from 'vamtiger-get-directory-content-recursive';
import saveEnum from './save-enum';
import { IEnumFromContent, IEnumObject } from '.';

export default async function ({ name, path, clipboard }: IEnumFromContent['params']) {
    const enumName = name || basename(path);
    const folderContent = await getFolderContent({
        path
    }) as string[];
    const enumObject: IEnumObject = folderContent
        .map(filePath => basename(filePath))
        .reduce((currentEnumObject, key) => Object.assign(currentEnumObject, { [key]: key }), {});

    await saveEnum({
        name: enumName,
        enumObject,
        clipboard
    });
};