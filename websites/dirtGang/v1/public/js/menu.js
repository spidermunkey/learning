const linkMenuPairs = [...document.querySelectorAll('.nav-links .link')]
    .map(element => {
        const nameBinding = element.dataset.menu;
        const link = element;
        const menu = document.querySelector(`.menu[data-menu=${nameBinding}]`);
        return [ nameBinding , element, menu ]
    });

linkMenuPairs.forEach(set => {

    const link = set[1]

    link.addEventListener('mouseenter', () => {
        
        linkMenuPairs.forEach(set => {
            
            set[1].classList.remove('active');
            set[2].classList.remove('active');

        })

        linkMenuPairs.forEach(set => {

            if (set[0] === link.dataset.menu) {

                set[1].classList.add('active');
                set[2].classList.add('active');
            
            }

        })

    })

})