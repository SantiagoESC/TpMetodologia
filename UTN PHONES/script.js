const app = new Vue({
  el: "#app",
  data: {
    userName: "",
    password: "",
    jsonUser: "{}",
    urlSaveDadosUser: "http://demo7294697.mockable.io/login",
    urlGetBills: "http://demo7294697.mockable.io/api/bills/",
    urlBadLogin: "http://demo7294697.mockable.io/badLogin/",
    url: "",
    showLogin: true,
    authorization: "",

    bills: [],
    noBills: false,
    from: "",
    to: ""
  },
  methods: {
    clientLogin: function() {
      this.jsonUser =
        '{"user" : ' + this.userName + ', "password" :' + this.password + "}";

      if (this.userValidate) {
        this.$http.post(this.url, this.jsonUser).then(
          function(response) {
            this.authorization = response.body.authorization;
            app.getBills();
            this.showLogin = false;
          },
          function(response) {
            if ((response.status = 403)) {
              alert("Usuario y/o contraseña incorrecta");
            } else {
              alert("Ocurrio un problema al logearse");
            }

            this.userName = "";
            this.password = "";
          }
        );
      }
    },

    getBills: function() {
      this.$http.get(this.urlGetBills, this.authorization).then(
        function(response) {
          this.bills = response.body;
        },
        function() {
          console.log("Fallo");
        }
      );
    }
  },

  computed: {
    userValidate() {
      if (this.userName == "" || this.password == "") {
        return false;
      }

      if (this.userName == "asd" && this.password == "asd") {
        this.url = this.urlBadLogin;
      } else {
        this.url = this.urlSaveDadosUser;
      }

      return true;
    }
  }
});
