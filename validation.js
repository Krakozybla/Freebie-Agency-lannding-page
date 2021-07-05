window.addEventListener('load', ()=>{
    let overlay = document.querySelector('.overlay');
    let btnWindow = document.querySelector('.get-in-touch-window');
    let form = document.querySelector('.form');
    let inputs = document.querySelectorAll('.inp');
    let btnSubmit = document.querySelector('.btn-submit');

    btnWindow.addEventListener('click', ()=>{
        overlay.classList.add('overlay-show');
        form.classList.add('form-show');
    })

    let pattern = {
        notEmpty: /.+/,
        phone: /\d{7,15}/,
        email: /.+@.+\..+/
    }

    let formRulles = {
        name: {
            rule: 'notEmpty',
            msg: 'Please, writte appropriate name!'
        },
        phone: {
            rule: 'phone',
            msg: 'Please, writte a correct phone-number!'
        },
        email: {
            rule: 'email',
            msg: 'Please, choose a correct email-address!'
        }
    }

    form.addEventListener('submit', (e)=>{
        let isErr = false;
        inputs.forEach(item=> {

            let validation = formRulles[item.name];
            let vType = validation.rule;
            let patterns = pattern[vType];
            let val = item.value.trim();
            let errBox = item.nextElementSibling;

            if(patterns.test(val)){
                item.classList.add('validated-inp');
                errBox.innerHTML = '';
            }else{
                item.classList.add('inp-err');
                isErr = true;
                errBox.innerHTML = validation.msg;
            }
        });
        if(isErr){
            e.preventDefault();
        }
    })

    form.addEventListener('focusin', (e)=>{
        if(e.target.classList.contains('inp')){
            e.target.classList.remove('inp-err');
        }
    })
})