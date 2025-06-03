// aggiunta dl menu
// function addMenu() {
//     return `
//         <section id="menu" class="menu_close">
//             <div class="menu_content">
//             <a id="home" href="index.html"><h1>Home</h1></a>
//             <a id="artists" href="#top_artists"><h1>Top artists</h1></a>
//             <a id="playlists" href="#playlist"><h1>Playlists</h1></a>
//             <a id="about" href="about.html"><h1>About</h1></a>
//             <a id="team" href="team.html"><h1>Team</h1></a>
//             <a id="contact" href="#footer"><h1>Contacts</h1></a>
//             </div>
//         </section>
        

//         <section id="home">
//             <!-- <img src="assets/image/logoWhite.svg" alt="Logo UrbanSite" class="logo"> -->

//             <!-- tre span per il menu -->
//             <h1 id="menu_text" class="">menu.</h1>
//             <span id="hamburger_menu"></span>
//         </section>

//         <header class="section-black" id="prima_section">
//             <img src="assets/image/Logo png/3000 x 3000/2.23white.png" alt="Urban Logo">
//         </header>
//     `;
// }

let hamburger_menu = document.getElementById('hamburger_menu');
let text = document.getElementById('menu_text');

let menu = document.getElementById('menu');

function closeMenu() {
    console.log('closeMenu');
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


}


// seconda opzione  -> testo
hamburger_menu.addEventListener('click', function() {
    closeMenu();
});



// Quando clicchi un'opzione del menu, chiudi il menu
let menu_items = [
    document.getElementById('home'),
    document.getElementById('playlists'),
    document.getElementById('artists'),
    document.getElementById('about'),
    document.getElementById('team'),
    document.getElementById('contact')
];

for (let i = 0; i < menu_items.length; i++) {
    menu_items[i].addEventListener('click', function() {
        closeMenu();
    });

}



