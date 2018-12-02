import { resolve as resolvePath } from 'path';
import { read as readFromClipboard } from 'clipboardy';
import { expect } from 'chai';
import generateEnum, { GenerateEnumFrom } from '..';

const params = {
    log: {
        from: GenerateEnumFrom.folderContent,
        path: __dirname
    },
    clipboard: {
        from: GenerateEnumFrom.folderContent,
        path: __dirname,
        clipboard: true
    }
};
const expected = /^export enum Test/;

describe('vamtiger-generate-typescript-enum: should generate an enum', function () {
    describe('from folder content', function () {
        before(async function () {
            await Promise.all([
                generateEnum(params.clipboard)
            ]);
        });

        it('clipboard', async function () {
            const generatedEnum = await readFromClipboard();

            expect(generatedEnum).to.match(expected);
        });
    });
});