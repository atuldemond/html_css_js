let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let num5 = document.querySelector("#num5");
let num6 = document.querySelector("#num6");
let num7 = document.querySelector("#num7");
let num8 = document.querySelector("#num8");
let num9 = document.querySelector("#num9");
let num0 = document.querySelector("#num0");

// ----------------------------------Numbers--------------

let plus  = document.querySelector("#plus");
let sub   = document.querySelector("#sub");
let multi = document.querySelector("#multi");
let slash = document.querySelector("#slash");
let equal = document.querySelector("#equal");
let dot   = document.querySelector("#dot");



//-------------------------clear and enter ------

let screen = document.querySelector(".screen");





num1.addEventListener("click",function(){

 let a =1;
 screen.append(a);
    
})

num2.addEventListener("click",function(){

    let a = 2;
    screen.append(a);
       
})


num3.addEventListener("click",function(){

    let a = 3;
    screen.append(a);
    
})

num4.addEventListener("click",function(){

    let a = 4;
    screen.append(a);
    
})

num5.addEventListener("click",function(){

    let a = 5;
    screen.append(a);
    
})

num6.addEventListener("click",function(){

    let a = 6;
    screen.append(a);
    
})

num7.addEventListener("click",function(){

    let a = 7;
    screen.append(a);
    
})

num8.addEventListener("click",function(){

    let a = 8;
    screen.append(a);
    
})

num9.addEventListener("click",function(){

    let a = 9;
    screen.append(a);
    
})
num0.addEventListener("click",function(){

    let a = 0;
    screen.append(a);
    
})










plus.addEventListener("click",function(){

    let a = "+";
       screen.append(a);
   
       
})

multi.addEventListener("click",function(){

    let a = "*";
    screen.append(a);
    
})


sub.addEventListener("click",function(){

    let a = "-";
       screen.append(a);
   
       
})

dot.addEventListener("click",function(){

    let a = ".";
    screen.append(a);
   
       
})






// --------------------------enter function---------------

equal.addEventListener("click",function(){


     
    let value  = eval(screen.innerText) 


     screen.innerText=value;


       
})




// ---------------------------------ac clear------------------



ac.addEventListener("click",function(){


     
   


     screen.innerText="";


       
})


   
