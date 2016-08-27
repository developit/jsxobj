function h(name, attrs, ...children) {
	let obj = { name, ...attrs };
	if (typeof name==='function') obj = name(obj);
	[].concat(...children).forEach( child => {
		let { name } = child;
		if (name) {
			obj[name] = child;
			delete child.name;
		}
		else obj.value = child;
	});
	return obj;
}
