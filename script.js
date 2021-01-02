let key = document.getElementById("key");
let ptext = document.getElementById("ptext");
let cipher = document.getElementById("cipher");
let form = document.getElementById("myForm");

function makeKey() {
	let nkey = [];

	for (let i = 0; ; i++) {
		if (i == key.value.length) {
			i = 0;
		}
		if (nkey.length == ptext.value.length) {
			break;
		}
		nkey.push(key.value[i]);
	}
	return nkey;
}

function makecKey() {
	let nkey = [];

	for (let i = 0; ; i++) {
		if (i == key.value.length) {
			i = 0;
		}
		if (nkey.length == cipher.value.length) {
			break;
		}
		nkey.push(key.value[i]);
	}
	return nkey;
}

function encrypt() {
	let encText = "";
	let k = makeKey();
	for (let i = 0; i < ptext.value.length; i++) {
		if (
			ptext.value[i].toLowerCase().charCodeAt(0) < 97 ||
			ptext.value[i].toLowerCase().charCodeAt(0) > 123
		) {
			encText += "";
			k.splice(i, 0, "");
			if (ptext.value[i] == " ") {
				encText += " ";
			}
		} else {
			let x =
				(ptext.value.toLowerCase().charCodeAt(i) -
					97 +
					(k[i].charCodeAt(0) - 97)) %
				26;
			x = String.fromCharCode(x + 97);
			encText += x;
		}
	}
	return encText;
}

function decrypt() {
	let npText = "";
	let k = makecKey();
	let c = cipher.value.toLowerCase();
	for (let i = 0; i < c.length; i++) {
		if (c[i].charCodeAt(0) < 97 || c[i].charCodeAt(0) > 123) {
			npText += "";
			k.splice(i, 0, "");
			if (c[i] == " ") {
				npText += " ";
			}
		} else {
			let x =
				(c.charCodeAt(i) - 97 - (k[i].charCodeAt(0) - 97) + 26) % 26;
			x = String.fromCharCode(x + 97);
			npText += x;
		}
	}
	return npText;
}

ptext.oninput = () => {
	cipher.value = encrypt();
};

cipher.oninput = () => {
	ptext.value = decrypt();
};
