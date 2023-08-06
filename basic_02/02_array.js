 const marvel_heros = ["Ironman", "Thor" ,"BlackWiddow"] 
 const Dc_heros = [ "Batman", "flash" , "Superman"]
 
//  marvel_heros.push(Dc_heros)  // run on existing array 

//  console.log(marvel_heros);
//  console.log(marvel_heros [3] [0]); // elment start from zero

// const allHero =marvel_heros.concat(Dc_heros)  // run on new array
// console.log(allHero);

// const all_newe_Heros = [...marvel_heros, ...Dc_heros]  // (spread oprator)now they are not a array all element individual

// console.log(all_newe_Heros);

// const another_array = [1,2,3 , [2,6,5, [9,6,5]] , [2,5,1]] 
// const real_another_array= another_array.flat(Infinity)

// console.log(real_another_array);


console.log(Array.isArray("shreyas"))
console.log(Array.from("shreyas"))
console.log(Array.from({name: "shreyas"})) //intresting

let score = 100
let score1 = 200
let score2 = 300


console.log(Array.of(score,score1,score2));

