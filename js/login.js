function getLoginInfo() {
    let userName=document.getElementById("username").value;
    let passWord=document.getElementById("password").value;
    console.log(userName);
    let data = JSON.parse(localStorage.getItem(userName));
    console.log(data);
    if(data.uname==userName && data.password==passWord)
    {
        console.log("login successful");
        alert("Login successful");
       window.location.href="../html/todo.html";
       sessionStorage.setItem("user",userName);
       let data1=sessionStorage.getItem("user")
       console.log(data1);   
       
    }
    else{
        alert("Invalid entries");

       
    }
    
}