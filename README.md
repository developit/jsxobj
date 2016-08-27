# `jsxobj`

Converts JSX to JSON.

### Example

```js
import jsxobj from 'jsxobj';

// example of an import'd plugin
const CustomPlugin = config => ({
	...config,
	name: 'custom-plugin'
});

console.log(
	<webpack target="web" watch>
		<entry path="src/index.js" />
		<resolve>
			<alias from="react" to="preact-compat" />
			<alias from="react-dom" to="preact-compat" />
		</resolve>
		<plugins>
			<uglify-js opts={{
				compression: true,
				mangle: false
			}} />
			<CustomPlugin foo="bar" />
		</plugins>
	</webpack>
);
```


The above outputs:

```json
{
  "name": "webpack",
  "target": "web",
  "watch": true,
  "entry": {
    "path": "src/index.js"
  },
  "resolve": {
    "alias": {
      "from": "react-dom",
      "to": "preact-compat"
    }
  },
  "plugins": {
    "uglify-js": {
      "opts": {
        "compression": true,
        "mangle": false
      }
    },
    "custom-plugin": {
      "foo": "bar"
    }
  }
}
```
