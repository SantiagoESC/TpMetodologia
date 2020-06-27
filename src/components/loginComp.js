Vue.component('login', {


    template : //html
    `

    <div class="form-container">
        <h2 class="h2">UTN Phones Login</h2>
        <form @submit.prevent   >
           
            <input class="input"  type="text"  v-model="username" placeholder="Usuario..." required >
            <input class="input" type="text"  v-model="password" placeholder="Password..." required>
            <button type="submit" class="button-form  button" @click="login">Enter</button>
        </form>
    </div>
    `,
    computed : {

        
        username : {
            set(v){
                this.$store.state.username = v;
            },
            get(){
                return this.$store.state.username;
            }
        },
        password : {
            set(v){
                this.$store.state.password = v;
            },
            get(){
                return this.$store.state.password;
            }
        }
        
    },
    methods : {
        ...Vuex.mapActions(['login'])
        
    }

});