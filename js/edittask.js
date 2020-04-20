
var edittaskformmodule=(function(){
   let currentuser=commomfunctionalitiesmodule.sessionstoragedata();
   let currentuserdata=commomfunctionalitiesmodule.localstoragedata();
   let currentuserindex=sessionStorage.getItem(currentuser);
    
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
    return{
        previouspage:previouspage,
        displayDataOfTask:displayDataOfTask,
        saveModifiedData:saveModifiedData
    };
})();
