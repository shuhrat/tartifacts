'use strict';

const test = require('ava');
const mockFs = require('mock-fs');

const writeArtifact = require('../../../lib/artifacts').writeArtifact;

test.afterEach(() => mockFs.restore());

test('should throw error if artifact task has error', t => {
    t.throws(
        writeArtifact({}),
        /you should specify the dest path for artifact/
    );
});

test('should throw error if include file does not exist', t => {
    mockFs({
        'source-dir': {}
    });

    t.throws(
        writeArtifact({ name: 'artifact-dir', patterns: 'source-dir/no-file.txt' }),
        /File not found/
    );
});
