let selectBox = document.querySelector('.dropdown');

function disableDropdown() {
    selectBox.classList.remove('active');
    selectBox.classList.add('inactive');
}

function enableDropdown() {
    selectBox.classList.remove('inactive');
    selectBox.classList.add('active');
}

disableDropdown()
