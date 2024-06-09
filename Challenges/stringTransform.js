//method to transform the string according to the condition given
function String_transform(str){
    //if conditions comes to display message which lead the alphabetic characters only needed
    if (!/^[a-zA-Z0-9\s]+$/.test(str) || str.length < 1 || str.length > 1000) {
        return "it is supposed to be  alphabetic characters only ";
    } 
    //this comes to neglect the space so that it can not count with the condition
    let trimmedStr = str.replace(/\s/g, "");
   // make an array
    let str_arr = trimmedStr.split("");
   //this condition bellow show if length of the string is divisible by 15, string has to be displayed as reserved ascii code 
   if(str_arr.length % 15 ==0 ){
             let str_arr_ASCCI=[]; 
             let str_arr_reversed=str_arr.reverse().join(""); 
             for (let i =0; i< str_arr_reversed.length;i++ ){
               str_arr_ASCCI.push(str_arr_reversed.charCodeAt(i));
           }
           return str_arr_ASCCI.join(" ")
}
//this condition bellow show length of string is divisible by 3, string has to be displayed as reserved string
   else if(str_arr.length % 3 == 0){
       return str_arr.reverse().join("")
   }
   //this condition bellow show if it is divisible by 15, string has to be displayed asascii code 
   else if(str_arr.length % 5 ==0){
       let str_arr_ASCCI=[]
       for (let i =0; i< str_arr.length;i++ ){
           str_arr_ASCCI.push(str_arr[i].charCodeAt(0));
       }
       return str_arr_ASCCI.join(" ")
   }
   //unless it is not in above conditions, display the message accordingly
   else 
   return "it is not divisible by 3,5 and 15"
//     return str_arr.reverse().repalce()join("")
}
let str = "Pizza Pizza Pizza  ";
console.log(String_transform(str))
