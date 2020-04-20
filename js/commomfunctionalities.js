var commomfunctionalitiesmodule=(function(){


    function deletesession(){
        sessionStorage.clear();
    }
    function localstoragedata(){
    return JSON.parse(localStorage.getItem(sessionStorage.getItem("user")));
    
    }
    function sessionstoragedata(){
    return sessionStorage.getItem("user");
        
    }
    return{
        localstoragedata:localstoragedata,
        sessionstoragedata:sessionstoragedata,
        deletesession:deletesession
    };
})();