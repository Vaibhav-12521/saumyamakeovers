document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('profileCard');
    const servicesBtn = document.getElementById('servicesBtn');
    const backBtn = document.getElementById('backBtn');

    servicesBtn.addEventListener('click', () => {
        card.classList.add('is-flipped');
    });

    backBtn.addEventListener('click', () => {
        card.classList.remove('is-flipped');
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && card.classList.contains('is-flipped')) {
            card.classList.remove('is-flipped');
        }
    });
    const themes = [
        { bg: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)', icon: '✻' },
        { bg: 'linear-gradient(120deg, #fffde4 0%, #f9d423 100%)', icon: '☀' },
        { bg: 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)', icon: '❄' },
        { bg: 'linear-gradient(120deg, #c2e9fb 0%, #a1c4fd 100%)', icon: '☁' },
        { bg: 'linear-gradient(120deg, #fbc2eb 0%, #fcd1b3 100%)', icon: '⭕' }
    ];

    let themeIdx = 0;
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const mainPage = document.getElementById('mainPage');

    themeToggle.addEventListener('click', () => {
        themeIdx = (themeIdx + 1) % themes.length;
        const t = themes[themeIdx];

        mainPage.style.background = t.bg;
        themeIcon.textContent = t.icon;
        renderMakeupIcons();
    });
    const makeupIcons = ['💄', '💋', '✨', '👰', '💅', '🌸', '🔥', '📸', '👑', '👗', '👠', '🎀', '🪞', '🧴'];
    const iconContainer = document.getElementById('makeup-icons-bg');

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function renderMakeupIcons() {
        iconContainer.innerHTML = '';
        const width = window.innerWidth;
        const height = window.innerHeight;
        const iconCount = width < 600 ? 15 : 30;

        for (let i = 0; i < iconCount; i++) {
            const iconSize = randomInt(20, 50);
            const iconDiv = document.createElement('div');

            iconDiv.className = 'makeup-icon-bg';
            iconDiv.textContent = makeupIcons[randomInt(0, makeupIcons.length - 1)];
            iconDiv.style.top = randomInt(0, height) + 'px';
            iconDiv.style.left = randomInt(0, width) + 'px';
            iconDiv.style.fontSize = iconSize + 'px';
            iconDiv.style.transform = `rotate(${randomInt(0, 360)}deg)`;

            iconContainer.appendChild(iconDiv);
        }
    }
    window.addEventListener('resize', () => {
        clearTimeout(window.resizeTimer);
        window.resizeTimer = setTimeout(renderMakeupIcons, 200);
    });
    renderMakeupIcons();
});