// ==UserScript==
// @name          Memrise for Japanese (Fixed) 2
// @namespace     http://userstyles.org
// @description	  Edited version of Memrise for Japanese, inspired by ShadowDrgn. All credit goes to original owner of that script, I take no credit for anything here.
// @author        Vatec cetaV
// @homepage      https://userstyles.org/styles/113960
// @include       http://memrise.com/*
// @include       https://memrise.com/*
// @include       http://*.memrise.com/*
// @include       https://*.memrise.com/*
// @run-at        document-start
// @version       0.20150525013540
// ==/UserScript==
(function() {var css = [
    "@import url(\"//fonts.googleapis.com/earlyaccess/notosansjapanese.css\");",
    ".hRIHfb {font-family: \"Noto Sans Japanese\"}",
    ".iLKkhm {font-family: \"Noto Sans Japanese\"}",
    ".thing .col_b {font-family: \"Noto Sans Japanese\"}",
    ".question-row .qquestion {font-family: \"Noto Sans Japanese\"}",
    ".thing-show .row.secondary .row-value {font-family: \"Noto Sans Japanese\"}",
    ".question-row .qquestion {font-family: \"Noto Sans Japanese\"}",
    ".jnBOaB {font-family: \"Noto Sans Japanese\"}",
    ".thing-show .row.secondary .row-value {font-family: \"Noto Sans Japanese\"}"

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
