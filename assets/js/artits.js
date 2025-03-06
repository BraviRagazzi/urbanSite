// Seleziona tutti i div della sezione con id "top_artists"
const artistDivs = document.querySelectorAll('#top_artists .artist');

// Converte NodeList in un array
const artistArray = Array.from(artistDivs);

// Ora artistArray contiene tutti i div con la classe "artist" all'interno della sezione "top_artists"
console.log(artistArray);


for(let i = 0; i < artistArray.length; i++) {
    if(i % 2 === 1) { // se è dispari a destra (inizia da 0)
        artistArray[i].classList.add('right');
    }
}



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
