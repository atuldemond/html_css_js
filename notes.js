
// function a(d,b){
//     return d+b
// }

   
// function check(age){


//     if (age>=18) {
//         return "Your eligible"
//     } else {
//         return " your are not elible"
//     }
// }

// let b = check(20);

// console.log(b)


// ------------------------------------------------------
  
// savetodb = (data)=>{
 
//      return new Promise((resoleve, reject)=>{

//         let a = Math.floor(Math.random()*10)+1;
//         if (a>4) {
//             resoleve("Your Data is saved sucessfully");
//         } else {
//             reject("Your Data is not saved Sucessfully")
//         }



//      })

// }






// ---------------------------------------------------






// savetodb= (data)=>{

//     return new Promise((resolve,reject)=>{
//      let a = Math.floor(Math.random()*10)+1; 

//      if (a>=5) {
//         resolve("Your Data Is Saved")
//      } else {
//         reject("Your Data is not Saved")
//      }


//     })



// }
// let request= savetodb("Atul Demond");

// request.then((s)=>{

//     console.log(s)

// }).catch((err)=>{

//     console.log(err)
   


// })

//  ----------------------------------------------   

// savetodb= (data)=>{

//     return new Promise((resolve,reject)=>{
//      let a = Math.floor(Math.random()*10)+1; 

//      if (a>=5) {
//         resolve("Your Data Is Saved")
//      } else {
//         reject("Your Data is not Saved")
//      }


//     })



// }
//  savetodb("Atul Demond").then((s)=>{

//    console.log("Your Data is saved")

// }).catch((err)=>{

//     console.log("your Data is not saved")
   


// })



// ----------------------------------------------------


// savetodb = (data)=>{

//     return new Promise((resolve,reject)=>{

//         let a = Math.floor(Math.random()*10)+1; 
//         if (a>=4) {
//             resolve("Data is saved succesfully")
//         } else {
//             reject("Data not Saved");
//         }

//     })

// }

// savetodb("Ram").then(()=>{

//     console.log("Your First Data is saved Sucessfully");
    
//     return savetodb("SITA")

// })
// .then(()=>{

//     console.log("your Second Data is saved ")
//     return savetodb("Hanuman ji")
// })
// .then(()=>{

// console.log("Your Third Data is saved")


// })
// .catch(()=>{


//     console.log(" Data not saved Sucessfully");
// })




// --------------------------------------





// savetodb = (data)=>{

//     return new Promise((resolve,reject)=>{

//         let a = Math.floor(Math.random()*10)+1; 
//         if (a>=4) {
//             resolve("Data is saved succesfully")
//         } else {
//             reject("Data not Saved");
//         }

//     })

// }

// savetodb("Ram").then((result)=>{

    
//     console.log("Data 1st Saved");
//     console.log(result)

    
//     return savetodb("SITA")

// })
// .then((result)=>{

//     console.log("Data 2nd Saved ")
//     console.log(result)
//     return savetodb("Hanuman ji")
// })
// .then((result)=>{

// console.log("Your 3rd Data is saved")
// console.log(result)


// })
// .catch((error)=>{

//     console.log(error);
//     console.log(" Getting Error");
// })






// /---------------------------------------------









// changecolor=(color,delay)=>{

//         return new Promise((resolve, reject)=>{


//                 setTimeout(()=>{


//                     if (color.length >= 3) {
                        

//                         let h1 = document.querySelector("h1");
//                         h1.style.color=color;
//                         resolve("Your Colour is changed");

//                     } else {
//                         reject("Your Color is not CHNAGED");
//                     }
                    
                   
                     
//                  },delay)

                 
                
         
             
                
            
                
//         })


// }

// changecolor("red",2000).then((s)=>{

//         console.log(" 1st color ")
//         console.log(s)

//         return changecolor("blue", 3000);


// }).then((s)=>{

//     console.log("2nd Color ")
//     console.log(s)

//     return changecolor("orange", 1000)


// })
// .then((s)=>{

// console.log("3RD Color")
// console.log(s)

// })
// .catch((erro)=>{

//     console.log("Not Change")
//     console.log(erro)

// })


// let savetodata = (color,delay)=>{

//             return new Promise((resolve, reject)=>{
                   

//                     setTimeout(()=>{

//                         if (color.length>= 3) {
//                             let h1 = document.querySelector("h1")
//                             h1.style.color=color;
//                             resolve("your Task is completed",color);
        
//                         } else {
        
//                             reject("You Got an error")
                            
        
//                         }


//                     },delay)


                





//             })

           


// }


// async function man(){

//    await savetodata("orange",1000).then(()=>{

//     console.log("Your First Task Is completed");    
//    });
//    await savetodata("blue",1000).then(()=>{
//     console.log("Your 2nd  Task Is completed");   
//    })
//    await savetodata("red",1000).then(()=>{
//     console.log("Your 3rdTask is completed");
//    })
//    await savetodata("pink",1000).then(()=>{
//     console.log("Your 4th Task is completed");
//    })
//    await savetodata("green",1000).then(()=>{
//     console.log("Your last Task is completed");
//    })

// }
// man().then(()=>{

//  console.log("Your all task is completed");
  
// }).catch((err)=>{

// console.log(err)

// })
//--------------------------------------------------------------oops------------------------------------

// function Person(name,age){
//   const Person= {
//     name: name,
//     age: age,



    
//     talk(){
//         console.log("Hii My name is Talk");
//     }

//   }
//   return Person;
 

// }

// let p1 = Person("Atul Demond",19);
// let p2=Person("Mohan Kumar",45) 







// function Person(name,age){
//     this.name=name;
//     this.age=age;


// }

// Person.prototype.add=(a,b)=> {

//   return a+b
// }

// let p1 = new Person("Atul Demond",20);
// let p2 = new Person("Mohan Kumar", 30);  


// p1.add()===p2.add() getting false result----

// class Person{
 
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     add(){
//         console.log("Hello")
//     }

// }

// const p1 = new Person("Mohan",20);
// const p2 = new Person("sohan",21); 

// // p1.add === p2.add    getting true value
