// reverse a string 

function reverse(str){
    if(str.length <= 1 ){
      return str
    }

    return str.split("").reverse().join("")
}

// console.log(reverse("hello moon this is mars"))

function removeChar(str, char){
  if(!str.includes(char)){
    return false
  }

  let res = str.replace(char,"")
  return res
}


// console.log(removeChar("chand", "4"))


// truncare the string

function truncateStrint(str, maxLength){
    if(str.length > maxLength){
       return   str.slice(0,maxLength) + "..."
    }else{
        return str
    }
}

// console.log(truncateStrint("chandkaurati", 4))

// palindrome string

function palindrome(string){
    if(string.length <= 1){
        return false
    }

    return string === string.split("").reverse().join("")
}

console.log(palindrome("am"))