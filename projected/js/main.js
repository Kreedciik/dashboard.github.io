'use strict';

const badgeBtn = document.querySelectorAll('.reason'),
        overlay = document.querySelector('.overlay');

badgeBtn.forEach( btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        overlay.classList.add('active');
        document.body.overflow = 'hidden';
    });
});

overlay.addEventListener('click', e => {
    console.log(e.target)
    if(e.target.classList.contains('close-button') || e.target === overlay){
        overlay.classList.remove('active');
        document.body.overflow = '';
    }
});