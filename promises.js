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

            }time)
            
        }
        else{
            reject(console.log("our shop is closed"))
        }

    })
};
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{
    return order(0, ()=>console.log("production has started"))

})
.then(()=>{
    return order(2000,()=>console.log("The fruit has been chopped"))
    
})
.then(()=>{
    return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
    
})
.then(()=>{
    return order(1000,()=> console.log("The machine has started"))
    
})
.then(()=>{
    return order(2000,()=>console.log(`Icecream was placed on ${stocks.holder[0]}`))
    
})
.then(()=>{
    return order(3000,()=>console.log(`${stocks.toppings[0]} was added as toppings`))
    
})
.then(()=>{
    return order(2000,()=> console.log("Serve the ice cream"))
    
})
.catch(()=>{
    console.log("customer left")
})
.finally(()=>{
    console.log("Day ended the shop is closed")
})
