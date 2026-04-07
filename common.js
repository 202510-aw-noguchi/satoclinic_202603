(function () {
    function initHamburger() {
        const btn = document.querySelector('.hamburger');
        const menu = document.getElementById('globalMenu');
        if (!btn || !menu) return;
        const closeMenu = () => {
            menu.hidden = true;
            btn.setAttribute('aria-expanded', 'false');
        };
        const openMenu = () => {
            menu.hidden = false;
            btn.setAttribute('aria-expanded', 'true');
        };
        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            expanded ? closeMenu() : openMenu();
        });
        document.addEventListener('click', (e) => {
            if (menu.hidden) return;
            if (btn.contains(e.target) || menu.contains(e.target)) return;
            closeMenu();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });
        const mq = window.matchMedia('(max-width: 890px)');
        const onChange = (ev) => {
            if (!ev.matches) closeMenu();
        };
        if (mq.addEventListener) {
            mq.addEventListener('change', onChange);
        } else if (mq.addListener) {
            mq.addListener(onChange);
        }
    }
    function initFloatingBanner() {
        const floatingBanner = document.getElementById('floatingBanner');
        const floatingBannerClose = document.getElementById('floatingBannerClose');
        if (!floatingBanner || !floatingBannerClose) return;
        let bannerClosed = false;
        const bannerShowOffset = 360;
        const updateBanner = () => {
            if (bannerClosed) return;
            const shouldShow = window.scrollY >= bannerShowOffset;
            floatingBanner.classList.toggle('is-visible', shouldShow);
        };
        floatingBannerClose.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            bannerClosed = true;
            floatingBanner.classList.remove('is-visible');
        });
        window.addEventListener('scroll', updateBanner, { passive: true });
        window.addEventListener('resize', updateBanner);
        updateBanner();
    }
    initHamburger();
    initFloatingBanner();
})();