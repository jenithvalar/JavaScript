// class poly{
//     sample(){
//         return "I am poly1"
//     }
// }

// class shapes extends poly{
//     sample(){
//         return "I am poly2"
//     }
// }

// class square extends poly{
//     sample(){
//         return "I am poly3"
//     }
// }

// class rectangle extends poly{
//     sample(){
//         return "I am poly4"
//     }
// }

// let s = new poly();
// console.log(s.sample());
// s = new shapes();
// console.log(s.sample());

// s=new square();
// console.log(s.sample());

// s=new rectangle();
// console.log(s.sample());


const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  fruits.forEach((value,key)=>{
    console.log(key,value)

  })

  for(let x of fruits.entries()){
    console.log(x)
  }
       
  
