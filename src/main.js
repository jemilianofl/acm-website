/**
 * ACM UPIITA — main.js
 * Vanilla JS: Navbar, Particles, Members (marquee + grid), Events, Scroll reveal
 */

/* =============================================
   DATA
   ============================================= */
const MEMBERS = [
  {
    name: 'Valeria Varelas',
    role: 'Chair',
    photo: '/member_photos/valeria_varelas.jpg',
    github: 'https://github.com/avilavarelaslidiavaleria-pixel',
    linkedin: 'https://www.linkedin.com/in/lidia-valeria-avila-varelas-9a5631303/',
  },
  {
    name: 'Enrique Hernández',
    role: 'Vice Chair',
    photo: '/member_photos/enrique_hernandez.jpg',
    github: 'https://github.com/HdezAlpha20028',
    linkedin: 'https://www.linkedin.com/in/enrique-hern%C3%A1ndez-romero-ba9b74383/',
  },
  {
    name: 'Erwin Daowz',
    role: 'Treasurer',
    photo: '/member_photos/erwin_daowz.jpg',
    github: '#',
    linkedin: 'https://www.linkedin.com/in/erwin-enrique-daowz-laguna-48a8a3325/',
  },
  {
    name: 'Danae Alvarez',
    role: 'Lead de Social Media',
    photo: '/member_photos/danae_alvarez.jpg',
    github: '#',
    linkedin: 'https://mx.linkedin.com/in/danae-alvarez-297145285',
  },
  {
    name: 'Diego Paz',
    role: 'Co-Lead de Social Media',
    photo: '/member_photos/diego_paz.jpg',
    github: 'https://github.com/DieGOAzael',
    linkedin: 'https://www.linkedin.com/in/diego-azael-pérez-paz-7894533ab',
  },
  {
    name: 'Isaac Gámez',
    role: 'Social Media',
    photo: '/member_photos/isaac_gamez.jpg',
    github: 'https://github.com/Qbiit',
    linkedin: 'https://www.linkedin.com/in/isaacgamezg/',
  },
  {
    name: 'Eddie Zapata',
    role: 'Software Developer',
    photo: '/member_photos/eddie_zapata.jpg',
    github: 'https://github.com/EddieZC20',
    linkedin: 'https://www.linkedin.com/in/eddie-zapata-b31748340/',
  },
  {
    name: 'America Montaño',
    role: 'Member',
    photo: '/member_photos/america_montaño.jpg',
    github: 'https://github.com/caitmeri',
    linkedin: 'https://www.linkedin.com/in/montaño-mata-america-itzel-a128982b2',
  },
  {
    name: 'Joseph Romero',
    role: 'Social Media',
    photo: '/member_photos/joseph_romero.jpg',
    github: '#',
    linkedin: 'https://www.linkedin.com/in/joseph-romero-tapia-09883a258',
  },
  {
    name: 'Jesús Cerecedo',
    role: 'Member',
    photo: '/member_photos/jesus_cerecedo.jpg',
    github: 'https://github.com/JesusCCGG',
    linkedin: 'https://www.linkedin.com/in/jesus-cerecedo',
  },
  {
    name: 'Emiliano Flores',
    role: 'Software Developer',
    photo: '/member_photos/emiliano_flores.jpeg',
    github: 'https://github.com/jemilianofl',
    linkedin: 'https://www.linkedin.com/in/jemiliano-flores/',
  },
  {
    name: 'Dr. Miguel Félix',
    role: 'Faculty Advisor',
    photo: '/member_photos/miguel_felix.jpg',
    github: '#',
    linkedin: '#',
  },
];

const EVENTS = [
  {
    title: 'Reclutamiento',
    description: '¡Únete a nuestro equipo! Prepara tu CV y tu creatividad para nuestro proceso de selección. Fecha límite: 26 de Marzo del 2026',
    date: '16 de Marzo del 2026',
    status: 'In progress',
    link: '/reclutamiento.html',
  },
  {
    title: 'Taller de Notion”',
    description: 'Aprovecha esta oportunidad para aprender a usar notion con nosotros, y de paso conocer a los miembros del capítulo.',
    date: '13 de abril de 2026',
    status: 'upcoming',
  },
  {
    title: 'Taller GitHub',
    description: '¡Aprende a usar GitHub con nosotros!',
    date: '27 de Marzo del 2026',
    status: 'past',
  },
  {
    title: 'Movie Night - PRESENTACION CHAPTER',
    description: '¡Ven a ver una peli con nosotros en el auditorio de UPIITA, y conoce a los miembros del capítulo!',
    date: '11 de Marzo del 2026',
    status: 'past',
  },
  {
    title: 'Google Event 2026',
    description: '¡Google llega a UPIITA! Ven y conoce a una de las empresas líderes en tecnología del mundo. Trae tu CV para tener la oportunidad de ser contratado y hacer networking con reclutadores de Google.',
    date: '17 de Marzo del 2026',
    status: 'past',
  },
];

/* =============================================
   NAVBAR — scroll effect + mobile
   ============================================= */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const ham = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  const navAnchors = document.querySelectorAll('.nav-link');

  // Scroll: add .scrolled class
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  ham.addEventListener('click', () => {
    const open = ham.classList.toggle('open');
    links.classList.toggle('open', open);
  });

  // Close menu on link click
  navAnchors.forEach(a => {
    a.addEventListener('click', () => {
      ham.classList.remove('open');
      links.classList.remove('open');
    });
  });

  // Active section highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchors.forEach(a => a.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach(s => observer.observe(s));
}

/* =============================================
   HERO PARTICLES
   ============================================= */
function initParticles() {
  const container = document.getElementById('heroParticles');
  const COUNT = 28;
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement('span');
    p.classList.add('particle');
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top:  ${Math.random() * 100}%;
      --dur:   ${4 + Math.random() * 6}s;
      --delay: ${Math.random() * 6}s;
    `;
    container.appendChild(p);
  }
}

/* =============================================
   MEMBERS
   ============================================= */

function buildMemberCard(member) {
  const githubLink = member.github && member.github !== '#'
    ? `<a class="member-link" href="${member.github}" target="_blank" rel="noopener">GitHub</a>`
    : '';
  const linkedinLink = member.linkedin && member.linkedin !== '#'
    ? `<a class="member-link" href="${member.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`
    : '';
  const linksHtml = (githubLink || linkedinLink)
    ? `<div class="member-links">${githubLink}${linkedinLink}</div>`
    : '';

  return `
    <div class="member-card" data-animate>
      <img class="member-avatar" src="${member.photo}" alt="${member.name}" loading="lazy" />
      <div class="member-name">${member.name}</div>
      <div class="member-role">${member.role}</div>
      ${linksHtml}
    </div>
  `;
}

function initMembers() {
  // --- Full grid ---
  const grid = document.querySelector('.members-grid');
  grid.innerHTML = MEMBERS.map(buildMemberCard).join('');
}

/* =============================================
   EVENTS
   ============================================= */
function buildEventCard(event) {
  let badgeText = '';
  if (event.status === 'upcoming') badgeText = 'Próximo';
  else if (event.status === 'past') badgeText = 'Pasado';
  else if (event.status === 'In progress') badgeText = 'En curso';
  else badgeText = event.status;

  // Creamos una clase CSS segura para el status (ej. "In progress" -> "in-progress")
  const statusClass = event.status.toLowerCase().replace(' ', '-');

  // Botón opcional si existe el link
  const isExternal = event.link && event.link.startsWith('http');
  const linkHtml = event.link
    ? `<a href="${event.link}"${isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''} class="btn btn-primary" style="margin-top: 16px; padding: 10px 24px; font-size: 0.85rem;">Ver más / Registro</a>`
    : '';

  return `
    <div class="event-card" data-animate>
      <div class="event-header">
        <span class="event-badge ${statusClass}">${badgeText}</span>
        <span class="event-date">${event.date}</span>
      </div>
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      ${linkHtml}
    </div>
  `;
}

function initEvents() {
  const grid = document.getElementById('eventsGrid');
  grid.innerHTML = EVENTS.map(buildEventCard).join('');
}

/* =============================================
   SCROLL REVEAL
   ============================================= */
function initScrollReveal() {
  const allTargets = document.querySelectorAll('[data-animate]');

  // Mark elements as needing animation (they start visible without this class)
  allTargets.forEach(el => el.classList.add('will-animate'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const siblings = entry.target.parentElement.querySelectorAll('[data-animate]');
          let delay = 0;
          siblings.forEach((el, idx) => {
            if (el === entry.target) delay = idx * 80;
          });
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  allTargets.forEach(el => observer.observe(el));

  // Re-observe dynamic nodes (member/event cards added after DOMContentLoaded)
  setTimeout(() => {
    document.querySelectorAll('[data-animate]:not([data-observed])').forEach(el => {
      el.classList.add('will-animate');
      el.setAttribute('data-observed', '1');
      observer.observe(el);
    });
  }, 300);
}

/* =============================================
   SMOOTH SCROLL for anchor links
   ============================================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* =============================================
   BOOT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initParticles();
  initMembers();
  initEvents();
  initSmoothScroll();
  // Scroll reveal runs last so all dynamic nodes exist
  setTimeout(initScrollReveal, 100);
});
