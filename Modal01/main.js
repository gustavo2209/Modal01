function verModal() {
    $("#modalForm").modal("show");
}

function message() {
    //$("#dlg_message_msg").text("Este es un mensaje");
    //$("#dlg_message").modal("show");

    $("#dlg_message_title").text("Mensaje del servidor");
    $("#dlg_message_msg").html("<i class='bi-book'></i><span style='color:#900'> Libro de Visitas</span>");
    $("#dlg_message").modal("show");
}

function confirm() {
    $("#dlg_confirm_error").hide();
    $("#dlg_confirm_dato1").val("DEL");
    $("#dlg_confirm_title").text("Retirar Registro");
    $("#dlg_confirm_msg").html("&iquest;Seguro de eliminar registro?");
    $("#dlg_confirm").modal("show");
}

function dlg_confirm_confirm() {
    var accion = $("#dlg_confirm_dato1").val();

    if (accion === "DEL") {
        $("#dlg_confirm_error").text("No se encontro; registro");
        $("#dlg_confirm_error").show();
    } else if (accion === "OTRA ACCION") {

    }
}