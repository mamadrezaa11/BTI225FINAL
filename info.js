function validate(){
var errorcounter = 0;
    if (signup.FirstName.value == "")                                  
    { 
        if(errorcounter < 6){
        errorcounter++;
        showErrors("Please enter your name."); 
        signup.FirstName.focus();
        } 
        return false; 
    }
    ///////////Radio val Start
    var counter = 0;  
    for (var i = 0; i < 5; i++)  { 
     if (document.signup.radio[i].checked)  {     
          counter = 1;
     }
    } 
    if(counter != 1){
        return false;
    }
    //////////Password val
    
    //////////
    
    var passw=  /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if(signup.Password1.value == ""){
        if(errorcounter < 6){
            errorcounter++;
        showErrors('Enter password')
        }
        return false
    }
    if(signup.Password1.value.match(passw)) 
    {   
    }
    else
    { if(errorcounter < 6){
        errorcounter++;
        showErrors('Enter Correct password format')
    }
    return false;
    }
    if(signup.Password1.value !== signup.Password2.value){
        if(errorcounter < 6){
            errorcounter++;
        showErrors("passwords dont match")}
        return false;
    }
    ///////////// Password val END

    /////////////

    var userr=  /^[a-zA-Z][a-zA-Z0-9-_\.]{6,15}$/;
    if(signup.user.value.match(userr)) 
    {   
    }
    else
    { if(errorcounter < 6){
        errorcounter++;
        showErrors('Enter Correct User format')}
    return false;
    }
////////////////////////////////////RADIO CHECK
    var radio_len = document.radio.EducationStat.length;
    var onechecked = false;
    for(var i =0; i< radio_len; i++){
        if(document.radio.EducationStat[i].value > 0){
            onechecked = true;
        }
    }if(!onechecked){
        if(errorcounter < 6){
            errorcounter++;
        showErrors("Please choose one of the options!");}
        return false;
    }
     return( true );

}
function showErrors(messages) {
    document.querySelector('#errors').innerHTML += messages;
 }
 function  clearErrors() {
    errorcounter = 0;
    document.querySelector('#errors').innerHTML = "";
    document.querySelector('#client').focus();         
 }