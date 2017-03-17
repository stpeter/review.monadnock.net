	sAgent = navigator.userAgent;
	bIsIE = sAgent.indexOf("MSIE") > -1;
	bIsIE3 = sAgent.indexOf("IE 3") > -1;
	bIsIE4 = sAgent.indexOf("IE 4") > -1;
	bIsIE5 = sAgent.indexOf("IE 5")  > -1;
	bIsNN4 = sAgent.indexOf("Mozilla\/4") > -1 && !bIsIE;
	css_file = "";
	css_link = "";
	debug = 0;

	if (bIsIE4) {
	css_file = "ie_4";
	if (debug == 1) {alert("browser is IE 4")};
	}

	if (bIsIE3) {
	css_file = "ie_3";
	if (debug == 1) {alert("browser is IE 3")};
	}

	if (bIsNN4) {
	css_file = "nn_4";
	if (debug == 1) {alert("browser is NN 4")};
	}

	if ((bIsIE4) || (bIsIE3) || (bIsNN4)) {
	css_link = '<LINK REL="stylesheet" TYPE="text/css" HREF="/stylesheets/' + css_file + '.css">';
	if (debug == 1) {alert("css link is " + css_link)};
	}
	else {
	css_link = '';
	if (debug == 1) {alert("no css file")};
	}

document.write(css_link);

