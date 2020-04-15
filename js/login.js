        

var loginmodule = (function() {
        //fallback scenario to check whether the localstorage exist or not
        (function(){
            var testlocalstorage='test';
            try{
                localStorage.setItem('testlocalstorage',testlocalstorage);
            }
            catch{
                alert('localstorage does not exist');
            }
        })();
        //getting login fields value and validating it
        function getLoginCerdentails() {
        let userName=document.getElementById("username").value;
        let passWord=document.getElementById("password").value;
        let userdata = JSON.parse(localStorage.getItem(userName));
        let error="Invalid username/password";
        try{
            if(userdata.username==userName && userdata.password==passWord)
            {
                alert("Login successful");
                window.location.href="../html/todo.html";
                sessionStorage.setItem("user",userName);   
                
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
        return {
            getLoginCerdentails: getLoginCerdentails,
        };
})();