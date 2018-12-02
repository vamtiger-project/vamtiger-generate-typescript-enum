import { write as copyToClipboard } from 'clipboardy';
import getEnum from './get-enum';
import { ISaveEnum } from '.';

export default async function ({ name, enumObject, clipboard }: ISaveEnum['params']) {
    const enumDeclaration = getEnum({
        name,
        enumObject
    });

    if (clipboard) {
        await copyToClipboard(enumDeclaration);
    } else {
        console.log(enumDeclaration);
    }
}