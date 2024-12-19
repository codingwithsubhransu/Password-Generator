let characters = document.querySelector("#characters");
let length = document.querySelector("#length");

length.innerText = characters.value;

characters.addEventListener("input", () => {
    length.innerText = characters.value;
});

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let special = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

function generatePassword() {
    let password = "";
    let charactersLength = parseInt(characters.value);

    let mandatoryCharacters = [
        uppercase.charAt(Math.floor(Math.random() * uppercase.length)),
        lowercase.charAt(Math.floor(Math.random() * lowercase.length)),
        numbers.charAt(Math.floor(Math.random() * numbers.length)),
        special.charAt(Math.floor(Math.random() * special.length))
    ];

    let allCharacters = uppercase + lowercase + numbers + special;
    for (let i = mandatoryCharacters.length; i < charactersLength; i++) {
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }

    password += mandatoryCharacters.join("");

    password = password.split("").sort(() => Math.random() - 0.5).join("");

    document.getElementById("password").innerText = password;
}

let generate = document.getElementById("generate");
generate.addEventListener("click", generatePassword);


function copy(){
    navigator.clipboard.writeText(document.getElementById("password").value);
    alert("Password copied to clipboard");
}
