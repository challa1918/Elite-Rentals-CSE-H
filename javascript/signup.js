     
     var female_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo8PcCxh7tT6MDFhJi2UaAT9SeciHqvZuaWtGg0y0-yyP8rMDz";
     var male_img = "https://visualpharm.com/assets/217/Life%20Cycle-595b40b75ba036ed117d9ef0.svg";
     
     
     $( document ).ready(function() {
         
         set_sex_img();
      
         set_who_message();
         
         
         $("#input_sex").change(function() {
            
             set_sex_img();
             set_who_message();
         });
       
   
         $("#first_name").keyup(function() {

             set_who_message();
             
            
         });
     
      
         $("#last_name").keyup(function() {
 
             set_who_message();
             
            
         });
   
    
     
    
     function set_sex_img() {
         var sex = $("#input_sex").val();
         if (sex == "Mr.") {
        
             $("#img_sex").attr("src", male_img);
         } else {

             $("#img_sex").attr("src", female_img);
         }
     }
     
    
     function set_who_message() {
         var sex = $("#input_sex").val();
         var first_name = $("#first_name").val();
         var last_name = $("#last_name").val();
         
         if (validation_name(first_name).code == 0 || 
             validation_name(last_name).code == 0) {
           
           
             $("#who_message").html("Who are you ?");
         } else {
            
           
             $("#who_message").html(sex+" "+first_name+" "+last_name);
         }
     }



    











    
     
   
     function validation_name (val) {
         if (val.length < 2) {
            
             return {"code":0, "message":"The name is too short."};
         }
         if (!val.match("^[a-zA-Z\- ]+$")) {
        
           
             return {"code":0, "message":"The name use non-alphabetics chars."};
         }

     
        
         return {"code": 1};
     }

    
    

     });
     

   




    document.getElementById("tel").addEventListener("keyup",function(){
        
        var mobileNumber = document.getElementById('tel').value;
        
       if(isNaN(mobileNumber)){
        document.getElementById("phn").innerHTML= " ** user must write digits only not characters";
        document.getElementById("contact").style.height="210px";
          return; 
       }else{
    document.getElementById("phn").innerHTML= "";
    document.getElementById("contact").style.height="200px";
}

       if(mobileNumber.length!=10){
        document.getElementById("phn").innerHTML= " ** Mobile Number must be 10 digits only";
        document.getElementById("contact").style.height="210px";
        
       }else{
    document.getElementById("phn").innerHTML= "";
    document.getElementById("contact").style.height="200px";
}


    });


    document.getElementById("semail").addEventListener("keyup",function(){
        
        var emails = document.getElementById('semail').value;
      
     

        if(emails.indexOf('@') <= 0 ){
            document.getElementById("email").innerHTML=" ** @ Invalid Position in email field";
                         return;
           
       }else{
    document.getElementById("email").innerHTML= "";
  
}   
       if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
        document.getElementById("email").innerHTML=" **Invalid email id";
        
       }else{
    document.getElementById("email").innerHTML= "";
  
}
    

    });



    document.getElementById("first_name").addEventListener("keyup",function(){
        
        var fname = document.getElementById('first_name').value;
      
        if((fname.length < 2) || (fname.length > 20)) {
            document.getElementById("fname").style.marginTop="-2em";
            document.getElementById("first_name").style.top= "-2.7em";
            document.getElementById("fname").innerHTML="** First name lenght must be between 2 and 20";
            document.getElementById("personal").style.height="210px";
           return;	
       }else{
        document.getElementById("first_name").style.top= "-2.4em";
    document.getElementById("fname").innerHTML= "";

    document.getElementById("personal").style.height="200px";
    
  
        }   

       if(!isNaN(fname)){
        
        document.getElementById("first_name").style.top= "-2.7em";
        document.getElementById("fname").innerHTML=" ** only characters are allowed";

        document.getElementById("personal").style.height="210px";
        
           
       }else{
        document.getElementById("first_name").style.top= "-2.4em";
    document.getElementById("fname").innerHTML= "";
    document.getElementById("fname").style.marginTop="0";
    document.getElementById("personal").style.height="200px";
    
  
    }   
 



    });


    document.getElementById("last_name").addEventListener("keyup",function(){
        
        var lname = document.getElementById('last_name').value;
      
        if((lname.length < 2) || (lname.length > 20)) {
            document.getElementById("lname").style.marginTop="-2em";
            document.getElementById("last_name").style.top= "-2.7em";
            document.getElementById("lname").innerHTML="** Last name lenght must be between 2 and 20";
            document.getElementById("personal").style.height="210px";
           return;	
       }else{
        document.getElementById("last_name").style.top= "-2.4em";
    document.getElementById("lname").innerHTML= "";

    document.getElementById("personal").style.height="200px";
  
        }   
 
       if(!isNaN(lname)){
        
        document.getElementById("last_name").style.top= "-2.7em";
        document.getElementById("lname").innerHTML=" ** only characters are allowed";

        document.getElementById("personal").style.height="210px";
        
           
       }else{
        document.getElementById("last_name").style.top= "-2.4em";
    document.getElementById("lname").innerHTML= "";
    document.getElementById("lname").style.marginTop="0";
    document.getElementById("personal").style.height="200px";
  
    }   
 



    });


  function validation(){
   
   var fname = document.getElementById('first_name').value;
       var lname = document.getElementById('last_name').value;
       var pass = document.getElementById('spass').value;
       var confirmpass = document.getElementById('spassconf').value;
       var mobileNumber = document.getElementById('tel').value;
       var emails = document.getElementById('semail').value;

       



       if(fname == ""){
           alert(" ** Please fill the first name field");
           return false;
       }
       if((fname.length <= 2) || (fname.length > 20)) {
          alert(" ** First name lenght must be between 2 and 20");
           return false;	
       }
       if(!isNaN(fname)){
           alert(" ** only characters are allowed");
           return false;
       }

       

       if(lname == ""){
           alert(" ** Please fill the last name field");
           return false;
       }
       if((lname.length <= 2) || (lname.length > 20)) {
           alert(" ** Last name lenght must be between 2 and 20");
           return false;	
       }
       if(!isNaN(lname)){
          alert(" ** only characters are allowed");
           return false;
       }


       if(emails == ""){
         alert(" ** Please fill the email id` field");
           return false;
       }
       if(emails.indexOf('@') <= 0 ){
           alert(" ** @ Invalid Position in email field");
           return false;
       }

       if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
          alert(" ** . Invalid email id");
           return false;
       }



       if(mobileNumber == ""){
          alert(" ** Please fill the mobile Number field");
           return false;
       }
       if(isNaN(mobileNumber)){
        alert(" ** user must write digits only not characters");
           return false;
       }
       if(mobileNumber.length!=10){
          alert(" ** Mobile Number must be 10 digits only");
           return false;
       }





       if(pass == ""){
        document.getElementById("p").innerHTML=" ** Please fill the password field";
           
           return false;
       }
       if((pass.length < 6) || (pass.length > 20)) {
        document.getElementById("p").innerHTML="** Passwords length must be greater than  6 and less than  20";
           return false;	
       }



       if(confirmpass == ""){
   
          alert(" ** Please fill the confirm password field");
           return false;
       }


       if(pass!=confirmpass){
          
         alert(" ** Password does not match the confirm password");
           return false;
       }

    }

    

    function show(){
     var pswrd = document.getElementById('spass');
     var cpswrd = document.getElementById('spassconf');
     var icon = document.querySelector('.fas');
     if (pswrd.type === "password") {
      pswrd.type = "text";
      cpswrd.type="text";
  
      icon.style.color = "#87ceeb";
     }else{
      pswrd.type = "password";
      cpswrd.type="password";
      icon.style.color = "grey";
     }
    }
