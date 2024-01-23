
//SET
//1st Eg
setExample=new Set("sin","joel","devi")
console.log(setExample)

setExample=new Set(["sin","joel","devi"])
console.log(setExample)

// add the element into the set
setExample.add("edee")
setExample.add("sindhu")
setExample.add("edwin")
setExample.add("papa")
console.log(setExample)

//for of loop => it will give the value as output
for ( value of setExample){
    console.log(value)
}

//for in loop => it will not give the output in set
for (key in setExample){
    console.log(key)
}

//MAPS
/*mapExample=new Map("id","19ECR188")
console.log(mapExample) // It gives the error because no key value pair present

mapExample=new Map(["id","19ECR188"])
console.log(mapExample) // It also gives the error*/

mapEg=new Map([
    ["id","20ECR195"],
    ["Name","sindhu"]
])
console.log(mapEg)
mapEg.set("age","20")
mapEg.set("phone","9944417101")
console.log(mapEg)
mapEg.delete("phone","9944417101")
console.log(mapEg)

//for in
/*for(key in mapExample){
    console.log(key)
}
//for of
for(value of mapExample){
    console.log(value)
}

console.log(mapExample.has("name"))*/

// To add 

