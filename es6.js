//Es6 -> ECMA Script Standard
//1.Var,let,const=>refer varible.js
//2.arrow function
var fun=()=>{
    console.log("sinthiya")
}
fun()

//3.Destructuring

var array=[10,20,30,40,50]
var [a,b,c,d,e]=array
console.log(a,b,c,d,e)

//4.spread operator
var array=[10,20,30,40,50]
var arr1=[...array,60,70]
console.log(arr1)

//callback

 password=(correct,ps)=>{
    setTimeout(()=>{
        console.log(correct)
        ps()

    },2000)
}
 passcheck=()=>{
    console.log("Password is correct")
}


password("please enter your passwowrd",passcheck)


//6.promise
islocationvalid=()=>{
    var v = "Melbourne"
    if (v == loc) {
      return true
    }
    else {
      return false
    }
  }
   location=(response, error)=> {
    return new Promise((response, errormsg)=>{
      setTimeout(()=> {
        loc = "Melbourne"
        console.log("the location is", loc)
  
        if (islocationvalid)
         {
          return response("location found")
        }
        else {
          return errormsg("location not found")
        }
  
  
      }, 2000)
    })
  
    }
    location().then(
         (response)=> {
          console.log(response)
        }
      ).catch(
         (errormsg)=> {
          consolelog(errormsg)
        }
      )

      //asyncAwait
       const comment=async()=> {
        return new Promise(
             (commentresponse)=> {
                setTimeout(()=> 
                {
                    commentresponse("this is my first post's comment icon ")
    
                }, 1000)
    
            })
    
    }
    const like=async()=> {
        return new Promise(
             (likeresponse)=> {
                setTimeout( ()=> {
                    likeresponse("this is my first post's like icon ")
    
                }, 1000)
    
            })
    
    
    }
     const Post=async()=> {
        var post = new Promise( (Postresponse)=> {
            setTimeout( ()=> {
                Postresponse("this is my first post")
    
            }, 1000)
        })
        var[feed,comment1,like]=await Promise.all([Post,comment1(),like()])
        console.log(await feed)
        console.log(await comment1)
        console.log(await like)
    }
    Post()
    