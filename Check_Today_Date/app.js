let date = new Date();

let day_cal = date.getDate()
let month = (date.getMonth()+1)
let year = date.getFullYear()



let checkdate = ()=>{

     return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            let date = new Date();

            let day_cal = date.getDate()
            let month = (date.getMonth()+1)
            let year = date.getFullYear()

                if (true) {
                    let _finaldate= document.querySelector(".day")

                   let show = `${day_cal}/${month}/${year}`;

                  _finaldate.innerText=show
                  resolve("Your Program Runs Successfully");
                } else {
                    reject("Error")
                }

            



        },0)


     })


} 

let button = document.querySelector("button")

button.addEventListener("click",()=>{

    checkdate().then((ss)=>{
        console.log(ss)
    }).catch((err)=>(

        console.log((err))
    ))
})




