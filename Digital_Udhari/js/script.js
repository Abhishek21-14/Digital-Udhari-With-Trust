document.getElementById("loginForm").addEventListener("submit",function(e){
    e.preventDefault();
    let user = document.getElementById("username").ariaValueMax;
    let pass = document.getElementById("password").ariaValueMax;

    if(user === "" || pass === ""){
        alert("Please fill all fields");
    }else{
        alert("login validation success (DB Next step)")
    }
})