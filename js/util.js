var api = '';

function parseURL() {
	var url = location.search.split("?")[1];
	var para = url.split("&");
	var len = para.length;
	var res = {};
	var arr = [];
	for (var i = 0; i < len; i++) {
		arr = para[i].split("=");
		res[arr[0]] = arr[1];
	}
	console.log(res)
	return res;
}
