


let nav = document.querySelector(".navigation");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}

let navbar =document.querySelectorAll('.nav-link');
let collase = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function(a){
    a.addEventListener("click",function(){
        collase.classList.remove("show");
    })
})







function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "11px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 4 ){
      text = "Please Enter Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length >= 20){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 10){
      text = "Please Enter More Than 10 Words";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }







  //Popup signIn

  // document.getElementById("butt").addEventListener("click",function(){
  //   document.querySelector(".poup").style.display="flex";
  // });

  document.getElementById("close").addEventListener("click",function(){
    document.querySelector(".poup").style.display="none";
  })



let user = document.querySelector('#user');
user.addEventListener('keyup',function(){
  if(user.value.length == 0 || user.value.length<6){
    user.style.border = '1px solid red';
    return false;
  }
  else{
    user.style.border ='1px solid green';

  }
});

let pass = document.querySelector('#user');
pass.addEventListener("keyup",function(){
  if(pass.value.length == 0 || pass.value.length<6){
    user.style.border = '1px solid red';
    return false;
  }
  else{
    user.style.border ='1px solid green';

  }
});

function validate(){
  if(user.value == 0 || user.value.length < 5){
    document.getElementById('error').innerHTML="please fill the form";
   return false;
  }else if(pass.value==0 || pass.value.length < 5){
    document.getElementById('error').innerHTML="please fill only reqired";
    return false;
  }
  else{
    alert("Succesfull");
  }
}
   

    