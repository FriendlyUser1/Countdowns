window.onload = function () {
	var today = new Date();
	var year = today.getFullYear();
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
	function nownewyear() {
		document.getElementById("message").innerHTML = "It is Easter!";
	}
	function nextyear() {
		year++;
	}

	const easterDate = (y) => {
		const c = Math.floor(y / 100);
		const n = y - 19 * Math.floor(y / 19);
		const k = Math.floor((c - 17) / 25);
		let i = c - Math.floor(c / 4) - Math.floor((c - k) / 3) + 19 * n + 15;
		i = i - 30 * Math.floor(i / 30);
		i =
			i -
			Math.floor(i / 28) *
				(1 -
					Math.floor(i / 28) *
						Math.floor(29 / (i + 1)) *
						Math.floor((21 - n) / 11));
		let j = y + Math.floor(y / 4) + i + 2 - c + Math.floor(c / 4);
		j = j - 7 * Math.floor(j / 7);
		const l = i - j;
		const m = 3 + Math.floor((l + 40) / 44);
		const d = l + 28 - 31 * Math.floor(m / 4);

		return new Date(y, m - 1, d);
	};

	document.getElementById("message").innerHTML = "";
	function countdown() {
		var newyear = easterDate(year);
		var start = Date.now();
		var togo = newyear - start;
		if (togo <= 0 && togo > -86400000) {
			nownewyear();
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
