//to get input values of registration page
function getInputValue() {
    let Uname=document.getElementById("uname").value;
    let Fname=document.getElementById("fname").value;
    let Lname=document.getElementById("lname").value;
    let Password=document.getElementById("password").value;
    let Gender;
    var ele = document.getElementsByName('gender'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked && ele[i].value=="female") {
                    Gender="female";
                }
                else{
                    Gender="male";
                }
            } 
    let Address=document.getElementById("address").value;
    let Image=document.getElementById("image").value; 
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
}
//validating input fields
function Validation(){
    let count=1;
    let Uname=document.getElementById("uname").value;
    let Fname=document.getElementById("fname").value;
    let Lname=document.getElementById("lname").value;
    let Password=document.getElementById("password").value;
    let Gender;
    var ele = document.getElementsByName('gender');       
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked && ele[i].value=="female") {
            Gender="female";
        }
        else{
            Gender="male";
        }
    } 
    const validatepassword=new RegExp(/([A-Z]+)([a-z]?.*)([!@#\$%\^&\*\.].*)([0-9].*)/);
    let Address=document.getElementById("address").value;
    let Image=document.getElementById("image").value; 
        if(Fname == ""){
            document.getElementById("firstname").innerHTML="Name field cannot be null";
            count=0
        }
         if((Fname.length<3) || (Fname.length>20)){
            document.getElementById("firstname").innerHTML="Name value must be between 3 and 20";
            count=0
         }
         if(!isNaN(Fname)){
            document.getElementById("firstname").innerHTML="Name cannot contain number";
            count=0
        }
        if((Lname.length<3) || (Lname.length>20)){
            document.getElementById("lastname").innerHTML="Lastname value must be between 3 and 20";
            count=0
        }
         if(!isNaN(Lname)){
            document.getElementById("lastname").innerHTML="Lastname cannot contain number";
            count=0
        }
        if(Uname == ""){
            document.getElementById("email").innerHTML="username field cannot be null";
            count=0
        }
         if(Uname.indexOf("@")<=0){
            document.getElementById("email").innerHTML="@ invalid position";
            count=0

        }
         if(Password == ""){
            document.getElementById("userpassword").innerHTML="password field cannot be null";
            count=0
        }
        if((Password.length<5) || (Password.length>20)){
            document.getElementById("userpassword").innerHTML="password value must be between 5 and 20";
            count=0
        }
        if(validatepassword.test(Password)){
            document.getElementById("userpassword").innerHTML="please enter the password as per mentioned";
        }
    if(count==1 ){
        getInputValue();
    }

}
