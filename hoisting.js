
//variabe hoisting
/*
console.log(a)
let a=10
console.log(b)
var b=10
*/
//functional hoisting
konguclg(5,10)
function konguclg(a,b)
{
    for(i=a;i<b;i++){
        if(i%2==0){
            console.log("The number",i,"is even")
        }
        else{
            console.log("The number",i,"is odd")
        }
    } 
}