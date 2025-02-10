// Load header content
document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            
            // Add smooth scrolling for dropdown arrows
            const arrows = document.querySelectorAll('.arrow');
            arrows.forEach(arrow => {
                arrow.addEventListener('click', function(e) {
                    e.preventDefault();
                    const section = this.closest('a').getAttribute('href').split('#')[1];
                    if(section) {
                        const element = document.getElementById(section);
                        if(element) {
                            element.scrollIntoView({ 
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                });
            });
        });
}); 