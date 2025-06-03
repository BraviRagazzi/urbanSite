// Create a black circle element
const circle = document.createElement('div');
    circle.classList.add('CircleMouse');
    circle.id = 'CircleMouse';

// document.body.appendChild(circle);




document.addEventListener('mousemove', (event) => {
    circle.style.left = `${event.pageX - 10}px`; // Center the circle on the cursor
    circle.style.top = `${event.pageY - 10}px`;
})



// loading
let loading = document.getElementById('loading');
window.addEventListener('load' , () => {
    loading.style.display = 'block';
})

loading.style.display = 'none';