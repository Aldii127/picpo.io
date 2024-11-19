document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out!');
});
function scrollToAboutMe() {
    // Menggunakan smooth scroll untuk scroll ke section About Me
    document.getElementById("aboutme").scrollIntoView({ 
        behavior: 'smooth' 
    });
}
