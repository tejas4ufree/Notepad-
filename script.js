document.getElementById('saveBtn').addEventListener('click', function() {
    const text = document.getElementById('notepad').value;
    localStorage.setItem('savedText', text);
    alert('Text saved!');
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('notepad').value = '';
    localStorage.removeItem('savedText');
    alert('Text cleared!');
});

window.onload = function() {
    const savedText = localStorage.getItem('savedText');
    if (savedText) {
        document.getElementById('notepad').value = savedText;
    }
};
