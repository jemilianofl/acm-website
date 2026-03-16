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
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Enrique Díaz',
    role: 'Vice Chair',
    photo: '/member_photos/enrique_hernandez.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Erwin Daowz',
    role: 'Treasurer',
    photo: '/member_photos/erwin_daowz.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Danae Álvarez',
    role: 'Lead de Social Media',
    photo: '/member_photos/danae_alvarez.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Diego Paz',
    role: 'Co-Lead de Social Media',
    photo: '/member_photos/diego_paz.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Isaac Gámez',
    role: 'Social Media',
    photo: '/member_photos/isaac_gamez.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Eddie Zapata',
    role: 'Desarrollo de Software',
    photo: '/member_photos/eddie_zapata.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'America Montaño',
    role: 'Member',
    photo: '/member_photos/america_montaño.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Joseph Romero',
    role: 'Social Media',
    photo: '/member_photos/joseph_romero.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Jesús Cerecedo',
    role: 'Member',
    photo: '/member_photos/jesus_cerecedo.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    name: 'Emiliano Flores',
    role: 'Desarollo de Software',
    photo: '/member_photos/emiliano_flores.jpeg',
    github: '#',
    linkedin: '#',
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
    link: 'https://forms.gle/tB4tXLdq8yqes8BU8',
  },
  {
    title: 'Google Event 2026',
    description: '¡Google llega a UPIITA! Ven y conoce a una de las empresas líderes en tecnología del mundo. Trae tu CV para tener la oportunidad de ser contratado y hacer networking con reclutadores de Google.',
    date: '17 de Marzo del 2026',
    status: 'upcoming',
  },
  {
    title: 'Reel #1 “Un día siendo ingeniero de ACM”',
    description: '¡Conoce cómo es un día en la vida de un estdudiante de ingeniería de ACM!',
    date: '20 de Marzo del 2026',
    status: 'upcoming',
  },
  {
    title: 'Taller GitHub',
    description: '¡Aprende a usar GitHub con nosotros!',
    date: '27 de Marzo del 2026',
    status: 'upcoming',
  },
  {
    title: 'Movie Night - PRESENTACION CHAPTER',
    description: '¡Ven a ver una peli con nosotros en el auditorio de UPIITA, y conoce a los miembros del capítulo!',
    date: '11 de Marzo del 2026',
    status: 'past',
  }
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
  return `
    <div class="member-card" data-animate>
      <img class="member-avatar" src="${member.photo}" alt="${member.name}" loading="lazy" />
      <div class="member-name">${member.name}</div>
      <div class="member-role">${member.role}</div>
      <div class="member-links">
        <a class="member-link" href="${member.github}" target="_blank" rel="noopener">GitHub</a>
        <a class="member-link" href="${member.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
      </div>
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
  const linkHtml = event.link
    ? `<a href="${event.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-top: 16px; padding: 10px 24px; font-size: 0.85rem;">Ver más / Registro</a>`
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
