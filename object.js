//How will you declare the objects.
//1st way
var customerDetails={
    "Name":"Sinthiya", //String
    "Age":20, // It's take as number
    "Mobile":9944417101 , // comma is optional for the last key pair value
}
console.log(customerDetails)
customerDetails["id"]="2456777"
console.log(customerDetails)

//Why key does not hold any quote in your object?
//Ans:key will not hold any quote because it's an inbuilt one.

//2nd way
var customerDetails={}
customerDetails["id"]="2456777"
customerDetails["name"]="Joel"
customerDetails["Age"]="22" // string
customerDetails["Rollno"]="19ECR188"
console.log(customerDetails)

//3rd way
var kongu=new Object()
kongu["fees"]=100000
kongu["Accomodation"]="Nice"
kongu["food"]="Pretty Decent"
kongu["hostelCount"]=10
kongu["Transport"]="Good"
/*console.log(kongu)
console.log(kongu.food) // dot(.) is used to accessing the key path inside the objects
console.log(kongu["Transport"])  //To access we should know the key
*/
//for in eg =>output=key
for(key in kongu){
    console.log(key,kongu[key])
}
for(value of kongu){
    console.log(value)
}
//for each eg
kongu.forEach((key,element)=>{
    console.log(key,element)
})