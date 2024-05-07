
function onChange(e){
    
    console.log(e.target.value);
    const words = e.target.value.split(" ");
    /*
    let capitalizedString = "";
    for (let i = 0; i < words.length; i++) {
        const firstLetter = words[i][0];
        const upperFirstLetter = firstLetter >= 'a' && firstLetter <= 'z' ? String.fromCharCode(firstLetter.charCodeAt(0) - 32) : firstLetter;
        capitalizedString += upperFirstLetter + words[i].substring(1) + " ";
    }
    capitalizedString = capitalizedString.trim();
    */
    let word = words.map((e)=>{
        return e[0].toUpperCase() + e.slice(1).toLowerCase();
    });
    let out=word.join(" ");

    document.getElementById("capitalizeFL").innerHTML = "1. Capitalize First letter: " + out;
    let capitalizedStringA = " ";
    for (let i = 0; i < e.target.value.length; i++) {
        const charCode = e.target.value.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) { // Check if lowercase alphabet
            capitalizedStringA += String.fromCharCode(charCode - 32); // Convert to uppercase
        } else {
            capitalizedStringA += e.target.value[i];
        }
    }
    document.getElementById("capitalizeAll").innerHTML = "2. Capitalize All letter : " + capitalizedStringA;
}
function isExit(e) {
    console.log(e.target.value);
    const capitalizedString = document.getElementById("capitalize").value;
    document.getElementById("isExitword").innerHTML = "3. Word Existence : " + (capitalizedString.includes(e.target.value));
}
function getOccurrenceCount(e) {
    console.log(e.target.value);
    const capitalizedString = document.getElementById("capitalize").value;
    const iterator = capitalizedString.matchAll(e.target.value);
    const count =Array.from(iterator).length;
    document.getElementById("getOC").innerHTML = "4. Word Occurrence Count : " + count ;
    
    let density = (count / capitalizedString.length) * 100;
    document.getElementById("WordDensity").innerHTML = "5. Word Density Calculation is : " + density ;

}
function getExt(e){
    const fileI = e.target.value;
    console.log(fileI);
    if(fileI.includes(".")==true){
        const fileExtentionIs = fileI.slice(fileI.lastIndexOf("."));
        document.getElementById("ExtFile").innerHTML = "6. File Extension : "+ fileExtentionIs;
    }
    else{
        document.getElementById("ExtFile").innerHTML = "6. File Extension : "+ "No Extension";
    }
}

function removeWhitespace(e){
    const word =e.target.value.trim();
    document.getElementById("whiteSpace").innerHTML = "7. String with Removing Whitespace : "+ word.trim();
    let ans=" ";
    for (let i = word.length-1 ; i >= 0; i--) {
        ans = ans + word[i];
    }
    document.getElementById("ReverseWord").innerHTML = "8. Reverse Word is : "+ ans;
    function countVowels(){
        const vowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
        let count = 0;    
        for (let char of word) {
            if (vowels.includes(char)) {
                count++;
            }
        }
    return count;
    }
    document.getElementById("countVowels").innerHTML  ="9. Number of Vowels is : " + countVowels() ;
    function isPalindrome(){
        let j = word.length-1;
        for( let i=0;i<word.length /2;i++){
            if(word[i]==word[j]){
                return true;
            }
            else{
                return false;
            }
        }
    }
    document.getElementById("isPalindrome").innerHTML  ="10. String Palindrome T/F : " + isPalindrome() ;

}

function truncateString(e){
    const word = e.target.value;
    document.getElementById("truncateString").innerHTML  ="11. String Truncation : " + (word>=10 ? word : word.slice(0,15)+"...") ;
}

function maskString(e){
    const x = e.target.value.length-4;
    let mul="*";
    document.getElementById("maskString").innerHTML = "12. String Masking : " + mul.repeat(x) + e.target.value.slice(-4);
}

function validateEmail(e){
    const a = e.target.value;
    let check = " ";
    for(let i=a.length-1; i>=a.length-11; i--) {
        check = check +  "@gmail.com"
    }
    document.getElementById("EmailCheck").innerHTML = "13. Given string is a valid email address : " + (check=="@gmail.com"? "Yes":"No");
}