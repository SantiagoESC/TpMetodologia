<template>
    <div id="login">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br>
                                <input placeholder="Username..." type="text" name="username" id="username" v-model="username" required class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input placeholder="Password..." type="password" name="password" id="password" v-model="password" required class="form-control">
                            </div>
                            <button class="btn btn-info btn-md" type="submit" @click="login">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

  
<script>
    export default {
      name: 'login',
      /*props: {
        msg: String
      }*/
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
  margin: 0;
  padding: 0;
  background-color: #000000;
  height: 100vh;
  /* background-color: ; */
}
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 320px;
  border: 1px solid #9C9C9C;
  background-color: #EAEAEA;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: -85px;
}

</style>