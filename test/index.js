import assert from 'assert';
import h from '../src';
import fixture from './fixture.json';
import arrayFixture from './arrayFixture.json';

// example of an import'd plugin
const CustomPlugin = (config) => ({
    ...config,
    name: 'custom-plugin'
});

var json = (
    <webpack target="web" watch>
        <entry path="src/index.js" />
        <resolve>
                <alias from="react-dom" to="preact-compat" />
        </resolve>
        <plugins>
                <uglify-js opts={{
                        compression: true,
                        mangle: false,
                }} />
                <CustomPlugin foo="bar" />
        </plugins>
    </webpack>
);

assert.deepEqual(json, fixture);

var arrayJson = (
    <webpack target="web" watch>
        <entry path="src/index.js" />
        <resolve>
            <alias from="react" to="preact-compat" />
            <alias from="react-dom" to="preact-compat" />
        </resolve>
        <plugins>
            <uglify-js opts={{
                    compression: true,
                    mangle: false,
                }} />
            <CustomPlugin foo="bar" />
        </plugins>
    </webpack>
);

assert.deepEqual(arrayJson, arrayFixture);

console.log('✅ success');
process.exit(0);
