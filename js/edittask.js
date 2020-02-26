let user=sessionStorage.getItem("user");
console.log(user);
let index=sessionStorage.getItem(user);
console.log(index);
let userdata=JSON.parse(localStorage.getItem(user));
console.log(userdata);
//displaying the default value of task 
(function() {
    document.getElementById("title").value=userdata.todo[index].title;
    document.getElementById("startdate").value=userdata.todo[index].startdate;
    document.getElementById("duedate").value=userdata.todo[index].duedate;
    document.getElementById("description").value=userdata.todo[index].description;
    document.getElementById("categorytype").value=userdata.todo[index].category;
    
    
})();   
function goback(){
    window.location.href="../html/todo.html";
}
//editing the task of particular user and saving it
function edittask(){
let editData = userdata.todo[index];
editData.title = document.getElementById("title").value;
editData.startdate = document.getElementById("startdate").value;
editData.duedate = document.getElementById("duedate").value;
let categoryID = document.getElementById("categorytype");
editData.category= categoryID.options[categoryID.selectedIndex].text;
//editData.category = document.getElementById("category").value;
editData.description = document.getElementById("description").value;

localStorage.setItem(user,JSON.stringify(userdata))
alert("Task save successfully")

}

function validateDate(){
    let count=1;
    let title=document.getElementById("title").value;
    let startDate=document.getElementById("startdate").value;
    let dueDate=document.getElementById("duedate").value;
    let message=document.getElementById("error");
    message.innerHTML="";
    if(startDate>dueDate && startDate!="" && dueDate!=""){
        message.innerHTML="Due date should be greather than start date";
        count=0;
    }
   
    if(startDate==""){
        document.getElementById("startdate-error").innerHTML="Please enter the Start Date";
        count=0;
    }
    else{
        document.getElementById("startdate-error").innerHTML="";
    }
    if(dueDate==""){
        message.innerHTML="Please enter the due Date";
        count=0;
    }
    
    if(title==""){
        document.getElementById("title-error").innerHTML="Title field cannot be empty"
        count=0;
    }
    else{
        document.getElementById("title-error").innerHTML="";
    }
    if(count==1){
        edittask();
    }
}
