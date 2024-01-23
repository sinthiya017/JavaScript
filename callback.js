//CALLBACK
/*function somuRamu(welcomemessage,callback){
    setTimeout(function(){
        console.log(welcomemessage)
        callback();

    },3000)

}
function aniMini(){
    console.log("Not come to clg")
}
somuRamu("Hello Somu and Ramu\nWelcome to KEC",aniMini)


//form submission example

function submitForm(buttonclick,db){
    setTimeout(function(){
        console.log(buttonclick)
        db()
    },2000)

}

function database(){
    console.log("form submitted successfully")
}


submitForm("Form submit button clicked",database)

function password(correct,ps){
    setTimeout(function(){
        console.log(correct)
        ps()

    },2000)
}


function passcheck(){
    console.log("Password is correct")
}


password("please enter your passwowrd",passcheck)