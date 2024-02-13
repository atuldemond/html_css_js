



let checkdata = ()=>{

        return new Promise((resolve,reject)=>{

            let data = document.querySelector("#data");
            console.log(data.value)
            if(data.value%2==0) {
               
           
             
                   
                let ans = document.querySelector(".answer h3");
                ans.innerText="This Is Even Number"
                resolve("Program run succesfully") 
                 

               


            }else{
                let ans = document.querySelector(".answer h3");
                ans.innerText="This is Odd number"
            }
             



        })

}

let check = document.querySelector(".but button")

 check.addEventListener("click",()=>{

 checkdata().then((ss)=>{

  console.log("Your Data Changed Succsfully")
  console.log(ss)

 }).catch((err)=>{

    console.log("Getting Error")
    console.log(err)
 })




 })