var formdatarecords=[];

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
    let data1=sessionStorage.getItem("user")
    console.log(data1);
    let data=JSON.parse(localStorage.getItem(data1));
    console.log(data);
    data.todo.push(formdataobj);
    console.log(data);
    console.log(data);

    localStorage.setItem(data1,JSON.stringify(data));
}
function goback(){
    window.location.href="../html/todo.html";
}
function deletesession(){
    sessionStorage.clear();
  }


