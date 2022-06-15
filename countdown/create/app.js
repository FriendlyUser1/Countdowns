function isValidDate(dateObject) {
	return new Date(dateObject).toString() !== "Invalid Date";
}
function dDigits(n) {
	if (n < 10) {
		n = "0" + String(n);
	}
	return n;
}

function fixedEncodeURIComponent(str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return "%" + c.charCodeAt(0).toString(16);
	});
}

function create() {
	var title = document.getElementById("title").value;
	if (title == "") {
		title = "Countdown";
	}
	let day = dDigits(document.getElementById("dayselect").value);
	let month = dDigits(document.getElementById("monthselect").value);
	let year = document.getElementById("yearinput").value;
	let hour = dDigits(document.getElementById("hourinput").value);
	let minute = dDigits(document.getElementById("minuteinput").value);
	let second = dDigits(document.getElementById("secondinput").value);

	let date = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
	let today = Date().now;
	console.log(date);
	if (!isValidDate(date) || today - date > 0) {
		return (document.getElementById("emsg").innerHTML = "Invalid date.");
	}
	window.location.replace(
		`https://friendlyuser1.github.io/Countdowns/countdown/index.html?iso=${date.toISOString()}&msg=${fixedEncodeURIComponent(
			title
		)}`
	);
}

function init() {
	document.getElementById("custom-form").style.opacity = "1";
	document.getElementById("dayselect").value = new Date().getDate() + 1;
	document.getElementById("monthselect").value = new Date().getMonth() + 1;
	document.getElementById("yearinput").value = new Date().getFullYear();
	document.getElementById("hourinput").value = 0;
	document.getElementById("minuteinput").value = 0;
	document.getElementById("secondinput").value = 0;
}
