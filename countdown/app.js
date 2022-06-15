window.onload = function () {
	let params = new URL(document.location).searchParams;
	if (!params.get("iso") || !params.get("msg")) {
		window.location.replace(
			`https://friendlyuser1.github.io/countdowns/countdown/create/`
		);
	}
	let title = params.get("msg");
	let iso = params.get("iso");

	document.getElementById("title").innerHTML = `${title}`;

	var msg = document.getElementById("message").innerHTML;

	function f(v) {
		return Math.floor(v);
	}
	function one(n, element) {
		let txt = element.innerHTML.split("");
		if (n > 1 || n == 0) return;
		if (txt[txt.length - 1] != ",") {
			txt.pop();
		} else {
			txt.pop();
			txt.pop();
			txt.push(",");
		}
		element.innerHTML = txt.join("");
	}
	function passed() {
		document.getElementById("message").innerHTML = "Your date has arrived";
		document.getElementById("days").innerHTML = "0";
		document.getElementById("hours").innerHTML = "0";
		document.getElementById("minutes").innerHTML = "0";
		document.getElementById("seconds").innerHTML = "0";
	}
	document.getElementById("message").innerHTML = "";
	function countdown() {
		var destination = new Date(`${iso}`);
		var start = Date.now();
		var togo = destination - start;
		if (togo <= 0) {
			passed();
		} else {
			var hoursleft =
				f(f(f(togo / 1000) / 60) / 60) -
				f(f(f(f(togo / 1000) / 60) / 60) / 24) * 24;
			var minutesleft =
				f(f(togo / 1000) / 60) - f(f(f(togo / 1000) / 60) / 60) * 60;
			var secondsleft = f(togo / 1000) - f(f(togo / 1000) / 60) * 60;
			document.getElementById("message").innerHTML = decodeURIComponent(msg);

			let daysleft = f(f(f(f(togo / 1000) / 60) / 60) / 24);
			if (daysleft >= 7) {
				let weeksleft = ~~(daysleft / 7);
				document.getElementById("weeks").innerHTML = weeksleft;
				one(weeksleft, document.getElementById("weeksmsg"));
				daysleft = daysleft % 7;
			} else {
				document.getElementById("weeks").innerHTML = "";
				document.getElementById("weeksmsg").innerHTML = "";
			}

			document.getElementById("days").innerHTML = daysleft;
			one(daysleft, document.getElementById("daysmsg"));
			document.getElementById("hours").innerHTML = hoursleft;
			one(hoursleft, document.getElementById("hoursmsg"));
			document.getElementById("minutes").innerHTML = minutesleft;
			one(minutesleft, document.getElementById("minutesmsg"));
			document.getElementById("seconds").innerHTML = secondsleft;
			one(secondsleft, document.getElementById("secondsmsg"));
		}
	}
	setInterval(countdown, 100);
};
