let username,password, password1;
let count1 = 3;

document.getElementById('submit').addEventListener('click',sub);


/*const submit = document.getElementById("submit");
submit.addEventListener("click",sub);*/

function sub(){
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    password1 = document.getElementById('repassword').value;
    if(password == password1 && password!= '' && username !=''){
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
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
    else{
        
    }
}
