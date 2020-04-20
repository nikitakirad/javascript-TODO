
var gettaskdatamodule=(function(){
    //task addition
        function getTaskData(){
            let title=document.getElementById("title").value;
            let startDate=document.getElementById("startdate").value;
            let dueDate=document.getElementById("duedate").value;
            let Title=title;
            let Duedate=dueDate;
            let Startdate=startDate;
            let Description=document.getElementById("description").value;
            let categoryID = document.getElementById("categorytype");
            let Category = categoryID.options[categoryID.selectedIndex].text;
            let statusID = document.getElementById("statustype");
            let Status = statusID.options[statusID.selectedIndex].text;
            console.log(Title,Duedate,Startdate,Description);
            let taskdata = new Object();
            taskdata.title=Title;
            taskdata.duedate=Duedate;
            taskdata.startdate=Startdate;
            taskdata.description=Description;
            taskdata.category=Category;
            taskdata.status=Status;
    
            console.log(taskdata);
           let currentuser=commomfunctionalitiesmodule.sessionstoragedata();
            let currentuserdata=commomfunctionalitiesmodule.localstoragedata();
            currentuserdata.todo.push(taskdata);
            
            
    
            localStorage.setItem(currentuser,JSON.stringify(currentuserdata));
            alert("Task added Successfully")
        }
        function previouspage(){
            window.location.href="../html/todo.html";
        }
        return{
            previouspage:previouspage,
            getTaskData:getTaskData
        }
    })();