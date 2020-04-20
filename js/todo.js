var displayalltaskmodule=(function(){

  var user=commomfunctionalitiesmodule.sessionstoragedata();
  var userdata=commomfunctionalitiesmodule.localstoragedata();
  var dataOfAllTasks = userdata.todo;

  //navigate to task form 
  function displayTaskform(){
    window.location.href="../html/form.html";
  }
  //display task rowwise
   function displayParticularTask(dataofparticulartask,particularactionButton){
     let table = document.getElementById("todo_list");
    let list = document.createElement("tr");
    list.innerHTML = 
    "<td>" + "<input class='checkboxes' type='checkbox'></td>" +        
      "<td>" + dataofparticulartask.title + "</td>" +
      "<td>" + dataofparticulartask.category + "</td>" +
      "<td>" + dataofparticulartask.startdate + "</td>" +
      "<td>" + dataofparticulartask.duedate + "</td>" +
      "<td>" + dataofparticulartask.status + "</td>" +
      "<td>" + dataofparticulartask.description+ "</td>" +
      "<td>" + particularactionButton+ "</td>" 
      

    table.appendChild(list);
   }
  // display list of task in tabular form
  function displayTasks() {
      cleartable();
      var flag=0;
      console.log(dataOfAllTasks);
      document.getElementById("donebutton").classList.add('displayoff');
      document.getElementById("deletebutton").classList.add('displayoff');
      document.getElementById("searchField").classList.add('displayoff');
      document.getElementById("clearbutton").classList.add('displayoff');

      let table = document.getElementById("todo_list");
      table.innerHTML = "";
      let actionButton;
      
      for (let i = 0; i < dataOfAllTasks.length; i++) {

        if(dataOfAllTasks[i].status=="Pending"){
          actionButton="<button  class='actioneditbuttonstyle'  id='btn" + i + "' onclick='displayalltaskmodule.editParticularTask(" + i + ");'>Edit</button>";

        }
        else if(dataOfAllTasks[i].status=="Done"){
          actionButton="<button  class='actiondeletebuttonstyle'  id='btn" + i + "' onclick='displayalltaskmodule.deleteParticularTask(" + i + ");'>Delete</button>";
  
        }
        displayParticularTask(dataOfAllTasks[i],actionButton);
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
      window.location.href="../html/edittask.html";

  }
  //delete multiple task
  function deleteMultipleTasks(){
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
    //let l=dataOfAllTasks.length-1;
    table.innerHTML=" ";
    document.getElementById("hiderow").style.display="";
    if(Category1=="Office" || Category1=="Home" || Category1=="Other")
    {
    for(let i=0;i<=dataOfAllTasks.length-1;i++)
    {
      if(dataOfAllTasks[i].status=="Pending"){
        actionButton="<button  class='actioneditbuttonstyle' id='btn" + i + "' onclick='displayalltaskmodule.editParticularTask(" + i + ");'>Edit</button>";

      }
      else{
        actionButton="<button  class='actiondeletebuttonstyle'  id='btn" + i + "' onclick='displayalltaskmodule.deleteParticularTask(" + i + ");'>Delete</button>";
      }
      if(dataOfAllTasks[i].category==Category1){
          displayParticularTask(dataOfAllTasks[i],actionButton);

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
      document.getElementById("hiderow").classList.add('displayoff');
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

  function displayDoneButton(){
    let count=0;
      for (let i = 0; i < dataOfAllTasks.length; i++) {
        if(dataOfAllTasks[i].status=="Pending"){
          count+=1
        }
      }
      if(count>=1){
        document.getElementById("donebutton").classList.remove('displayoff');
        document.getElementById("donebutton").classList.add('displayon');
        
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
        document.getElementById("deletebutton").classList.remove('displayoff');
        document.getElementById("deletebutton").classList.add('displayon');
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
          actionButton="<button  class='actioneditbuttonstyle'  id='btn" + i + "' onclick='displayalltaskmodule.editParticularTask(" + i + ");'>Edit</button>";
    
        }
        else{
          actionButton="<button  class='actiondeletebuttonstyle'  id='btn" + i + "' onclick='displayalltaskmodule.deleteParticularTask(" + i + ");'>Delete</button>";
        }
          if(dataOfAllTasks[i].title == searchitem){
          displayParticularTask(dataOfAllTasks[i],actionButton);
          console.log("n2");
          
        }
          }
      }
  //show search button
  function displaySearchButton(){
    if(dataOfAllTasks.length>=2){
      document.getElementById("searchField").classList.remove('displayoff');
      document.getElementById("searchField").classList.add('displayon');
    }
  }
  //show clear button
  function displayClearButton(){
    if(dataOfAllTasks.length>=2){
      document.getElementById("clearbutton").classList.add('displayoff');
      document.getElementById("clearbutton").classList.add('displayon');
    }
  }
  //reload page
  function clearpage(){
    location.reload(true);
  }
  function cleartable(){
    if(dataOfAllTasks.length<=0 ){
      document.getElementById("hiderow").classList.add('displayoff');
    }
  }return{
    displayTaskform:displayTaskform,
    deleteMultipleTasks:deleteMultipleTasks,
    filterDataCategoryWise:filterDataCategoryWise,
    changeStatusToDone:changeStatusToDone,
    searchParticularTask:searchParticularTask,
    displayTasks:displayTasks,
    clearpage:clearpage,
    deleteParticularTask:deleteParticularTask,
    editParticularTask:editParticularTask
  }
})();