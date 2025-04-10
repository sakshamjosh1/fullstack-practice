function isAnagram(str1, str2){
    //const sortedString1 = str1.sort();  // str1.sort is not a correct syntax
    //const sortedString2 = str2.sort();  // str1.sort is not a correct syntax

    const sortedString1 = str1.toLowerCase().split("").sort().join("");
    
    const sortedString2 = str2.toLowerCase().split("").sort().join("");

    if (sortedString1 == sortedString2){
        return true;
    } 
    else{
        return false;
    }
}

isAnagram("saks", "kass")

module.exports = isAnagram;