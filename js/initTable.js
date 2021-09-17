


//Resultado:
//producto=camiseta&color=azul&talla=s

$(document).ready(function () {

    $('#datos thead tr').clone(true).appendTo('#datos thead');
    $('#datos thead tr:eq(1) th').each(function (i) {
        var title = $(this).text();
        $(this).html('<input type="text" class="blue-grey lighten-5 center center-align" placeholder="Buscar ' + title + '" />');

        $('input', this).on('keyup change', function () {
            if (table.column(i).search() !== this.value) {
                table
                    .column(i)
                    .search(this.value)
                    .draw();
            }
        });
    });

    const valores = window.location.search;

    //Creamos la instancia
    const urlParams = new URLSearchParams(valores);

    //Accedemos a los valores
    var bodega = urlParams.get('bodega');

    //Mostramos los valores en consola:
    console.log(bodega);

    var table = $('#datos').DataTable({
        pageLength: 25,
        orderCellsTop: true,
        fixedHeader: true,
        "ajax": {
            "url": "http://localhost:3000/repinv",
            "type": "POST",
            "data": {
                bodega
            }

        },
        "columns": [{
            "data": "Ingreso"
        },
        {
            "data": "Producto"
        },
        {
            "data": "Variedad"
        },
        {
            "data": "Color"
        },
        {
            "data": "Grado"
        },
        {
            "data": "Ubicacion"
        },
        {
            "data": "Seriales"
        },
        {
            "data": "Tallos"
        }
        ],

        "error": handleAjaxError, // this sets up jQuery to give me errors
        "language": {
            "decimal": ",",
            "thousands": ".",
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Ultimo",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            },

        }
    });
    $("select").val('25');
    $('select').addClass("browser-default input-field col s12 m4 l8 center center-align");

    function handleAjaxError(xhr, textStatus, error) {
        console.log('ERROR: ', textStatus);
        if (textStatus === 'timeout') {
            alert('The server took too long to send the data.');
        } else {
            alert('An error occurred on the server. Please try again in a minute.');
        }
        myDataTable.fnProcessingIndicator(false);
    }
});