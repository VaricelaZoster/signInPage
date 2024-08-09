let username,pass;

const button = document.querySelector('button');
console.log(button);
let count1 = 3;
button.addEventListener('click',sub);
function sub(){
    document.getElementById('warning').innerHTML = '';
    user = document.getElementById('username').value;
    pass = document.getElementById('password').value;
    realpassword = (localStorage.getItem(user));
    console.log(typeof password);
    if(pass == realpassword){
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