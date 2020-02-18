let data1=sessionStorage.getItem("user")
console.log(data1);
let data=JSON.parse(localStorage.getItem(sessionStorage.getItem("user")));
console.log(data);

function displayform(){
window.location.href="../html/form.html";
}

function DisplayData() {
    let data=JSON.parse(localStorage.getItem(sessionStorage.getItem("user")));
    let todolist = data.todo;
    console.log(todolist);

    let table = document.getElementById("todo_list");
    table.innerHTML = "";

    for (let i = 0; i < todolist.length; i++) {

      let list = document.createElement("tr");
      list.innerHTML = 
      "<td>" + "<input class='checkboxes' type='checkbox'></td>" +        
         "<td>" + todolist[i].title + "</td>" +
        "<td>" + todolist[i].category + "</td>" +
        "<td>" + todolist[i].startdate + "</td>" +
        "<td>" + todolist[i].duedate + "</td>" +
        "<td>" + todolist[i].status + "</td>" +
        "<td>" + todolist[i].description+ "</td>" +
        "<td>" + '<button type="button" style="display:block" name="" id="btn' + i + '" onclick="deleterow(' + i + ');">Delete</button>' + "</td>" +
        "<td>" + '<button type="button" style="display:block" name="" id="btn' + i + '" onclick="editform(' + i + ');">Edit</button>' + "</td>"

      table.appendChild(list);
    }
  }


function deleterow(index){
    var table=document.getElementById("todo_list");
    console.log("deleteindex:"+index);
    data.todo.splice(index, 1);
    table.deleteRow(index-1);
    console.log(data);
    localStorage.setItem(data1,JSON.stringify(data));
    let deleteddata=JSON.parse(localStorage.getItem(data1));
    console.log(deleteddata);
}
function editform(index){
    let index1=JSON.stringify(index);
    console.log(index1);
    sessionStorage.setItem(data1,index);
    let data2=sessionStorage.getItem(data1)
    console.log(data2);
    window.location.href="../html/edittask.html";

}
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

 

function filter(){
  let eID = document.getElementById("filtertype");
  let Category1= eID.options[eID.selectedIndex].text;
  var table=document.getElementById("todo_list");
  
  let todolist = data.todo;
  let l=todolist.length-1;
  table.innerHTML=" ";
  if(Category1=="Office" || Category1=="Home" || Category1=="Other")
  {
  for(let i=0;i<=l;i++)
  {
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
        "<td>" + '<button type="button" style="display:block" name="" id="btn' + i + '" onclick="deleterow(' + i + ');">Delete</button>' + "</td>" +
        "<td>" + '<button type="button" style="display:block" name="" id="btn' + i + '" onclick="editform(' + i + ');">Edit</button>' + "</td>"
        table.appendChild(list);
      }
  }
  }
  else if(Category1=="All"){
    DisplayData();
  }
}
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