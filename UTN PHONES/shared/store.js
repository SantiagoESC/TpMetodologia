const store = new Vuex.Store({

    state : {
        authorization : "",
        username : "",
        password : "",
        loginJson : "",



        /*Bills shared*/
        bills : [],
        from: null,
        to: null
        
    },
    mutations : {
        setAuthorization(state, token){
            state.authorization = token;
        },

        setBills(state, billsToset){
            state.bills = billsToset;
        },
  

        loginJson(state){
            state.loginJson =  '{ "username" : "'+ state.username + '", "password" : "' + state.password +'"}'
        },


    },
    actions : { //aca se manejan las llamadas a la API
        
        login : async function ({commit, state, dispatch } ){

            if (state.username && state.password){

                commit('loginJson');
            

                app.$http.post('http://localhost:8080/login/', state.loginJson).then(
                    function(response) {
                        
                        commit('setAuthorization',response.body.autorization);
                        dispatch('getBills');
    
                    },
                    function(response) {
                        alert("Fallo");
                        console.log(response);
                        if (response.status == 403){
                            alert("Usuario y/o constraseña incorrecto. Reingrese");
                        }
                    }
                );

            }
        },

        getBillsFiltered  : async function ({commit, state } ){
           
            

            if (state.from && state.to){
                app.$http.get('http://localhost:8080/api/bill', {params : {from : state.from, to : state.to}}).then(
                    function(response) {
                        commit("setBills", response.body);
                        
                        console.log(response);
                        
                        
                    },
                    function(response) {
                     alert("Fallo");
                     
                    }
                  );
            }

        },
        getBills: async function ({commit, state } ){
          
           
                app.$http.get('http://localhost:8080/api/bill').then(
                    function(response) {
                        commit("setBills", response.body);
                        console.log(response);
                        
                        
                    },
                    function(response) {
                     alert("Fallo");
                     
                    }
                  );
            

        }

   
        

    }, 

    



});