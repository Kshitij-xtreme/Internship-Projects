// ===================== BNI SERVICES - MAIN JS =====================

document.addEventListener('DOMContentLoaded', () => {

  // Preloader
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(()=> preloader && preloader.classList.add('hide'), 300);
  });
  setTimeout(()=> preloader && preloader.classList.add('hide'), 1500);

  // Navbar scroll state
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 30) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    // back to top
    const backTop = document.querySelector('.back-top');
    if(backTop){
      if(window.scrollY > 500) backTop.classList.add('show');
      else backTop.classList.remove('show');
    }
  });

  // Mobile menu
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  if(burger){
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  // Back to top click
  const backTop = document.querySelector('.back-top');
  if(backTop){
    backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  }

  // Scroll reveal (IntersectionObserver)
  const revealEls = document.querySelectorAll('.reveal-up, .service-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if(entry.isIntersecting){
        setTimeout(()=>{
          entry.target.classList.add('show');
          entry.target.classList.add('reveal');
        }, i * 70);
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  revealEls.forEach(el => observer.observe(el));

  // Animated counters
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 60));
        const tick = () => {
          current += step;
          if(current >= target){ el.textContent = target.toLocaleString(); }
          else { el.textContent = current.toLocaleString(); requestAnimationFrame(tick); }
        };
        tick();
        counterObserver.unobserve(el);
      }
    });
  }, {threshold:0.5});
  counters.forEach(c => counterObserver.observe(c));

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if(!isActive) item.classList.add('active');
    });
  });

  // Mini bar chart random heights (hero card)
  document.querySelectorAll('.mini-chart div').forEach(bar => {
    bar.style.height = (30 + Math.random()*70) + '%';
  });

  // Contact form (calls backend API if available, else stores locally + shows message)
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const msgBox = document.getElementById('formMsg');
      const data = Object.fromEntries(new FormData(contactForm).entries());
      msgBox.textContent = 'Sending...';
      msgBox.style.color = 'var(--text-1)';
      try{
        const res = await fetch('/api/contact', {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify(data)
        });
        const result = await res.json();
        if(result.success){
          msgBox.textContent = 'Thank you! Your message has been sent successfully.';
          msgBox.style.color = '#7ee787';
          contactForm.reset();
        } else {
          throw new Error(result.message || 'Failed');
        }
      } catch(err){
        msgBox.textContent = 'Could not connect to server. Please make sure the backend is running, or call us directly.';
        msgBox.style.color = '#f0b94d';
      }
    });
  }

  // Load dynamic content from backend API (services/testimonials) if available
  loadDynamicContent();
});

async function loadDynamicContent(){
  const servicesGrid = document.getElementById('servicesGrid');
  if(servicesGrid){
    try{
      const res = await fetch('/api/services');
      const services = await res.json();
      if(Array.isArray(services) && services.length){
        servicesGrid.innerHTML = services.map(s => `
          <div class="service-card reveal-up">
            <div class="service-icon">${s.icon || '💼'}</div>
            <h3>${s.title}</h3>
            <p>${s.description}</p>
            <a href="/contact.html">Learn More <span>&rarr;</span></a>
          </div>
        `).join('');
      }
    }catch(e){ /* fallback to static HTML already present */ }
  }
}
