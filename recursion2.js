// * Write a JavaScript function that reverse a string.
// Sample Data and output:
// Example reverse("hello world")
// Expected Output: dlrow olleh



const string="hello world";

//1st way: ternary operator recursion
const reverse = str => {
    return str ? reverse(str.substr(1)) + str[0] : str;
};

reverse(string);//dlrow olleh


//2nd way
function reverse1(str) {
    if (str === "")
      return "";
    else
      return reverse1(str.substr(1)) + str.charAt(0);
  }
  console.log(reverse1(string)); //dlrow olleh


//3rd way
  function reverse2(str) {
    if (str.length === 0) {
        return "";
    }

    return str[str.length - 1] + reverse2(str.substring(0, str.length - 1));
}
console.log(reverse2(string));


//4th way
const reverse3 = str => reverse(str.slice(1)) + str[0]; 

console.log(reverse3(string));


