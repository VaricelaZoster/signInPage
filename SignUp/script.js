import { connectToDB } from '../con.js';

let username, password, password1;
let count1 = 3;

const submit = document.getElementById("submit");
submit.addEventListener("click", sub);

function sub() {
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    password1 = document.getElementById('repassword').value;

    if (password == password1 && password != '' && username != '') {
        document.getElementById('submit').style.backgroundColor = "rgb(162, 105, 214)";
        document.getElementById('submit').disabled = true;
        document.getElementById('submit').innerHTML = "Redirecting in....";
        connectToDB(username, password);
        setInterval(function() {
            console.log(count1);
            document.getElementById('submit').innerHTML = `Redirecting in ${count1}`;
            if (count1 == 0) {
                document.getElementById('submit').innerHTML = `Redirecting`;
                  // Yahaan variables pass ho rahe hain
                location.href = "../SignUpSignIn/index.html";
            }
            --count1;
        }, 1000);
    }
}