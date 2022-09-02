const form = document.getElementById('form')

const antesDe = document.getElementById('antesDe');

const rowBorder = document.getElementById('rowBorder');

const botonAgregar = document.getElementById('botonAgregar');

const botonSubmit = document.getElementById('submitButton');

const botonLoading = document.getElementById('botonLoading');

const botonModal = document.getElementById('botonModal');

const botonRedirect = document.getElementById('redirect');

const select1 = document.getElementById('select1');

const cantidad1 = document.getElementById('cantidad1');

const inputNombre = document.getElementById('inputNombre');

const inputApellido = document.getElementById('inputApellido');

const inputEmail = document.getElementById('email');

const inputTelefono = document.getElementById('numeroTelefono');

const botonPrueba = document.getElementById('botonPrueba');

const inputBarrio = document.getElementById('calle');
const inputDireccion = document.getElementById('direccion');
const inputAltura = document.getElementById('altura');
const inputEntrecalle1 = document.getElementById('entre1');
const inputEntrecalle2 = document.getElementById('entre2');

let incrementoSelect = 1;
let incrementoCantidad = 1;

class Pedido {
    constructor(serialPedido, pie, cantidad){
        this.serialPedido = serialPedido;
        this.pie = pie;
        this.cantidad = cantidad;
    }
}

class Entrecalles {

    constructor(calle1, calle2){
        this.calle1 = calle1;
        this.calle2 = calle2;
    }

}

class Orden {
    constructor(nroOrden, nombre, apellido, telefono, email, barrio, calle, altura, entreCalles ,pedidos, comentarios, notificacion){

        this.nroOrden = nroOrden;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
        this.barrio = barrio;
        this.calle = calle;
        this.altura = altura;
        this.entreCalles= entreCalles;
        this.pedidos = pedidos;
        this.comentarios = comentarios;
        this.notificacion = notificacion;

    }
}
let vecesAgregado = 0;

botonRedirect.addEventListener('click', () => {

    window.location.replace("index.html");

})

botonAgregar.addEventListener('click', (e) => {

    let divRowBorder = document.createElement('div');
    let divFormGroupSelect = document.createElement('div');
        let labelForm = document.createElement('label');
        let selectForm = document.createElement('select');
            let optionForm1 = document.createElement('option');
            let optionForm2 = document.createElement('option');
            let optionForm3 = document.createElement('option');
            let optionForm4 = document.createElement('option');
        
    let divFormGroupCantidad = document.createElement('div');
        let labelFormCantidad = document.createElement('label');
        let inputNumberCantidad = document.createElement('input');
    
    let divBotonAgregar = document.createElement('div');
        let botonAgregarForm = document.createElement('a');
        // let imgForm = document.createElement('img');

    const fragmentoAgregar = document.createDocumentFragment();

        divRowBorder.classList.add('row');
        divRowBorder.classList.add('border-bottom');
        divRowBorder.classList.add('border-success');
        divRowBorder.classList.add('mb-2');

            divFormGroupSelect.classList.add('form-group');
            divFormGroupSelect.classList.add('col-md-6');
            divFormGroupSelect.classList.add('mb-2');
            divFormGroupSelect.classList.add('text-white');
    
                labelForm.textContent = 'Elije tu pie';
            divFormGroupSelect.appendChild(labelForm);

                selectForm.classList.add('form-select');
                selectForm.setAttribute('aria-level', 'Default select example')

                incrementoSelect++

                selectForm.setAttribute('name', `pie${incrementoSelect}`)

                    optionForm1.text = 'Passionfruit Pie';
                    optionForm2.text = 'Apple Pie';
                    optionForm3.text = 'Oreo Pie';
                    optionForm4.text = 'Chocotorta Pie';
                selectForm.appendChild(optionForm1);
                selectForm.appendChild(optionForm2);
                selectForm.appendChild(optionForm3);
                selectForm.appendChild(optionForm4);
            divFormGroupSelect.appendChild(selectForm);

            divFormGroupCantidad.classList.add('form-group');
            divFormGroupCantidad.classList.add('col-md-2');
            divFormGroupCantidad.classList.add('mb-2');
            divFormGroupCantidad.classList.add('text-white');
                labelFormCantidad.textContent = 'Cantidad'

                incrementoCantidad++;
                inputNumberCantidad.setAttribute('name', `cantidad${incrementoCantidad}`)

                inputNumberCantidad.type = 'number';
                inputNumberCantidad.classList.add('form-control');
                inputNumberCantidad.setAttribute('value', '1');
            divFormGroupCantidad.appendChild(labelFormCantidad);
            divFormGroupCantidad.appendChild(inputNumberCantidad);

    divRowBorder.appendChild(divFormGroupSelect);
    divRowBorder.appendChild(divFormGroupCantidad);
    // divRowBorder.appendChild(divBotonAgregar);
    fragmentoAgregar.appendChild(divRowBorder);

    if(vecesAgregado < 3){
        antesDe.appendChild(fragmentoAgregar);
        vecesAgregado++;
        console.log(vecesAgregado)
    }

})

let arrayPedidos = [];

form.addEventListener('submit', (e) => {

    let valorPie = 1;

    const arrayValues = e.target;

    let arrayPedidos = [];

    // let nroOrden;
    let nombre;
    let apellido;
    let telefono;
    let email;
    let barrio;
    let calle;
    let altura;
    let entreCalle1;
    let entreCalle2;
    let serial;
    let pie;
    let cantidad;
    let comentarios;
    let notify;

    for(let arrayValue of arrayValues){
        
        // Datos del nombre
        if(arrayValue.name === 'inputNombre'){
            // console.dir(arrayValue.value)
            // console.log(`Nombre y apellido: ${arrayValue.value}`)
            nombre = arrayValue.value;
        }

        //Datos del apellido
        if(arrayValue.name === 'inputApellido'){
            apellido = arrayValue.value;
        }

        //Datos del telefono
        if(arrayValue.name === 'telefono'){
            telefono = arrayValue.value;
        }

        //Datos del email
        if(arrayValue.name === 'email'){
            email = arrayValue.value;
        }

        //Datos del barrio
        if(arrayValue.name === 'barrio'){
            barrio = arrayValue.value;
        }

        //Datos de la calle principal
        if(arrayValue.name === 'calle'){
            calle = arrayValue.value;
        }

        //Datos de la altura
        if(arrayValue.name === 'altura'){
            altura = arrayValue.value;
        }

        //Datos de las entrecalles
        if(arrayValue.name === 'entreCalle1'){
            entreCalle1 = arrayValue.value;
        }

        //Datos de las entrecalles
        if(arrayValue.name === 'entreCalle2'){
            entreCalle2 = arrayValue.value;
        }

        // Datos de las filas de pies y cantidades
        if(arrayValue.name === `pie${valorPie}`){

            serial = valorPie;
            pie = arrayValue.value;
        }
        if(arrayValue.name === `cantidad${valorPie}`){
            cantidad = arrayValue.value;
            let pedido = crearPedido(serial, pie, cantidad);

            arrayPedidos.push(pedido);

            valorPie++
        }

        // Datos de los comentarios:
        if(arrayValue.name === 'comentarios'){
            comentarios = arrayValue.value;
        }

        // console.log(arrayPedidos);
        if(arrayValue.name === 'checkBox'){
            if(arrayValue.checked){
                notify = true;
            }else{
                notify = false;
            }
        }
    }

    const entreCalles = crearEntrecalle(entreCalle1, entreCalle2); 

    let nroOrden = `MTP${Math.floor(Math.random() * 10000)}`;

    let orden = new Orden(

        nroOrden, nombre, apellido, telefono, email, barrio, calle, altura, entreCalles, arrayPedidos, comentarios, notify
    )

    console.log(orden);

    //VALIDACIONES
    if(inputNombre.value == ''){
        e.preventDefault();
        alert("Introduce tu nombre!")
    }
    if(inputApellido.value == ''){
        e.preventDefault();
        alert("Introduce tu apellido!")
    }
    if(inputTelefono.value == '' ){
        e.preventDefault();
        alert("Introduce tu número de telefono!")
    }
    if(inputEmail.value == ''){
        e.preventDefault();
        alert("Introduce tu número de email!")
    }
    if(inputBarrio.value == ''){
        e.preventDefault();
        alert("Introduce el nombre de tu barrio!")
    }
    if(inputDireccion.value == ''){
        e.preventDefault();
        alert("Introduce el nombre de la calle donde vivís!")
    }
    if(inputAltura.value == ''){
        e.preventDefault();
        alert("Te faltó la altura de la calle donde vivís!")
    }
    if(inputEntrecalle1.value == ''){
        e.preventDefault();
        alert("Te faltó una de las entre-calles!")
    }
    if(inputEntrecalle2.value == ''){
        e.preventDefault();
        alert("Te faltó una de las entre-calles!")
    }

    let valida = false

    if(inputTelefono.value !== '' && inputEmail.value !== '' && inputBarrio.value !== '' && inputDireccion.value !== '' && inputAltura.value !== '' && inputEntrecalle1.value !== '' && inputEntrecalle2.value !== ''){

        e.preventDefault()

        botonLoading.style.display = ''
        botonSubmit.style.display = 'none'

        axios({
            method: 'POST',
            url: 'http://localhost:8080/api/enviarFormulario',
            data: orden
        }).then(res => {
            if(res != null){

            //AGREGAR EL MODAL DE "TRANSACCION EXITOSA, ESPERA POR NUESTRO CONTACTO"
            botonModal.click()

            botonLoading.style.display = 'none'
            botonSubmit.style.display = ''

            }
            console.log(res)
        })

        console.log('entre!')

    }

})

const crearPedido = (serial, pie, cantidad) => {

    let pedido = new Pedido(serial, pie, cantidad);
    return pedido;

}

const crearEntrecalle = (entreCalle1, entreCalle2) => {

    let entreCalle = new Entrecalles(entreCalle1, entreCalle2);
    return entreCalle;

}

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());

    inputNombre.value = profile.getGivenName();

    console.log('Family Name: ' + profile.getFamilyName());

    inputApellido.value = profile.getFamilyName();

    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    inputEmail.value = profile.getEmail();

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }