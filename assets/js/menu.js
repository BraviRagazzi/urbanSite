
let hamburger_menu = document.getElementById('hamburger_menu');
let text = document.getElementById('menu_text');

let menu = document.getElementById('menu');

// seconda opzione  -> testo
hamburger_menu.addEventListener('click', function() {
    hamburger_menu.classList.toggle('menu_text_open');

    if (hamburger_menu.classList.contains('menu_text_open')) {
        text.textContent = 'close.';
        // togliere lo scroll
        document.body.style.overflow = 'hidden';
    }
    else {
        text.textContent = 'menu.';
        // rimette lo scroll
        document.body.style.overflow = 'visible';
    }


    menu.classList.toggle('menu_open');
    menu.classList.toggle('menu_close');
        

});



// quando clicchi un opzione del menu, chiudi il menu
let menu_items = [
    document.getElementById('home'),
    document.getElementById('artists'),
    document.getElementById('about'),
    document.getElementById('contact')
];

for(let i = 0; i < menu_items.length; i++) {
    menu_items[i].addEventListener('click', function() {
        menu.classList.toggle('menu_close');
    });
}

