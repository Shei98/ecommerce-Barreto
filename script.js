// const usuarios = [{
//     nombre: 'Azul',
//     mail: 'azulperez@mail.com',
//     pass: 'azulcomoelmarazul'
// },
// {
//     nombre: 'Betiana',
//     mail: 'betidicarlo@mail.com',
//     pass: 'sha23AWx!'
// },
// {
//     nombre: 'Carlos',
//     mail: 'lopezcarlosadrian@mail.com',
//     pass: 'sanlore2002'
// }]

// //Todos los elementos del DOM que voy a necesitar
// const mailLogin = document.getElementById('emailLogin'),
//     passLogin = document.getElementById('passwordLogin'),
//     recordar = document.getElementById('recordarme'),
//     btnLogin = document.getElementById('login'),
//     nombreUsuario = document.getElementById('nombreUsuario'),
//     modalEl = document.getElementById('modalLogin'),
//     modal = new bootstrap.Modal(modalEl),
//     contTarjetas = document.getElementById('tarjetas'),
//     toggles = document.querySelectorAll('.toggles');


// //Guardamos los datos que recuperamos de la database en el storage
// function guardarDatos(usuarioDB, storage) {

//     const usuario = {
//         'name': usuarioDB.nombre,
//         'user': usuarioDB.mail,
//         'pass': usuarioDB.pass
//     }

//     storage.setItem('usuario', JSON.stringify(usuario));
// }

// //Limpiar los storages
// function borrarDatos() {
//     localStorage.clear();
//     sessionStorage.clear();
// }

// //Recupero los datos que se guardaron y los retorno
// function recuperarUsuario(storage) {
//     return JSON.parse(storage.getItem('usuario'));
// }

// //Cambio el DOM para mostrar el nombre del usuario logueado, usando los datos del storage
// function saludar(usuario) {
//     nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
// }

// //Creo HTML dinámico para mostrar la información de las mascotas a partir del array fake DB
// function mostrarInfoMascota(array) {
//     contTarjetas.innerHTML = '';
//     array.forEach(element => {
//         let html = `<div class="card cardMascota" id="tarjeta${element.nombre}">
//     <h3 class="card-header" id="nombreMascota">Nombre: ${element.nombre}</h3>
//     <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom" id="fotoMascota">
//     <div class="card-body">
//         <p class="card-text" id="especieMascota">Especie: ${element.especie}</p>
//         <p class="card-text" id="edadMascota">Edad: ${element.edad} años</p>
//         <p class="card-text" id="pesoMascota">Peso: ${element.peso} kilos</p>
//     </div>
// </div>`;

//         contTarjetas.innerHTML += html;
//     })


// }

// //Esta función nos permite intercambiar la visualización de los elementos del DOM, agregando o sacando la clase d-none. Si el elemento la tiene, se la saco, y si no la tiene, se la agrego. La gata Flora de las funciones sería.
// function intercambiarClases(array, clase) {
//     array.forEach(element => {
//         element.classList.toggle(clase);
//     })
// }

// //La función de validar se aprovecha del tipo de return que hace el método find (el objeto si lo encuentra, o undefined si no encuentra ninguno que cumpla con la condición)
// function validarUsuario(usersDB, user, pass) {
//     let encontrado = usersDB.find((userDB) => userDB.mail == user);

//     if (typeof encontrado === 'undefined') {
//         return false;
//     } else {
//         //si estoy en este punto, quiere decir que el mail existe, sólo queda comparar la contraseña
//         if (encontrado.pass != pass) {
//             return false;
//         } else {
//             return encontrado;
//         }
//     }
// }

// btnLogin.addEventListener('click', (e) => {
//     e.preventDefault();
//     //Validamos que ambos campos estén completos
//     if (!mailLogin.value || !passLogin.value) {
//         alert('Todos los campos son requeridos');

//     } else {
//         let data = validarUsuario(usuarios, mailLogin.value, passLogin.value);
//         //Revisamos si el return de la función validate es un objeto o un boolean. Si es un objeto, fue una validación exitosa y usamos los datos. Si no, informamos por alert.
//         if (!data) {
//             alert(`Usuario y/o contraseña erróneos`);
//         } else {
//             //Revisamos si elige persistir la info aunque se cierre el navegador o no
//             if (recordar.checked) {
//                 guardarDatos(data, localStorage);
//                 saludar(recuperarUsuario(localStorage));
//             } else {
//                 guardarDatos(data, sessionStorage);
//                 saludar(recuperarUsuario(sessionStorage));
//             }

//             //Recién ahora cierro el cuadrito de login
//             modal.hide();

//             //Muestro la info para usuarios logueados
//             mostrarInfoMascota(mascotas);
//             intercambiarClases(toggles, 'd-none');
//         }
//     }


// })

// btnLogout.addEventListener('click', () => {
//     borrarDatos();
//     intercambiarClases(toggles, 'd-none');
// });

// //Esta función revisa si hay un usuario guardado en el storage, y en ese caso evita todo el proceso de login 
// function estaLogueado(usuario) {

//     if (usuario) {
//         saludar(usuario);
//         intercambiarClases(toggles, 'd-none');
//     }
// }

// estaLogueado(recuperarUsuario(localStorage));