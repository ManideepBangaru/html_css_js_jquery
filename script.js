const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const projectsLink = document.getElementById('projects-link');
const contactLink = document.getElementById('contact-link');
const learnMoreButton = document.getElementById('learn-more-button');

homeLink.addEventListener('click', () => {
    window.location.href = '/';
});

aboutLink.addEventListener('click', () => {
    window.location.href = '/about';
});

projectsLink.addEventListener('click', () => {
    window.location.href = '/projects';
});

contactLink.addEventListener('click', () => {
    alert('Hello, world!');
});

learnMoreButton.addEventListener('click', () => {
    const linkText = document.getElementById('home-link').textContent;
    const linkUrl = '/';

    alert(linkText + ' (' + linkUrl + ')');
});