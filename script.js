var key = "bustling"
var ptext = document.getElementById("ptext").innerHTML
var cipher = document.getElementById("cipher").innerHTML

function makeKey() {
    var x = ptext.length
    var nkey = []

    for (var i = 0;; i++) {
        if (i == x) {
            i = 0
            console.log("i'm happening")
        }
        if (nkey.length == x) {
            break
        }
        nkey.push(key[i])
    }
    return nkey
}

console.log(makeKey())