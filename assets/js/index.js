// Create a black circle element
const circle = document.createElement('div');
    circle.classList.add('CircleMouse');
    circle.id = 'CircleMouse';

// document.body.appendChild(circle);




document.addEventListener('mousemove', (event) => {
    circle.style.left = `${event.pageX - 10}px`; // Center the circle on the cursor
    circle.style.top = `${event.pageY - 10}px`;
})


// creare la privacy policy 
function openPrivacyPolicy() {

    if (document.getElementById('privacypolicy')) {
        console.log('Privacy Policy already exists');
        return; // Exit if the privacy policy is already open
    }

    const privacyPolicy = document.createElement('div');

    privacyPolicy.id = 'privacypolicy';

    privacyPolicy.classList.add('privacy-policy');
    privacyPolicy.innerHTML = `
        <h2>Privacy Policy</h2>
        <p>- Dati inviati dall' utente <br> I Dati inviati dall' utente non verranno in nessun modo trattati o divulgati ma verranno soltanto inviati alla mail info@urban.it per informazioni o richieste dell' utente stesso.
        <br>Questo garantisce una maggiore privacy per gli utenti e una maggiore riservatezza dei dati
        
        <br <br>
        </p>
        <button id="closePrivacyPolicy">Close</button>
    `;
    document.body.appendChild(privacyPolicy);

    document.getElementById('closePrivacyPolicy').addEventListener('click', () => {
        document.body.removeChild(privacyPolicy);
    });

    console.log('Privacy Policy opened');
}


// loading
// let loading = document.getElementById('loading');
// window.addEventListener('load' , () => {
//     loading.style.display = 'block';
// })

// loading.style.display = 'none';

