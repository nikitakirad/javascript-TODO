function getInputValue() {
    let Uname=document.getElementById("uname").value;
    let Fname=document.getElementById("fname").value;
    let Lname=document.getElementById("lname").value;
    let Password=document.getElementById("password").value;
    let Gender=document.getElementById("female").value || document.getElementById("male").value;
    let Address=document.getElementById("address").value;
    let Image=document.getElementById("image").value;
    console.log(Uname,Fname,Lname,Gender,Address);
    let data = JSON.parse(localStorage.getItem(Uname));
    if(data.uname!=Uname){
        let personalInfo={
            uname:Uname,
            lname:Lname,
            fname:Fname,
            password:Password,
             gender:Gender,
            address:Address,
            image:Image
        };
    
        localStorage.setItem(Uname, JSON.stringify(personalInfo));
    }
    else{
        alert("Email already exist")
    }
    console.log(data);
}