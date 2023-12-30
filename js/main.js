document.getElementById('descargarBtn').addEventListener('click', ( )=>{

// Ruta del archivo PDF
var pdfUrl = './cv/cv-iancane.pdf';
  
// Crea un elemento <a> invisible
var link = document.createElement('a');
link.href = pdfUrl;

// Asigna el nombre del archivo que se descargará
link.download = 'CV-Ian Cane';

// Agrega el atributo target="_blank" para abrir en una nueva pestaña/ventana
link.target = '_blank';

// Añade el enlace al documento
document.body.appendChild(link);

// Simula el clic en el enlace para iniciar la descarga
link.click();

// Elimina el enlace del documento después de la descarga
document.body.removeChild(link);
});


    