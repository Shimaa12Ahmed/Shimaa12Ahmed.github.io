   const field_pass = document.getElementById('pass');
    const field_show = document.getElementById('showhide');
    function validateForm() {
        let x = document.forms["myform"]["fpass"].value;
        if (x.length >= 8 && x.length <= 16) {

        }
        else {
            alert("Password must be minlength=8 maxlength=16");

        }
    }
    function secret() {
        if (field_pass.getAttribute("type") == "password") {
            field_pass.type = "text";
            field_show.textContent = "Hide";
            field_show.style.color = "#3498db";
        } else {
            field_pass.type = "password";
            field_show.textContent = "Display";
            field_show.style.color = "#222"
        }
    }

    field_show.addEventListener('click', secret);
function changeBackgroundColor() {

  var bodyElement = document.getElementById('Jody');
  
  if (bodyElement) {
    bodyElement.style.backgroundColor='white';}}
    /* Action H movies*/
    // Function to display a notification banner
function displayNotification(message) {
  //new div element for notification
  var notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;

  // notification to be part of body
  document.body.appendChild(notification);

  // Remove the notification after 5 seconds
  setTimeout(function() {
      document.body.removeChild(notification);
  }, 5000);
}
window.onload = function() {
  displayNotification('Welcome to our site! Hope you find the movie that u like');
};
// ALI AHMED

let spanish = document.getElementById('spanish');
spanish.style.color='antiquewhite';

let run = document.getElementById('run');
run.style.backgroundColor='antiquewhite';

let rank = document.getElementById('rank');
rank.style.backgroundColor='antiquewhite';
// SHAHD
let butwhite = document.getElementById('butwhite');
butwhite.onclick = function(){
  butwhite.style.background ='white';
  document.body.style.background='white'
}
// SHAimaa Feed
let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}

function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}
 /* docu movies*/
 function saveData() {
    var inputValue = document.getElementById("textInput").value;
    localStorage.setItem("data", inputValue);
    document.getElementById("output").innerHTML = "Data saved successfully!";
}

function loadData() {
    var savedData = localStorage.getItem("data");
    if (savedData) {
        document.getElementById("output").innerHTML = "Loaded Data: " + savedData;
    } else {
        document.getElementById("output").innerHTML = "No data found!";
    }
}
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

// Set Data
const data = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['Italy',54.8],
  ['France',48.6],
  ['Spain',44.4],
  ['USA',23.9],
  ['Argentina',14.5]
]);

// Set Options
const options = {
  title:'Latest movies world wide web'
};

// Draw
const chart = new google.visualization.PieChart(document.getElementById('myChart'));
chart.draw(data, options);

}





