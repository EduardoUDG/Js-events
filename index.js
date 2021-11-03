

const showButton  = document.getElementById('showBtn');
const divInfo     = document.querySelector('#info');

showButton.addEventListener('click', () => {
  
  divInfo.classList.toggle('d-none');
});
