const time = new Date();


let times = ()=>{

      return new Promise((resolve,reject)=>{

        setInterval(()=>{
        const time = new Date();
         let h = document.querySelector(".hours")
         let m = document.querySelector(".min")
         let s = document.querySelector(".sec")

          
        
         h.innerText=time.getHours();
         m.innerText=time.getMinutes()+1;
         s.innerText=time.getSeconds();

           
             
          
    
        },1000)

      })
 

}

times();
