window.onload = function () {
	var msg = document.getElementById("message").innerHTML;
	document.getElementById("message").innerHTML = "";
	function tD(n) {
		return n < 10 ? "0" + n.toString() : n;
	}
	function time() {
		var now = new Date();
		document.getElementById("message").innerHTML = msg;
		document.getElementById("hour").innerHTML = tD(now.getHours());
		document.getElementById("minute").innerHTML = tD(now.getMinutes());
		document.getElementById("second").innerHTML = tD(now.getSeconds());
	}
	setInterval(time, 100);
};
