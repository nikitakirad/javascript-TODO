
let data1=sessionStorage.getItem("user")
console.log(data1);
let data=JSON.parse(localStorage.getItem(sessionStorage.getItem("user")));
console.log(data);
let todolist = data.todo;
function displayform(){
window.location.href="../html/form.html";
}

//to display todolist in tabular form
function DisplayData() {
    cleartable();
    
   //let data=JSON.parse(localStorage.getItem(sessionStorage.getItem("user")));
    
    console.log(todolist);
    document.getElementById("donebutton").style.display="none";
    document.getElementById("deletebutton").style.display="none";
    document.getElementById("searchField").style.display="none";
    document.getElementById("clearbutton").style.display="none";
    

    let table = document.getElementById("todo_list");
    table.innerHTML = "";
    let actionButton;
    for (let i = 0; i < todolist.length; i++) {

      if(todolist[i].status=="Pending"){
        actionButton="<button  style='display:block;background-color:green;border:1px solid green;border-radius:3px;'  id='btn" + i + "' onclick='editform(" + i + ");'>Edit</button>";

      }
      else if(todolist[i].status=="Done"){
        actionButton="<button  style='display:block;background-color:red;border:1px solid red;border-radius:3px;'  id='btn" + i + "' onclick='deleterow(" + i + ");'>Delete</button>";
 
      }
      let list = document.createElement("tr");
      list.innerHTML = 
      "<td>" + "<input class='checkboxes' type='checkbox'></td>" +        
         "<td>" + todolist[i].title + "</td>" +
        "<td>" + todolist[i].category + "</td>" +
        "<td>" + todolist[i].startdate + "</td>" +
        "<td>" + todolist[i].duedate + "</td>" +
        "<td>" + todolist[i].status + "</td>" +
        "<td>" + todolist[i].description+ "</td>" +
        "<td>" + actionButton+ "</td>" 
        

      table.appendChild(list);
    }
    displayDoneButton();
    displayDeleteButton();
    displaySearch();
    displayClearButton();
  }

//single row deletion
function deleterow(index){
    var table=document.getElementById("todo_list");
    console.log("deleteindex:"+index);
    data.todo.splice(index, 1);
    console.log(data);
    localStorage.setItem(data1,JSON.stringify(data));
    let deleteddata=JSON.parse(localStorage.getItem(data1));
    console.log(deleteddata);
    DisplayData();
    
}
//editing the particular todo task of user
function editform(index){
    sessionStorage.setItem(data1,index);
    let data2=sessionStorage.getItem(data1)
    console.log(data2);
    window.location.href="../html/edittask.html";

}
//deleting multiple task
function deletetasks(){
  var table=document.getElementById("todo_list");
  let todolist = data.todo;
  let l=todolist.length-1;
  console.log(l);
  let check=document.getElementsByClassName("checkboxes");
  console.log(check);
  for(let t=0; t<=l;t++)
  {
    if(check[t].checked == true)
    {
      delete data.todo[t];
    }
      console.log(data);
      localStorage.setItem(data1,JSON.stringify(data));
  }
  data.todo = data.todo.filter(function (element) {
     return element !== null;
  });
  localStorage.setItem(data1,JSON.stringify(data));
  DisplayData();
  
}

 
//displaying todo task based on category
function filter(){      
  let eID = document.getElementById("filtertype");
  let Category1= eID.options[eID.selectedIndex].text;
  var table=document.getElementById("todo_list");
  let count=0;
  let todolist = data.todo;
  let l=todolist.length-1;
  table.innerHTML=" ";
  document.getElementById("hiderow").style.display="";
  if(Category1=="Office" || Category1=="Home" || Category1=="Other")
  {
  for(let i=0;i<=l;i++)
  {
    if(todolist[i].status=="Pending"){
      actionButton="<button  style='display:block;background-color:green;border:1px solid green;border-radius:3px;'  id='btn" + i + "' onclick='editform(" + i + ");'>Edit</button>";

    }
    else{
      actionButton="<button  style='display:block;background-color:red;border:1px solid red;border-radius:3px;'  id='btn" + i + "' onclick='deleterow(" + i + ");'>Delete</button>";
    }
    if(todolist[i].category==Category1){
      
     let list = document.createElement("tr");
      list.innerHTML = 
      "<td>" + "<input class='checkboxes' type='checkbox'></td>" +        
         "<td>" + todolist[i].title + "</td>" +
        "<td>" + todolist[i].category + "</td>" +
        "<td>" + todolist[i].startdate + "</td>" +
        "<td>" + todolist[i].duedate + "</td>" +
        "<td>" + todolist[i].status + "</td>" +
        "<td>" + todolist[i].description+ "</td>" +
       // "<td>" + '<button type="button" style="display:block" name="" id="btn' + i + '" onclick="deleterow(' + i + ');">Delete</button>' + "</td>" +
        //"<td>" + '<button type="button" style="display:block" name="" id="btn' + i + '" onclick="editform(' + i + ');">Edit</button>' + "</td>"
        "<td>" +actionButton+ "</td>";
        
        table.appendChild(list);
        

      }
  
  }
  }
  else if(Category1=="All"){
    DisplayData();
  }
  for(let i=0;i<=l;i++){
    document.getElementById("hiderow").style.display="";
    if(todolist[i].category==Category1 || Category1=="All"){
      count+=1;
    }
  }
  if(count==0){
    document.getElementById("hiderow").style.display="none";
    alert("Data Not Found");
  }
}
//changing the status of pending to done
function donetask(){
  var table=document.getElementById("todo_list");
  let todolist = data.todo;
  let l=todolist.length-1;
  console.log(l);
  let check=document.getElementsByClassName("checkboxes");
  console.log(check);
  for(let t=0; t<=l;t++)
  {
    if(check[t].checked == true)
    {
      data.todo[t].status="Done"
    }
  }
  localStorage.setItem(data1,JSON.stringify(data));
  DisplayData();
}
function deletesession(){
  sessionStorage.clear();
}
function displayDoneButton(){
  let count=0;
  let data=JSON.parse(localStorage.getItem(sessionStorage.getItem("user")));
    let todolist = data.todo;
    for (let i = 0; i < todolist.length; i++) {
      if(todolist[i].status=="Pending"){
        count+=1
      }
    }
    if(count>=1){
      document.getElementById("donebutton").style.display="inline-block";
    }
}
function displayDeleteButton(){
  let count=0;
  let data=JSON.parse(localStorage.getItem(sessionStorage.getItem("user")));
    let todolist = data.todo;
    for (let i = 0; i < todolist.length; i++) {
      if(todolist[i].status=="Done"){
        count+=1
      }
    }
    if(count>=2){
      document.getElementById("deletebutton").style.display="inline-block";
    }
}
function search(){
  let count=0;
  let data=JSON.parse(localStorage.getItem(sessionStorage.getItem("user")));
    let todolist = data.todo;
    var table=document.getElementById("todo_list");
    let searchitem=document.getElementById("searchField").value;
    table.innerHTML=" ";
    for (let i = 0; i < todolist.length; i++) {
      if(todolist[i].status=="Pending"){
        actionButton="<button  style='display:block;background-color:green;border:1px solid green;border-radius:3px;'  id='btn" + i + "' onclick='editform(" + i + ");'>Edit</button>";
  
      }
      else{
        actionButton="<button  style='display:block;background-color:red;border:1px solid red;border-radius:3px;'  id='btn" + i + "' onclick='deleterow(" + i + ");'>Delete</button>";
      }
        if(todolist[i].title == searchitem){
          let list = document.createElement("tr");
      list.innerHTML = 
      "<td>" + "<input class='checkboxes' type='checkbox'></td>" +        
         "<td>" + todolist[i].title + "</td>" +
        "<td>" + todolist[i].category + "</td>" +
        "<td>" + todolist[i].startdate + "</td>" +
        "<td>" + todolist[i].duedate + "</td>" +
        "<td>" + todolist[i].status + "</td>" +
        "<td>" + todolist[i].description+ "</td>" +
        "<td>" +actionButton+ "</td>";
        table.appendChild(list);
        
      }
        }
    }
function displaySearch(){
  let data=JSON.parse(localStorage.getItem(sessionStorage.getItem("user")));
  let todolist = data.todo;
  if(todolist.length>=2){
    document.getElementById("searchField").style.display="inline-block";
  }
}
function displayClearButton(){
  let data=JSON.parse(localStorage.getItem(sessionStorage.getItem("user")));
  let todolist = data.todo;
  if(todolist.length>=2){
    document.getElementById("clearbutton").style.display="inline-block";
  }
}

function clearpage(){
  location.reload(true);
}
function cleartable(){
  let data=JSON.parse(localStorage.getItem(sessionStorage.getItem("user")));
  let todolist = data.todo;
  if(todolist.length<=0 ){
    document.getElementById("hiderow").style.display="none";
  }
}