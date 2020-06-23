Vue.component('login', {


    template : //html
    `
    <div>
        <h2>UTN Phones Login</h2>
        <form v-on:submit.prevent >
           
            <input  type="text"  v-model="username" placeholder="Usuario..." required >
            <input  type="text"  v-model="password" placeholder="Password..." required>
            {{$store.state.authorization}}
            <button tyoe="submit" class="button-form" @click="login">Login</button>
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
        ...Vuex.mapActions(['login','pepe'])
        
    }

});