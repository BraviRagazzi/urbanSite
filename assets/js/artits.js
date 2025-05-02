document.addEventListener('DOMContentLoaded', () => {
    const artistDivs = document.querySelectorAll('.artist');
    const artistArray = Array.from(artistDivs);
    // Ora artistArray contiene tutti i div con la classe "artist" all'interno della sezione "arrayTop_artists"
    console.log(artistArray);
    for(let i = 0; i < artistArray.length; i++) {
        if(i % 2 === 1) { // se è dispari a destra (inizia da 0)
            artistArray[i].classList.add('right');
        }
    }
});


// SONGS
    // Quando passi sopra un iframe, nascondi tutti gli altri iframe
    document.querySelectorAll('iframe').forEach(function(iframe) {
        iframe.addEventListener('mouseenter', function() {
            document.querySelectorAll('iframe').forEach(function(otherIframe) {
                if (otherIframe !== iframe) {
                    otherIframe.style.opacity = '.5';
                    otherIframe.style.zIndex = '0';
                    iframe.style.opacity = '1';
                    iframe.style.zIndex = '1'
                }
            });
        });

        iframe.addEventListener('mouseleave', function() {
            document.querySelectorAll('iframe').forEach(function(otherIframe) {
                otherIframe.style.opacity = '1';
            });
        });
    });


class Artist {
    constructor(nome, img, desc, ) {
        this.nome = nome;
        this.img = img;
        if (desc == 'undefined' || desc == null) this.desc = null;
        else this.desc = desc;
    }

    getName() {
        return this.nome;
    }
    getDesc() {
        return this.desc;
    }
    getImgPath() {
        return this.img;
    }
}

let artists = [];
artists.push(new Artist("Walidone", "assets/image/Artists/Walidone.png"));
artists.push(new Artist("Walidone", "assets/image/Artists/Walidone.png"));
artists.push(new Artist("Walidone", "assets/image/Artists/Walidone.png"));
artists.push(new Artist("Walidone", "assets/image/Artists/Walidone.png"));
artists.push(new Artist("Walidone", "assets/image/Artists/Walidone.png"));
artists.push(new Artist("Walidone", "assets/image/Artists/Walidone.png"));
console.log(artists);



let top_cont = document.querySelector('#arrayTop_artists');

for(let i = 0; i < 3; i++) {
    addArtist(artists[i], top_cont);
}


artists.forEach(artist => {
    addArtist(artist, AllArtists);
});



function addArtist(artist, obj) {
    const artistDiv = document.createElement('div')
    artistDiv.classList.add('artist');

    const img = document.createElement('img');
    img.src = artist.getImgPath();
    img.alt = artist.getName();

    const h3 = document.createElement('h3')
    h3.innerHTML = artist.getName();

    artistDiv.append(img);
    artistDiv.append(h3);

    obj.append(artistDiv);
 
}


