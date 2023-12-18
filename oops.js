// function sample1(){
//     console.log("I am the first")

// }
// sample1();

// const test = new sample1();
//-----------------------------------------------------------
// let sample2 = function(){
//     console.log("I am the second")
//     fname = "Jenith"
//     function sample(){
//         return "My name is"+ fname ;
//     }
//     console.log(sample())
// }
// const test1 = new sample2();
//--------------------------------------------------------------
// let sample3 = function(){
//     this.fname = "Jenith"
//     this.test = function(){
//         return "My name is" +  this.fname ;

//     }
// }
// const test2 = new sample3();
// console.log(test2.test());
//---------------------------------------------------------------
// class printname{
//     fname = "jeni";
//     example(){
//         return "My name is" + this.fname ;

//     }
// }
// const exa = new printname();
// console.log(exa.example());
//------------------------------------------------------------------
// class printname{   ///CONSTRUCTOR
//     fname;
//     constructor(sname){
//         this.fname = sname;
//     }
//     printname(){
//         return "My name is" + this.fname ;

//     }
// }
// const testing = new printname("ramjenith");
// console.log(testing.printname());
//-----------------------------------------------------------------------


(function add(a, b){
    console.log(a+b);
})(3,6);

