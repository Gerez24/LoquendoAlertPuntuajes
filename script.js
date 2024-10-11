document.getElementById('addUserBtn').addEventListener('click', addUser);
document.getElementById('downloadBtn').addEventListener('click', downloadList);

function addUser() {
  const userList = document.getElementById('userList');
  const newUser = document.createElement('li');
  
  newUser.innerHTML = `
    <input type="text" placeholder="Nombre">
    <div class="stars">
      ${[...Array(5)].map((_, i) => `<span class="star" data-value="${i + 1}">★</span>`).join('')}
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
  const value = e.target.getAttribute('data-value');
  const stars = e.target.parentElement.querySelectorAll('.star');
  
  stars.forEach(star => {
    star.classList.remove('selected');
    if (star.getAttribute('data-value') <= value) {
      star.classList.add('selected');
    }
  });
}

function downloadList() {
  const buttons = document.querySelectorAll('.controls, .delete-btn');
  
  // Esconder los botones antes de tomar la captura
  buttons.forEach(button => button.style.display = 'none');
  
  html2canvas(document.querySelector('.container')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'lista-puntuacion.jpg';
    link.href = canvas.toDataURL('image/jpeg');
    link.click();
    
    // Mostrar los botones nuevamente después de tomar la captura
    buttons.forEach(button => button.style.display = '');
  });
}
