    //to get input values of registration page
var registrationmodule=(function(){

    //after validating data is store in database
        function storeDataInDatabase() {
            let Username=document.getElementById("username").value;
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
            let Address=document.getElementById("address").value;
            let Image=sessionStorage.getItem("profilePhoto"); 
            let personalInfo={
                    username:Username,
                    lastname:Lastname,
                    firstname:Firstname,
                    password:Password,
                    gender:Gender,
                    address:Address,
                    image:Image,
                    todo:[]
                };
            localStorage.setItem(Username, JSON.stringify(personalInfo));
            alert("Register successfully");
            let gotologinPage=confirm("Do you want to login?")
            if(gotologinPage){
                window.location.href="../html/index.html"
            }
        
        }
    return{
        storeDataInDatabase:storeDataInDatabase
    }
})();
