const nav = document.querySelectorAll('.nav li');
const titleH1 = document.querySelector('.title__h1 span');
const titleH2 = document.querySelector('.title__h2 span');
const lorem = document.querySelector('.lorem');
const btn = document.querySelector('.btn');

window.addEventListener('load', () => {
    const animation = gsap.timeline()
        .from(nav, { yPercent: -200, stagger: 0.2 })
        .from(titleH2, { yPercent: -100 })
        .from(titleH1, { yPercent: -100 }, '-=0.3')
        .from(lorem, { opacity: 0, duration: 0.4 })
        .from(btn, { scale: 0, ease: 'back.out(1.7)' });
})
