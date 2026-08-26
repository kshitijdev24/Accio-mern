const obj={
    name:"Kshitij",
    age:23,
    number:7827803570,
    city:"Noida",
    country:"India"
}

for(let item of Object.keys(obj)){
    console.log(item)
}

for (let item of Object.values(obj)) {
    console.log(item)
}

const keys = Object.keys(obj);
const values = Object.values(obj);

console.log(keys)
console.log(values)