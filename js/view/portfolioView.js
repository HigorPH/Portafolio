export class PortfolioView {
  renderHero(personalInfo, stats) {
    return `
      <section class="hero" id="inicio">
        <div class="container hero-content">
          <div class="hero-text hidden">
            <small class="badge">Disponible para nuevos proyectos</small>
            <h1>Hola, soy <span class="gradient-text">${personalInfo.name}</span><br>${personalInfo.role}</h1>
            <p>${personalInfo.intro}</p>

            <div class="hero-buttons">
              <a href="#proyectos" class="btn btn-primary">Ver Proyectos</a>
              <a href="#contacto" class="btn btn-secondary">Contactar</a>
            </div>

            <div class="hero-stats">
              ${stats.map(stat => `
                <div class="stat-box">
                  <strong>${stat.number}</strong>
                  <span>${stat.label}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="hero-image hidden">
            <div class="photo-card">
              <div class="photo-frame">
                <img src="${personalInfo.photo}" alt="Foto de ${personalInfo.name}" onerror="this.src='https://via.placeholder.com/280x280?text=Profile'">
              </div>
              <h3>${personalInfo.name}</h3>
              <p class="role-badge">${personalInfo.role}</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderAbout(personalInfo, skills) {
    return `
      <section class="section" id="sobre-mi">
        <div class="container hidden">
          <h2 class="section-title">Sobre <span class="gradient-text">mí</span></h2>
          <div class="about-grid">
            <article class="about-card">
              <h3>Mi Filosofía</h3>
              <p>${personalInfo.about}</p>
              <p style="margin-top: 1rem; color: var(--text-muted);">
                Enfoque en soluciones escalables, rendimiento optimizado y una experiencia de usuario impecable.
              </p>
            </article>

            <article class="about-card">
              <h3>Stack Tecnológico</h3>
              <div class="skills">
                ${skills.map(skill => `<span class="skill">${skill}</span>`).join("")}
              </div>
            </article>
          </div>
        </div>
      </section>
    `;
  }

  renderProjects(projects) {
    return `
      <section class="section" id="proyectos">
        <div class="container hidden">
          <h2 class="section-title">Proyectos <span class="gradient-text">Destacados</span></h2>
          
          <div class="projects-container">
            <div class="projects-carousel">
              ${projects.map(project => `
                <article class="project-card">
                  <div class="project-header">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                  </div>
                  <div class="project-body">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                      ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
                    </div>
                    <div class="project-footer">
                      <a href="${project.demo}" target="_blank" class="link-btn">Explorar Proyecto</a>
                      <a href="${project.code}" target="_blank" class="link-secondary">Código</a>
                    </div>
                  </div>
                </article>
              `).join("")}
            </div>

            <div class="carousel-controls">
              <button class="carousel-btn prev-btn" aria-label="Anterior">←</button>
              <button class="carousel-btn next-btn" aria-label="Siguiente">→</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderContact(personalInfo) {
    return `
      <section class="section" id="contacto">
        <div class="container hidden">
          <div class="contact-card">
            <h2 class="section-title">Gracias por ver y espero poder colaborar contigo</h2>
            
            <div class="contact-links">
              <a href="mailto:${personalInfo.email}" class="contact-pill">
                <span>Email:</span> ${personalInfo.email}
              </a>
              <a href="${personalInfo.linkedin}" target="_blank" class="contact-pill">
                <span>LinkedIn</span>
              </a>
              <a href="${personalInfo.github}" target="_blank" class="contact-pill">
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderApp(data) {
    return `
      ${this.renderHero(data.personalInfo, data.stats)}
      ${this.renderAbout(data.personalInfo, data.skills)}
      ${this.renderProjects(data.projects)}
      ${this.renderContact(data.personalInfo)}
    `;
  }
}