document.addEventListener('DOMContentLoaded', function () {
    const h4Element = document.querySelector('.aboutclass h4');
    const h5Element = document.querySelector('.aboutclass h5');

    // Change h4 background color when hovering over h5
    h5Element.addEventListener('mouseover', function () {
        h4Element.style.backgroundColor = '#7194f6'; 
        h4Element.style.opacity = '0.7'; // Set background color of h4
    });

    h5Element.addEventListener('mouseout', function () {
        h4Element.style.backgroundColor = '#0a49f6';
        h4Element.style.opacity = '1.1';   // Reset background color of h4
    });
});