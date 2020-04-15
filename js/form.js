
var gettaskdatamodule=(function(){
    //task addition
        function getTaskData(title,startDate,dueDate){
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
            let currentuser=sessionStorage.getItem("user")
            let currentuserdata=JSON.parse(localStorage.getItem(currentuser));
        
            currentuserdata.todo.push(taskdata);
            
            
    
            localStorage.setItem(currentuser,JSON.stringify(currentuserdata));
            alert("Task added Successfully")
        }
        function previouspage(){
            window.location.href="../html/todo.html";
        }
        function deletesession(){
            sessionStorage.clear();
        }
        //validating date and title fields
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
                getTaskData(title,startDate,dueDate);
            }
        }
        return{
            validateDateAndTitle:validateDateAndTitle,
            deletesession:deletesession,
            previouspage:previouspage
        }
    })();