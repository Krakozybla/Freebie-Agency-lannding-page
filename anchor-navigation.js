window.addEventListener('load', ()=>{
    let menu = document.querySelector('.header-navigation');
    let menuColapse = document.querySelector('.header-navigation-colaps');
    let btnUp = document.querySelector('.btn-up');

    menu.addEventListener('click', function(e){
        scrollAnchor(e);
    });
    menuColapse.addEventListener('click', function(e){
        scrollAnchor(e);
    });

   function scrollAnchor(e){
    e.preventDefault();
    let link = e.target;
    if(link.classList.contains('header-link')){

        let target = document.querySelector(link.hash);
        let position = target.offsetTop;
    

        scrollTo({
            top: position,
            behavior: 'smooth',
        })
    }
    }
    window.addEventListener('scroll', ()=>{
        let pos = window.pageYOffset;
        if(window.innerHeight < pos){
            menuColapse.classList.add('header-navigation-colaps-show');
            btnUp.classList.add('btn-up-show');
        }else{
            menuColapse.classList.remove('header-navigation-colaps-show');
            btnUp.classList.remove('btn-up-show');
        }
    })
    btnUp.addEventListener('click', ()=>{
        if(btnUp.classList.contains('btn-up-show')){
            scrollTo({top: 0, behavior: 'smooth'});
        }
    })

})

/*
window.addEventListener('load', ()=>{
    let menu = document.querySelector('.header-navigation');
    let menuColapse = document.querySelector('.header-navigation-colaps');
    menu.addEventListener('click', (e)=>{
        e.preventDefault();
        let link = e.target;
        if(link.classList.contains('header-link')){

            let target = document.querySelector(link.hash);
            let position = target.offsetTop;
        

            scrollTo({
                top: position,
                behavior: 'smooth',
            })
        }
    })

    window.addEventListener('scroll', ()=>{
        let pos = window.pageYOffset;
        if(window.innerHeight < pos){
            menuColapse.classList.add('header-navigation-colaps-show');
        }else{
            menuColapse.classList.remove('header-navigation-colaps-show');
        }
    })
    

})
*/