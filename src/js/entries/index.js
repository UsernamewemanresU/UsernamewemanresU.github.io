window.addEventListener('DOMContentLoaded', () => {
    const testHeading = document.createElement('h1');
    testHeading.classList.add('test-header');

    testHeading.innerText = "Hello World";
    testHeading.style.fontSize = '100px';
    testHeading.style.marginLeft = '200px';

    document.body.appendChild(testHeading);
});