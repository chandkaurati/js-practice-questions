function setTokens(refreshToken, accessToken){
// let complexString = "%#EANFGSETUIJ#(%(%#IOAR)_(@Q)ETIDJ#WKTNGDFR@I%()*#Q*(@#REIFJDETJIDAFAET"
//  this.refreshToken  = ""
//   for(let i = 0 ;  i < refreshTokensize ; i++ ){
//     this.refreshToken += complexString[Math.floor(Math.random()*(0 - complexString.length) + 1)]
//   }  m
  
this.refreshToken = refreshToken,
this.accessToken = accessToken

} 

function createUser(username, email, password){
    this.username = username
    this.email = email
    this.password = password
    setTokens.call(this,"FASet89wew90t835q=532e", "fetha#u%*(#%*(#%%#(*")
}

const user91 =  new createUser("chand", "chand@gmail.com", "handfew12322421")
console.log(user91)


class Animal {
    constructor(name, sound,){
        this.name = name,
        this.sound = sound
    }

    makeSound(){
      console.log(`${this.name}, is make sound like ${this.sound}`)
    }
}

// inheritance 

class Dog extends Animal{
    constructor(name, sound, breed){
     super(name, sound)
     this.breed = breed
    }

    displayBreed(){
        console.log(`${this.name} is a ${this.breed}`)
    }
  
}

const dog01  = new Dog("tommy", "wowww", "dabour man")
// dog01.displayBreed()
// dog01.makeSound()


// library managment system

