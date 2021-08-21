// ==UserScript==
// @name          Noto Sans Japanese Enabler
// @namespace     http://tampermonkey.net/
// @description	  Japanese fonts for sites
// @author        You
// @homepage      https://userstyles.org/styles/113960
// @match         http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at        document-start
// @version       1.0
// ==/UserScript==
(function() {var css = [
    "@import url(\"//fonts.googleapis.com/earlyaccess/notosansjapanese.css\");",
    "* {font-family: Noto Sans Japanese !important;}"

].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
