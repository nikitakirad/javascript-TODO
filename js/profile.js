let data1=sessionStorage.getItem("user");
console.log(data1);
let data=JSON.parse(localStorage.getItem(data1));
console.log(data);
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
localStorage.setItem(data1, JSON.stringify(data));
console.log(data);
}
function goback(){
    window.location="../html/todo.html";
}
function deletesession(){
    sessionStorage.clear();
  }