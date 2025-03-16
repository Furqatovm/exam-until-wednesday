let nav =document.getElementById("wrapnav");


let openNav =document.getElementById("openn")

let closeNav =document.getElementById("closess");

openNav.addEventListener("click", function(){
    openNav.style.display ="none";
    nav.style.display ="flex";

    let login =document.createElement("a");

    let loginTugma =document.createElement("button");

    login.appendChild(loginTugma);
    nav.appendChild(login);

    loginTugma.className ="login-btn";
    loginTugma.textContent ="login";
    closeNav.style.display ="block";

})

closeNav.addEventListener("click", function(){
    nav.style.display ="none";
    closeNav.style.display ="none";
    openNav.style.display ="block";
})