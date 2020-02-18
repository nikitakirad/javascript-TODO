let user=sessionStorage.getItem("user");
console.log(user);
let index=sessionStorage.getItem(user);
console.log(index);
let userdata=JSON.parse(localStorage.getItem(user));
console.log(userdata);

(function() {
    document.getElementById("title").value=userdata.todo[index].title;
    document.getElementById("startdate").value=userdata.todo[index].startdate;
    document.getElementById("duedate").value=userdata.todo[index].duedate;
    document.getElementById("description").value=userdata.todo[index].description;
    document.getElementById("categorytype").value=userdata.todo[index].category;
    
    
})();   
function goback(){
    window.location.href="../html/todo.html";
}
function edittask(){
let editData = userdata.todo[index];
editData.title = document.getElementById("title").value;
editData.stardate = document.getElementById("startdate").value;
editData.duedate = document.getElementById("duedate").value;
let categoryID = document.getElementById("categorytype");
editData.category= categoryID.options[categoryID.selectedIndex].text;
//editData.category = document.getElementById("category").value;
editData.description = document.getElementById("description").value;

localStorage.setItem(user,JSON.stringify(userdata))

}

