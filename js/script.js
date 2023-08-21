// mobile menu
(function () {
  const openMobileMenuBtn = document.querySelector('.mobile-menu-icon.open-menu');
  const closeMobileMenuBtn = document.querySelector('.mobile-menu-icon.close-menu');
  const mainMobileMenuOverlay = document.querySelector('header .menu .mobile-menu-overlay');
  const mainMobileMenu = document.querySelector('header .menu .menu-main');

  if (openMobileMenuBtn) {
    openMobileMenuBtn.addEventListener('click', function (ev) {
      ev.preventDefault();
      if (mainMobileMenu && mainMobileMenuOverlay) {
        mainMobileMenu.classList.add('active')
        mainMobileMenuOverlay.classList.add('active')
      }
    });
  }


  if (closeMobileMenuBtn) {
    closeMobileMenuBtn.addEventListener('click', function (ev) {
      ev.preventDefault();
      if (mainMobileMenu && mainMobileMenuOverlay) {
        mainMobileMenu.classList.remove('active')
        mainMobileMenuOverlay.classList.remove('active')
      }
    });
  }


  if (mainMobileMenuOverlay) {
    mainMobileMenuOverlay.addEventListener('click', function (ev) {
      ev.preventDefault();
      if (mainMobileMenu && mainMobileMenuOverlay) {
        mainMobileMenu.classList.remove('active')
        mainMobileMenuOverlay.classList.remove('active')
      }
    });
  }
}());

// show more toggle
(function() {
  const showMoreBtn = document.querySelector('.app-show-more-btn');
  if(showMoreBtn) {
    document.addEventListener('click', function(ev) {
      ev.preventDefault();
      const showMoreContainer = ev.target.previousElementSibling;
      if(showMoreContainer) {
        if(showMoreContainer.classList.contains('expanded')) {
          showMoreContainer.classList.remove('expanded')
          ev.target.innerHTML = 'Show More';
        } else {
          showMoreContainer.classList.add('expanded')
          ev.target.innerHTML = 'Show Less';
        }
      }
    })
  }
}());