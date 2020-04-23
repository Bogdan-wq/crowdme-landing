window.onclick = (e) => {
    if (e.target.dataset.dropdown) {
        document.getElementById('burgerContentJS').classList.toggle('active');
    } else {
        document.getElementById('burgerContentJS').classList.remove('active');
    }
}