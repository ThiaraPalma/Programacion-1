const obtener_criptomonedas = async () =>{

   const criptomonedas =  await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)

   const criptomonedas_definidas = await criptomonedas.json()

   let filas = []

  criptomonedas_definidas.forEach(element => {
  
       
    let fila =
        `<tr>
         <td>${element.image}</td>
         <td>${element.name}</td>
         <td>${element.symbol}</td>
         <td>${element.current_price}</td>
         <td>${element.total_valume}</td>
       </tr>`
       filas.push(fila)
   });

   document.getElementById("tbl_body").innerHTML = filas.join('')

}