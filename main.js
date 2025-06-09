document.addEventListener('DOMContentLoaded', () => {
    // Cargar elementos del dashboard en index.html
    if (document.getElementById('dashboard-grid-container')) {
        loadDashboardItems();
    }

    // Cargar asignaciones en asignaciones.html
    if (document.getElementById('asignaciones-container')) {
        loadItems(asignacionesData, 'asignaciones-container', createAsignacionCard);
        setupViewControls('asignaciones-container');
    }

    // Cargar laboratorios en laboratorios.html
    if (document.getElementById('laboratorios-container')) {
        loadItems(laboratoriosData, 'laboratorios-container', createLaboratorioCard);
        setupViewControls('laboratorios-container');
    }

    // Cargar parciales en parciales.html
    if (document.getElementById('parciales-container')) {
        loadItems(parcialesData, 'parciales-container', createParcialCard);
        setupViewControls('parciales-container');
    }

    // Cargar proyecto final en proyecto_final.html
    if (document.getElementById('proyecto-final-container')) {
        loadItems(proyectoFinalData, 'proyecto-final-container', createProyectoFinalCard);
        setupViewControls('proyecto-final-container');
    }
    
    const themeIcon = document.getElementById('theme-icon'); 

    function updateThemeIconsFA() { 
        if (!themeIcon) return;
        if (document.documentElement.classList.contains('dark')) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
    updateThemeIconsFA(); 

    const originalToggleTheme = window.toggleTheme; 
    window.toggleTheme = function() {
        if (typeof originalToggleTheme === 'function') {
            originalToggleTheme(); 
        }
        updateThemeIconsFA(); 
    }
    
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    let lastScrollTop = 0;
    const header = document.getElementById('main-header');
    if(header){
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
                header.classList.add('-translate-y-full');
            } else {
                header.classList.remove('-translate-y-full');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
        }, false);
    }

    if (document.getElementById('search-results-container')) {
        handleSearchResults();
    }
    highlightCurrentNavLink();
});

function loadDashboardItems() {
    const container = document.getElementById('dashboard-grid-container');
    if (!container || typeof dashboardSectionsData === 'undefined') return;
    container.innerHTML = ''; 

    dashboardSectionsData.forEach(item => {
        const cardLink = document.createElement('a');
        cardLink.href = item.link;
        cardLink.className = 'block p-6 bg-[var(--color-surface)] rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out group text-center';
        
        let visualContentHtml = '';
        if (item.iconClass) { // Usar Font Awesome si está definido
            visualContentHtml = '<div class="w-full h-32 flex items-center justify-center mb-4"><i class="' + item.iconClass + ' text-5xl text-[var(--color-primary)] group-hover:text-[var(--color-accent)] smooth-transition"></i></div>';
        } else if (item.imgSrc) { // Usar imagen si no hay icono
            visualContentHtml = '<img src="' + item.imgSrc + '" alt="' + item.title + '" class="w-full h-32 object-cover rounded-lg mb-4 group-hover:opacity-80 transition-opacity duration-300">';
        } else { // Placeholder si no hay ni icono ni imagen
             visualContentHtml = '<div class="w-full h-32 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 text-gray-400 dark:text-gray-500 text-2xl"><i class="fas fa-image"></i></div>';
        }

        cardLink.innerHTML = 
            visualContentHtml +
            '<h3 class="text-xl font-semibold text-[var(--color-accent)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">' + item.title + '</h3>' +
            '<p class="text-sm text-[var(--color-text-secondary)] mb-4 h-16 overflow-hidden text-ellipsis">' + item.description + '</p>' +
            '<span class="inline-block bg-[var(--color-primary)] text-white text-sm font-medium py-2.5 px-5 rounded-full group-hover:bg-[var(--color-accent)] transition-colors duration-300">Acceder</span>';
        container.appendChild(cardLink);
    });
}

function loadItems(data, containerId, cardCreatorFunction) {
    const container = document.getElementById(containerId);
    if (!container || typeof data === 'undefined') return;
    container.innerHTML = ''; 

    data.forEach(item => {
        const card = cardCreatorFunction(item);
        container.appendChild(card);
    });
}

function createGenericCard(item, typeSpecificContent = '') {
    const card = document.createElement('div');
    card.className = 'bg-[var(--color-surface)] rounded-xl shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-2xl';
    
    let imgHtml = '<img src="' + item.imgSrc + '" alt="' + item.titulo + '" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out">';
    
    let contentHtml = 
        '<div class="p-6 flex flex-col flex-grow">' +
            '<h3 class="text-xl font-semibold text-[var(--color-accent)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">' + item.titulo + '</h3>' +
            '<p class="text-sm text-[var(--color-text-secondary)] mb-3 flex-grow min-h-[60px]">' + item.descripcion + '</p>' +
            typeSpecificContent + 
        '</div>';

    let buttonHtml = 
        '<div class="p-6 pt-0 mt-auto">' + 
            '<a href="' + item.repoLink + '" target="_blank" class="inline-block w-full text-center bg-[var(--color-primary)] text-white font-medium py-2.5 px-5 rounded-full hover:bg-[var(--color-accent)] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">Ver Repositorio</a>' +
        '</div>';

    card.innerHTML = imgHtml + contentHtml + buttonHtml;
    return card;
}

function createAsignacionCard(item) {
    const specificContent = 
        '<p class="text-xs text-[var(--color-text-secondary)] mb-1"><strong>Actividades:</strong> ' + item.actividades + '</p>' +
        '<p class="text-xs text-[var(--color-text-secondary)] mb-4"><strong>Resultados:</strong> ' + item.resultados + '</p>';
    return createGenericCard(item, specificContent);
}

function createLaboratorioCard(item) {
    const specificContent = 
        '<p class="text-xs text-[var(--color-text-secondary)] mb-1"><strong>Actividades:</strong> ' + item.actividades + '</p>' +
        '<p class="text-xs text-[var(--color-text-secondary)] mb-4"><strong>Resultados:</strong> ' + item.resultados + '</p>';
    return createGenericCard(item, specificContent);
}

function createParcialCard(item) {
    const specificContent = 
        '<p class="text-xs text-[var(--color-text-secondary)] mb-4"><strong>Calificación:</strong> ' + item.calificacion + '</p>';
    return createGenericCard(item, specificContent);
}

function createProyectoFinalCard(item) {
    const specificContent = 
        '<p class="text-xs text-[var(--color-text-secondary)] mb-1"><strong>Actividades:</strong> ' + item.actividades + '</p>' +
        '<p class="text-xs text-[var(--color-text-secondary)] mb-4"><strong>Calificación:</strong> ' + item.calificacion + '</p>';
    return createGenericCard(item, specificContent);
}

function setupViewControls(containerId) {
    const gridViewButton = document.getElementById('grid-view-button');
    const listViewButton = document.getElementById('list-view-button');
    const container = document.getElementById(containerId);

    if (!gridViewButton || !listViewButton || !container) return;

    function updateViewButtonStyles(activeButton, inactiveButton) {
        activeButton.classList.remove('bg-gray-300', 'dark:bg-gray-700', 'text-[var(--color-text)]');
        activeButton.classList.add('bg-[var(--color-accent)]', 'text-white');
        
        inactiveButton.classList.remove('bg-[var(--color-accent)]', 'text-white');
        inactiveButton.classList.add('bg-gray-300', 'dark:bg-gray-700', 'text-[var(--color-text)]');
    }

    gridViewButton.addEventListener('click', () => {
        container.classList.remove('flex', 'flex-col', 'gap-6'); 
        container.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8'); 
        updateViewButtonStyles(gridViewButton, listViewButton);
        
        Array.from(container.children).forEach(card => {
            card.classList.remove('md:flex-row', 'md:items-center');
            const img = card.querySelector('img');
            if (img) {
                img.classList.remove('md:w-32', 'md:h-32', 'md:mr-6', 'md:mb-0', 'rounded-lg');
                img.classList.add('w-full', 'h-48');
            }
            const buttonDiv = card.querySelector('.p-6.pt-0.mt-auto');
            if (buttonDiv) {
                 buttonDiv.classList.remove('md:ml-auto', 'md:w-auto', 'md:mt-0');
                 const buttonLink = buttonDiv.querySelector('a');
                 if(buttonLink) buttonLink.classList.add('w-full');
            }
            const cardContent = card.querySelector('div.p-6.flex-col.flex-grow'); 
            if(cardContent) cardContent.classList.remove('md:text-left');
        });
    });

    listViewButton.addEventListener('click', () => {
        container.classList.remove('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8'); 
        container.classList.add('flex', 'flex-col', 'gap-6'); 
        updateViewButtonStyles(listViewButton, gridViewButton);
        
        Array.from(container.children).forEach(card => {
            card.classList.add('md:flex-row', 'md:items-center');
            const img = card.querySelector('img');
            if (img) {
                img.classList.remove('w-full', 'h-48');
                img.classList.add('md:w-32', 'md:h-32', 'md:mr-6', 'md:mb-0', 'rounded-lg');
            }
            const buttonDiv = card.querySelector('.p-6.pt-0.mt-auto');
            if(buttonDiv){
                buttonDiv.classList.add('md:ml-auto', 'md:w-auto', 'md:mt-0');
                const buttonLink = buttonDiv.querySelector('a');
                if(buttonLink) buttonLink.classList.remove('w-full');
            }
            const cardContent = card.querySelector('div.p-6.flex-col.flex-grow'); 
            if(cardContent) cardContent.classList.add('md:text-left');
        });
    });
    if(gridViewButton) gridViewButton.click(); 
}

function handleSearchResults() {
    const resultsContainer = document.getElementById('search-results-container');
    const queryDisplay = document.getElementById('search-query-display');
    const noResultsMessage = document.getElementById('no-results-message');

    if (!resultsContainer || !queryDisplay || !noResultsMessage) return;

    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    if (query) {
        queryDisplay.textContent = query;
        const searchTerm = query.toLowerCase();
        let foundItems = [];

        if (typeof asignacionesData !== 'undefined') {
            asignacionesData.forEach(item => {
                if (item.titulo.toLowerCase().includes(searchTerm) || 
                    item.descripcion.toLowerCase().includes(searchTerm) ||
                    item.actividades.toLowerCase().includes(searchTerm) ||
                    item.resultados.toLowerCase().includes(searchTerm)) {
                    foundItems.push({ ...item, type: 'Asignación', page: 'asignaciones.html' });
                }
            });
        }

        if (typeof laboratoriosData !== 'undefined') {
            laboratoriosData.forEach(item => {
                if (item.titulo.toLowerCase().includes(searchTerm) ||
                    item.descripcion.toLowerCase().includes(searchTerm) ||
                    item.actividades.toLowerCase().includes(searchTerm) ||
                    item.resultados.toLowerCase().includes(searchTerm)) {
                    foundItems.push({ ...item, type: 'Laboratorio', page: 'laboratorios.html' });
                }
            });
        }

        if (typeof parcialesData !== 'undefined') {
            parcialesData.forEach(item => {
                if (item.titulo.toLowerCase().includes(searchTerm) ||
                    item.descripcion.toLowerCase().includes(searchTerm)) {
                    foundItems.push({ ...item, type: 'Parcial', page: 'parciales.html' });
                }
            });
        }
        
        if (typeof proyectoFinalData !== 'undefined') {
            proyectoFinalData.forEach(item => {
                if (item.titulo.toLowerCase().includes(searchTerm) ||
                    item.descripcion.toLowerCase().includes(searchTerm) ||
                    item.actividades.toLowerCase().includes(searchTerm)) {
                    foundItems.push({ ...item, type: 'Proyecto Final', page: 'proyecto_final.html' });
                }
            });
        }

        if (foundItems.length > 0) {
            noResultsMessage.style.display = 'none';
            resultsContainer.innerHTML = ''; 
            foundItems.forEach(item => {
                const card = createSearchResultCard(item); 
                resultsContainer.appendChild(card);
            });
        } else {
            noResultsMessage.style.display = 'block';
            resultsContainer.innerHTML = ''; 
        }

    } else {
        queryDisplay.textContent = "ninguno";
        noResultsMessage.textContent = "Por favor, ingresa un término de búsqueda en la página de inicio.";
        noResultsMessage.style.display = 'block';
    }
}

function createSearchResultCard(item) {
    const card = document.createElement('div');
    card.className = 'bg-[var(--color-surface)] rounded-xl shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-2xl'; 
    let detailLink = item.repoLink !== '#' ? item.repoLink : item.page; 

    card.innerHTML = 
        '<img src="' + item.imgSrc + '" alt="' + item.titulo + '" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out">' +
        '<div class="p-6 flex flex-col flex-grow">' +
            '<h3 class="text-xl font-semibold text-[var(--color-accent)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">' + item.titulo + ' <span class="text-sm font-normal text-gray-500 dark:text-gray-400">(' + item.type + ')</span></h3>' +
            '<p class="text-sm text-[var(--color-text-secondary)] mb-3 flex-grow min-h-[60px]">' + item.descripcion.substring(0, 100) + '...</p>' +
        '</div>' +
        '<div class="p-6 pt-0 mt-auto">' +
             '<a href="' + detailLink + '" ' + ((item.repoLink !== '#') ? 'target="_blank"' : '') + ' class="inline-block w-full text-center bg-[var(--color-primary)] text-white font-medium py-2.5 px-5 rounded-full hover:bg-[var(--color-accent)] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">Ver Detalles</a>' +
        '</div>';
    return card;
}

function highlightCurrentNavLink() {
    const navLinks = document.querySelectorAll('#main-header nav a'); 
    if (!navLinks || navLinks.length === 0) return;
    
    const currentPage = window.location.pathname.split("/").pop() || "index.html"; 

    navLinks.forEach(link => {
        link.classList.remove('bg-[var(--color-primary)]', 'text-white', 'dark:text-gray-900', 'font-semibold', 'ring-2', 'ring-offset-2', 'ring-[var(--color-accent)]');
        link.classList.add('hover:bg-[var(--color-primary)]', 'hover:text-white', 'dark:hover:text-white');
        
        const linkPage = link.getAttribute('href').split("/").pop() || "index.html";
        if (linkPage === currentPage) {
            link.classList.add('bg-[var(--color-primary)]', 'text-white', 'dark:text-gray-900', 'font-semibold', 'ring-2', 'ring-offset-2', 'ring-[var(--color-accent)]');
            link.classList.remove('hover:bg-[var(--color-primary)]', 'hover:text-white', 'dark:hover:text-white');
        }
    });
}
