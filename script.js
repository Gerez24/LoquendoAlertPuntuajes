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
  `;
  
  userList.appendChild(newUser);
  
  const stars = newUser.querySelectorAll('.star');
  stars.forEach(star => star.addEventListener('click', handleStarClick));
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
  html2canvas(document.querySelector('.container')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'lista-puntuacion.jpg';
    link.href = canvas.toDataURL('image/jpeg');
    link.click();
  });
}
