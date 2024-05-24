const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', function() {
    const circle = document.createElement('div');
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = 'aqua';
    circle.style.margin = '50px auto';
    circle.style.width = '100px';
    circle.style.height = '100px';
    container.appendChild(circle);
});
