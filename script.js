// Theme toggle
const root = document.documentElement;
const btnTheme = document.getElementById('themeToggle');
btnTheme?.addEventListener('click', () => {
  const light = root.classList.toggle('light');
  btnTheme.setAttribute('aria-pressed', String(light));
  localStorage.setItem('prefersLight', light ? '1' : '0');
});
if(localStorage.getItem('prefersLight')==='1'){ root.classList.add('light'); btnTheme?.setAttribute('aria-pressed','true'); }

// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('navList');
navToggle?.addEventListener('click', () => {
  const open = navList.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

// Greeting
const greet = document.getElementById('greet');
(function(){
  const hour = new Date().getHours();
  greet.textContent = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
})();

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in-view'); observer.unobserve(e.target); }
  })
},{threshold:0.2});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Contact form (demo only)
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Sending...';
  setTimeout(()=>{
    status.textContent = 'Thanks! This is a demo submission.';
    this.reset();
  }, 700);
});
