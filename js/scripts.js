var btn = document.querySelector('#show-or-hide');
var servicos = document.querySelector('.servicos');

btn.addEventListener('click', function() {
    if(servicos.style.display === 'block') {
        servicos.style.display = 'none';
    } else {
        servicos.style.display = 'block';
    }
});

var btn = document.querySelector('#show-or-hide-qs');
var outros = document.querySelector('.outros');

btn.addEventListener('click', function() {
    if(outros.style.display === 'block') {
        outros.style.display = 'none';
    } else {
        outros.style.display = 'block';
    }
});