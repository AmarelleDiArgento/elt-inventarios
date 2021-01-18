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
    var table = $('#datos').DataTable({
        pageLength: 25,
        orderCellsTop: true,
        fixedHeader: true,
         "ajax": "http://localhost:3000/reptra",
        "columns": [
            { "data": "Fecha" },
            { "data": "OT" },
            { "data": "Origen" },
            { "data": "Destino" },
            { "data": "Producto" },
            { "data": "Color" },
            { "data": "Tallos Pedidos" },
            { "data": "Tallos Pendientes" },
            { "data": "Tallos Enviados" }
        ],
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
            }
        }
    });
    $("select").val('25');
    $('select').addClass("browser-default input-field col s12 m4 l8 center center-align");

});