chrome.storage.local.get('voat_custom_css_url', function (result) {
	var style = document.createElement('style');
	style.type = 'text/css';
	if (style.styleSheet){
		style.styleSheet.cssText = result.voat_custom_css_url;
	} else {
		style.appendChild(document.createTextNode(result.voat_custom_css_url));
	}

	head = document.getElementsByTagName ("head")[0] || document.documentElement;
	head.insertBefore(style, head.lastChild);
});
