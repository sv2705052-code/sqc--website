document.addEventListener('DOMContentLoaded', () => {
    // Console Welcome
    console.log("%c Space Quanta System Loaded ", "background: #00f2ff; color: #000; font-weight: bold;");

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple reveal on scroll
    const sections = document.querySelectorAll('.content-sec');
    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 1s ease-out";
        observer.observe(section);
    });
});