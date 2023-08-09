class Parent{
    constructor(){
        this.fatherName = "Bablu";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + "this.fatherName";
    }
}

const bacca = new Child("Nasir");
const bacca2 = new Child("Rahat");

console.log(bacca);
console.log(bacca2);



// class Parent{
//     constructor(){
//         this.fatherName = "Lebu";
//     }
// }
// class Child extends Parent{
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }

// const baby = new Child("Anowar");
// const baby2 = new Child("Janowar");
// console.log(baby);
// console.log(baby2);