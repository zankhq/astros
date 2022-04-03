export function getLocalizedLabel(prop, locale) {
	if (prop && typeof prop === 'object' && !Array.isArray(prop) && prop[locale]) {
		return prop[locale];
	}

	return prop;
}

export function setLocalizationsPropToMap(prop, map) {
	if (prop && typeof prop === 'object' && !Array.isArray(prop)) {
		var langs = Object.keys(prop);

		langs.forEach(function (lang) {
			map[lang] = {};
		});
	}
}

export function addLocalizationsPropToMap(post, locales, lmap, prop) {
	locales.forEach(function (locale) {
		lmap[locale][prop] = getLocalizedLabel(post[prop], locale);
	});
}
