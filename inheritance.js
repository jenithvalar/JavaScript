// class A{
//     a = 10;
//     display(){
//         console.log(this.a)
 
//     }
// }

// class B extends A{
//     b = 20;
//     show(){
//         console.log(this.b)

//     }
// }

// obj = new B();
// obj.display();
// obj.show();
//-------------------------------------------------
//Method overriding
// class A{
    
//     display(){
//         console.log("I am the first")
 
//     }
// }

// class B extends A{
//     display(){
//         console.log("I am the second")
        
//     }
// }

// class C extends A{
//     display(){
//         console.log("I am the third")
//     }
// }

// obj = new C();
// obj.display();

// obj1= new B();
// obj1.display();
//----------------------------------------
class animal{
    constructor(color){
        this.color=color;

    }
    printcolor(){
        console.log(this.color);
    }
}

class dog extends animal{
    constructor(color,food){
        super(color);        ////SUPER call the parent class
        this.food=food;

    }
    eating(){
        console.log("Eating", this.food)
    }
    display(){
        this.printcolor();
        this.eating();
    }
}
D = new dog("Black","Milk");
D.display();
//------------------------------------------------------------------
