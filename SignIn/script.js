let username,password;
let realpassword = 1234;
let count = ["Redirecting",1,2,3,4,5];
let count1 = 5;
function sub(){
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    console.log(username);
    if(password == realpassword){
        document.getElementById('submit').disabled = true;
        document.getElementById('submit').innerHTML = `Ridirecting in.... `;
        setInterval(function(){
            document.getElementById('submit').innerHTML = `Redirecting in ${count[count1]}`;
            if(count1 == 0){
                document.getElementById('submit').innerHTML = `${count[count1]}`;
                location.href = "../SignUpSignIn/index.html";
            }
            count1--;
        },1000);
    }
}