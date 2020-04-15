    //to get input values of registration page
var registrationmodule=(function(){

    //after validating data is store in database
        function storeDataInDatabase(Username,Firstname,Lastname,Password,Gender) {
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
    //validating data entered by user
    function validation(){
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
                console.log("user already exist");
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
            storeDataInDatabase(Username,Firstname,Lastname,Password,Gender);
        }

    }
    //get profile pic of user
    function getProfilePic(){
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
        validation:validation,
        getProfilePic:getProfilePic
    }
})();
