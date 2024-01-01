let json = () => {
    let jsonString = '{"key": "sum of two digit"}';
    let jsonObject = JSON.parse(jsonString);
    console.log(jsonObject);
    console.log(typeof(jsonObject))
    console.log(typeof(jsonString))
};

json();

const obj = {name: "Jacki", age: 39, city: "New York"};
let string = JSON.stringify(obj)
console.log(string)
console.log(typeof(obj)
console.log(typeof(string))
