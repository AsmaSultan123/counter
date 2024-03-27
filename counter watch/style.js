// alert("hello");

var count = 0;


function toggleMenu() {
    var menu = document.getElementById('nav-list');
    menu.classList.toggle('nav-list');
  }


// variable declare

var btn = document.getElementById("count");
var rstBtn = document.getElementById("reset");
var rvrs = document.getElementById("reverse");
display.innerHTML = count;


//  Event listner
btn.addEventListener("click",function(){
    count=count+1;
    display.innerHTML = count;
    // console.log(count);
});
rstBtn.addEventListener("click",function(){
    count=0;
    display.innerHTML = count;
    // console.log(count);
});
rvrs.addEventListener("click",function(){

    // if else statement

    if(count>0)
    {
        count=count-1;
    }
   else{
    count=count-0
   }
    display.innerHTML = count;

    
});

