const formatValue = <T>(value:T)=>{
   if(typeof value ==="string"){
        return value.toUpperCase()
   }
   else if(typeof value=== 'number' ){
          
       return value *10
   }
   else {
     return !value
   }

}

const getLength = (value:string | any[]):number=>{
  
  if(typeof value === 'string'){
   
    return value.length

  }
  else if(Array.isArray(value)) {
       return value.length

  }

  return 0
}


 class Person{
    name:string;
    age:number;
    constructor(name:string, age:number){
           this.name = name;
           this.age = age
    }
    getDetails(){
         return `'Name: ${this.name}, Age: ${this.age}'`;
    }
 }

const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);


 type Titem = {
    title:string,
    rating:number
 }

const filterByRating  = (item:Titem[]) : Titem[] =>{

    let outputItem :Titem[] =  []  
       

    item.forEach(element => {
        
         if(element.rating>=4){
            outputItem.push(element)
        }
    });
  return outputItem


}


 type Tuser = {
    id:number,
    name:string,
    email:string,
    isActive:boolean
   
 }

const filterActiveUsers  = (users:Tuser[]) : Tuser[]  =>{

    let activeUser :Tuser[] =  []  

    users.forEach(user => {
        if(user.isActive===true){
            activeUser.push(user)
        }
    });
  return activeUser


}

interface Book {
    title: string;
    author:string;
    publishedYear:number;
    isAvailable:boolean
}

const printBookDetails = (book: Book) =>{
      console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes': 'No' }`);
}


type Tarray = (number | string)[];

const getUniqueValues = (array1: Tarray, array2: Tarray): Tarray => {
  const combined = [];
  const unique = [];

  for (let i = 0; i < array1.length; i++) {
    combined[combined.length] = array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    combined[combined.length]  = array2[i];
  }

  for (let i = 0; i < combined.length; i++) {
    let found = false;

    for (let j = 0; j < unique.length; j++) {
      if (combined[i] === unique[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      unique[unique.length] = combined[i] as string | number; 
    }
  }

  return unique;
};


interface  TProducts{
name: string;
price:number;
quantity:number;
discount?:number
}



const calculateTotalPrice = (product:TProducts[]) : number =>{

let totalPrice:number = 0

product.map((p)=>{
    const discount = (p.discount?? 0 ) / 100
    const DeductedMoney = p.price * p.quantity * discount
    totalPrice = totalPrice + (p.price * p.quantity) - DeductedMoney 
    
})



return totalPrice 
}