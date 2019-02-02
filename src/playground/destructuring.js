//OBJECT DESTRUCTURING
// const person={
//     //name:'anantvir singh',
//     age:27,
//     location:{
//         city:'Philadelphia',
//         temp:92
//     }
// }

// const {name='Romana', age}=person

// console.log(`${name} is ${age}`);

// const {city,temp:temperature}=person.location
// console.log(`Its ${temperature} in ${city}.`)
// const book={
//     title:'Ego is the enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         //name:'Penguin'
//     }
// }
// const {name: publisherName='Self-published'}=book.publisher

// console.log(publisherName);
//-------------------------------------------------------------------------------------------------------
//aRRAY DESTRUCTURING
// const  address=['1299 S Juniper Street','Philadephia','Pennsylvania','19147'];

// const [street,city,state,zip]=address;

// console.log(`You are in ${city} ${state}`)

const item=['Coffe(hot)','$2','$2.50','$2.75'];
const [coffe,,price,] =item

console.log(`A medium ${coffe} costs ${price}`)