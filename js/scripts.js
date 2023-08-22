var btn = document.querySelector('#show-or-hide');
var servicos = document.querySelector('.servicos');

btn.addEventListener('click', function() {
    {outros.style.display = 'none';}
    if(servicos.style.display === 'block') {
        servicos.style.display = 'none';
    } else {
        servicos.style.display = 'block';
    }
});

var btn = document.querySelector('#show-or-hide-qs');
var outros = document.querySelector('.outros');

btn.addEventListener('click', function() {
    {servicos.style.display = 'none';}
    if(outros.style.display === 'block') {
        outros.style.display = 'none';
    } else {
        outros.style.display = 'block';
    }
});