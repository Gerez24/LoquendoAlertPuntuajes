function downloadList() {
  const buttons = document.querySelectorAll('.controls, .delete-btn');
  const container = document.querySelector('.container');

  // Esconder botones sin afectar su funcionalidad
  buttons.forEach(button => button.style.visibility = 'hidden');

  // Aplicar clase para estilos de captura
  container.classList.add('capture-mode'); 
  
  // Tomar la captura
  html2canvas(container).then(canvas => {
    const link = document.createElement('a');
    link.download = 'lista-puntuacion.jpg';
    link.href = canvas.toDataURL('image/jpeg');
    link.click();
    
    // Restaurar la visibilidad y el diseño original
    buttons.forEach(button => button.style.visibility = 'visible');
    container.classList.remove('capture-mode');
  });
}
