document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (username === 'admin' && password === 'adminpasswort') {
        // Öffnet website.html in einem neuen Tab
        window.open('website.html', '_blank');
    } else {
        errorMessage.style.display = 'block';
    }
});
