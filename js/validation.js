var validationmodule=(function(){
 //validating data entered by user on registration page
    function validationOfRegistration(){
        countoffirstname=validationoffirstname();
        countoflastname=validationoflastname();
        countofusername=validationofusername();
        countofpassword=validationofpassword();
        countofgender=validationofgender();
            if(countoffirstname==1 && countoflastname==1 && countofusername==1 && countofpassword==1 && countofgender==1){
        
                registrationmodule.storeDataInDatabase();
            }

    }
    function validationoffirstname(){
        let Firstname=document.getElementById("userfirstname").value;
        let countoffirstname=1;
        if((Firstname.length<3) || (Firstname.length>20)){
            document.getElementById("firstname").innerHTML="Name value must be between 3 and 20";
            countoffirstname=0;
        }
        if(!isNaN(Firstname)){
            document.getElementById("firstname").innerHTML="Name cannot contain number";
            countoffirstname=0
        }
        if(Firstname == ""){
            document.getElementById("firstname").innerHTML="Name field cannot be null";
            countoffirstname=0;
        }
        
        return countoffirstname;
    }
    function validationoflastname(){
        let Lastname=document.getElementById("userlastname").value;
        let countoflastname=1;
        if((Lastname.length<3) || (Lastname.length>20)){
            document.getElementById("lastname").innerHTML="Lastname value must be between 3 and 20";
            countoflastname=0
        }
        if(!isNaN(Lastname)){
            document.getElementById("lastname").innerHTML="Lastname cannot contain number";
            countoflastname=0;
        }
        if(Lastname == ""){
            document.getElementById("lastname").innerHTML="lastname field cannot be null";
            countoflastname=0;
        }
        return countoflastname;
    }
    function validationofusername(){
        let Username=document.getElementById("username").value;
        let userexist = JSON.parse(localStorage.getItem(Username));
        console.log(userexist);
        let countofusername=1;
        try{
            if(Username==userexist.username){
                document.getElementById("email").innerHTML="username already exist";
                countofusername=0;
            }
        }
        catch(err){
            console.log("user already exist");
        }
        if(Username == ""){
            document.getElementById("email").innerHTML="username field cannot be null";
            countofusername=0;
        }
        return countofusername;
    }
    function validationofpassword(){
        let countofpassword=1;
        let Password=document.getElementById("password").value;

        if((Password.length<5) || (Password.length>20)){
            document.getElementById("userpassword").innerHTML="password value must be between 5 and 20";
            countofpassword=0;
        }
        if(Password == ""){
            document.getElementById("userpassword").innerHTML="password field cannot be null";
            countofpassword=0;
        }
        return countofpassword;
    }
    function validationofgender(){
        console.log("f10");
        let countofgender=1;
        let Gender="";
        var radioelement  = document.getElementsByName('gender'); 
                    
                    for(i = 0; i < radioelement .length; i++) { 
                        if(radioelement [i].checked && radioelement [i].value=="female") {
                            Gender="female";
                        }
                        else if(radioelement [i].checked && radioelement [i].value=="male"){
                            Gender="male";
                        }
                    } 
        if(Gender == ""){
            document.getElementById("usergender").innerHTML="Gender field cannot be empty";
            countofgender=0;
        }
        return countofgender;

    }
    //get profile pic of user
    function getProfilePic(){
        let profileImage = document.getElementById("myFile").files[0];
        let imagereader = new FileReader();
        imagereader.readAsDataURL(profileImage);

        imagereader.onload = function ()
        {
            let imgdata = imagereader.result;
            sessionStorage.setItem("profilePhoto", imgdata);
            document.getElementById("profile_image").src = imgdata;
        };
    }
    //validating data entered by user on profile page
    function validationOfEditProfile(){
        countoffirstname=validationoffirstname();
        countoflastname=validationoflastname();
        countofusername=validationofusername();
        countofpassword=validationofpassword();
        countofgender=validationofgender();
            if(countoffirstname==1 && countoflastname==1 && countofusername==1 && countofpassword==1 && countofgender==1){
        
                displayprofileofusermodule.modifyUserData();
            }
    }
    //validating date and title fields of task page
    function validateDateAndTitleoftask(){
        countoftitle=validationoftitle();
        countofnullstartdate=validationofnullstartdate();
        countofnullduedate=validationofnullduedate();
        countofdate=validationofdate()
        if(countoftitle==1 &&  countofnullstartdate==1 && countofnullduedate==1 && countofdate==1){
            gettaskdatamodule.getTaskData();
        }
    }
    function validationoftitle(){
        let countoftitle=1;
        let title=document.getElementById("title").value;
        let message=document.getElementById("error");
        message.innerHTML="";
        if(title==""){
            document.getElementById("title-error").innerHTML="Title field cannot be empty"
            countoftitle=0;
        }
        else{
            document.getElementById("title-error").innerHTML="";
        }
        return countoftitle;
    }
    function validationofnullstartdate(){
        let startDate=document.getElementById("startdate").value;
        let message=document.getElementById("error");
        message.innerHTML="";
        let countofnullstartdate=1;
        if(startDate==""){
            document.getElementById("startdate-error").innerHTML="Please enter the Start Date";
            countofnullstartdate=0;
        }
        return countofnullstartdate;
    }
    function validationofnullduedate(){
        let dueDate=document.getElementById("duedate").value;
        let message=document.getElementById("error");
        message.innerHTML="";
        let countofnullduedate=1;
        if(dueDate==""){
            message.innerHTML="Please enter the due Date";
            countofnullduedate=0;
        }
        return countofnullduedate;
    }
    function validationofdate(){
        let dueDate=document.getElementById("duedate").value;
        let startDate=document.getElementById("startdate").value;
        let countofdate=1;
        let message=document.getElementById("error");
        message.innerHTML="";
        if(startDate>dueDate && startDate!="" && dueDate!=""){
            message.innerHTML="Due date should be greather than start date";
            countofdate=0;
        }
        return countofdate;
    }
    //validating date and time of edit task page
    function validateDateAndTitleofedittask(){
        countoftitle=validationoftitle();
        countofnullstartdate=validationofnullstartdate();
        countofnullduedate=validationofnullduedate();
        countofdate=validationofdate()
        if(countoftitle==1 &&  countofnullstartdate==1 && countofnullduedate==1 && countofdate==1){
            edittaskformmodule.saveModifiedData();
        }
    }
    return{
        getProfilePic:getProfilePic,
        validationOfRegistration:validationOfRegistration,
        validateDateAndTitleoftask:validateDateAndTitleoftask,
        validationOfEditProfile:validationOfEditProfile,
        validateDateAndTitleofedittask:validateDateAndTitleofedittask
    }
})();