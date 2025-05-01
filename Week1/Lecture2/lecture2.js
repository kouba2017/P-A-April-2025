//Primitve
//Object: String / Array
//OOP
var string1=new String(" 2+2 ");
console.log(typeof(string1));
console.log(string1.trim());
// convert from Object / Primitive 
console.log(typeof(string1.valueOf()));
var string2="780";
console.log(parseInt(string2));
var string3=300;
console.log(parseInt(string2)+string3);

//isPalindrome
// string is Palindrome
//xampl:
// input: "elle" - tote"
//output: Tis is palindrome- is not

function isPalindrome(str){
    // str=> string
    // Time complexity 
    // condition of stop=> n=> O(n) => Big Notation
    var revstr= str.split("").reverse().join("");//O(n)*3 => O(n)
    //etot
    if(revstr===str){
        return(str+" is plaindrome");
    }
    return(str+" is not plaindrome"); 
}
console.log(isPalindrome("elle"));
console.log(isPalindrome("tote"));


var array=["do","re", "mi","fa","do","sol"]
//find / includes / filter
console.log(array.find(item=>item!="do"));//first true return
console.log(array.includes("do"));
console.log(array.filter(item=>item!="do"));

//0-(length-1)

// of a way of Array
// input: array | lngth: n
function isPalindrome(arr, n){
    //temporary=> temp
    //flag=> booleans that indicates 
    let flag=true;
    // elle=> split=> array
    //elle
    //tote => o=t => true=> false
    for (let i=0; i<=n/2 && n!=0; i++){
        if(arr[i]!=arr[n-1]){
            flag=false;
            n--;
            break;
        }

    }// O(n/2) // boolan=> omplxity lss
    flag? console.log(arr+"is palind"):console.log(arr+"is not");

    
}
var str1="bob";// tim omplxity / xceed the memory allocation
var arr2=str1.split("");
var arr1=string2.split("");
isPalindrome(arr1,arr1.length );
isPalindrome(arr2,arr2.length)


//RIOT walk = Readibility Input Output Tim Complexity



