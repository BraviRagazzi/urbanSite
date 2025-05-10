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



// aggiungi gli artisti nelle sezioni
let topArtist_cont = document.querySelector('#arrayTop_artists');
let allArtists_cont = document.querySelector('#ciao');

for(let i = 0; i < 3; i++) { // aggiungi 3 nella sezione home top 3
    addArtist(artists[i], topArtist_cont);
}




// funzione per aggiungere gli artisti
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


