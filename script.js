function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}

function selectOption(option) {
    const header = document.getElementById('header');
    header.textContent = option;
    toggleDropdown();
}
