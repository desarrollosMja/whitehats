//Capturar etiquetas para imprimirlas por pantalla
let nodosEtiquetasParaImprimir = document.getElementsByClassName("posteo");
let arrayEtiquetas = [];

function filtrarPorEtiquetasImprimir(){
    for (const nodo of nodosEtiquetasParaImprimir) {
        let nodoHijo = nodo.childNodes[3];
        let etiquetas = nodoHijo.getElementsByClassName("etiqueta");

        for (const etiqueta of etiquetas) {
            if (!arrayEtiquetas.includes(etiqueta.innerText)){
                arrayEtiquetas.push(etiqueta.innerText);
            }
        }
    }
}

function imprimirEtiquetas(){
    arrayEtiquetas.sort();
    for (const etiqueta of arrayEtiquetas) {
        let seleccion = "'"+etiqueta+"'";
        $("#contenedorEtiquetas").append(`
            <button type="button" class="btn btn-outline-secondary btn-sm" onclick="filtrarPorEtiquetas(${seleccion})")>${etiqueta}</button>
        `);    
    }
}

//Función para filtrar por etiquetas
let nodosEtiquetas = document.getElementsByClassName("posteo");
let encontrado = true;

function filtrarPorEtiquetas(seleccion){
    for (const nodo of nodosEtiquetas) {
        let nodoHijo = nodo.childNodes[3];
        let etiquetas = nodoHijo.getElementsByClassName("etiqueta");
    
        for (const etiqueta of etiquetas) {
            encontrado = etiqueta.innerText.includes(seleccion);    
            if (encontrado){break};
        }
    
        if (!encontrado){
            nodoHijo.parentNode.classList.add("desaparecer");
        }
    }

    $("#divBotonQuitarFiltro").append(`
        <button id="botonQuitarFiltro" class="btn btn-danger btn-sm" onclick="quitarFiltro()">Quitar filtro X</button>
    `);
}

//Función para quitar los filtros de etiquetas aplicados
function quitarFiltro(){
    $(".posteo").removeClass("desaparecer");
    $("#botonQuitarFiltro").remove();
}


//Funciones que corren cuando se ejecuta el sitio
filtrarPorEtiquetasImprimir();
imprimirEtiquetas();



