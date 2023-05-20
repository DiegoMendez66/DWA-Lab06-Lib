exports.replace = function(objetivo, reemplazos) {
    var param_encotrados = objetivo.match(/%(.*?)%/g);
    if (param_encotrados) {
        var nombre_param = null,
        valor_reemplazo = null;

        for (var i=0; i<param_encotrados.length; i++) {
            nombre_param = param_encotrados[i].replace(/%/g, '');
            valor_reemplazo = reemplazos[nombre_param];

            objetivo = objetivo.replace(param_encotrados[i], valor_reemplazo);
        }
    }
    return objetivo;
}