function ingresarProducto() {

   const remera = 1000
   const buzo = 2000
   const pantalon = 3000

    while (producto === "1" || producto === "2" || producto === "3") {
        
        switch (producto) {
            case "1":

              cantidad += 1
              total = total + remera
              producto = prompt ("desea comprar otro producto")
              break;

            case "2":

              cantidad += 1
              total = total + buzo
              producto = prompt ("desea comprar otro producto")
              break;
            
            case "3":

              cantidad += 1
              total = total + pantalon
              producto = prompt ("desea comprar otro producto")
              break;

            default:
              break;
        }
    }
}

const iva = precio => precio * 1.21

const descuento = precio => precio * 0.9

let producto = prompt (`Elija un producto: 
1: Remeras ($1000 + iva)
2: Buzos ($2000 + iva)
3: Pantalones ($3000 + iva)

---Si compras mas de un producto obtenes el 10% de descuento sobre el total--`)

let cantidad = 0
let total = 0


ingresarProducto ()

if (cantidad===1) {

    total = iva (total)
    alert (`Gracias por su compra. Debe abonar ${total}`)

} else if (cantidad>1){

    total = descuento (iva (total))
    alert (`Gracias por su compra. Obtuvo el descuento. Debe abonar ${total}`)

} else {

    alert (`Lo esperamos la proxima`)
}
