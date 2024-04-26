document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.navbar-nav .nav-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için varsayılan davranışı durdur
        const targetId = this.getAttribute('href').slice(1); // Hedef ID'yi al
        const targetElement = document.getElementById(targetId); // Hedef elementi bul
        if (targetElement) {
          // Hedef element varsa sayfayı kaydır
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });