let user=sessionStorage.getItem("user");
console.log(user);
let data=JSON.parse(localStorage.getItem(user));
console.log(data);
//displaying the default value of the particular user
(function() {
    document.getElementById("fname").value=data.fname;
    document.getElementById("lname").value=data.lname;
    document.getElementById("uname").value=data.uname;
    document.getElementById("password").value=data.password;
    document.getElementById("address").value=data.address;
    var radios = document.getElementsByName("gender");
    for (var i=0, len=radios.length; i<len; i++) {
        var r = radios[i]; 
        if ( data.gender=="female" && r.value=="female"  ) {
             r.checked = true;
        } else if(data.gender=="male" && r.value=="male") { 
            r.checked= true; 
        }
        else{
            r.checked=false;
        }
    }
})();
//editing the profile value of particular user and saving it 
function userdata(){
    data.fname=document.getElementById("fname").value;
    data.lname=document.getElementById("lname").value;
    data.password=document.getElementById("password").value;  
    data.address=document.getElementById("address").value;
    var ele = document.getElementsByName('gender'); 
              
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked && ele[i].value=="female") {
            data.gender="female";
        }
        else{
            data.gender="male"
        }
    } 
    localStorage.setItem(user, JSON.stringify(data));
    console.log(data);
    alert("Profile save successfully")
}
function goback(){
    window.location="../html/todo.html";
}
function deletesession(){
    sessionStorage.clear();
  }
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
    let Address=document.getElementById("address").value;
    //let Image=document.getElementById("image").value; 
        if(Fname == ""){
            document.getElementById("firstname").innerHTML="Name field cannot be null";
            count=0
        }
        else{
            document.getElementById("firstname").innerHTML="";
        }
         if((Fname.length<3) || (Fname.length>20)){
            document.getElementById("firstname").innerHTML="Name value must be between 3 and 20";
            count=0
         }
         else{
            document.getElementById("firstname").innerHTML="";
        }
         if(!isNaN(Fname)){
            
            document.getElementById("firstname").innerHTML="Name cannot contain number";
            count=0
        }
        else{
            document.getElementById("firstname").innerHTML="";
        }
        if((Lname.length<3) || (Lname.length>20)){
           
            document.getElementById("lastname").innerHTML="Lastname value must be between 3 and 20";
            count=0
        }
        else{
            document.getElementById("lastname").innerHTML="";
        }
         if(!isNaN(Lname)){
            document.getElementById("lastname").innerHTML="Lastname cannot contain number";
            count=0
        }
        else{
            document.getElementById("lastname").innerHTML="";
        }
         if(Password == ""){
            document.getElementById("userpassword").innerHTML="password field cannot be null";
            count=0
        }
        else{
            document.getElementById("userpassword").innerHTML="";
        }
        if((Password.length<5) || (Password.length>20)){
            document.getElementById("userpassword").innerHTML="password value must be between 5 and 20";
            count=0
        }
        else{
            document.getElementById("userpassword").innerHTML="";
        }
    if(count==1 ){
        userdata();
    }

}
