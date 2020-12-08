let key = "bustling"
let ptext = document.getElementById("ptext").innerHTML
let cipher = document.getElementById("cipher").innerHTML

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
    let npText = ""
    let k = makeKey()
    let c = encrypt()
    for (let i = 0; i < c.length; i++) {
        if (c[i].charCodeAt(0) < 97 || c[i].charCodeAt(0) > 123) {
            npText += ""
            k.splice(i, 0, "")
            if (c[i] == " ") {
                npText += " "
            }
        } else {
            let x = ((c.charCodeAt(i) - 97) - (k[i].charCodeAt(0) - 97) + 26) % 26
            x = String.fromCharCode(x + 97)
            npText += x
        }
    }
    return npText
}

document.getElementById("cipher").innerHTML = encrypt()
document.getElementById("decrypted").innerHTML = decrypt()