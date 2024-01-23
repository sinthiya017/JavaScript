//CALLBACK
function somuRamu(welcomemessage,callback){
    setTimeout(function(){
        console.log(welcomemessage)
        callback();

    },3000)

}
function aniMini(){
    console.log("Not come to clge")
}
somuRamu("Hello Somu and Ramu\nWelcome to KEC",aniMini)