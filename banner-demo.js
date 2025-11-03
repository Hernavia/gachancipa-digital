// Banner demo Hernavia

// Crear el banner
const banner = document.createElement('div');
banner.style.width = '100%';
banner.style.backgroundColor = '#006a44'; // Verde Hernavia
banner.style.color = '#ffffff'; // Texto blanco
banner.style.textAlign = 'center';
banner.style.fontSize = '1.3em';
banner.style.fontWeight = 'bold';
banner.style.padding = '15px 10px';
banner.style.position = 'fixed';
banner.style.top = '0';
banner.style.left = '0';
banner.style.zIndex = '9999';
banner.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
banner.innerHTML = `⚠️ AVISO: Esta es una versión demo sin información real. 
Puedes apoyar revisando el sitio, compartiéndolo y enviando tus comentarios a 
<a href="mailto:info@hernavia.com" style="color: #ffff00; text-decoration: underline;">info@hernavia.com</a> ⚠️`;

// Insertar el banner al inicio del body
document.body.insertBefore(banner, document.body.firstChild);

// Agregar un espacio extra para que el contenido no quede debajo del banner
const spacer = document.createElement('div');
spacer.style.height = '70px';
document.body.insertBefore(spacer, banner.nextSibling);
