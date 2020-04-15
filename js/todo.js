var displayalltaskmodule=(function(){
  
  var user=sessionStorage.getItem("user")
  var userdata=JSON.parse(localStorage.getItem(sessionStorage.getItem("user")));
  var dataOfAllTasks = userdata.todo;

  //navigate to task form 
  function displayTaskform(){
    window.location.href="../html/form.html";
  }

  // display list of task in tabular form
  function displayTasks() {
      cleartable();
      console.log(dataOfAllTasks);
      document.getElementById("donebutton").style.display="none";
      document.getElementById("deletebutton").style.display="none";
      document.getElementById("searchField").style.display="none";
      document.getElementById("clearbutton").style.display="none";
      

      let table = document.getElementById("todo_list");
      table.innerHTML = "";
      let actionButton;
      for (let i = 0; i < dataOfAllTasks.length; i++) {

        if(dataOfAllTasks[i].status=="Pending"){
          actionButton="<button  style='display:block;background-color:green;border:1px solid green;border-radius:3px;'  id='btn" + i + "' onclick='displayalltaskmodule.editParticularTask(" + i + ");'>Edit</button>";

        }
        else if(dataOfAllTasks[i].status=="Done"){
          actionButton="<button  style='display:block;background-color:red;border:1px solid red;border-radius:3px;'  id='btn" + i + "' onclick='displayalltaskmodule.deleteParticularTask(" + i + ");'>Delete</button>";
  
        }
        let list = document.createElement("tr");
        list.innerHTML = 
        "<td>" + "<input class='checkboxes' type='checkbox'></td>" +        
          "<td>" + dataOfAllTasks[i].title + "</td>" +
          "<td>" + dataOfAllTasks[i].category + "</td>" +
          "<td>" + dataOfAllTasks[i].startdate + "</td>" +
          "<td>" + dataOfAllTasks[i].duedate + "</td>" +
          "<td>" + dataOfAllTasks[i].status + "</td>" +
          "<td>" + dataOfAllTasks[i].description+ "</td>" +
          "<td>" + actionButton+ "</td>" 
          

        table.appendChild(list);
      }
      displayDoneButton();
      displayDeleteButton();
      displaySearchButton();
      displayClearButton();
    }

  //delete the particular task
  function deleteParticularTask(currentuserindex){
      console.log("deleteindex:"+currentuserindex);
      userdata.todo.splice(currentuserindex, 1);
      localStorage.setItem(user,JSON.stringify(userdata));
      displayTasks();
      
  }
  //edit the data of particular  task 
  function editParticularTask(currentuserindex){
      sessionStorage.setItem(user,currentuserindex);
      //let data2=sessionStorage.getItem(user)
      //console.log(data2);
      window.location.href="../html/edittask.html";

  }
  //delete multiple task
  function deleteMultipleTasks(){
    //let l=dataOfAllTasks.length-1;
    //console.log(l);
    let check=document.getElementsByClassName("checkboxes");
    console.log(check);
    for(let t=0; t<=dataOfAllTasks.length-1;t++)
    {
      if(check[t].checked == true)
      {
        delete userdata.todo[t];
      }
        console.log(userdata);
        localStorage.setItem(user,JSON.stringify(userdata));
    }
    userdata.todo = userdata.todo.filter(function (element) {
      return element !== null;
    });
    localStorage.setItem(user,JSON.stringify(userdata));
    clearpage();
    
  }

  
  //display  task based on category
  function filterDataCategoryWise(){      
    let eID = document.getElementById("filtertype");
    let Category1= eID.options[eID.selectedIndex].text;
    var table=document.getElementById("todo_list");
    let count=0;
    let l=dataOfAllTasks.length-1;
    table.innerHTML=" ";
    document.getElementById("hiderow").style.display="";
    if(Category1=="Office" || Category1=="Home" || Category1=="Other")
    {
    for(let i=0;i<=dataOfAllTasks.length-1;i++)
    {
      if(dataOfAllTasks[i].status=="Pending"){
        actionButton="<button  style='display:block;background-color:green;border:1px solid green;border-radius:3px;'  id='btn" + i + "' onclick='displayalltaskmodule.editParticularTask(" + i + ");'>Edit</button>";

      }
      else{
        actionButton="<button  style='display:block;background-color:red;border:1px solid red;border-radius:3px;'  id='btn" + i + "' onclick='displayalltaskmodule.deleteParticularTask(" + i + ");'>Delete</button>";
      }
      if(dataOfAllTasks[i].category==Category1){
        
      let list = document.createElement("tr");
        list.innerHTML = 
        "<td>" + "<input class='checkboxes' type='checkbox'></td>" +        
          "<td>" + dataOfAllTasks[i].title + "</td>" +
          "<td>" + dataOfAllTasks[i].category + "</td>" +
          "<td>" + dataOfAllTasks[i].startdate + "</td>" +
          "<td>" + dataOfAllTasks[i].duedate + "</td>" +
          "<td>" + dataOfAllTasks[i].status + "</td>" +
          "<td>" + dataOfAllTasks[i].description+ "</td>" +
          "<td>" +actionButton+ "</td>";
          
          table.appendChild(list);
          

        }
    
    }
    }
    else if(Category1=="All"){
      displayTasks();
    }
    for(let i=0;i<=dataOfAllTasks.length-1;i++){
      document.getElementById("hiderow").style.display="";
      if(dataOfAllTasks[i].category==Category1 || Category1=="All"){
        count+=1;
      }
    }
    if(count==0){
      document.getElementById("hiderow").style.display="none";
      alert("Data Not Found");
    }
  }
  //changing the status of pending to done
  function changeStatusToDone(){
    var table=document.getElementById("todo_list");
    let sizeoftask=dataOfAllTasks.length-1;
    console.log(sizeoftask);
    let check=document.getElementsByClassName("checkboxes");
    console.log(check);
    for(let t=0; t<=sizeoftask;t++)
    {
      if(check[t].checked == true)
      {
        userdata.todo[t].status="Done"
      }
    }
    localStorage.setItem(user,JSON.stringify(userdata));
    displayTasks();
  }
  function deleteParticularUser(){
    sessionStorage.clear();
  }
  //show done button
  function displayDoneButton(){
    let count=0;
      for (let i = 0; i < dataOfAllTasks.length; i++) {
        if(dataOfAllTasks[i].status=="Pending"){
          count+=1
        }
      }
      if(count>=1){
        document.getElementById("donebutton").style.display="inline-block";
      }
  }
  //show delete button
  function displayDeleteButton(){
    let count=0;
      for (let i = 0; i < dataOfAllTasks.length; i++) {
        if(dataOfAllTasks[i].status=="Done"){
          count+=1
        }
      }
      if(count>=2){
        document.getElementById("deletebutton").style.display="inline-block";
      }
  }
  //search particular task on the page
  function searchParticularTask(){
    let count=0;
      var table=document.getElementById("todo_list");
      let searchitem=document.getElementById("searchField").value;
      table.innerHTML=" ";
      for (let i = 0; i < dataOfAllTasks.length; i++) {
        if(dataOfAllTasks[i].status=="Pending"){
          actionButton="<button  style='display:block;background-color:green;border:1px solid green;border-radius:3px;'  id='btn" + i + "' onclick='displayalltaskmodule.editParticularTask(" + i + ");'>Edit</button>";
    
        }
        else{
          actionButton="<button  style='display:block;background-color:red;border:1px solid red;border-radius:3px;'  id='btn" + i + "' onclick='displayalltaskmodule.deleteParticularTask(" + i + ");'>Delete</button>";
        }
          if(dataOfAllTasks[i].title == searchitem){
            let list = document.createElement("tr");
        list.innerHTML = 
        "<td>" + "<input class='checkboxes' type='checkbox'></td>" +        
          "<td>" + dataOfAllTasks[i].title + "</td>" +
          "<td>" + dataOfAllTasks[i].category + "</td>" +
          "<td>" + dataOfAllTasks[i].startdate + "</td>" +
          "<td>" + dataOfAllTasks[i].duedate + "</td>" +
          "<td>" + dataOfAllTasks[i].status + "</td>" +
          "<td>" + dataOfAllTasks[i].description+ "</td>" +
          "<td>" +actionButton+ "</td>";
          table.appendChild(list);
          
        }
          }
      }
  //show search button
  function displaySearchButton(){
    if(dataOfAllTasks.length>=2){
      document.getElementById("searchField").style.display="inline-block";
    }
  }
  //show clear button
  function displayClearButton(){
    if(dataOfAllTasks.length>=2){
      document.getElementById("clearbutton").style.display="inline-block";
    }
  }
  //reload page
  function clearpage(){
    location.reload(true);
  }
  function cleartable(){
    if(dataOfAllTasks.length<=0 ){
      document.getElementById("hiderow").style.display="none";
    }
  }return{
    displayTaskform:displayTaskform,
    deleteMultipleTasks:deleteMultipleTasks,
    filterDataCategoryWise:filterDataCategoryWise,
    changeStatusToDone:changeStatusToDone,
    searchParticularTask:searchParticularTask,
    deleteParticularUser:deleteParticularUser,
    displayTasks:displayTasks,
    clearpage:clearpage,
    deleteParticularTask:deleteParticularTask,
    editParticularTask:editParticularTask
  }
})();