function reverseStr() {
const str="madam";
const splitStr=str.split("");
console.log(splitStr);
const reversedStr=splitStr.reverse();
console.log(reversedStr);
const joinedStr=reversedStr.join("");

if(str===joinedStr){
    console.log(str,"is a palindrome");
}else{
    console.log(str,"is not a palindrome"); 
}
}
reverseStr();



