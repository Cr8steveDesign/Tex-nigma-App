// "use strict";

// function enCrypter(text) {
//   let collect = text.split("");
//   let crypt = [];

//   for (let i = 0; i < collect.length; i++) {
//     if (collect[i] === "a") {
//       crypt.push("#");
//     } else if (collect[i] === "e") {
//       crypt.push("$");
//     } else if (collect[i] === "i") {
//       crypt.push("%");
//     } else if (collect[i] === "o") {
//       crypt.push("^");
//     } else if (collect[i] === "u") {
//       crypt.push("/");
//     }
//     //consonants begins here
//     else if (collect[i] === "t") {
//       crypt.push("_");
//     } else if (collect[i] === "h") {
//       crypt.push("{");
//     } else if (collect[i] === "n") {
//       crypt.push("}");
//     } else if (collect[i] === "p") {
//       crypt.push("[");
//     } else if (collect[i] === "m") {
//       crypt.push("=");
//     } else if (collect[i] === "r") {
//       crypt.push("+");
//     } else if (collect[i] === "'") {
//       crypt.push("*");
//     }

//     // other letters begin here
//     else {
//       crypt.push(collect[i]);
//     }
//   }
//   console.log(crypt.join(" "));
// }

// // DECRYPTER FUNCTION GOES HERE

// function deCrypter(text) {
//   let collect = text.split("");
//   let crypt = [];
//   for (let i = 0; i < collect.length; i++) {
//     if (collect[i] === "#") {
//       crypt.push("a");
//     } else if (collect[i] === "$") {
//       crypt.push("e");
//     } else if (collect[i] === "%") {
//       crypt.push("i");
//     } else if (collect[i] === "^") {
//       crypt.push("o");
//     } else if (collect[i] === "/") {
//       crypt.push("u");
//     }
//     //consonants begins here
//     else if (collect[i] === "_") {
//       crypt.push("t");
//     } else if (collect[i] === "{") {
//       crypt.push("h");
//     } else if (collect[i] === "}") {
//       crypt.push("n");
//     } else if (collect[i] === "[") {
//       crypt.push("p");
//     } else if (collect[i] === "=") {
//       crypt.push("m");
//     } else if (collect[i] === "+") {
//       crypt.push("r");
//     }

//     // other letters begin here
//     else {
//       crypt.push(collect[i]);
//     }
//   }
//   let step1 = crypt.join("");

//   console.log(step1);
// }

// console.log("========================");

// deCrypter("test");
// enCrypter("television station");
// console.log(CryptoJS);
// Load the CryptoJS library
//

// Define the message and encryption key
// var message =
//   "Testing for my app hello from the other side ah ah i know i should have talked a time ah ah to tell you say I'm sorry for everything that I've done; but it don't matter";
// var key = "uncoder";

// var data = CryptoJS.Rabbit.encrypt(message, key);
// data = data.toString();
// console.log("==========");
// console.log(data);

// //then decrypt it like this

// var decr = CryptoJS.Rabbit.decrypt(data, key);
// decr = decr.toString(CryptoJS.enc.Utf8);

// console.log(decr);

// FINAL CODE STRUCTURE GOES HERE

//Instruction alert
const instruction = document.getElementById("btn-instruct");

instruction.addEventListener("click", function () {
  alert(
    "Thanks for trying out the app.😁\n\nTo encrypt your message, kindly enter the text in the input box of the encryption section, and then enter any desired key of your choice. However, take note that, the key must be re-entered correctly for the encrypted message to be decoded.\n\n You can use the app to encrypt messages you send to people, they can only decode it if they have the key which you entered during encryption on the app. To decode the message, just paste the encrypted text in the input area of the decryption section, enter the key that was used to encrypt the message, and then decode it! Voila 😎"
  );
});

//Hide Decryption Section
let hiderBox2 = document.getElementById("drop");
let decryptHide = document.getElementById("decryptsection");

hiderBox2.addEventListener("click", function () {
  decryptHide.classList.toggle("decryptsection1");
});

//Setting the Encryption Logic and Process

function anonize() {
  let messageBox = document.getElementById("encrypt-entry");

  let message = document.getElementById("encrypt-entry").value;

  console.log(message);
  let key = document.getElementById("key-btn1").value;

  if (key.length < 2 || message.length < 2) {
    alert("Key or message cannot be empty🙄");
  } else {
    var data = CryptoJS.AES.encrypt(message, key);
    data = data.toString();
    console.log("==========");

    messageBox.value = data;

    alert(
      "Remember to change the message before clicking encryption button again. Otherwise your encrypted message will be further encrypted with the current key"
    );
  }
}

let encryptBtn = document.getElementById("encrypt-btn");

encryptBtn.addEventListener("click", anonize);

//copy text in encryption body

function copyFnc() {
  //Selecting the input text field
  let messager = document.getElementById("encrypt-entry");
  messager.select();

  //For mobile devices
  messager.setSelectionRange(0, 99999);

  //Execute the copy command
  document.execCommand("copy");

  if (!navigator.clipboard) {
    // use old commandExec() way
    document.execCommand("copy");
  } else {
    navigator.clipboard.writeText(messager.value);
  }

  //log success
  alert("Copy successful");
}

let copyBtn = document.getElementById("copy-btn");
copyBtn.addEventListener("click", copyFnc);

//Paste copied text into decryption body
//copy text in encryption body

function pasteFnc() {
  let decrypted = document.getElementById("decrypt-entry");

  navigator.clipboard
    .readText()
    .then((clipText) => (decrypted.value = clipText));

  if (!navigator.clipboard) {
    // use old commandExec() way
    document.execCommand("paste");
  }

  //log success
  // alert("Paste successful");
}

let pasteBtn = document.getElementById("paste-btn");
pasteBtn.addEventListener("click", pasteFnc);

//DECRYPTION STRUCTURE BEGINS FROM HERE

let decryptBtn = document.getElementById("decrypt-btn");
decryptBtn.addEventListener("click", deAnonize);

function deAnonize() {
  let crypt = document.getElementById("decrypt-entry").value;

  let key = document.getElementById("key-btn2").value;

  if (key.length < 2 || crypt.length < 2) {
    alert("Ensure the key and encrypted message are corretly entered😏");
  } else {
    var decr = CryptoJS.AES.decrypt(crypt, key);
    decr = decr.toString(CryptoJS.enc.Utf8);
    let updatedText = document.getElementById("decrypt-entry");
    updatedText.value = decr;
  }
}

let value = sum(Range(100));
console.log(value);
