const cycleItems = ['Allergy Testing','Laser Hair Removal','GFC Therapy','Anti-Aging Treatment','STD Checkup','Acne Treatment','Chemical Peeling'];
const marqueeItems = ['Allergy Testing','Laser Hair Removal','GFC Therapy','Chemical Peeling','Botox & Fillers','STD Checkup','Acne Treatment','PRP Therapy','Cryotherapy','Mole Removal','Vitiligo Surgery','Photo Therapy'];
const ITEM_H = 32;
let cycleIdx = 0;

function initCycler() {
  const inner = document.getElementById('hero-cycle-inner');
  if (!inner) return;
  const items = [...cycleItems, cycleItems[0]];
  inner.innerHTML = items.map(t => `<span>${t}</span>`).join('');
  inner.style.transform = 'translateY(0)';
  setInterval(() => {
    cycleIdx++;
    inner.style.transition = 'transform .55s cubic-bezier(.4,0,.2,1)';
    inner.style.transform = `translateY(-${cycleIdx * ITEM_H}px)`;
    if (cycleIdx === cycleItems.length) {
      setTimeout(() => {
        inner.style.transition = 'none';
        inner.style.transform = 'translateY(0)';
        cycleIdx = 0;
      }, 600);
    }
  }, 2400);
}

function initMarquee() {
  const track = document.querySelector('.hero-marquee-track');
  if (!track) return;
  const html = marqueeItems.map(item => `
    <span class="marquee-item"><span class="marquee-dot"></span>${item}</span>
  `).join('');
  track.innerHTML = html + html;
}

const treatments = [
  { title:'Laser Treatment', desc:'Uses laser technology for pigmentation, scars, hair removal and skin resurfacing.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>' },
  { title:'Hair Transplant', desc:'Surgical procedure to restore hair in bald or thinning areas.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/>' },
  { title:'Allergy Test', desc:'Comprehensive patch and prick tests to identify substances causing skin allergies.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-1.587c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>' },
  { title:'Botox & Fillers', desc:'Cosmetic injections to reduce wrinkles and restore facial volume.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>' },
  { title:'Cryotherapy', desc:'Extreme cold treatment to remove warts, skin tags and other benign skin lesions.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m0-18-3 3m3-3 3 3M3 12h18m-18 0 3 3m-3-3 3-3m12 3-3 3m3-3-3-3m-6-6 3 9-9-3 9 3-3 9-3-9-9 3 9-3-3-9Z"/>' },
  { title:'Chemical Peeling', desc:'Chemical solution applied to improve texture, tone, and remove damaged skin cells.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"/>' },
  { title:'Mole Removal', desc:'Safe procedures to remove unwanted moles, skin tags, or other benign growths.',
    icon:'<circle cx="12" cy="12" r="3"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3Z"/>' },
  { title:'Teledermatology', desc:'Remote dermatology consultations via video or digital imaging technology.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"/>' },
  { title:'PRP Therapy', desc:"Platelet-Rich Plasma from the patient's own blood to stimulate hair growth and skin repair.",
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75v-1.5a3.375 3.375 0 0 0-3.375-3.375h-1.5A3.375 3.375 0 0 0 7.5 14.25v1.5m9.75-9 .75-.75m-4.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"/>' },
  { title:'Cosmetic Surgery', desc:'Minor surgical procedures to enhance skin appearance and correct cosmetic concerns.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>' },
  { title:'Skin Analyzer', desc:'Advanced device to analyze skin condition — oil balance, moisture, pigmentation, pores.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>' },
  { title:'ZSR Circumcision', desc:'Modern stapler-based circumcision method for minimal pain and faster recovery.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>' },
  { title:'Photo Therapy', desc:'Light-based UV treatment for chronic skin conditions like psoriasis, eczema and vitiligo.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>' },
  { title:'Vitiligo Surgery', desc:'Surgical skin grafting and melanocyte transplant to restore pigment in vitiligo patches.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"/>' }
];

const reviews = [
  { text:'Excellent service and professional care. Dr. Dhakal is truly amazing!', name:'Sarah M.', role:'Laser Treatment Patient' },
  { text:'Best laser hair removal experience in Kathmandu. Highly recommended!', name:'Rajesh K.', role:'Hair Removal Patient' },
  { text:'Finally found a solution for my chronic acne. Thank you Sahara!', name:'Priya S.', role:'Acne Treatment Patient' }
];

function renderTreatments() {
  const grid = document.getElementById('treatments-grid');
  if (!grid) return;
  grid.innerHTML = treatments.map((t, i) => `
    <div class="treatment-card reveal reveal-delay-${(i % 6) + 1}">
      <div class="card-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">${t.icon}</svg>
      </div>
      <p class="card-title">${t.title}</p>
      <p class="card-desc">${t.desc}</p>
      <span class="card-link">Learn More
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6"/></svg>
      </span>
    </div>`).join('');
}

function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;
  const stars = Array(5).fill('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>').join('');
  grid.innerHTML = reviews.map((r, i) => `
    <div class="review-card reveal reveal-delay-${i + 1}">
      <div class="review-stars">${stars}</div>
      <p class="review-text">"${r.text}"</p>
      <p class="reviewer-name">${r.name}</p>
      <p style="font-size:.8rem;color:var(--text-muted)">${r.role}</p>
    </div>`).join('');
}

function initNavScroll() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50), { passive: true });
}

function initActiveNav() {
  const links = document.querySelectorAll('.nav-link[data-section]');
  if (!links.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const m = document.querySelector(`.nav-link[data-section="${e.target.id}"]`);
        if (m) m.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('section[id]').forEach(s => io.observe(s));
}

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iOpen = document.getElementById('icon-open');
  const iClose = document.getElementById('icon-close');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    iOpen.classList.toggle('hidden', open);
    iClose.classList.toggle('hidden', !open);
    btn.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    iOpen.classList.remove('hidden');
    iClose.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
  }));
}

function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); }});
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const success = document.getElementById('form-success');
  const errEl = document.getElementById('form-error');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, { method:'POST', body:new FormData(form), headers:{ Accept:'application/json' }});
      if (res.ok) { form.reset(); success && success.classList.add('show'); errEl && errEl.classList.remove('show'); }
      else throw new Error();
    } catch { errEl && errEl.classList.add('show'); }
    finally { btn.disabled = false; btn.textContent = 'Send Message'; }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') { e.preventDefault(); window.scrollTo({ top:0, behavior:'smooth' }); return; }
      const t = document.querySelector(id);
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior:'smooth', block:'start' }); }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTreatments();
  renderReviews();
  initCycler();
  initMarquee();
  initNavScroll();
  initActiveNav();
  initMobileMenu();
  initReveal();
  initBackToTop();
  initContactForm();
  initSmoothScroll();
  setTimeout(initReveal, 50);
  console.log("Sahara Skin Clinic — Modernized v2.0.0");
});
