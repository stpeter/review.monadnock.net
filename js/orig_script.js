var params = 'toolbar=no,location=no,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=yes,width=' + this_width + ',height=' + this_height;

var url = /(.+)(\/)([\w]+)(\.html$)/;
var path = location.href;
var result = path.match(url);
var orig_file = result[3] + "_orig.html";

function DoPopup()
{
    PopWind = window.open (orig_file, 'PopWind', params);
    PopWind.document.close();
}
