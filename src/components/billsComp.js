Vue.component('bills', {


    template : //html
    `
    <div class="span7">
    <div class="widget stacked widget-table action-table">
      <div class="widget-header">
        
        <form @submit.prevent  class="inline-form" >

            <p class="inline-form">FROM: </p>
            <input type="date" class="inline-form" required id="from" v-model="$store.state.from" >
            <p class="inline-form" >TO: </p>
            <input type="date" class="inline-form" required id="to"  v-model="$store.state.to" >
            
            <button type="submit" class="inline-form" @click="getBillsFiltered">Enter</button>


        </form>
        <button @click="getBills" >x</button>

        


    



    
      </div>
      <!-- /widget-header -->
  
      <div class="widget-content">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Line</th>
              <th>PriceTotal</th>
              <th>DateEmision</th>
              <th>DateExpiration</th>
              <th>Paid</th>
            </tr>
          </thead>
          <tbody>
         
            <tr v-for="bill of $store.state.bills">
                 
              <td>{{bill.line}}</td>
              <td>{{bill.priceTotal}}</td>
              <td>{{bill.date}}</td>
              <td>{{bill.dateExpiration}}</td>
              <td v-if="bill.paid">SI</td>
              <td v-if="!bill.paid">NO</td>
            </tr>
       
          </tbody>
          
        </table>

        <p v-if="$store.state.bills.length == 0">No bills to show</p>

      </div>
      <!-- /widget-content -->
    </div>
    <!-- /widget -->
  </div>
  
    `,
    methods : {
        ...Vuex.mapActions(['getBills','getBillsFiltered'])
        

    }

});