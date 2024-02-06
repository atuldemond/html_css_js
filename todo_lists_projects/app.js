let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let ullist = document.querySelector("#list_container");
let del = document.querySelector(".deleter");


btn.addEventListener("click" , function(){


let item = document.createElement("li");
if (inp.value.length>=0 && inp.value.length <=30) {

        if (inp.value == "") {
            alert("Enter Your Task");
        }else{


            item.innerText=inp.value;
            let delBtn = document.createElement("button");
            delBtn.innerHTML= "Delete Task";
            delBtn.classList.add("delete");
            // console.log(item);
        
        
            item.appendChild(delBtn);
            ul.appendChild(item);
            inp.value="";
        }

} else {

alert("input is more than 30 words please enter leass than 30")
}



});






    ullist.addEventListener("click" , function(e){

        if (e.target.tagName === "BUTTON") {

            e.target.parentElement.remove();
        } else {
            
            
        }

    });

