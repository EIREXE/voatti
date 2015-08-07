var css_url = document.getElementById('css_url');
chrome.storage.local.get('voat_custom_css_url', function (result) {
        css_url.value = result.voat_custom_css_url
});
document.querySelector('#save_button').addEventListener('click', saveCSS);
function saveCSS() {
	chrome.storage.local.set({'voat_custom_css_url': css_url.value}, function (result) {
		
	});
}