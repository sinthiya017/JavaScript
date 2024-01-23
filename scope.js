//Global scope
Sum=0
for(var i=0;i<10;i++)
{
    Sum+=i
}
console.log(Sum)

var i=0
while(i<10)
{
    Sum+=i
    i++
    
}
console.log(Sum)

var i=0
do
{
    Sum+=i
    i++
    
}
while(i<10)
console.log(Sum)
//Local scope

for(var i=0;i<5;i++)
{
    console.log(i+11)
}
console.log(i)
 
//block scope

var a=10;

console.log(a)//10
{
let b=5;
let a=5;
console.log(a)//5
console.log(b)//5
}
console.log(a)