//getting login fields value and validating it
function getLoginInfo() {
    let userName=document.getElementById("username").value;
    let passWord=document.getElementById("password").value;
    console.log(userName);
    let userdata = JSON.parse(localStorage.getItem(userName));
    console.log(userdata);
    let error="Invalid username/password";
    try{
        if(userdata.uname==userName && userdata.password==passWord)
        {
            console.log("login successful");
            alert("Login successful");
            window.location.href="../html/todo.html";
            sessionStorage.setItem("user",userName);
            let user=sessionStorage.getItem("user")
            console.log(user);   
       
        }
        else{
            document.getElementById("loginvalidation").innerHTML="Invalid username/password";
        }
    }
    catch(error){
        document.getElementById("loginvalidation").innerHTML="Invalid username/password";
    }
    if(userName=="null" || passWord=="null"){
        document.getElementById("loginvalidation").innerHTML="Invalid username/password";
    }
  
}