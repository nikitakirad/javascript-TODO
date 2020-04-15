
var displayprofileofusermodule=(function(){
    
    let currentuser=sessionStorage.getItem("user");
    let currentuserdata=JSON.parse(localStorage.getItem(currentuser));

    //displaying the default value of the particular user
    function displayUserInfo(){
        document.getElementById("userfirstname").value=currentuserdata.firstname;
        document.getElementById("userlastname").value=currentuserdata.lastname;
        document.getElementById("username").value=currentuserdata.username;
        document.getElementById("password").value=currentuserdata.password;
        document.getElementById("address").value=currentuserdata.address;
        var radios = document.getElementsByName("gender");
        for (var i=0, len=radios.length; i<len; i++) {
            var r = radios[i]; 
            if ( currentuserdata.gender=="female" && r.value=="female"  ) {
                r.checked = true;
            } else if(currentuserdata.gender=="male" && r.value=="male") { 
                r.checked= true; 
            }
            else{
                r.checked=false;
            }
        }
        document.getElementById("profile_image").src=currentuserdata.image;
    }
    //saving modified value of the user
    function modifyUserData(Username,Firstname,Lastname,Password,Gender){
        currentuserdata.firstname=Firstname;
        currentuserdata.lastname=Lastname;
        currentuserdata.password=Password;  
        currentuserdata.address=document.getElementById("address").value;
        currentuserdata.gender=Gender;
        currentuserdata.image=sessionStorage.getItem("profilePhoto"); 
        //sessionStorage.removeItem("profilePhoto");

        localStorage.setItem(currentuser, JSON.stringify(currentuserdata));
        alert("Profile save successfully")
    }
    function previouspage(){
        window.location="../html/todo.html";
    }
    function deletesession(){
        sessionStorage.clear();
    }
    //validating input entered by user
    function validationOfInputFields(){
        let count=1;
        let Username=document.getElementById("username").value;
        let Firstname=document.getElementById("userfirstname").value;
        let Lastname=document.getElementById("userlastname").value;
        let Password=document.getElementById("password").value;
        let Gender="";
        let userexist = JSON.parse(localStorage.getItem(Username));
        var radioelement  = document.getElementsByName('gender'); 
                
                for(i = 0; i < radioelement .length; i++) { 
                    if(radioelement [i].checked && radioelement [i].value=="female") {
                        Gender="female";
                    }
                    else if(radioelement [i].checked && radioelement [i].value=="male"){
                        Gender="male";
                    }
                } 
        
            if((Firstname.length<3) || (Firstname.length>20)){
                document.getElementById("firstname").innerHTML="Name value must be between 3 and 20";
                count=0;
            }
            if(!isNaN(Firstname)){
                document.getElementById("firstname").innerHTML="Name cannot contain number";
                count=0
            }
            if(Firstname == ""){
                document.getElementById("firstname").innerHTML="Name field cannot be null";
                count=0;
            }
            if((Lastname.length<3) || (Lastname.length>20)){
                document.getElementById("lastname").innerHTML="Lastname value must be between 3 and 20";
                count=0
            }
            if(!isNaN(Lastname)){
                document.getElementById("lastname").innerHTML="Lastname cannot contain number";
                count=0;
            }
            if(Lastname == ""){
                document.getElementById("lastname").innerHTML="lastname field cannot be null";
                count=0;
            }
            try{
                if(Username==userexist.uname){
                    document.getElementById("email").innerHTML="username already exist";
                    count=0;
                }
            }
            catch(err){
                console.log("new user register");
            }
            if(Username == ""){
                document.getElementById("email").innerHTML="username field cannot be null";
                count=0;
            }
            
            if((Password.length<5) || (Password.length>20)){
                document.getElementById("userpassword").innerHTML="password value must be between 5 and 20";
                count=0;
            }
            if(Password == ""){
                document.getElementById("userpassword").innerHTML="password field cannot be null";
                count=0;
            }
            if(Gender == ""){
                document.getElementById("usergender").innerHTML="Gender field cannot be empty";
                count=0;
            }
            
            
            
        if(count==1 ){
            modifyUserData(Username,Firstname,Lastname,Password,Gender);
        }
    }
    //change profile pic of user
    function changeProfilePic(){
        let profileImage = document.getElementById("myFile").files[0];
        let imagereader = new FileReader();
        imagereader.readAsDataURL(profileImage);

        imagereader.onload = function ()
        {
            let imgdata = imagereader.result;
            sessionStorage.setItem("profilePhoto", imgdata);
            document.getElementById("profile_image").src = imgdata;
        };
    }
    return{
        displayUserInfo:displayUserInfo,
        previouspage:previouspage,
        deletesession:deletesession,
        validationOfInputFields:validationOfInputFields,
        changeProfilePic:changeProfilePic
    }
})();