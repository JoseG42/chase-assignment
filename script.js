// Hello
// Listen for document loaded event
document.addEventListener('DOMContentLoaded', () => {
    // Queary selector for the button
    const btn = document.querySelector('button');
    // Listen for button mouseover event
    btn.addEventListener('mouseover', () => {
        // Const x random number between 0 and window width - button width
        const x = Math.random() * (window.innerWidth - btn.offsetWidth);
        // Const y random number between 0 and window height - button height
        const y = Math.random() * (window.innerHeight - btn.offsetHeight);
        // Set button position to new random position
        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;
        // Change button text to 'Too slow!'
        btn.textContent = 'Too slow!';
    });

    // Listen for button click event
    btn.addEventListener('click', () => {
        // Change background color of body to red
        document.body.style.backgroundColor = 'red';
        // Change button text to '>.<'
        btn.textContent = '>.<';
        // Set a timeout
        setTimeout(() => {
            // Alert 'You caught me!'
            alert('You caught me!');
            // Change background color of body to green
            document.body.style.backgroundColor = 'green';
            // Change button text to 'Click me!'
            btn.textContent = 'Click me!';
        // Timeout duration .5 second
        }, 500);
    });
});