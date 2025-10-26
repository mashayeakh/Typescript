//!Defining string type arr
const superHeroes:string[] = [] 

const superNumbers:number[] =[];

//another way
const heroNumbers:Array<number>=[]

superHeroes.push("spiderman, ironman");
superNumbers.push(34);
heroNumbers.push(23);

console.log(superHeroes);
console.log(superNumbers);
console.log(heroNumbers);


//* lets work with obj
type userDetails ={
    name:string;
    age:number;
    email:string;
}

//array of objects
const userArray:userDetails[]=[]

//pushing values
userArray.push({name:"john", age:25, email:"jhon@gmail.com"});

console.log(userArray)

//*Arrays of arrays
const models :string[][] = [
    ["car","bike"],
    ["bus","truck"]
] 

console.log(models);

export {}