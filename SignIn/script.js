let username,password;
let realpassword = 1234;
const button = document.querySelector('button');
console.log(button);
let count1 = 3;
button.addEventListener('click',sub);
function sub(){
    document.getElementById('warning').innerHTML = '';
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    console.log(username);
    if(password == realpassword){
        document.getElementById('password').style.borderColor = "rgb(162, 105, 214)";
        document.getElementById('submit').style.backgroundColor = "rgb(162, 105, 214)";
        document.getElementById('submit').disabled = true;
        document.getElementById('submit').innerHTML = `Ridirecting in.... `;
        setInterval(function(){
            document.getElementById('submit').innerHTML = `Redirecting in ${count1}`;
            if(count1 == 0){
                document.getElementById('submit').innerHTML = `Redirecting`;
                location.href = "../SignUpSignIn/index.html";
            }
            count1--;
        },1000);
    }
    else if(password == "" ){
        empty();
        document.getElementById('warning').innerHTML = 'Password cannot be empty!!!';
    }
    else{
        empty();
        document.getElementById('warning').innerHTML = 'Incorrect Password!!!';
    }
}

function empty(){
    console.log('hi');
    document.getElementById('password').style.borderColor = "red";
    //document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}