

document.getElementById('submit').addEventListener("click",sub);

function sub() {
    let username, password, password1;
let count1 = 3;
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    password1 = document.getElementById('repassword').value;

    console.log(username);
    if (password == password1 && password != '' && username != '') {
        document.getElementById('submit').style.backgroundColor = "rgb(162, 105, 214)";
        document.getElementById('submit').disabled = true;
        document.getElementById('submit').innerHTML = "Redirecting in....";
        createUser(username,password);
        setInterval(function() {
            console.log(count1);
            
            document.getElementById('submit').innerHTML = `Redirecting in ${count1}`;
            if (count1 == 0) {
                document.getElementById('submit').innerHTML = `Redirecting...`;
                location.href = "../SignUpSignIn/index.html";
            }
            --count1;
        }, 1000);
    }
}

function createUser(username,password){
    const obj = {
        username: username,
        password: password
    };
    localStorage.setItem(`${username}`,`${password}`);
}