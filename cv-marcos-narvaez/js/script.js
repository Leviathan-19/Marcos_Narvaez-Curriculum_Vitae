// script.js - CV Web Marcos Narváez

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Theme Toggle (Dark/Light Mode) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggleBtn.querySelector('.icon');
    
    // Check localStorage for theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
    }

    // --- 2. Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- 3. Social Links Configuration ---
    const socialLinks = {
        github: "https://github.com/Leviathan-19", // Replace with real URL if known, assuming standard format or just github.com
        linkedin: "https://www.linkedin.com/in/marcos-narváez-guevara-2028113b0"
    };

    // Apply links to DOM
    const githubElements = document.querySelectorAll('[id^="github-link"]');
    const linkedinElements = document.querySelectorAll('[id^="linkedin-link"]');

    githubElements.forEach(el => el.href = socialLinks.github);
    linkedinElements.forEach(el => el.href = socialLinks.linkedin);


    // --- 4. Technologies Data ---
    const technologies = [
        // Lenguajes
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'C#', icon: 'devicon-csharp-plain' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain' },
        { name: 'Java', icon: 'devicon-java-plain' },
        { name: 'SQL', icon: 'devicon-azuresqldatabase-plain' },
        
        // Backend
        { name: 'ASP.NET Core', icon: 'devicon-dotnetcore-plain' },
        // { name: 'Entity Framework Core', icon: 'devicon-dot-net-plain-wordmark' }, // No exact devicon, using fallback
        { name: 'REST APIs', icon: 'devicon-express-original' }, // Representation
        // MVC, JWT, Microservicios are concepts, we might skip icons or use generic ones
        
        // Frontend / Mobile
        { name: 'HTML5', icon: 'devicon-html5-plain' },
        { name: 'CSS3', icon: 'devicon-css3-plain' },
        { name: 'Angular', icon: 'devicon-angularjs-plain' },
        { name: 'React Native', icon: 'devicon-react-original' },
        
        // Database / Cloud / Tools
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
        { name: 'Supabase', icon: 'devicon-supabase-plain' },
        { name: 'Docker', icon: 'devicon-docker-plain' },
        { name: 'Git', icon: 'devicon-git-plain' },
        { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' }
    ];

    const techContainer = document.getElementById('tech-container');
    
    technologies.forEach(tech => {
        const div = document.createElement('div');
        div.className = 'tech-item';
        div.innerHTML = `
            <i class="${tech.icon}"></i>
            <span>${tech.name}</span>
        `;
        techContainer.appendChild(div);
    });

    // --- 5. Projects Data ---
    const projects = [
        {
            title: "Client-Mapper-EC",
            description: "Aplicación móvil orientada a la gestión de clientes, establecimientos, rutas y visitas comerciales. Utiliza arquitectura offline-first.",
            technologies: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "PowerSync", "SQLite", "MapLibre"],
            image: "", // Placeholder trigger
            github: "https://github.com/Leviathan-19/Client-Mapper-EC",
            demo: ""
        },
        {
            title: "Ivanseg Extintores",
            description: "Sistema para la gestión y seguimiento de clientes, establecimientos, mantenimientos y visitas relacionadas con el mantenimiento de extintores.",
            technologies: ["Angular", "Node.js", "Express", "Prisma", "PostgreSQL", "Supabase", "Render"],
            image: "",
            github: "#", // Add URL if available
            demo: "#"
        },
        {
            title: "PetSense",
            description: "Proyecto enfocado en el análisis de emociones en perros mediante inteligencia artificial y visión por computador.",
            technologies: ["Python", "YOLO", "DINOv2", "Machine Learning"],
            image: "",
            github: "https://github.com/PetSense-Technologies/PetSense",
            demo: ""
        },
        {
            title: "SaveGogGames",
            description: "Proyecto orientado a obtener y organizar información de videojuegos mediante automatización web scraping.",
            technologies: ["TypeScript", "Node.js", "Playwright", "Web Scraping"],
            image: "",
            github: "#",
            demo: ""
        }
    ];

    const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
        const techBadges = project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('');
        
        let actions = `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">GitHub</a>`;
        if (project.demo && project.demo !== "#") {
            actions += `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Demo</a>`;
        }

        const imgHtml = project.image 
            ? `<img src="${project.image}" alt="${project.title}">` 
            : `<span>[Imagen del proyecto]</span>`;

        const card = document.createElement('div');
        card.className = 'project-card card';
        card.innerHTML = `
            <div class="project-image">
                ${imgHtml}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-techs">
                    ${techBadges}
                </div>
                <div class="project-links">
                    ${actions}
                </div>
            </div>
        `;
        projectsContainer.appendChild(card);
    });

    // --- 6. Placeholder Image Logic for Profile ---
    const profileImg = document.getElementById('profile-img');
    const imageOverlay = document.querySelector('.image-overlay');
    
    // Hide overlay if image successfully loads
    profileImg.addEventListener('load', function() {
        // If it's a real image and not just the alt text breaking
        if(this.naturalWidth > 0) {
            imageOverlay.style.display = 'none';
        }
    });

    profileImg.addEventListener('error', function() {
        this.style.display = 'none';
        imageOverlay.style.display = 'flex';
    });
});
