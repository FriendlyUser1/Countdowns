window.onload = function () {
	const today = new Date();
	let year = today.getFullYear();
	let msg = document.getElementById("message").innerHTML;

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
	function nowchristmas() {
		document.getElementById("message").innerHTML = "It is Christmas!";
	}
	function nextyear() {
		year++;
	}
	document.getElementById("message").innerHTML = "";
	function countdown() {
		var christmas = new Date(`${year}-12-25T00:00:00`);
		var start = Date.now();
		var togo = christmas - start;
		if (togo <= 0 && togo > -86400000) {
			nowchristmas();
		} else if (togo <= 0) {
			nextyear();
		} else {
			var hoursleft =
				f(f(f(togo / 1000) / 60) / 60) -
				f(f(f(f(togo / 1000) / 60) / 60) / 24) * 24;
			var minutesleft =
				f(f(togo / 1000) / 60) - f(f(f(togo / 1000) / 60) / 60) * 60;
			var secondsleft = f(togo / 1000) - f(f(togo / 1000) / 60) * 60;
			document.getElementById("message").innerHTML = msg;

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
