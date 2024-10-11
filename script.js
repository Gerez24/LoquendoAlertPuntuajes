function downloadList() {
  const buttons = document.querySelectorAll('.controls, .delete-btn');
  
  // Esconder los botones y otros elementos antes de tomar la captura
  buttons.forEach(button => button.style.display = 'none');
  
  // Aplicar estilos especiales para la captura
  const container = document.querySelector('.container');
  container.classList.add('capture-mode'); // Añadimos una clase temporal para la captura
  
  html2canvas(container).then(canvas => {
    const link = document.createElement('a');
    link.download = 'lista-puntuacion.jpg';
    link.href = canvas.toDataURL('image/jpeg');
    link.click();
    
    // Restaurar el diseño original
    buttons.forEach(button => button.style.display = '');
    container.classList.remove('capture-mode'); // Quitamos la clase temporal
  });
}
