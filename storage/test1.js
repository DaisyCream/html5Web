/**
 * Created by DaisyCream on 16/5/20.
 */

if(window.localStorage){

}
if(window.sessionStorage){

}

localStorage.setItem("name","wahaha");


localStorage.getItem("name");

localStorage.key(1);

localStorage.removeItem("name");

localStorage.clear();

var userData = {
    name : "Sankyu Name",
    account : "sankyu",
    level : 1,
    disabled : true
};

localStorage.setItem("userData", JSON.stringify(userData));

var newUserData = JSON.parse(localStorage.getItem("userData"));

localStorage.removeItem("userData");

console.log(newUserData);