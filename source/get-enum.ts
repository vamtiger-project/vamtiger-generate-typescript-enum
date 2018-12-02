import { camelCase, startCase } from 'lodash';
import { IGetEnum, StringConstant, regex } from '.';

export default function ({ enumObject, name }: IGetEnum['params']) {
    const { newline, comma } = StringConstant;
    const { spaces } = regex;
    const enumBody = Object
        .keys(enumObject)
        .map(key => `    ${camelCase(key).replace(spaces, '')} = '${enumObject[key]}'`)
        .join(`${comma}${newline}`);
    const enumDeclaration =  [
        `export enum ${startCase(name).replace(spaces, '')} {`,
        enumBody,
        `}`
    ].join(newline);

    return enumDeclaration;
}