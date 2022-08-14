// var firstname = "Mukesh"

// //error
// let firstname = "Add"

// console.log(firstname);

// let firstname = "   Mukesh  ";
// console.log(firstname.length)

// firstname = firstname.trim();
// console.log(firstname.length)

//TOUPPER 
// let firstname = "Mukesh";
// firstname = firstname.toUpperCase();
// console.log(firstname)

//slice()

// let firstname = "Mukesh";
// firstname = firstname.slice(0,2);
// console.log(firstname)

//if number in string detect in number

// let age = +"22"
// console.log(typeof age )

//Type conversion

// let age = "18"
// age = String(age)
// console.log(typeof age)

//concatination

// let number = "12"
// let num = "15"

// let newnum = num + number
// console.log(newnum)

//ACCESS A VARIABLE INBETWEEN STRING

// let age = 22
// console.log(`the age is ${age}`)

// let sample = null

// console.log(typeof sample)

// let num = BigInt(19)
// let num2 = 10n

// console.log(num+num2)


// == VS ===

// let num1 = 12
// let num2 = "12"

// console.log(num1===num2)

//ARRAY

// let mixed  = [1,2,3,4.5,"mukesh",null,undefined]
// console.log(mixed)

// mixed.push("Raj")
// console.log(mixed)

// let samm = mixed.pop()
// console.log(samm)

// for(let sam of mixed)
//     console.log(sam)

//UNSHIFT

//  mixed.unshift("A")
//  console.log(mixed)


//  //SHIFT

//  mixed.shift()
//  console.log(mixed)


//primitive

// let num1 = 12
// let num2 = num1

// console.log(num1)
// console.log(num2)
// num1++
// console.log(num1)
// console.log(num2)

//reference

// let num1 = ["a","b"]
// let num2 = num1

// console.log(num1)
// console.log(num2)
// num1.push("c")
// console.log(num1)
// console.log(num2)

//CLONE OF AN ARRAY

// let arr = ["a","b"]

// let arr2 = arr.slice(0)

// console.log(arr2)

// let arr3 = [].concat(arr2)
// console.log(arr3[1])

//SPREAD OPERATOR

// let arry = [1,2,3,4,5]

// let aee = [...arry]

// const ll = (arr, arr2) => arry===aee? "hello" : "bye"


// console.log(ll())


//FOR LOOP IN

// const fruit = ["apple", "mango", "graps"]

// for (let fruits in fruit)
//     console.log(fruits)

// let [var1] = fruit
// console.log(var1)

//OBJECT

// const obj = {
//      key: 1,name:"mukesh",age:12
// }
// console.log(obj.age)

//COMBINING TWO ARRAY USING SPREAD

// const arrray1 = [1,2,3]
// const arr = [4,5,6]

// const newar = [...arrray1, arr]

// const newss = [..."abcd"]

// console.log(newar)

// const obj1 = {
//      key:"num",
//      key1:"n"
// }

// let {var1,var2} = obj1
// console.log(var2)


// OBJECT INSIDE Array

// const users = [
//      {name:"mukesh",age:10},
//      {name:"raj",age:20},
//      {name:"shreyas",age:100},
//      {name:"rajath",age:30},
// ]

// for (let user of users)
//      console.log(user["age"])

// const [name, ...names] = users
// console.log(names[0])

//FUNCTIONS

// const example = (name,number) =>{
//      return {name,number}
// } 

// console.log(example("mukesh",5))


//LIXICAL



// function my()
// {
//      var myvar = "Mukesh"
//      function king()
//      {
//           const fi = () => console.log(myvar)
//           fi()
//           console.log(myvar)
//      }
//      king()
// }

// my()


//METHODS

// console.log(this)

// const person = {
//      firstname: "harshit",
//      age:18,
//      about : function(){
//           console.log(`person is   ${this.firstname}`)
//      }
// }

// person.about()

//SET

// const number = [1,2,3];

// const numbers = new Set([1,2,3,4]);
// numbers.add("mukesh")
// numbers.delete("mukesh")

// for (i of numbers)
//      console.log(i)
// console.log(numbers,length)

// if(numbers.has(90))
// {
//      console.log("g")
// }


// //MAP

// const Person = new Map();
// Person.set('name','mukesh');
// Person.set('age',12);
// Person.set('college','vgs');

// console.log(Person.get("name"))
// console.log(Person.keys())

const user1 = 
{
     firstname: "harshit",
     age: 18,
     about : function(){
          console.log(`person is   ${this.firstname}`);
     }
}
const user2 = 
{
     firstname: "mohan",
     age: 1,
     about : function(){
          console.log(`person is   ${this.firstname}`);
     }
}

console.log(user1.about.call(user2));