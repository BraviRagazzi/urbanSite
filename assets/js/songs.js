const divDemo = document.querySelector('#demo_songs');

let iframeArray = []; // array per iframe
iframeArray.push("https://open.spotify.com/embed/track/0P8IGBXiJcvmOAYawxqlQ4?utm_source=generator");
iframeArray.push("https://open.spotify.com/embed/track/1AGIH3dDa1V60oNuS5CVWK?utm_source=generator");
iframeArray.push("https://open.spotify.com/embed/track/7HcjwOy8kj1d6KSYXcqzt9?utm_source=generator");



for(let i = 0; i < 3; i++) {
    const iframe = document.createElement('iframe');
    iframe.src = iframeArray[i];
    iframe.style = "border-radius:12px";
    iframe.width = "100%";
    iframe.height = "352";
    iframe.frameBorder = '0';
    iframe.allowfullscreen=""; 
    iframe.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.loading="lazy";

    if (divDemo) {
        divDemo.appendChild(iframe);
    } else {
        console.error("Element with id 'demo_songs' not found.");
    }
}