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
    const techCategories = [
        {
            category: "Lenguajes",
            items: [
                { name: 'Python', icon: 'devicon-python-plain' },
                { name: 'TypeScript', icon: 'devicon-typescript-plain' },
                { name: 'JavaScript', icon: 'devicon-javascript-plain' },
                { name: 'C#', icon: 'devicon-csharp-plain' },
                { name: 'Dart', icon: 'devicon-dart-plain' }
            ]
        },
        {
            category: "Frontend",
            items: [
                { name: 'Angular', icon: 'devicon-angularjs-plain' },
                { name: 'React', icon: 'devicon-react-original' },
                { name: 'React Native', icon: 'devicon-react-original' },
                { name: 'Expo', icon: 'devicon-react-original' }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: 'Node.js', icon: 'devicon-nodejs-plain' },
                { name: 'Express.js', icon: 'devicon-express-original' },
                { name: 'TypeScript', icon: 'devicon-typescript-plain' },
                { name: '.NET 8', icon: 'devicon-dotnetcore-plain' },
                { name: 'ASP.NET Core', icon: 'devicon-dotnetcore-plain' },
                { name: 'Prisma', icon: 'devicon-prisma-original' } // Fallback generic if not found
            ]
        },
        {
            category: "Bases de datos",
            items: [
                { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
                { name: 'Supabase', icon: 'devicon-supabase-plain' },
                { name: 'MySQL', icon: 'devicon-mysql-plain' },
                { name: 'SQLite', icon: 'devicon-sqlite-plain' }
            ]
        },
        {
            category: "Cloud & DevOps",
            items: [
                { name: 'Supabase', icon: 'devicon-supabase-plain' },
                { name: 'Render', icon: 'devicon-amazonwebservices-plain-wordmark' },
                { name: 'Railway', icon: 'devicon-amazonwebservices-plain-wordmark' },
                { name: 'EAS', icon: 'devicon-react-original' },
                { name: 'GitHub', icon: 'devicon-github-original' },
                { name: 'GitHub Actions', icon: 'devicon-github-original' },
                { name: 'Docker', icon: 'devicon-docker-plain' }
            ]
        },
        {
            category: "Mobile",
            items: [
                { name: 'React Native', icon: 'devicon-react-original' },
                { name: 'Expo', icon: 'devicon-react-original' },
                { name: 'Flutter', icon: 'devicon-flutter-plain' },
                { name: 'Android SDK', icon: 'devicon-android-plain' }
            ]
        },
        {
            category: "IA & Computer Vision",
            items: [
                { name: 'Python', icon: 'devicon-python-plain' },
                { name: 'PyTorch', icon: 'devicon-pytorch-plain' },
                { name: 'YOLO', icon: 'devicon-python-plain' },
                { name: 'DINOv2', icon: 'devicon-python-plain' },
                { name: 'embeddings', icon: 'devicon-python-plain' }
            ]
        },
        {
            category: "GIS & Geolocation",
            items: [
                { name: 'MapLibre', icon: 'devicon-javascript-plain' },
                { name: 'OpenFreeMap', icon: 'devicon-javascript-plain' },
                { name: 'OpenStreetMap', icon: 'devicon-javascript-plain' },
                { name: 'GPS', icon: 'devicon-javascript-plain' },
                { name: 'Expo Location', icon: 'devicon-react-original' }
            ]
        },
        {
            category: "Tools",
            items: [
                { name: 'VS Code', icon: 'devicon-vscode-plain' },
                { name: 'Visual Studio', icon: 'devicon-visualstudio-plain' },
                { name: 'Android Studio', icon: 'devicon-androidstudio-plain' },
                { name: 'Git', icon: 'devicon-git-plain' },
                { name: 'GitHub', icon: 'devicon-github-original' },
                { name: 'Antigravity', icon: 'devicon-google-plain' }
            ]
        }
    ];

    const techContainer = document.getElementById('tech-container');
    
    techCategories.forEach(categoryData => {
        // Create category wrapper
        const sectionWrapper = document.createElement('div');
        sectionWrapper.className = 'tech-category-section';
        sectionWrapper.style.marginBottom = '3rem';

        // Create category title
        const title = document.createElement('h3');
        title.className = 'tech-category-title';
        title.textContent = categoryData.category;
        title.style.marginBottom = '1.5rem';
        title.style.color = 'var(--text-primary)';
        title.style.borderBottom = '1px solid var(--border-color)';
        title.style.paddingBottom = '0.5rem';

        // Create grid for items
        const grid = document.createElement('div');
        grid.className = 'tech-grid';

        categoryData.items.forEach(tech => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'tech-item';
            itemDiv.innerHTML = `
                <i class="${tech.icon}"></i>
                <span>${tech.name}</span>
            `;
            grid.appendChild(itemDiv);
        });

        sectionWrapper.appendChild(title);
        sectionWrapper.appendChild(grid);
        techContainer.appendChild(sectionWrapper);
    });

    // --- 5. Projects Data ---
    const projects = [
        {
            title: "Client-Mapper-EC",
            description: "Aplicación móvil orientada a la gestión de clientes, establecimientos, rutas y visitas comerciales. Utiliza arquitectura offline-first.",
            technologies: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "PowerSync", "SQLite", "MapLibre"],
            image: "cv-marcos-narvaez/assets/projects/ClientMapperEC.png",
            github: "https://github.com/Leviathan-19/Client-Mapper-EC",
            demo: ""
        },
        {
            title: "PetSense",
            description: "Proyecto enfocado en el análisis de emociones en perros mediante inteligencia artificial y visión por computador.",
            technologies: ["Python", "YOLO", "DINOv2", "Machine Learning"],
            image: "cv-marcos-narvaez/assets/projects/PetSense.jpg",
            github: "https://github.com/PetSense-Technologies/PetSense",
            demo: ""
        },
        {
            title: "SaveGogGames",
            description: "Proyecto orientado a obtener y organizar información del sitio web gog-games-to mediante técnicas de automatización web scraping.",
            technologies: ["TypeScript", "Node.js", "Playwright", "Web Scraping"],
            image: "cv-marcos-narvaez/assets/projects/gog-games.webp",
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
