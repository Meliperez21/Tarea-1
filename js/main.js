document.addEventListener('DOMContentLoaded', () => {
    // --- SELECTORES DE ELEMENTOS ---
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const mainContent = document.getElementById('main-content');
    const themeSwitch = document.getElementById('theme-switch');
    const searchInput = document.getElementById('search-input');
    const projectsContainer = document.getElementById('projects-container');
    const projectsViewport = document.getElementById('projects-viewport');
    const paginationContainer = document.getElementById('project-pagination');
    const prevProjectBtn = document.getElementById('prev-project');
    const nextProjectBtn = document.getElementById('next-project');

    // --- DATOS ---
    // Combinar todos los proyectos en un solo array
    const allProjects = [
        ...asignacionesData,
        ...laboratoriosData,
        ...parcialesData,
        ...proyectoFinalData
    ].map((item, index) => ({ ...item, uniqueId: `proj-${index}` })); // Añadir un ID único

    // --- MANEJO DEL SIDEBAR ---
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            document.body.classList.toggle('sidebar-open');
            sidebar.classList.toggle('-translate-x-full');
            
            // Cambiar icono del botón
            const icon = sidebarToggle.querySelector('i');
            if (document.body.classList.contains('sidebar-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- MANEJO DEL TEMA ---
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            if (themeSwitch) themeSwitch.checked = true;
        } else {
            document.documentElement.classList.remove('dark');
            if (themeSwitch) themeSwitch.checked = false;
        }
    };

    if (themeSwitch) {
        themeSwitch.addEventListener('change', (e) => {
            const theme = e.target.checked ? 'dark' : 'light';
            applyTheme(theme);
            localStorage.setItem('theme', theme);
        });
    }

    // Aplicar tema guardado al cargar la página
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);

    // --- GENERACIÓN DE PROYECTOS ---
    const createProjectCard = (project) => {
        const card = document.createElement('div');
        card.className = 'project-card'; // La clase principal
        card.dataset.id = project.uniqueId;

        card.innerHTML = `
            <img src="${project.imgSrc}" alt="Imagen de ${project.titulo}" class="project-card-image">
            <div class="project-card-content">
                <h3>${project.titulo}</h3>
                <p>${project.descripcion}</p>
                <a href="${project.repoLink}" target="_blank" rel="noopener noreferrer">Ver Repositorio</a>
            </div>
        `;
        return card;
    };

    const populateProjects = (projects) => {
        if (!projectsContainer) return;
        projectsContainer.innerHTML = '';
        projects.forEach(project => {
            const card = createProjectCard(project);
            projectsContainer.appendChild(card);
        });
    };

    // Poblar la cuadrícula de proyectos al cargar
    populateProjects(allProjects);

    // --- GENERACIÓN DE PAGINACIÓN ---
    const createPagination = () => {
        if (!paginationContainer) return;
        paginationContainer.innerHTML = '';
        allProjects.forEach((_, index) => {
            const indicator = document.createElement('span');
            indicator.className = 'pagination-indicator';
            indicator.dataset.index = index;
            paginationContainer.appendChild(indicator);
        });
    };

    createPagination();

    // --- BÚSQUEDA Y FILTRADO ---
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredProjects = allProjects.filter(project => 
                project.titulo.toLowerCase().includes(searchTerm) ||
                project.descripcion.toLowerCase().includes(searchTerm)
            );
            populateProjects(filteredProjects);
        });
    }

    // --- ANIMACIONES CON GSAP ---
    gsap.registerPlugin(ScrollTrigger);

    // 1. Animación del Hero Section
    const heroTimeline = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1 }
    });

    heroTimeline
        .from('#hero h1', { opacity: 0, y: 30, delay: 0.2 })
        .from('#hero p', { opacity: 0, y: 20 }, '-=0.8');

    // 2. Animación de aparición de secciones con ScrollTrigger
    const sections = document.querySelectorAll('section:not(#hero)');

    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%', // La animación comienza cuando la sección está al 80% de la vista
                end: 'bottom 20%',
                toggleActions: 'play none none none', // 'play', 'pause', 'resume', 'reset'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // 3. Lógica del Slider de Proyectos (deshabilitada para depuración)
    const setupSlider = () => {
        let currentProjectIndex = 0;
        const projectCards = document.querySelectorAll('.project-card');
        const paginationIndicators = document.querySelectorAll('.pagination-indicator');

        if (projectCards.length === 0) return; // No hacer nada si no hay proyectos

        const showProject = (index) => {
            // Validar el índice
            if (index >= projectCards.length) {
                index = 0;
            } else if (index < 0) {
                index = projectCards.length - 1;
            }

            // Transición de tarjetas
            projectCards.forEach((card, i) => {
                const isActive = i === index;
                card.classList.toggle('active', isActive);
            });

            // Actualizar indicadores de paginación
            paginationIndicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });

            // Actualizar el índice actual
            currentProjectIndex = index;
        };

        if (nextProjectBtn) {
            nextProjectBtn.addEventListener('click', () => {
                showProject(currentProjectIndex + 1);
            });
        }

        if (prevProjectBtn) {
            prevProjectBtn.addEventListener('click', () => {
                showProject(currentProjectIndex - 1);
            });
        }

        paginationIndicators.forEach(indicator => {
            indicator.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index, 10);
                showProject(index);
            });
        });

        // Inicializar el slider mostrando el primer proyecto
        showProject(0);
    };

    // Inicializar el slider después de crear los elementos
    setupSlider();
});
