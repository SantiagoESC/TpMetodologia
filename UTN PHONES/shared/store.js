const store = new Vuex.Store({

    state : {
        authorization : "",
        username : "",
        password : "",
        loginJson : ""
        
    },
    mutations : {
        setAuthorization(state, token){
            state.authorization = token;
        },

        loginJson(state){
            state.loginJson =  '{ "username" : "'+ state.username + '", "password" : "' + state.password +'"}'
        },


    },
    actions : { //aca se manejan las llamadas a la API
        
        login : async function ({commit, state } ){

            
            commit('loginJson');
            alert(state.loginJson);

            app.$http.post('http://localhost:8080/login/', state.loginJson,{
                headers : {
                   "Authrization" : "*" 
                } 
            }).then(
                function(response) {
                    alert("Exito");
                },
                function(response) {
                 alert("Fallo");
                }
              );
        }

    }



});