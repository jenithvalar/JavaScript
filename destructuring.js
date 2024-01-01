const arr = [2,4,6,8,0];
arr.forEach((values)=>{
   console.log(values)
})

const num = [1, 2, 4, 6, 7, 9];
const count = 5

for (let i = 0; i < count; i+) {
    for (const no of num) {
        console.log(no)
    }
}

we can retrive the data from the aaray and assign to a variable using destructuring.
const [one,two,three,four,five]=arr;\
console.log(one,three)

rest operator ...(give the name for the variable)
const [alpha, beta,...values]=arr;
console.log(alpha);
console.log(...values)

const onj = {
    "name":"jeni",
    "age":23,
    "city":"cbe"
}
const {name,age,city}=onj
console.log(name,age,city);
