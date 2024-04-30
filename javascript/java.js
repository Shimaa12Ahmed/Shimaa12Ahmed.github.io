const field_pass = document.getElementById('pass');
const field_show = document.getElementById('showhide');
const output = document.getElementById('output');
const stars = document.getElementsByClassName("star");

function validateForm() {
    let x = field_pass.value;
    if (x.length >= 8 && x.length <= 16) {
        // Password meets criteria
    } else {
        alert("Password must be between 8 and 16 characters");
    }
}

function secret() {
    if (field_pass.type === "password") {
        field_pass.type = "text";
        field_show.textContent = "Hide";
        field_show.style.color = "#3498db";
    } else {
        field_pass.type = "password";
        field_show.textContent = "Display";
        field_show.style.color = "#222";
    }
}

field_show.addEventListener('click', secret);

function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        let cls;
        if (i < n) {
            if (i == 0) cls = "one";
            else if (i == 1) cls = "two";
            else if (i == 2) cls = "three";
            else if (i == 3) cls = "four";
            else if (i == 4) cls = "five";
            stars[i].className = "star " + cls;
        }
    }
    output.innerText = "Rating is: " + n + "/5";
}

function remove() {
    for (let i = 0; i < 5; i++) {
        stars[i].className = "star";
    }
}

function changeBackgroundColor() {
    var bodyElement = document.getElementById('Jody');
    if (bodyElement) {
        bodyElement.style.backgroundColor = 'white';
    }
}

function saveData() {
    var inputValue = document.getElementById("textInput").value;
    localStorage.setItem("data", inputValue);
    output.innerHTML = "Data saved successfully!";
}

function loadData() {
    var savedData = localStorage.getItem("data");
    if (savedData) {
        output.innerHTML = "Loaded Data: " + savedData;
    } else {
        output.innerHTML = "No data found!";
    }
}

window.onload = function() {
    displayNotification('Welcome to our site! Hope you find the movie that you like');
};

// Additional code for setting colors
let spanish = document.getElementById('spanish');
spanish.style.color = 'antiquewhite';

let run = document.getElementById('run');
run.style.backgroundColor = 'antiquewhite';

let rank = document.getElementById('rank');
rank.style.backgroundColor = 'antiquewhite';

let butwhite = document.getElementById('butwhite');
butwhite.onclick = function() {
    butwhite.style.background = 'white';
    document.body.style.background = 'white';
}