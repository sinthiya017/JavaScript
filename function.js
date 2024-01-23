//function
//function without argument and return type

function fun(){
    console.log("Function sample example")
}
fun()

//function with argument and without  return type
function fun(a,b){
    for(i=a;i<b;i++){
        if(i%2==0){
            console.log("The number",i,"is even")
        }
        else{
            console.log("The number",i,"is odd")
        }
    }
}
fun(5,10)

//Function
//Example => Function with argument and  with return type
function fun(a){
    return a
}
console.log(fun(10))
/Function
//Example => Function without argument and  with return type
function fun(a){
    var a=10
    return a
}
fun(10)