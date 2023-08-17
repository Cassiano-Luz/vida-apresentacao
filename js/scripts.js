var btn = document.querySelector('#show-or-hide');
var servicos = document.querySelector('.servicos');

btn.addEventListener('click', function() {
    if(servicos.style.display === 'block') {
        servicos.style.display = 'none';
    } else {
        servicos.style.display = 'block';
    }
});