//to get input values of registration page
function getInputValue() {
    let Uname=document.getElementById("uname").value;
    let Fname=document.getElementById("fname").value;
    let Lname=document.getElementById("lname").value;
    let Password=document.getElementById("password").value;
    let Gender;

    var radioelement = document.getElementsByName('gender'); 
              
            for(i = 0; i < radioelement.length; i++) { 
                if(radioelement[i].checked && radioelement[i].value=="female") {
                    Gender="female";
                }
                else{
                    Gender="male";
                }
            } 
    let Address=document.getElementById("address").value;
    let Image=sessionStorage.getItem("profilePhoto"); 
    sessionStorage.removeItem("profilePhoto");
    console.log(Uname,Fname,Lname,Gender,Address);
    let data = JSON.parse(localStorage.getItem(Uname));
    let personalInfo={
            uname:Uname,
            lname:Lname,
            fname:Fname,
            password:Password,
             gender:Gender,
            address:Address,
            image:Image,
            todo:[]
        };
    localStorage.setItem(Uname, JSON.stringify(personalInfo));
    console.log(data);
    alert("Register successfully");
    let loginPage=confirm("Do you want to login?")
    if(loginPage){
        window.location.href="../html/login.html"
    }
   
}
//validating input fields
function Validation(){
    let count=1;
    let Uname=document.getElementById("uname").value;
    let Fname=document.getElementById("fname").value;
    let Lname=document.getElementById("lname").value;
    let Password=document.getElementById("password").value;
    let Gender="";
    let data = JSON.parse(localStorage.getItem(Uname));

    var radioelement  = document.getElementsByName('gender'); 
              
            for(i = 0; i < radioelement .length; i++) { 
                if(radioelement [i].checked && radioelement [i].value=="female") {
                    Gender="female";
                }
                else if(radioelement [i].checked && radioelement [i].value=="male"){
                    Gender="male";
                }
            } 
       
         if((Fname.length<3) || (Fname.length>20)){
            document.getElementById("firstname").innerHTML="Name value must be between 3 and 20";
            count=0;
         }
         if(!isNaN(Fname)){
            document.getElementById("firstname").innerHTML="Name cannot contain number";
            count=0
        }
        if(Fname == ""){
            document.getElementById("firstname").innerHTML="Name field cannot be null";
            count=0;
        }
        if((Lname.length<3) || (Lname.length>20)){
            document.getElementById("lastname").innerHTML="Lastname value must be between 3 and 20";
            count=0
        }
         if(!isNaN(Lname)){
            document.getElementById("lastname").innerHTML="Lastname cannot contain number";
            count=0;
        }
        if(Lname == ""){
            document.getElementById("lastname").innerHTML="lastname field cannot be null";
            count=0;
        }
        try{
            if(Uname==data.uname){
                document.getElementById("email").innerHTML="username already exist";
                count=0;
            }
        }
        catch(err){
            console.log("new user register");
        }
        if(Uname == ""){
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
        getInputValue();
    }

}
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
