const switcher = document.getElementById('switch-btn');
// const priceTag = document.querySelectorAll('.price-tag');
// priceTag
switcher.addEventListener('click', function(e){
    const toggler = document.getElementById('toggler');
    const basicPrice = document.querySelector('#basic-price');
    const proPrice = document.querySelector('#pro-price');
    const masterPrice = document.querySelector('#master-price');


    if(toggler.classList.contains('after')){
        basicPrice.innerText = '$199.99';
        proPrice.innerText = '$249.99';
        masterPrice.innerText = '$399.99';
    }else{
        basicPrice.innerText = '$19.99';
        proPrice.innerText = '$24.99';
        masterPrice.innerText = '$39.99';
    }
    toggler.classList.toggle('after');

});

