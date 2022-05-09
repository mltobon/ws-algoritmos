/**
 * @author bluuweb
 * @link https://bluuweb.github.io/desarrollo-web-bluuweb/11-08-js-form/#expresiones-regulares
 */
const formulario = document.getElementById("formulario");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const alertSuccess = document.getElementById("alertSuccess");
const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; //ingresar solo letras
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/; //expresión regular para validar que es un correo electrónico

const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Mensaje enviado con éxito";
};

const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.element.classList.remove("d-none");
        item.element.textContent = item.msg;
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alertSuccess.classList.add("d-none");
    const errores = [];

    // validar nombre
    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add("is-invalid");

        errores.push({
            element: alertName,
            msg: "Formato no válido campo nombre, solo letras, no poner solo espacios",
        });
    } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
    }

    // validar email
    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add("is-invalid");

        errores.push({
            element: alertEmail,
            msg: "Escriba un correo válido",
        });
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    if (errores.length !== 0) {
        pintarMensajeError(errores);
    }else{
        console.log("Formulario enviado con éxito");
        pintarMensajeExito();
    }

    
});