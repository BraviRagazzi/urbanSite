// // Create a black circle element
// const circle = document.createElement('div');
// circle.style.position = 'absolute';
// circle.style.width = '20px';
// circle.style.height = '20px';
// circle.style.backgroundColor = 'black'; // Cambiato il colore in nero
// circle.style.borderRadius = '50%';
// circle.style.pointerEvents = 'none'; // Ensure it doesn't block mouse events
// circle.style.zIndex = '-1'; // Ensure it stays behind the cursor
// document.body.appendChild(circle);

// // Update circle position on mouse move
// document.addEventListener('mousemove', (event) => {
//     circle.style.left = `${event.pageX - 10}px`; // Center the circle on the cursor
//     circle.style.top = `${event.pageY - 10}px`;
// });