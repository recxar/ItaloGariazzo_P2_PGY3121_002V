function getBasePath(service){
    return "https://chilealerta.com/api/query/?user=demo&select="+service;
}

function createRowUltimosSismosChile(referencia, magnitud, latitud, longitud, hora) {
    return '<tr><td>'+referencia+'</td><td>'+magnitud+'</td><td>'+latitud+'</td><td>'+longitud+'</td><td>'+hora+'</td></tr>';
}