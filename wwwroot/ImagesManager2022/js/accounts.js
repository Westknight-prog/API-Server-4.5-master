const baseURL ="http://localhost:5000";

function login(info,succesCallBack,errorCallBack){
    $.ajax({
        url: baseURL+"/token",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(info),
        success: function (data){ succesCallBack(data)},
        error: function (jqXHR) { errorCallBack() }
    });
}
function logout(userId,errorCallBack){
    $.ajax({
        url: baseURL+"/Accounts/logout/"+userId,
        type: 'GET',
        success: function (data){ },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });

}
function getAllAccounts(succesCallBack,errorCallBack){
    $.ajax({
        url: baseURL+"/Accounts",
        type : "GET",
        headers : {"Authorization": "Bearer "+JSON.parse(localStorage.getItem("token")).Access_token},
        success : function(data){succesCallBack(data)},
        error : function(jqXHR) {errorCallBack(jqXHR.status)}
    })
}
function getAccountInfo(id,succesCallBack,errorCallBack){
    $.ajax({
        url: baseURL+"/api/Accounts/"+id,
        type : "GET",
        headers : {"Authorization": "Bearer "+JSON.parse(localStorage.getItem("token")).Access_token},
        success : function(data){succesCallBack(data)},
        error : function(jqXHR) {errorCallBack(jqXHR.status)}
    })
}
function userCreation(user,succesCallBack,errorCallBack){
    $.ajax({
        url: baseURL+"/Accounts/register",
        type : "POST",
        contentType: 'application/json',
        data : JSON.stringify(user),
        success : function(data){succesCallBack(data)},
        error : function(jqXHR) {errorCallBack(jqXHR.status)}
    })
}
function verifyUser(userId,code,succesCallBack,errorCallBack){
    $.ajax({
        url: baseURL+`/Accounts/verify?id=${userId}&code=${code}`,
        type : "GET",
        contentType: 'application/json',
        success : function(data){succesCallBack(data)},
        error : function(jqXHR) {errorCallBack(jqXHR.status)}
    })
}
function updateUser(user,messageCallBack){
    $.ajax({
        url: baseURL+"/Accounts/modify",
        type : "PUT",
        headers : {"Authorization": "Bearer "+JSON.parse(localStorage.getItem("token")).Access_token},
        contentType: 'application/json',
        data : JSON.stringify(user),
        success : function(){messageCallBack("Modification Réussi","Les informations de votre compte ont bien été modifier")},
        error : function(jqXHR) {messageCallBack("Erreur","Une erreur "+jqXHR.status+" ses produite lors de la modification de votre compte veuillez ressayer")}
    })
}
function deleteUser(id,succesCallBack,errorCallBack){
    $.ajax({
        url: baseURL+"/Accounts/remove/"+id,
        type : "GET",
        headers : {"Authorization": "Bearer "+JSON.parse(localStorage.getItem("token")).Access_token},
        success : function(){},
        error : function(jqXHR) {messageCallBack("Erreur","Une erreur "+jqXHR.status+" ses produite lors de la modification de votre compte veuillez ressayer")}
    })
}
function removeImagesUser(userId,succesCallBack,errorCallBack){
    $.ajax({
        url: baseURL+"/api/Images?UserId="+userId,
        type : "GET",
        headers : {"Authorization": "Bearer "+JSON.parse(localStorage.getItem("token")).Access_token},
        success : function(data){succesCallBack(data)},
        error : function(jqXHR) {messageCallBack("Erreur","Une erreur "+jqXHR.status+" ses produite lors de la suppresion de votre compte veuillez ressayer")}
    })
}
function removeImage(id,succesCallBack,errorCallBack){
    $.ajax({
        url: baseURL+"/api/Images"+userId,
        type : "GET",
        headers : {"Authorization": "Bearer "+JSON.parse(localStorage.getItem("token")).Access_token},
        success : function(data){succesCallBack(data)},
        error : function(jqXHR) {messageCallBack("Erreur","Une erreur "+jqXHR.status+" ses produite lors de la suppresion de votre compte veuillez ressayer")}
    })
}
