
var edittaskformmodule=(function(){
    
    let currentuser=sessionStorage.getItem("user");
    let currentuserindex=sessionStorage.getItem(currentuser);
    let currentuserdata=JSON.parse(localStorage.getItem(currentuser));
    
    
    //displaying the default value of task 
    function displayDataOfTask() {
        document.getElementById("title").value=currentuserdata.todo[currentuserindex].title;
        document.getElementById("startdate").value=currentuserdata.todo[currentuserindex].startdate;
        document.getElementById("duedate").value=currentuserdata.todo[currentuserindex].duedate;
        document.getElementById("description").value=currentuserdata.todo[currentuserindex].description;
        document.getElementById("categorytype").value=currentuserdata.todo[currentuserindex].category;
        
        
    }
    //go to previous page
    function previouspage(){
        window.location.href="../html/todo.html";
    }

    //modifying the task of particular user and saving it
    function saveModifiedData(){
    let editData = currentuserdata.todo[currentuserindex];
    editData.title = document.getElementById("title").value;
    editData.startdate = document.getElementById("startdate").value;
    editData.duedate = document.getElementById("duedate").value;
    let categoryID = document.getElementById("categorytype");
    editData.category= categoryID.options[categoryID.selectedIndex].text;
    //editData.category = document.getElementById("category").value;
    editData.description = document.getElementById("description").value;

    localStorage.setItem(currentuser,JSON.stringify(currentuserdata))
    alert("Task save successfully")

    }
    //validation for date and title
    function validateDateAndTitle(){
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
            saveModifiedData();
        }
    }
    return{
        previouspage:previouspage,
        validateDateAndTitle:validateDateAndTitle,
        displayDataOfTask:displayDataOfTask
    }
})();
