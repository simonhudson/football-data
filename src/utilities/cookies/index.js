'use strict';

export function get(name) {
	if (!name) return null;
	const value = '; ' + document.cookie;
	if (!document.cookie) return null;
	const parts = value.split('; ' + name + '=');
	return parts.length === 2
		? parts
				.pop()
				.split(';')
				.shift()
		: null;
}

export function set(name, value, expires) {
	if (!name || !value) return null;
	let str = `${name}=${value};path=/`;
	document.cookie = str;
}

export function del(name) {
	if (!name) return null;
	const expires = new Date(0);
	document.cookie = `${name}=${null};path=/;expires=${expires.toUTCString()}`;
}