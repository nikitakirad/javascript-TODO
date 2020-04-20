
var displayprofileofusermodule=(function(){
    
    let currentuser=commomfunctionalitiesmodule.sessionstoragedata();
    let currentuserdata=commomfunctionalitiesmodule.localstoragedata();

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
    function modifyUserData(){
        let Firstname=document.getElementById("userfirstname").value;
        let Lastname=document.getElementById("userlastname").value;
        let Password=document.getElementById("password").value;
        let Gender="";
        var radioelement  = document.getElementsByName('gender'); 
        
        for(i = 0; i < radioelement .length; i++) { 
            if(radioelement [i].checked && radioelement [i].value=="female") {
                Gender="female";
            }
            else if(radioelement [i].checked && radioelement [i].value=="male"){
                Gender="male";
            }
        } 
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
    return{
        displayUserInfo:displayUserInfo,
        previouspage:previouspage,
        modifyUserData:modifyUserData
    }
})();