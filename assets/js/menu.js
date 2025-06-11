let hamburger_menu = document.getElementById('hamburger_menu');
let text = document.getElementById('menu_text');
let menu = document.getElementById('menu');

function closeMenu() {
    console.log('closeMenu');
    hamburger_menu.classList.toggle('menu_text_open');

    if (hamburger_menu.classList.contains('menu_text_open')) {
        text.textContent = 'close.';
        document.body.style.overflow = 'hidden';
    } else {
        text.textContent = 'menu.';
        document.body.style.overflow = 'visible';
    }

    menu.classList.toggle('menu_open');
    menu.classList.toggle('menu_close');
}

hamburger_menu.addEventListener('click', function() {
    closeMenu();
});



// crea le voci di menu
const aElement = [
    { id: 'home', href: 'index.html', text: 'Home' },
    { id: 'artists', href: 'index.html#top_artists', text: 'Top artists' },
    { id: 'playlists', href: 'index.html#playlist', text: 'Playlists' },
    { id: 'UrbanMic', href: 'podcast.html', text: 'Urban on the mic' },
    { id: 'about', href: 'coming.html', text: 'About' },
    { id: 'team', href: 'coming.html', text: 'Team' },
    { id: 'contact', href: 'contact.html', text: 'Contact' }
];

let menu_content = document.createElement('div');
menu_content.className = 'menu_content';

aElement.forEach(element => {
    let a = document.createElement('a');
    a.id = element.id;
    a.href = element.href;
    a.innerHTML = '<h1>' + element.text + '</h1>';
    menu_content.appendChild(a);
});

menu.appendChild(menu_content);

// aggiungi event listener alle voci di menu appena create
aElement.forEach(element => {
    let menuItem = document.getElementById(element.id);
    if (menuItem) {
        menuItem.addEventListener('click', function() {
            closeMenu();
        });
    }
});
