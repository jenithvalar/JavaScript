//callback- one function is call to another function through the parameter is called callback

// function functionCall(callback) {
//     console.log("I am back");
// }

// function sam(callback) {
//     console.log("hdfgd");
//     callback();
// }
// sam(functionCall);

// // Example usage:
// sam(functionCall);

// function functionCall() {
//     console.log("I am back");
// }

// function sam(callback) {
//     console.log("hdfgd");
//     callback();
// }

// // Calling the sam function with functionCall as a callback
// sam(functionCall);




// //setTimeout(function, 1000)
// setTimeout(function(){
//     console.log("timeout");
// },3000);

// //setinterval-every second
// setInterval(function(){
//     console.log("interval");
// },3000);


// function one(call){
//     // console.log("step 1 done");
//     call()
// }

// function two(){
//     console.log("step 2 done");
// }
// function three(){
//     console.log("step 3 done");
// }
// function four(){
//     console.log("step 4 done");
// }

// one(three);
// one(two);
// one(four);

// let order = (call_production)=>{
//     console.log("order placed")
//     call_production();
// }

// let production = ()=>{
//     console.log("order is received,started preparing")
    

// }
// let received = (call_paid)=>{
//     console.log("order is received ")
//     call_paid();

// }
// let paid = ()=>{
//     console.log("Paied for the order ")

// }

// order(production);
// received(paid);


let stocks={
    Fruits:["apple","grapes","banana"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};


let order=((fname,call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.Fruits[fname]}  was selected`);
        call_production();

    },2000);

});

let production = () =>{
    setTimeout(()=>{
        console.log("production has started");

        setTimeout(()=>{
            console.log("The fruit has been chopped");

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(()=>{
                    console.log("The machine has started")

                    setTimeout(()=>{
                        console.log(`Icecream was placed on ${stocks.holder[0]}`)

                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was added as toppings`);

                            setTimeout(()=>{
                                console.log("Serve the ice cream")

                            },2000)
                        },3000)

                    },2000)

                },1000) 

            },1000)
        },2000);
    },0);
}

order(0,production );









