//sync

function sync(){
console.log("I am first")
console.log("I am secons")
console.log("I am third")
console.log("I am fourth")
console.log("I am fifth")
}
sync();

//async
function sync(){
    console.log("I am first")
    console.log("I am second")
    setTimeout(()=>{
        console.log("ASYNC")

    },2000)
    console.log("I am third")
    console.log("I am fourth")
    console.log("I am fifth")
    }
    sync();

   