const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let pw1 = document.getElementById("pw-output1");
let pw2 = document.getElementById("pw-output2");

function generatePassword() {
    pw1.textContent = "";
    pw2.textContent = "";
    
    for(let i = 0; i < 15; i++) {
        let randIndex1 = Math.floor(Math.random() * characters.length);
        let randIndex2 = Math.floor(Math.random() * characters.length);
        pw1.textContent += characters[randIndex1];
        pw2.textContent += characters[randIndex2];
    }
    // pw1.textContent = "Hello";
    // pw2.textContent = "Hey there!";
}
