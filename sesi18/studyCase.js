function removeSpaces(text) {

    const arr = text.split(" ");
    return arr.join("");

}

function reverseText(text) {
    let pass = [];


    for (i = 0; i < text.length; i++) {
        let leng = text.length - i - 1;
        pass[i] = text[leng];
    }

    let pas = pass.join("");
    return pas;
}

function updateVowels(text) {

    let pass = [];

    for (i = 0; i < text.length; i++) {
        if (text[i] == "a" || text[i] == "i" || text[i] == "u" || text[i] == "e" || text[i] == "o") {
            pass[i] = String.fromCharCode(text[i].charCodeAt(0) + 1); //jadiin ascii
        } else {
            pass[i] = text[i];
        }
    }

    return pass.join("");
}

var password = "dmitri w";
var noSpaces = removeSpaces(password);
var reversed = reverseText(noSpaces);
var encryptedPassword = updateVowels(reversed);

console.log(encryptedPassword);