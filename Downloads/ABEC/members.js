const searchBox = document.getElementById('name');
const members = document.getElementById('members');

searchBox.addEventListener('focus', () => {
    members.style.display = 'block';
    filterMemebers();
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
        members.style.display = 'none';
    }
});

searchBox.addEventListener('input', () => {
    filterMemebers();
});

function filterMemebers() {
    const searchTerm = searchBox.value.toLowerCase();
    const options = members.options;

    let firstMatch = null;

    for (let i = 0; i < options.length; i++) {
        const optionText = options[i].text.toLowerCase();
        if (optionText.includes(searchTerm)) {
            options[i].style.display = ''; 
            if (!firstMatch) {
                firstMatch = options[i];
            }
        } else {
            options[i].style.display = 'none'; 
        }
    }

    if (firstMatch) {
        for (let i = 0; i < options.length; i++) {
            options[i].classList.remove('highlight');
        }
        firstMatch.classList.add('highlight');
    }
}

members.addEventListener('change', () => {
    searchBox.value = members.value;
    members.style.display = 'none';
});