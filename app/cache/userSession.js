var userSession = (function() {
    var email ="";

    var getEmail = function(){
        return email;
    };

    var setEmail = function(e){
        email = e;
    };

    return{
        getEmail: getEmail,
        setEmail: setEmail
    }

}) ();

export default userSession;