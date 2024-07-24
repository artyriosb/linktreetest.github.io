const themeSwitch = document.getElementById('theme-switch');
const html = document.documentElement;

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
});