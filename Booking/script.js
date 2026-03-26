
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    const linkPath = tab.getAttribute("href");
    const currentPath = window.location.pathname;

    if(currentPath.includes(linkPath)){
        tab.classList.add('active');
    } else {
        tab.classList.remove('active');
    }
});
