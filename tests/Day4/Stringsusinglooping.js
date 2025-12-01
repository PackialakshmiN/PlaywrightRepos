const s='Good morning'
const words=s.split (' ');
//console.log(words);
//console.log(words[words.length-1]);
let lastword=words[words.length-1];
let lastwordlength=lastword.length;
console.log('The length of the string is '+ lastwordlength);

//Example: 2

let s1='  fly me to the moon  ';
let trims1=s1.trim();
console.log(trims1);
const words1=trims1.split(' ');
let lastword1=words1[words1.length-1];
let lastwordlength1=lastword1.length;   
console.log('The length of the string is '+ lastwordlength1);

//Anagram example 3:
function isAnagram(str1, str2) {
    const s1 = str1.toLowerCase().split("").sort().join("");
    const s2 = str2.toLowerCase().split("").sort().join("");

    if (s1 === s2) {
        console.log(`${str1} and ${str2} are anagrams`);
    } else {
        console.log(`${str1} and ${str2} are NOT anagrams`);
    }
}

isAnagram("Listen", "Silent");



