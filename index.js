/*
What are the differences between mutating array methods 
and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.
Mutating methods are ones that change the object after the method has been used.
 Non-mutating methods do not change the object after the method has been used
*/
//Mutuating arays
Array.push
Array.splice
Array.sort
Array.shift
Array.unshift

//NonMutuating Arrays
Array.concat
Array.filter
Array.map
Array.slice

//Array
const language = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
language.push("Koitlin");
language.splice(3, 0, "Java");
language.shift();
language.unshift("Swift");
language.unshift("Scala");
language[6] = "Go";
language[6] = "Rust";
console.log(language);

//Function
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit(fruit) {
    			fruit[2] = "orange";
    			return fruit;
		}
console.log(changeFruit(fruit));
// The function will replace the banana with orange

// Maximum
 
function maximum(num) {
    let i;
       let max = num[0];
    for (i = 1; i < num.length; i++) {
        if (num[i] > max)
            max = num[i];
    }
     
  return max;
}
 let num = [10, 3, 4, 9];
console.log(maximum(num));

//Double
