/*
const obj = {
    name: 'Sahas',
    age: 26,
    job: 'ForntEnd'
}

const entries = [
    ['name', 'Sahsa'],
    ['age', 26],
    ['job', 'FrontEnd']
]
const map = new Map(entries);
map 
    .set('newField', 1995)
    .set(obj, 'newPerson')
/*
    for(let [key, value] of map){
        console.log(key, value);
    }
*/
/*
for(let key of map.values()){
    console.log(key);
}
*/
/*
map.forEach((item, val)=>{
    console.log(item, val);
})
*/
/*
const array = [...map];
console .log(array);


const users = [
    {name: 'Dima'},
    {name: 'Pavel'},
    {name: 'Irina'}
]

const visits = new Map();

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))
    
    lastVesite = (user) =>{
        return visits.get(user);
    }

    console.log(lastVesite(users[2]));
    console.log(visits);
*/
/*
//SET
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 10];

uniqElem = (arr) =>{
    return new Set(arr);
}

console.log(uniqElem(arr));
*/
//WeakMap.Js
/*
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];


uniqElem = (arr) =>{
    return new Set(arr);
}

console.log(uniqElem(values));
*/
/*
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
clean = (arr) =>{
    let map = new Map();
    for(let word of arr){
        let sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted, word);
    }
    return Array.from(map.values());
}
console.log(clean(arr));
*/

let set = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set) console.log(value);


