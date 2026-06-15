const certifications = [
    {
        title: "IBM Data Science Professional Certificate",
        issuer: "IBM / Coursera",
        period: "2024",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        link: "https://www.credly.com/badges/d13ea8c0-b996-44ea-91b1-f96e9211bd11/linked_in_profile",
        link2: "https://www.coursera.org/account/accomplishments/specialization/XTCXB5L1NH1L",
        link2label: "Coursera"
    },
    {
        title: "AWS Certified Solutions Architect — Associate",
        issuer: "Amazon Web Services",
        period: "2025 – 2028",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        link: "https://www.credly.com/badges/30ffa6bf-264e-4a64-b65c-333e2964a075/linked_in_profile"
    },
    {
        title: "CompTIA Data+ CE",
        issuer: "CompTIA",
        period: "2025 – 2028",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/CompTIA_logo.svg",
        link: "https://www.credly.com/badges/665d0df8-5bba-433e-b169-fe70bf4382eb/linked_in_profile"
    },
    {
        title: "Microsoft Azure Data Fundamentals (DP-900)",
        issuer: "Microsoft",
        period: "No expiry",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        link: "https://learn.microsoft.com/api/credentials/share/en-gb/PercivalMahwaya-0859/E2655D6E765A9C5?sharingId"
    },
    {
        title: "Microsoft Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        period: "No expiry",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        link: "https://learn.microsoft.com/api/credentials/share/en-gb/PercivalMahwaya-0859/B71362EE6708CFFB?sharingId"
    }
];

function createCertCards() {
    const container = document.getElementById('certifications-container');
    if (!container) return;

    certifications.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        const secondBtn = cert.link2
            ? `<a href="${cert.link2}" target="_blank" class="btn btn-outline-secondary btn-sm ml-2" style="font-size:0.82em;">${cert.link2label || 'Alt Link'}</a>`
            : '';
        card.innerHTML = `
            <div class="card h-100">
                <div class="card-body text-center">
                    <img src="${cert.logo}" alt="${cert.issuer} logo">
                    <h5 class="card-title">${cert.title}</h5>
                    <p class="text-muted" style="font-size:0.85em;margin-bottom:6px;">${cert.issuer}</p>
                    <p class="text-muted" style="font-size:0.8em;margin-bottom:12px;">${cert.period}</p>
                    <a href="${cert.link}" target="_blank" class="btn btn-credentials">View Credential</a>
                    ${secondBtn}
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
