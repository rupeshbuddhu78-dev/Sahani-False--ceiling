// Jab poora page load ho jaaye, tab yeh code chalaao
window.addEventListener('load', () => {

    // === NAYA: Hamburger Menu ko chalaane ka code ===
    const navButton = document.getElementById('nav-toggle-button');
    const navMenu = document.getElementById('nav-menu');

    if (navButton) {
        navButton.addEventListener('click', () => {
            // 'show' class ko add ya remove karo
            navMenu.classList.toggle('show');
        });
    }


    // === PURANA: Gallery Filter code (waisa hi hai) ===
    if (document.getElementById('filter-buttons')) {

        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                
                // 1. Sabhi button se 'active' class hataao
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // 2. Jis button par click kiya, uspe 'active' class lagaao
                button.classList.add('active');

                // 3. Button ka filter naam (data-filter) lo
                const filter = button.getAttribute('data-filter');

                // 4. Sabhi photos (gallery items) par check karo
                galleryItems.forEach(item => {
                    // Agar 'all' chuna hai, YA photo ka class filter se match hota hai
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.classList.remove('hide'); // Photo dikhaao
                    } else {
                        item.classList.add('hide'); // Photo chhipaao
                    }
                });
            });
        });
    }
});