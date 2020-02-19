//task addition
function formdata(){
    let Title=document.getElementById("title").value;
    let Duedate=document.getElementById("duedate").value;
    let Startdate=document.getElementById("startdate").value;
    let Description=document.getElementById("description").value;
    let categoryID = document.getElementById("categorytype");
    let Category = categoryID.options[categoryID.selectedIndex].text;
    let statusID = document.getElementById("statustype");
    let Status = statusID.options[statusID.selectedIndex].text;
    console.log(Title,Duedate,Startdate,Description);
    let formdataobj = new Object();
    formdataobj.title=Title;
    formdataobj.duedate=Duedate;
    formdataobj.startdate=Startdate;
    formdataobj.description=Description;
    formdataobj.category=Category;
    formdataobj.status=Status;

   console.log(formdataobj);
    let user=sessionStorage.getItem("user")
    console.log(user);
    let userdata=JSON.parse(localStorage.getItem(user));
    console.log(userdata);
    userdata.todo.push(formdataobj);
    console.log(userdata);
    

    localStorage.setItem(user,JSON.stringify(userdata));
    alert("Task added Successfully")
}
function goback(){
    window.location.href="../html/todo.html";
}
function deletesession(){
    sessionStorage.clear();
}
function validateDate(){
    let startDate=document.getElementById("startdate").value;
    let dueDate=document.getElementById("duedate").value;
    let message=document.getElementById("error");
    message.innerHTML="";
    if(startDate>dueDate && startDate!="" && dueDate!=""){
        message.innerHTML="Due date should be greather than start date";
    }
}