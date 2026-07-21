document.getElementById("signin-btn").addEventListener("click", function(){
    // 1.get the user name
    const usernameInput= document.getElementById("input-number");
    const userName= usernameInput.value;
    console.log(userName);
    //2. get the password
    const inputPassword= document.getElementById("input-password");
    const password= inputPassword.value;
    console.log(password);
    //3. match the username and the password
    if(userName=="admin" && password=="admin123"){
        //3.1 true>> alert>> homepage
        alert("Sign In Successfully");
        window.location.assign("./home.html");
    }
    else{
        //3.2 false>> alert>> return
        alert("Sign In Failed!");
        return;
    }

})