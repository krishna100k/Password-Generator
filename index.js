let chars = "abcdefghiIJKLMNOjkltuvwxyz@%$ABCDEFmnopqrsGHPQRSTUVWXYZ*";
let charsArr = chars.split("");
let length = charsArr.length;
let passLength = 15;
let passwordArr = [];
let str = "";



const randomFunction = () => {
    let randomNum = Math.floor(Math.random()*length);
    let letter = charsArr[randomNum]
    passwordArr.push(letter)
}

for(let i = 0; i < passLength; i++){
    randomFunction()
}

console.log(passwordArr.join(""))
