const handleClickLink = (event) => {
    if (event.target.textContent === 'A propos de moi') {
        window.scrollTo({
            top: document.querySelector('.about').offsetTop,
            behavior: 'smooth',
        });
    }
    else if (event.target.textContent === 'Projets') {
        window.scrollTo({
            top: document.querySelector('.project').offsetTop,
            behavior: 'smooth',
        });
    }
    else if (event.target.textContent === 'Compétences') {
        window.scrollTo({
            top: document.querySelector('.skill').offsetTop,
            behavior: 'smooth',
        });
    }
    else if (event.target.textContent === 'Contact') {
        window.scrollTo({
            top: document.querySelector('.contact').offsetTop,
            behavior: 'smooth',
        });
    }
    else {
        window.scrollTo({
            top: document.querySelector('.home').offsetTop,
            behavior: 'smooth',
        });
    }
};

export default handleClickLink;