/*function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });*/

//google map eg
function islocationvalid() {
  var v = "Melbourne"
  if (v == loc) {
    return true
  }
  else {
    return false
  }
}
function location(response, error) {
  return new Promise(function (response, errormsg){
    setTimeout(function () {
      loc = "Melbourne"
      console.log("the location is", loc)

      if (islocationvalid) {
        return response("location found")
      }
      else {
        return errormsg("location not found")
      }


    }, 2000)
  })

  }



location().then(
  function (response) {
    console.log(response)
  }
).catch(
  function (errormsg) {
    consolelog(errormsg)
  }
)