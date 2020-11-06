const handleScroll = () => {
    const divElement = document.querySelector('.about').offsetTop;
    const navLink = document.querySelectorAll('.nav-link');
    const navWebsiteName = document.querySelector('.navbar-website-name');
    const projectElement = document.querySelector('.project');
    const upButton = document.querySelector('.upButton')
    if (window.scrollY > divElement - 1) {
        for (let i = 0;i < navLink.length;i++) {
        navLink[i].classList.add('text-color');
        }
        navWebsiteName.classList.add('text-color');
    }
    else {
        for (let i = 0;i < navLink.length; i++) {
        navLink[i].classList.remove('text-color');
        }
        navWebsiteName.classList.remove('text-color');
    }
    if (window.scrollY > projectElement.offsetTop) {
        upButton.classList.remove('displayUpButton');
    }
    else {
        upButton.classList.add('displayUpButton');
    }
}

export default handleScroll