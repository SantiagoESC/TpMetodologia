Vue.component('bills', {

    template : //html
    `
    <div class="tabla-facturas">
        <h2 class="titulo-tabla">Listado de Facturas</h2>
        <table class="table table-condensed">
            <thead>
            <tr>
                <th>Linea</th>
                <th>Cantidad de llamadas </th>
                <th>Precio total</th>
                <th>Fecha de Emisión</th>
                <th>Fecha de Vencimiento </th>
                <th>Esta Paga</th>

            </tr>
            </thead>
            <tbody>
            <tr v-for="bill in bills">
                <td>
                      {{ bill.numberOrigin }} 
                    - {{bill.quantityOfCalls}} 
                    - {{bill.priceTotal}}
                    - {{bill.dateCall}}
                    - {{bill.dateExpiration}}
                    - {{bill.estaPaga}}
                </td>
                <cell v-for="(value, vindex, rindex) in row" :value="value" :vindex="vindex" :rindex="rindex"></cell>
            </tr>
            </tbody>
        </table>
    </div>
    `,


});