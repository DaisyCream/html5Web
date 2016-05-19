/**
 * Created by DaisyCream on 16/5/19.
 */

function $(target){
    return document.querySelector(target);
}


var header = $("header");
var article = $("article");
var footer = $("footer");
var numberTip = document.getElementsByClassName("NumberTip");
var aside = $("aside");
var asideBlock = aside.getElementsByTagName("ul")[0];


var callHeight = window.innerHeight - header.offsetHeight - footer.offsetHeight;

article.style.height = callHeight - 2 + "px";
asideBlock.style.height = article.style.height;

var singleHeight = (callHeight - 18)/10;

console.log(singleHeight);


for(var i=0;i<numberTip.length; i++){
    var numberBlock = numberTip[i].getElementsByTagName("li");
    addNumberStyle(numberBlock, "height", singleHeight + "px");
}


function addNumberStyle(target, property, value){
    for(var i=0;i<target.length;i++){
        target[i].style[property] = value;
    }

}

asideBlock.onclick = function(){
    console.log(1);
};

asideBlock.style.backgroundColor = "rgba(0,0,0,0.4)";