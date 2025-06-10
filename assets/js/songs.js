const divDemo = document.querySelector('#demo_songs');
const divAll = document.querySelector('#all_songs');

let iframeArray = []; // array per iframe
iframeArray.push("https://open.spotify.com/embed/track/0P8IGBXiJcvmOAYawxqlQ4?utm_source=generator");
iframeArray.push("https://open.spotify.com/embed/track/1AGIH3dDa1V60oNuS5CVWK?utm_source=generator");
iframeArray.push("https://open.spotify.com/embed/track/7HcjwOy8kj1d6KSYXcqzt9?utm_source=generator");


iframeArray.forEach(element => {
    addFrame(element, divAll);
});

for(let i = 0; i < 3; i++) {
    addFrame(iframeArray[i], divDemo);
}


function addFrame(element, divdemo) {
    const iframe = document.createElement('iframe');
    iframe.src = element;
    iframe.style = "border-radius:12px";
    iframe.width = "100%";
    iframe.height = "352";
    iframe.frameBorder = '0';
    iframe.allowfullscreen=""; 
    iframe.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.loading="lazy";

    if (divdemo) {
        divdemo.appendChild(iframe);
    }
}


// SONGS
    // Quando passi sopra un iframe, fai azioni tutti gli altri iframe
    document.querySelectorAll('iframe').forEach(function(iframe) {
        iframe.addEventListener('mouseenter', function() {
            document.querySelectorAll('iframe').forEach(function(otherIframe) {
                if (otherIframe !== iframe) {
                    otherIframe.style.opacity = '.5';
                    otherIframe.style.zIndex = '0';
                    iframe.style.opacity = '1';
                    iframe.style.zIndex = '1';
                    iframe.style.scale = 1.1;

                    otherIframe.style.filter = 'blur(2px)';
                    iframe.style.filter = 'none';
                }
            });
        });

        iframe.addEventListener('mouseleave', function() {
            document.querySelectorAll('iframe').forEach(function(otherIframe) {
                otherIframe.style.opacity = '1';
                otherIframe.style.scale = '1';
                otherIframe.style.filter = 'none';
                
            });
        });
    });