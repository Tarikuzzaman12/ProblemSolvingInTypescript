

// Problem 1:

 type ValueType=string | number | boolean

function  formatValue(value:ValueType): ValueType{
    if (typeof value === 'string'){
        return value.toUpperCase();
    }else if(typeof value === 'number'){
        return value * 10
    }else{
        return !value
    }
}


// Problem 2:

 function getLength(input:string | any[]) : number {
  if(typeof input === "string"){
   return input.length
  }else if(Array.isArray(input)){
      return input.length;
  }else{
    return 0
  }

 }




// Problem 3:
class Person{
    name:string ;
    age:number;

    constructor(name:string,age:number){
        this.name=name
        this.age=age
    
    }
    getDetails(): string{
        return `"Name: ${this.name}, Age:${this.age}"`
    }
}


// problem 4
type Item={
    title:string;
    rating:number 
}

function filterByRating(items: Item[]): Item[] {
  return items.filter(item => {
    if (item.rating < 0 || item.rating > 5) {
      throw new Error(`Invalid rating: ${item.rating}. Rating must be between 0 and 5.`);
    }
    return item.rating >= 4;
  });
}


// Problem 5

type User={
    id:number,
    name:string,
    email:string,
    isActive:boolean
}

function filterActiveUsers(input:User[]) : User[]{

 return input.filter(user => user.isActive === true)

}


// problem 6

interface Book {
    title:string,
    author:string,
    publishedYear:number,
    isAvailable:boolean

}

const printBookDetails=(input:Book): void =>{
    console.log(`"Tittle: ${input.title}, Author: ${input.author}, PubishYear: ${input.publishedYear},
    isAvailable: ${input.isAvailable?"yes" :"No"}"`)
}



// Problem 7

type AllowedType= string | number;

function getUniqueValues(arr1: AllowedType[], arr2: AllowedType[]): AllowedType[] {
  const result: AllowedType[] = [];

    function exists(value: AllowedType): boolean {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        return true;
      }
    }
    return false;
  }

   for (let i = 0; i < arr1.length; i++) {
    if (!exists(arr1[i])) {
      result.push(arr1[i]);
    }
  }

    for (let i = 0; i < arr2.length; i++) {
    if (!exists(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
}


// Problem 8 

type Product ={
    name:string,
    price:number,
    quantity:number,
    discount?: number
}

function calculateTotalPrice(input: Product[]): number {
  return input.reduce((total, product) => {
    const validDiscount =
      typeof product.discount === "number" && product.discount >= 0 && product.discount <= 100
        ? product.discount
        : 0;
const priceAfterDiscount = product.price - (product.price * validDiscount) / 100;
 return total + priceAfterDiscount * product.quantity;
  }, 0);
}







