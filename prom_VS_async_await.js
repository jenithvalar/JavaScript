let stocks={
    Fruits:["apple","grapes","banana"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};

let shopoepen = true;

//Promise-----------------------------------------------
// let order = ()=>{
//     return new promise((resolve,reject)=>{
//         if(shopoepen){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })
// }

// order()
// .then()
// .then()
// .catch()
// .finally()

//async-----------------------------------------

// async function order(){
//     try{
//         await abc ;

//     }
//     catch(error){
//         console.log("abc does not exists", error)
//     }

//     finally{
//         console.log("run code in anyways")
//     }
// }
// order()
// .then(()=>{
//     console.log("fhjhfjnj")
// })

//-----------------------------------------------------------

// let toppings = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Which topping would you want");
//         }, 3000);
//     });
// };

// async function kitchen() {
//     console.log("A");
//     console.log("B");
//     console.log("C");

//     const result = await toppings();
//     console.log(result);

//     console.log("D");
//     console.log("E");
// }

// kitchen();
// console.log("Doing the dishes");
// console.log("Cleaning the tables");
// console.log("Taking others' orders");


// function time(ms){
//     return new Promise((resolve,reject)=>{
//         if(shopoepen){
//             setTimeout(resolve,ms)
//         }
//         else{
//             reject(console.log("shop is closed"))
//         }

//     });
// }

// async function kitchen(){
//     try{
//         await time(2000)
//         console.log(`${stocks.Fruits[0]}`)
//         await time(0)
//         console.log("start the production")
//         await time(2000)
//         console.log("cut the fruit")
//         await time(1000)
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added `)
//         await time(1000)
//         console.log("start the machine")
//         await time(2000)
//         console.log(`${stocks.holder[0]}  was selected`)
//         await time(3000)
//         console.log(`${stocks.toppings[0]} was added `)
//         await time(2000)
//         console.log("Serve the ice cream")
//     }
//     catch(error){
//         console.log("customer left",error)
//     }
    
//     finally{
//         console.log("day ended shop is closed")
//     }
// }

// kitchen();

let stock={
    Fruits:["apple","grapes","banana"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};

let shop = true;

function icecream(ms){
    return new Promise((resolve, reject) => {
        if(shop){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("The shop is closed"))
        }

        
    })
}

async function kitchen(){
    try{
        await icecream(2000)
        console.log("Serve the ice cream")
        await icecream(0)
        console.log("Serve the ice cream")
        await icecream(2000)
        console.log("Serve the ice cream")
        await icecream(1000)
        console.log("Serve the ice cream")
        await icecream(1000)
        console.log("Serve the ice cream")
        await icecream(2000)
        console.log("Serve the ice cream")
        await icecream(3000)
        console.log("Serve the ice cream")
        await icecream(2000)
        console.log("Serve the ice cream")

    }
    catch(error){
        console.log("The customer left", error)
    }
    finally{
        console.log("The day is finished")

    }

}
kitchen()
