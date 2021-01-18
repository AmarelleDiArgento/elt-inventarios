window.addEventListener('load', () => {
    loader();
});


function loader() {
    //CargarTabla();
}





function CargarTabla() {
    console.log('Hola :D');

    let pre = document.querySelector('#datos tbody');
    //console.log("Entramos a la funcion :D");
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'js/datatable/transferData.json', true)
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            //let
            pre.innerHTML = '';
            // <p><h4>${datos[sel].Pregunta}</h4></p>
            for (var i = 0; i < datos.length; i++) {
                var obj = datos[i];
                // console.log(obj.FechaJornada);
                pre.innerHTML += `                  
            <tr>
                <td class="center center">${obj.FechaJornada}</td>
                <td class="center center">${obj.idOrdenTransferencia}</td>
                <td class="center center">${obj.PostCosechaOrigen}</td>
                <td class="center center">${obj.PostCosechaDestino}</td>
                <td class="center center">${obj.Producto}</td>
                <td class="center center">${obj.TallosPedidos}</td>
                <td class="center center">${obj.TallosPendientes}</td>
                <td class="center center">${obj.TallosEnviados}</td>
            </tr>
    `

            }
        }
    }
}