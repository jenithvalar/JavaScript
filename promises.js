// let testing;

// let mypromise = new Promise((resolve,reject)=>{
//     if(testing){
//         resolve("The testing is successfully completed")
//     }
//     else{
//         reject("The testing is stoped")
//     }

// })

// console.log(testing);

// mypromise.then((Success)=>{
//      console.log(Success)
// }).catch((Error)=>{
//     console.log(Error)
// }).finally(()=>{
//     console.log("The result is given above")
// });

// setTimeout(() => {
//     console.log("This is vimal");
// }, 3000);


let stocks={
    Fruits:["apple","grapes","banana"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};

let shopoepen = true;

let order = (time,work)=>{
    return new Promise((resolve,reject)=>{
        if(shopoepen){
            setTimeout(()=>{
                resolve(work())

            },time)
            
        }
        else{
            reject(console.log("our shop is closed"))
        }

    })
};

