// for(i=1;i<=10;i++){
//     console.log(i)
// }

// let num = 5;
// for(let i=1;i<=num;i++){
//      for(let j=1;j<=i;j++){
//          process.stdout.write("* ");
//      }
//           console.log();
//  }

// let arr=[];
// for(let i=1;i<=100;i++){
//     arr.push(i);

// }
// console.log(arr)
// console.log(arr[34])


// let nums=[];
// for(let i =0;i<3;i++){
//     nums.push([]);
//     for(let j=0; j<3;j++){
//         nums[i].push(j);

//     }
// }
// console.log(nums)
// console.table(nums)

let names = ["jeni","valar", "sakthi","Ram","Bairavi"];
for (let i=0; i<names.length;i++){
    console.log(names[i])
}

//for off loop
for (let name of names){
    console.log(name)
}
// for in loop-we can use to loop the objects
// let user = {
//     name:"jenith",
//     age:23,
//     city:"theni"
// }

// for (let data in user){
//     console.log(data+ " : " +user[data]);
// }
// let keys=Object.keys(user);
// console.log(keys)
// let value=Object.values(user);
// console.log(value)