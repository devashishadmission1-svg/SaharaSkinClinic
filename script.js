const cycleItems = ['Laser Treatment','Hair Transplant','Allergy Test','Botox and Fillers','Cryotherapy','Chemical Peeling','Mole Removal','Teledermatology','PRP Therapy','Cosmetic Surgery','Skin Analyzer','ZSR Circumcision','Photo Therapy','Vitiligo Surgery'];
const marqueeItems = ['Laser Treatment','Hair Transplant','Allergy Test','Botox and Fillers','Cryotherapy','Chemical Peeling','Mole Removal','Teledermatology','PRP Therapy','Cosmetic Surgery','Skin Analyzer','ZSR Circumcision','Photo Therapy','Vitiligo Surgery'];
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
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>',
    meta:'Duration: 30–60 mins | Downtime: 1–3 days | Target: Scars & Rejuvenation',
    details:'Our advanced triple-wavelength laser systems target hyperpigmentation, deep post-acne scars, fine wrinkles, and general skin irregularities. By safely delivering thermal energy to precise depths, the treatment stimulates robust neocollagenesis (new collagen growth) to yield tighter pores, smoother skin, and a uniform skin tone with minimal downtime.',
    bullets:['<strong>Recommended Sessions:</strong> 3 to 5 sessions depending on clinical depth','<strong>Anesthesia:</strong> Topical numbing cream applied for absolute patient comfort','<strong>Primary Benefits:</strong> Evens out skin texture, fades age spots, and tightens pores'] },
  { title:'Hair Transplant', desc:'Surgical procedure to restore hair in bald or thinning areas.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/>',
    meta:'Duration: 4–8 hours | Downtime: 7–10 days | Target: Hair Restoration',
    details:'We utilize gold-standard Follicular Unit Extraction (FUE) and Direct Hair Implantation (DHI) methods under sterile local anesthesia. Individual healthy hair follicles are harvested meticulously from the donor region (back of the head) and implanted at precise angles and densities in thinning or bald regions, guaranteeing a natural hairline and permanent lifetime survival.',
    bullets:['<strong>Technique:</strong> Painless micro-punch extraction with zero linear scarring','<strong>Recovery:</strong> Swelling subsides in 3 days; donor zone heals fully in 7 days','<strong>Success Rate:</strong> Over 95% graft survival with lifetime natural growth'] },
  { title:'Allergy Test', desc:'Comprehensive patch and prick tests to identify substances causing skin allergies.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-1.587c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>',
    meta:'Duration: 30 mins | Downtime: None | Target: Allergen Discovery',
    details:'Comprehensive medical patch testing and skin prick assays to determine the absolute root cause of contact dermatitis, hives, and chronic skin irritation. Over 30 common Nepalese environmental and chemical antigens are tested under dermatologist supervision, followed by personalized avoidance counseling.',
    bullets:['<strong>Reading Time:</strong> Results evaluated at 48 hours and 72 hours','<strong>Preparation:</strong> Patients must avoid antihistamines for 5 days prior to the test','<strong>Includes:</strong> Customized allergen avoidance guidelines and skin barrier support'] },
  { title:'Botox and Fillers', desc:'Cosmetic injections to reduce wrinkles and restore facial volume.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>',
    meta:'Duration: 15–30 mins | Downtime: None | Target: Wrinkles & Volume',
    details:'Premium US FDA-approved neuromodulator (Botox) and hyaluronic acid dermal fillers administered with medical precision. Designed to smooth dynamic wrinkles (crow\'s feet, frown lines) and instantly restore volume to hollow cheeks, tear troughs, flat lips, and weak jawlines while preserving highly natural expressions.',
    bullets:['<strong>Onset:</strong> Fillers are instant; Botox takes 3 to 7 days for full effect','<strong>Longevity:</strong> Botox lasts 4–6 months; Fillers last 9–18 months','<strong>Treatment Safety:</strong> Performed exclusively by certified dermatologist Dr. Dhakal'] },
  { title:'Cryotherapy', desc:'Extreme cold treatment to remove warts, skin tags and other benign skin lesions.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m0-18-3 3m3-3 3 3M3 12h18m-18 0 3 3m-3-3 3-3m12 3-3 3m3-3-3-3m-6-6 3 9-9-3 9 3-3 9-3-9-9 3 9-3-3-9Z"/>',
    meta:'Duration: 10–15 mins | Downtime: 3–5 days | Target: Lesion Removal',
    details:'Controlled cryo-ablation utilizing medical liquid nitrogen at -196°C. This targeted freezing technique isolates and destroys viral warts, skin tags, seborrheic keratoses, and other benign skin lesions. The treated cells gently blister and slough off within a few days, replaced by fresh healthy tissue.',
    bullets:['<strong>Pain Level:</strong> Mild, brief stinging sensation during cold application','<strong>Aseptic Standard:</strong> Zero surgical incisions required, meaning zero blood risk','<strong>Healing Time:</strong> Lesions completely crust and peel away in 5 to 7 days'] },
  { title:'Chemical Peeling', desc:'Chemical solution applied to improve texture, tone, and remove damaged skin cells.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"/>',
    meta:'Duration: 20–30 mins | Downtime: 2–5 days | Target: Acne & Glow',
    details:'Dermatologist-formulated chemical peels (Glycolic, Salicylic, Lactic, and Jessner\'s solutions) customized for your skin concern. Peels exfoliate damaged outer epidermal layers to speed up cell turnover, resulting in significant reduction of active acne, post-inflammatory hyperpigmentation, sunspots, and fine lines.',
    bullets:['<strong>Skin Types:</strong> Safe for all Fitzpatrick skin types when customized','<strong>Post-Care:</strong> Broad-spectrum SPF 50+ sunscreen application is strictly mandatory','<strong>Primary Benefits:</strong> Unveils luminous skin, controls sebum, and fades melasma'] },
  { title:'Mole Removal', desc:'Safe procedures to remove unwanted moles, skin tags, or other benign growths.',
    icon:'<circle cx="12" cy="12" r="3"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3Z"/>',
    meta:'Duration: 15–30 mins | Downtime: 5–7 days | Target: Growth Cautery',
    details:'Safe and painless removal of cosmetic or medically concerning moles, cysts, and benign skin growths. Depending on lesion depth, we employ high-frequency radiofrequency (RF) cautery for sutureless surface clearing, or precise surgical excision with advanced plastic closures to ensure the most cosmetic, scar-free outcome.',
    bullets:['<strong>Anesthesia:</strong> Local anesthetic infiltration for a completely painless procedure','<strong>Safety Protocol:</strong> Suspect moles can be sent for biopsy histopathology','<strong>Aftercare:</strong> Silicon gel and micro-pore tape provided for optimal scar healing'] },
  { title:'Teledermatology', desc:'Remote dermatology consultations via video or digital imaging technology.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"/>',
    meta:'Duration: 15 mins (Virtual) | Downtime: None | Target: Online Skin Care',
    details:'Fully secure, HD video and photo-based digital teleconsultation gateway with Dr. Prabin Dhakal. Ideal for patients living outside Kathmandu or abroad, teledermatology covers initial skin diagnoses, routine treatment updates, hair loss monitoring, prescription renewals, and chronic care management.',
    bullets:['<strong>Convenience:</strong> Book online, upload clear photos, and receive prescription digitally','<strong>Scope:</strong> Suitable for acne, eczema, psoriasis, hair fall, and general skincare','<strong>Follow-ups:</strong> Smooth digital coordination for reviewing treatment progress'] },
  { title:'PRP Therapy', desc:"Platelet-Rich Plasma from the patient's own blood to stimulate hair growth and skin repair.",
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75v-1.5a3.375 3.375 0 0 0-3.375-3.375h-1.5A3.375 3.375 0 0 0 7.5 14.25v1.5m9.75-9 .75-.75m-4.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"/>',
    meta:'Duration: 45–60 mins | Downtime: None | Target: Regrowth & Repair',
    details:'Autologous Platelet-Rich Plasma (PRP) and Growth Factor Concentrate (GFC) therapies. A small volume of your blood is centrifuged to extract highly concentrated platelets, which are micro-injected into the hair roots or facial skin to release essential growth factors that revive thinning hair follicles and promote collagen repair.',
    bullets:['<strong>Protocol:</strong> Highly sterile, closed-system centrifugation for pure GFC','<strong>Treatment Intervals:</strong> Recommended 4 sessions spaced 4 weeks apart','<strong>Results:</strong> Visible reduction in hair shedding in 2 sessions; new growth in 3'] },
  { title:'Cosmetic Surgery', desc:'Minor surgical procedures to enhance skin appearance and correct cosmetic concerns.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>',
    meta:'Duration: 30–90 mins | Downtime: 5–10 days | Target: Outpatient Plastics',
    details:'Minor outpatient plastic and reconstructive surgeries conducted under sterile conditions. Services include split earlobe repairs, cosmetic scar revisions, sebaceous cyst excision, lipoma removal, and skin tag removals. We employ advanced micro-suturing techniques to achieve thin, virtually invisible scars.',
    bullets:['<strong>Suture Removal:</strong> Typically scheduled 5 to 7 days post-surgery','<strong>Pain Management:</strong> Mild oral analgesics prescribed for post-op comfort','<strong>Primary Goal:</strong> Restoration of normal anatomy with superior cosmetic results'] },
  { title:'Skin Analyzer', desc:'Advanced device to analyze skin condition — oil balance, moisture, pigmentation, pores.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>',
    meta:'Duration: 15 mins | Downtime: None | Target: Multi-Spectral Scan',
    details:'Advanced multi-spectral facial diagnostic technology utilizing standard light, cross-polarized, and UV light arrays. The scanner deeply analyzes hidden sebum distribution, deep pore clogging, vascular lesions, underlying UV sun damage, and early wrinkle patterns, providing a highly objective foundation for clinical care.',
    bullets:['<strong>Report:</strong> Detailed digital skin report showing sebum, pores, and vascular states','<strong>Diagnostic Power:</strong> Unveils deep sun spots and pigment before they surface','<strong>Skin Age:</strong> Evaluates realistic skin metabolic age compared to actual age'] },
  { title:'ZSR Circumcision', desc:'Modern stapler-based circumcision method for minimal pain and faster recovery.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>',
    meta:'Duration: 15–20 mins | Downtime: 3–5 days | Target: Stapler Circumcision',
    details:'The modern gold-standard stapler circumcision technique, highly superior to traditional laser or open surgeries. Using a disposable ZSR stapler device, the procedure cuts and staples in one single fluid motion, resulting in virtually zero blood loss, precise circular alignment, and minimal post-op swelling.',
    bullets:['<strong>Advantages:</strong> Minimizes infection risks, has no loose threads, and heals fast','<strong>Recovery:</strong> Painless dressings; patients can return to light work in 24 hours','<strong>Age Group:</strong> Extremely safe and highly recommended for adolescent and adult males'] },
  { title:'Photo Therapy', desc:'Light-based UV treatment for chronic skin conditions like psoriasis, eczema and vitiligo.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>',
    meta:'Duration: 5–15 mins | Downtime: None | Target: Narrowband UVB Light',
    details:'Narrowband UVB (NBUVB) light-based phototherapy. Safely administers clinically calibrated light wavelengths to suppress hyperactive immune responses in the skin. This highly controlled medical therapy is exceptionally effective for clearing moderate-to-severe psoriasis, vitiligo patches, and chronic eczema.',
    bullets:['<strong>Safety Profile:</strong> Safe for pregnant women and pediatric patients, free of systemic drugs','<strong>Session Frequency:</strong> Usually performed 2 to 3 times per week','<strong>Clinical Efficacy:</strong> Excellent track record in bringing stable psoriasis to remission'] },
  { title:'Vitiligo Surgery', desc:'Surgical skin grafting and melanocyte transplant to restore pigment in vitiligo patches.',
    icon:'<path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"/>',
    meta:'Duration: 1–3 hours | Downtime: 7–14 days | Target: Pigment Grafting',
    details:'Advanced surgical repigmentation techniques for stable vitiligo patches. When patches have stopped spreading for over a year and are unresponsive to medical therapy, we perform precise suction blister grafting, punch grafting, or advanced non-cultured melanocyte-keratinocyte transplant (MKCT) to restore melanin production.',
    bullets:['<strong>Candidates:</strong> Suitable only for patients with stable, non-spreading vitiligo','<strong>Methods:</strong> Latest MKCT allows large vitiligo patches to be covered with small donor skin','<strong>Pigment Recovery:</strong> Natural repigmentation gradually blends over 3 to 6 months'] }
];

const reviews = [
  { text:'Best skin clinic in Kathmandu. Dr. Prabin Dhakal is extremely polite, listens patiently, and explains the treatment path beautifully. My long-term chronic acne has been completely cured under his expert care.', name:'Anil Shrestha', role:'Acne Treatment Patient' },
  { text:'Highly satisfied with the laser hair removal treatment here. The clinic features state-of-the-art triple wavelength laser technology, the staff is incredibly supportive, and the prices are very reasonable compared to other clinics.', name:'Ritu Baral', role:'Laser Hair Removal Patient' },
  { text:'Excellent experience getting warts removed from my face. The procedure was extremely sterile, virtually painless, and done with great precision. The healing was fast and there are no scars left!', name:'Shreya Sharma', role:'Warts & Skin Tags Patient' },
  { text:'Highly recommend Sahara Skin Care Hospital for ZSR Circumcision. The modern stapler technique is safe, clean, and has very fast recovery. Dr. Dhakal and the clinical team made me very comfortable throughout.', name:'Ramesh K.C.', role:'ZSR Circumcision Patient' },
  { text:'Was suffering from severe hair thinning and went for GFC (Growth Factor Concentrate) therapy. After just three sessions under Dr. Dhakal, my hair fall completely stopped and I can see visible new growth. Truly reliable skin and hair care!', name:'Bikash Thapa', role:'GFC Hair Therapy Patient' },
  { text:'Wonderful service for skin allergies. The allergy patch testing is highly accurate, and the customized treatment plan worked wonders for my chronic eczema. A very professional and hygienic clinic in Kalanki!', name:'Maya Tamang', role:'Allergy & Eczema Patient' }
];

function renderTreatments() {
  const grid = document.getElementById('treatments-grid');
  if (!grid) return;
  grid.innerHTML = treatments.map((t, i) => `
    <div class="treatment-card reveal reveal-delay-${(i % 6) + 1}" data-index="${i}">
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

function initTreatmentModal() {
  const grid = document.getElementById('treatments-grid');
  const modal = document.getElementById('treatment-modal');
  if (!grid || !modal) return;
  
  const mIcon = document.getElementById('modal-treatment-icon');
  const mTitle = document.getElementById('modal-treatment-title');
  const mMeta = document.getElementById('modal-treatment-meta');
  const mDesc = document.getElementById('modal-treatment-description');
  const mBullets = document.getElementById('modal-treatment-quick-info');
  
  const closeBtnTop = document.getElementById('close-treatment-modal');
  const closeBtnBot = document.getElementById('modal-close-btn');
  const bookBtn = document.getElementById('modal-book-btn');
  
  const closeModal = () => {
    modal.classList.remove('show');
    setTimeout(() => {
      if (!modal.classList.contains('show')) {
        modal.style.display = 'none';
      }
    }, 300);
  };
  
  grid.addEventListener('click', e => {
    const card = e.target.closest('.treatment-card');
    if (!card) return;
    
    const idx = parseInt(card.getAttribute('data-index'), 10);
    const t = treatments[idx];
    if (!t) return;
    
    mIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">${t.icon}</svg>`;
    mTitle.textContent = t.title;
    mMeta.textContent = t.meta || 'Expert Dermatology Care';
    mDesc.textContent = t.details || t.desc;
    
    if (t.bullets && t.bullets.length > 0) {
      mBullets.style.display = 'flex';
      mBullets.innerHTML = t.bullets.map(b => `
        <div style="display: flex; gap: 0.5rem; align-items: flex-start;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" style="color: var(--rose-gold-dark); flex-shrink: 0; margin-top: 2px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
          <div>${b}</div>
        </div>
      `).join('');
    } else {
      mBullets.style.display = 'none';
    }
    
    modal.style.display = 'flex';
    modal.offsetHeight; // force reflow
    modal.classList.add('show');
  });
  
  closeBtnTop && closeBtnTop.addEventListener('click', closeModal);
  closeBtnBot && closeBtnBot.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
  
  bookBtn && bookBtn.addEventListener('click', () => {
    const treatmentTitle = mTitle.textContent;
    closeModal();
    
    const bookingSec = document.getElementById('booking');
    if (bookingSec) {
      bookingSec.scrollIntoView({ behavior: 'smooth' });
    }
    
    const selectEl = document.getElementById('booking-treatment');
    if (selectEl) {
      selectEl.value = treatmentTitle;
    }
  });
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

function saveInquiryToLocalStorage(name, email, phone, message) {
  try {
    const list = JSON.parse(localStorage.getItem('sahara_messages') || '[]');
    const newInquiry = {
      id: 'MSG-' + Math.floor(1000 + Math.random() * 9000),
      name,
      email,
      phone: phone || 'N/A',
      message,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      status: 'Unread'
    };
    list.unshift(newInquiry);
    localStorage.setItem('sahara_messages', JSON.stringify(list));
  } catch (e) {
    console.error('Failed to save inquiry to localStorage', e);
  }
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
    
    // Save to local storage anyway for the admin panel!
    try {
      saveInquiryToLocalStorage(
        form.querySelector('#name').value,
        form.querySelector('#email').value,
        form.querySelector('#phone') ? form.querySelector('#phone').value : '',
        form.querySelector('#message').value
      );
    } catch (e) {
      console.error(e);
    }
    
    try {
      const res = await fetch(form.action, { method:'POST', body:new FormData(form), headers:{ Accept:'application/json' }});
      if (res.ok) { form.reset(); success && success.classList.add('show'); errEl && errEl.classList.remove('show'); }
      else throw new Error();
    } catch { 
      // If server post fails but we saved locally, we can still show success for local demo
      form.reset();
      success && success.classList.add('show');
      errEl && errEl.classList.remove('show');
    } finally { btn.disabled = false; btn.textContent = 'Send Message'; }
  });
}

function initBookingForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;
  const success = document.getElementById('booking-success');
  const errEl = document.getElementById('booking-error');
  const refIdEl = document.getElementById('booking-ref-id');
  
  // Set min date to today
  const dateInput = document.getElementById('booking-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    try {
      const name = document.getElementById('booking-name').value;
      const phone = document.getElementById('booking-phone').value;
      const email = document.getElementById('booking-email').value;
      const treatment = document.getElementById('booking-treatment').value;
      const date = document.getElementById('booking-date').value;
      const notes = document.getElementById('booking-notes').value || 'No extra notes.';
      
      const refId = 'SH-' + Math.floor(1000 + Math.random() * 9000);
      
      const list = JSON.parse(localStorage.getItem('sahara_bookings') || '[]');
      const newBooking = {
        id: refId,
        name,
        phone,
        email,
        treatment,
        date: new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),

        notes,
        createdAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        status: 'Pending'
      };
         list.unshift(newBooking);
      localStorage.setItem('sahara_bookings', JSON.stringify(list));
      
      // Save to customer-safe public registry (hides patient personal information)
      const publicRegistry = JSON.parse(localStorage.getItem('sahara_public_status') || '{}');
      publicRegistry[refId.toUpperCase()] = {
        status: 'Pending',
        treatment,
        date: new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      };
      localStorage.setItem('sahara_public_status', JSON.stringify(publicRegistry));
      
      localStorage.setItem('sahara_last_booking_id', refId);
      if (typeof renderTrackerHelper === 'function') {
        renderTrackerHelper();
      }
      
      if (refIdEl) refIdEl.textContent = refId;
      if (success) {
        success.style.display = 'flex';
        setTimeout(() => success.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
      }
      if (errEl) errEl.style.display = 'none';
      form.reset();
      
      // Reset the date field to today
      if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
      }
    } catch (err) {
      console.error(err);
      if (errEl) errEl.style.display = 'block';
      if (success) success.style.display = 'none';
    }
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

function performTrackerSearch(query) {
  const results = document.getElementById('tracker-results');
  if (!results) return;
  
  const formattedQuery = query.trim().toUpperCase();
  if (!formattedQuery) return;
  
  // Safe Lookup: read exclusively from public registry containing only non-sensitive schedule metadata
  const publicRegistry = JSON.parse(localStorage.getItem('sahara_public_status') || '{}');
  const found = publicRegistry[formattedQuery];
  
  results.style.display = 'block';
  results.style.opacity = '0';
  results.style.transform = 'translateY(10px)';
  results.style.transition = 'all 0.35s ease';
  
  if (found) {
    let statusColor = 'var(--rose-gold)';
    let statusBg = 'rgba(209,30,105,0.04)';
    let statusDesc = '';
    
    if (found.status === 'Pending') {
      statusColor = '#B27B00';
      statusBg = '#FFF9E6';
      statusDesc = 'Your request has been received and is currently under review by our medical coordination team. We will call or email you shortly to finalize your exact time slot.';
    } else if (found.status === 'Confirmed') {
      statusColor = '#00897B';
      statusBg = '#E6F8F5';
      statusDesc = 'Congratulations! Your appointment has been officially confirmed. We look forward to welcoming you at Sahara Skin Hospital. If you need to reschedule, please call our front desk directly at 986-1668445.';
    } else if (found.status === 'Completed') {
      statusColor = '#2E7D32';
      statusBg = '#E8F5E9';
      statusDesc = 'This consultation has been successfully completed. Thank you for choosing Dr. Prabin Dhakal and Sahara Skin Clinic for your skin health journey!';
    } else if (found.status === 'Cancelled') {
      statusColor = '#C62828';
      statusBg = '#FFEBEE';
      statusDesc = 'This appointment request has been cancelled or rejected. If you believe this is an error, would like to inquire about the cancellation, or want to schedule a new time slot, please call us directly at 986-1668445.';
    }
    
    results.innerHTML = `
      <div style="background: ${statusBg}; border-left: 4px solid ${statusColor}; border-radius: 12px; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; box-shadow: 0 4px 15px rgba(0,0,0,0.02); text-align: left;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="font-family: 'Playfair Display', serif; font-size: 1.15rem; color: var(--navy-dark); font-weight: 700; margin: 0 0 0.15rem 0;">Appointment Schedule</h4>
            <p style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500; margin: 0;">Reference ID: <strong style="font-family: monospace; color: var(--navy); font-size: 0.85rem;">${formattedQuery}</strong></p>
          </div>
          <span style="display: inline-flex; align-items: center; padding: 0.35rem 0.8rem; border-radius: 9999px; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; background: #fff; border: 1.5px solid ${statusColor}; color: ${statusColor};">
            ${found.status}
          </span>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; background: rgba(255,255,255,0.7); padding: 0.85rem 1.25rem; border-radius: 10px; border: 1px solid rgba(0,0,0,0.03);">
          <div>
            <p style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em; margin: 0;">Treatment Focus</p>
            <p style="font-size: 0.9rem; font-weight: 600; color: var(--navy-dark); margin: 0.15rem 0 0 0;">${found.treatment}</p>
          </div>
          <div>
            <p style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em; margin: 0;">Scheduled Date & Slot</p>
            <p style="font-size: 0.9rem; font-weight: 600; color: var(--navy-dark); margin: 0.15rem 0 0 0;">${found.date}</p>
          </div>
        </div>
        
        <div style="font-size: 0.85rem; line-height: 1.6; color: var(--text-body); font-weight: 500; margin: 0;">
          ${statusDesc}
        </div>
      </div>
    `;
  } else {
    results.innerHTML = `
      <div style="background: #FFEBEE; border-left: 4px solid #C62828; border-radius: 12px; padding: 1.5rem; display: flex; align-items: flex-start; gap: 1rem; text-align: left;">
        <div style="width: 32px; height: 32px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #C62828; flex-shrink: 0; border: 1px solid rgba(198,40,40,0.2);">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/></svg>
        </div>
        <div>
          <h4 style="font-family: 'Playfair Display', serif; font-size: 1.05rem; color: #C62828; font-weight: 700; margin: 0 0 0.15rem 0;">Reference ID Not Found</h4>
          <p style="font-size: 0.82rem; line-height: 1.5; color: #C62828; margin: 0;">
            We couldn't locate any appointment matching reference ID <strong style="font-family: monospace;">"${formattedQuery}"</strong> in our active database. Please double-check the spelling (e.g. SH-1234) or call our helpdesk for support.
          </p>
        </div>
      </div>
    `;
  }
  
  // Animate presentation
  setTimeout(() => {
    results.style.opacity = '1';
    results.style.transform = 'translateY(0)';
  }, 50);
}

function renderTrackerHelper() {
  const helper = document.getElementById('tracker-helper');
  if (!helper) return;
  const lastId = localStorage.getItem('sahara_last_booking_id');
  if (lastId) {
    helper.innerHTML = `Your recent booking ID is <a href="#" id="autofill-ref" style="color: var(--rose-gold); text-decoration: underline; font-weight: 600; font-family: monospace;">${lastId}</a>. Click to auto-fill and check status.`;
    helper.style.display = 'block';
    
    const autofillBtn = document.getElementById('autofill-ref');
    if (autofillBtn) {
      autofillBtn.addEventListener('click', e => {
        e.preventDefault();
        const input = document.getElementById('tracker-ref-id');
        if (input) {
          input.value = lastId;
          performTrackerSearch(lastId);
        }
      });
    }
  } else {
    helper.style.display = 'none';
  }
}

function initStatusTracker() {
  const form = document.getElementById('tracker-form');
  const input = document.getElementById('tracker-ref-id');
  if (!form || !input) return;
  
  renderTrackerHelper();
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    const query = input.value.trim();
    performTrackerSearch(query);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTreatments();
  initTreatmentModal();
  renderReviews();
  initCycler();
  initMarquee();
  initNavScroll();
  initActiveNav();
  initMobileMenu();
  initReveal();
  initBackToTop();
  initContactForm();
  initBookingForm();
  initStatusTracker();
  initSmoothScroll();
  setTimeout(initReveal, 50);
  console.log("Sahara Skin Clinic — Modernized v2.0.8 with Treatment Details Modal");
});
