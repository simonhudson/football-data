'use strict';

export function get(name) {
	if (!name) return null;
	const parts = document.cookie.split(';');
	parts.forEach(part => {
		part = part.trim();
		const split = part.split('=');
		const key = split[0];
		const value = split[1];
		if (key === name) return value;
		return null;
	});
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