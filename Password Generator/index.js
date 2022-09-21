const characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9","0","A","B","C","D",
"E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

//Adjust Password Length
let passRange = 15;
let passRangeEl = document.getElementById("passRangeEl");
let isNumberPassword = document.getElementById("isNumberPassword");
let isSymbolPassword = document.getElementById("isSymbolPassword");
let num = document.getElementById("numbers");
let symb= document.getElementById("symbols");

function  passRangeDecrement(){
    passRange -= 1;
    passRangeEl.textContent = passRange;
}

function passRangeIncrement(){
    passRange += 1;
    passRangeEl.textContent = passRange;
}

// exclude Numbers or Symbols
 
function isNumbers(arr, item) {
    var checkBox = document.getElementById("isNumberPassword");
    var text = document.getElementById("numbers");
  if (checkBox.checked == true){
    num.textContent = "No Numbers";
    for ( var i = 0; i < item; i++ ) {
     arr.shift();
    }
    
  } else {
    num.textContent = "Numbers";
    arr.unshift("1", "2", "3", "4", "5", "6", "7", "8", "9","0");
  }
}

function isSymbols(arr, item) {
    var checkBox = document.getElementById("isSymbolPassword");
    var text = document.getElementById("symbols");
  if (checkBox.checked == true){
    symb.textContent = "No Symbols";
    for ( var i = 0; i < item; i++ ) {
     arr.pop();
    }
  } else {
    symb.textContent = "Symbols";
    arr.push("~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
    "=","{","[","}","]",",","|",":",";","<",">",".","?","/");
  }
}


//Password Generation
let password1btn = document.getElementById("password1btn");
let password2btn = document.getElementById("password2btn");


function getRandom() {
    for (let i = 0; i < passRange; i++) {
    let randomNumber = Math.floor( Math.random()*characters.length )
    return characters[randomNumber]
    }
}

function generatePassWord() {
        let password1="";
        let password2="";
    for (let i = 0; i < passRange; i++) {
        password1 += getRandom();
        password2 += getRandom();
        password1btn.textContent = password1
        password2btn.textContent = password2
    }
}

//Copy Passwords to Clipboard
function CopyToClipboard() {
    var r = document.createRange();
    r.selectNode(document.getElementById("password1btn"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Copied the text: " + password1btn.textContent);
}

function CopyToClipboard2() {
    var r = document.createRange();
    r.selectNode(document.getElementById("password2btn"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Copied the text: " + password2btn.textContent);
}

