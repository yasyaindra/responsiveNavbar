const menuToggle = document.querySelector('.menu-toggle input')
const tombol = document.querySelector('ul')

menuToggle.addEventListener('click', function(){
    tombol.classList.toggle('slide');
})