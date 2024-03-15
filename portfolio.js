function scrollToSection(sectionId) {
    
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    if (sectionId === 'home') {
        const aboutContent = document.querySelector('.about');
        aboutContent.style.animation = 'fadeInAnimation';
    }
}


function scrollToSection(sectionId) {
    
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    if (sectionId === 'about') {
        const aboutContent = document.querySelector('.home');
        aboutContent.style.animation = 'fadeInAnimation';
    }
}
