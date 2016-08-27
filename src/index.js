export default function h(name, attrs, ...children) {
	let obj = { name, ...attrs };

	// invoke any functions, passing the object through them
	if (typeof name==='function') obj = name(obj);

	[].concat(...children).forEach( child => {
		// if the child is an object with a name property,
		// collapse it into the current object for MAGIC
		let { name } = child;
		if (name) {
			obj[name] = child;
			delete child.name;
		}
		else {
			obj.value = child;
		}
	});

	return obj;
}
