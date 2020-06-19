function clientSave() {
        var jsonSaveDadosUser = {                                   //Toma el usuario y lo convierte en un json 
            "user": $("#user").val(),
            "password": $("#password").val(),
        };
    
    if (userValidate()) {                                           //Funcion para validar datos del usuario

        var urlSaveDadosUser = "Aca va la url de tu base de datos"; 

        $.ajax({
            contentType: "application/json; charset=utf-8",
            headers: {
                'Accept': 'application/vnd.vtex.ds.v10+json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(jsonSaveDadosUser),                //Convierte el Json en un string 
            type: 'PATCH',                                          //POST, GET, PUT
            url: urlSaveDadosUser,                                  //Manda los datos del user a la url 

            success: function(data) {                               //Si los datos son correctos, manda un mensaje de success
                $("div#messageSuccess").removeClass("hide");
                $("#name").val("");                                 //vacio los campos del form
                $("#password").val("");
            },
            error: function(data) {
                $("div#messageError").removeClass("hide");          //Sin conexion, error 505
            }
        });
    }
}



function userValidate() {                                           //Validas un usuario
    var validation = true;
    var name = $("#name").val();                                    //Toma el nombre y la contraseña 
    var password = $("#password").val();

    $("div#messageSuccess").addClass("hide");                       //Se juntan los mensajes y se ocultan de forma default
    $("div#messageError").addClass("hide");
    $("div#validationError").addClass("hide");
   
        if (!name) {                                                //Si esta el campo del nombre esta vacio se pone en rojo  
            $("#name").addClass("red");
            validation = false;
        } else {
            $("#name").removeClass("red");
        }

        if (!password) {                                            //Si esta el campo del la contraseña esta vacio se pone en rojo 
            $("#password").addClass("red");
            validation = false;
        } else {
            $("#password").removeClass("red");
        }

    if (validation) {                                               //Si la validacion es correcta, escondes el error y mostrar el mensaje success
        $("div#validationError").addClass("hide");
        $("div#validationSucces").removeClass("hide");
    } else {
        $("div#validationError").removeClass("hide");
    }
    return validation                                               //Y devuelve la validacion TRUE or FALSE
    
}