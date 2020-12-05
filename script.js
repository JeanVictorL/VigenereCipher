let key = "bustling"
let ptext = document.getElementById("ptext").innerHTML

function makeKey() {
    let nkey = []

    for (let i = 0;; i++) {
        if (i == key.length) {
            i = 0
        }
        if (nkey.length == ptext.length) {
            break
        }
        nkey.push(key[i])
    }
    return nkey
}

function encrypt() {
    let encText = ""
    let k = makeKey()
    for (let i = 0; i < ptext.length; i++) {
        if (ptext[i].charCodeAt(0) < 97 || ptext[i].charCodeAt(0) > 123) {
            encText += ""
            k.splice(i, 0, "")
            if (ptext[i] == " ") {
                encText += " "
            }
        } else {
            let x = ((ptext.charCodeAt(i) - 97) + (k[i].charCodeAt(0) - 97)) % 26
            x = String.fromCharCode(x + 97)
            encText += x
        }

    }
    return encText
}

function decrypt() {

}

document.getElementById("cipher").innerHTML = encrypt()