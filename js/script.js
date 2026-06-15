// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Rotating typed job titles
document.addEventListener('DOMContentLoaded', function () {
    const titles = ["Data Scientist", "ML Researcher", "MSc Computer Science"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const el = document.getElementById('job-title');
    if (!el) return;

    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseAfterTyped = 2000;

    function type() {
        if (!isDeleting && charIndex < titles[index].length) {
            el.textContent += titles[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (!isDeleting && charIndex === titles[index].length) {
            isDeleting = true;
            setTimeout(type, pauseAfterTyped);
        } else if (isDeleting && charIndex > 0) {
            el.textContent = titles[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, deletingSpeed);
        } else {
            isDeleting = false;
            index = (index + 1) % titles.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});

// Include shared HTML partials
function includeHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => { document.getElementById(elementId).innerHTML = data; })
        .catch(error => console.error('Error loading ' + file + ':', error));
}

document.addEventListener('DOMContentLoaded', () => {
    includeHTML('includes/header.html', 'header-placeholder');
    includeHTML('includes/footer.html', 'footer-placeholder');
});
