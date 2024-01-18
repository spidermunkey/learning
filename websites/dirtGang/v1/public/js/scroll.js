document.addEventListener('scroll',() => {
    if (document.querySelector('html').scrollTop !== 0) 
        document.querySelector('.header').classList.add('active')
    else
        document.querySelector('.header').classList.remove('active')
})