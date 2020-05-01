let form = document.getElementById("formulario")
let lista = document.getElementById("lista-notas");

form.addEventListener("submit", enviarDatos);
lista.addEventListener("click", eliminarDatos)

function enviarDatos() {
    let campoTexto = document.querySelector("#mytextarea").value;

    let div = document.createElement("div")
    let h2 = document.createElement("h2")
    let btnBorrar = document.createElement("button")
    let btnActualizar = document.createElement("button")
    lista.appendChild(div)
    div.appendChild(h2)
    div.appendChild(btnBorrar)
    div.appendChild(btnActualizar)
    h2.classList = ("act")
    div.classList = ("content")
    btnBorrar.id = ("borrar-dato")
    btnBorrar.classList = ("fas fa-times icono")
    btnActualizar.classList = ("fas fa-redo-alt icono")
    h2.innerHTML += campoTexto

}

function eliminarDatos() {
    let btnBorrar = document.querySelector("#borrar-dato")

    let brn = btnBorrar.parentElement.parentElement.children;
    for (let i = 1; i <= brn.length; i++) {
        let revisa = i;
        let eliminar = brn[i].remove();
        console.log(revisa)
    }


}

tinymce.init({
    selector: '#mytextarea',
    toolbar: "image",
    plugins: "image imagetools",
    height: 300,
    menubar: true,
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
    content_css: '//www.tiny.cloud/css/codepen.min.css'
});