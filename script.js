function addUser() {
  const userList = document.getElementById('userList');
  const newUser = document.createElement('li');
  
  newUser.innerHTML = `
    <input type="text" placeholder="Nombre">
    <textarea class="feedback" placeholder="Añadir feedback"></textarea>
    <div class="stars">
      ${[...Array(10)].map((_, i) => `<span class="star" data-value="${i + 1}">★</span>`).join('')}
    </div>
    <button class="delete-btn">Eliminar</button>
  `;
  
  userList.appendChild(newUser);
  
  const stars = newUser.querySelectorAll('.star');
  stars.forEach(star => star.addEventListener('click', handleStarClick));
  
  const deleteBtn = newUser.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => newUser.remove());
}

function handleStarClick(e) {
  const value = parseInt(e.target.getAttribute('data-value'));
  const stars = e.target.parentElement.querySelectorAll('.star');
  
  // Reseteamos todas las estrellas primero
  stars.forEach(star => star.classList.remove('selected'));

  // Solo seleccionamos hasta la estrella que fue clicada
  stars.forEach(star => {
    if (parseInt(star.getAttribute('data-value')) <= value) {
      star.classList.add('selected');
    }
  });
}

function downloadList() {
  const buttons = document.querySelectorAll('.controls, .delete-btn');
  const container = document.querySelector('.container');

  // Esconder botones antes de tomar la captura
  buttons.forEach(button => button.style.visibility = 'hidden');

  // Aplicar clase para estilos de captura
  container.classList.add('capture-mode'); 
  
  html2canvas(container).then(canvas => {
    const link = document.createElement('a');
    link.download = 'lista-puntuacion.jpg';
    link.href = canvas.toDataURL('image/jpeg');
    link.click();
    
    // Restaurar visibilidad y diseño original
    buttons.forEach(button => button.style.visibility = 'visible');
    container.classList.remove('capture-mode');
  });
}
