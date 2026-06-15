const certifications = [
    {
        title: "IBM Data Science Professional Certificate",
        issuer: "IBM / Coursera",
        period: "2024",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        link: "https://www.credly.com/org/ibm/badge/data-science-professional-certificate"
    },
    {
        title: "AWS Certified Solutions Architect — Associate",
        issuer: "Amazon Web Services",
        period: "2025 – 2028",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
    },
    {
        title: "CompTIA Data+ CE",
        issuer: "CompTIA",
        period: "2025 – 2028",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/CompTIA_logo.svg",
        link: "https://www.comptia.org/certifications/data"
    },
    {
        title: "Microsoft Azure Data Fundamentals (DP-900)",
        issuer: "Microsoft",
        period: "No expiry",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/"
    },
    {
        title: "Microsoft Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        period: "No expiry",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/"
    }
];

function createCertCards() {
    const container = document.getElementById('certifications-container');
    if (!container) return;

    certifications.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card h-100">
                <div class="card-body text-center">
                    <img src="${cert.logo}" alt="${cert.issuer} logo">
                    <h5 class="card-title">${cert.title}</h5>
                    <p class="text-muted" style="font-size:0.85em;margin-bottom:6px;">${cert.issuer}</p>
                    <p class="text-muted" style="font-size:0.8em;margin-bottom:12px;">${cert.period}</p>
                    <a href="${cert.link}" target="_blank" class="btn btn-credentials">View Credential</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function includeHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => { document.getElementById(elementId).innerHTML = data; })
        .catch(error => console.error('Error loading ' + file + ':', error));
}

document.addEventListener('DOMContentLoaded', () => {
    includeHTML('includes/header.html', 'header-placeholder');
    includeHTML('includes/footer.html', 'footer-placeholder');
    createCertCards();
});
