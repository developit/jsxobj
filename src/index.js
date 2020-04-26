// invoke any functions, passing the object through them
// if the child is an object with a name property,
// collapse it into the current object for MAGIC

export default function h(name, attrs, ...children) {
	let obj = typeof name === 'function' ? name(attrs) : { name, ...attrs };
	const handle = ({ name = "value", ...attrs }) => obj[name] = attrs;
	[].concat(...children).forEach(handle);
	return obj;
}
