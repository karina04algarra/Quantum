var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
    btnAbrirPopup3 = document.getElementById('btn-abrir-popup3'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');


    btnAbrirPopup.addEventListener('click', function(){
        overlay.classList.add('active');
        popup.classList.add('active');
    })

    btnAbrirPopup2.addEventListener('click', function(){
        overlay.classList.add('active');
        popup.classList.add('active');
    })

    btnAbrirPopup3.addEventListener('click', function(){
        overlay.classList.add('active');
        popup.classList.add('active');
    })
    
    btnCerrarPopup.addEventListener('click', function(){
        overlay.classList.remove('active');
        popup.classList.remove('active');
    })