const dashboardSectionsData = [
    {
        id: 'dashAsig',
        title: 'Asignaciones',
        description: 'Explora las 15 asignaciones desarrolladas durante el curso.',
        imgSrc: 'https://placehold.co/600x400/14B8A6/FFFFFF?text=Asignaciones',
        iconClass: 'fas fa-clipboard-list',
        link: 'asignaciones.html'
    },
    {
        id: 'dashLabs',
        title: 'Laboratorios',
        description: 'Descubre los 15 laboratorios prácticos realizados.',
        imgSrc: 'https://placehold.co/600x400/0D9488/FFFFFF?text=Labs',
        iconClass: 'fas fa-flask',
        link: 'laboratorios.html'
    },
    {
        id: 'dashParc',
        title: 'Parciales',
        description: 'Revisa los 3 parciales y sus soluciones.',
        imgSrc: 'https://placehold.co/600x400/0F766E/FFFFFF?text=Parciales',
        iconClass: 'fas fa-file-alt',
        link: 'parciales.html'
    },
    {
        id: 'dashProy',
        title: 'Proyecto Final',
        description: 'Conoce el proyecto final integrador del semestre.',
        imgSrc: 'https://placehold.co/600x400/2DD4BF/111827?text=Proyecto',
        iconClass: 'fas fa-star',
        link: 'proyecto_final.html'
    },
    {
        id: 'dashAcerca',
        title: 'Acerca de Mí',
        description: 'Más información sobre mí y mi contacto.',
        imgSrc: 'perfil.jpg',
        iconClass: 'fas fa-user-circle',
        link: 'acerca_de_mi.html'
    }
];

const asignacionesData = [
    {
        id: 'asig1',
        imgSrc: 'https://linuxiac.b-cdn.net/wp-content/uploads/2023/12/top-github-program-languages.jpg',
        titulo: 'Pagina Web de Github',
        descripcion: 'Desarrollo de un portafolio digital interactivo para el curso de Inteligencia Artificial, utilizando HTML, CSS y JavaScript. El proyecto fue versionado con Git, alojado en un repositorio de GitHub y desplegado como un sitio estático a través de GitHub Pages para su acceso público.',
        repoLink: 'https://meliperez21.github.io/Tarea-1/'
    },
    {
        id: 'asig2',
        imgSrc: 'tarea2.jpg',
        titulo: 'Titanic Spaceship',
        descripcion: 'Este proyecto aborda un problema de clasificación para predecir si un pasajero fue transportado a otra dimensión durante una colisión. Se realizó un análisis exploratorio de datos (EDA), preprocesamiento de características y la implementación de varios modelos de Machine Learning para encontrar la solución más precisa.',
        repoLink: 'https://github.com/Meliperez21/Tarea-2/blob/main/Tarea2_resultados.ipynb'
    },
    {
        id: 'asig3',
        imgSrc: 'tarea3.jpg',
        titulo: 'Modelo de Clustering',
        descripcion: 'Aplicación de algoritmos de clustering no supervisado para identificar y analizar grupos o patrones ocultos en un conjunto de datos, permitiendo una segmentación efectiva.',
        repoLink: 'https://github.com/Meliperez21/Tarea-3/blob/main/modelo_clustering.ipynb'
    },
    {
        id: 'asig4',
        imgSrc: 'tarea4.png',
        titulo: 'Modelo de Clasificación Predictiva',
        descripcion: 'Implementación de un modelo de clasificación para predecir resultados basados en datos históricos.',
        repoLink: 'https://github.com/Meliperez21/Tarea-4/blob/main/Tarea_4_Melissa_Perez.ipynb'
    }
];

const laboratoriosData = [
    {
        id: 'lab1',
        imgSrc: 'https://res.cloudinary.com/dte7upwcr/image/upload/f_auto,c_limit,w_3840,q_10/v1721932793/blog/blog2/github-o-que-e/image_header-github-o-que-e.jpg',
        titulo: 'Perfil de GitHub con Overview',
        descripcion: 'Configuración inicial del entorno de desarrollo y control de versiones. Esto incluyó la creación de una cuenta de GitHub, la personalización del perfil con un `README.md` detallado (Overview) y la creación del primer repositorio para gestionar los proyectos del curso, sentando las bases para el trabajo colaborativo y el seguimiento del progreso.',
        repoLink: 'https://github.com/Meliperez21'
    },
    {
        id: 'lab2',
        imgSrc: 'lab2.jpg',
        titulo: 'Clasificación Binaria en ML',
        descripcion: 'Implementación de un modelo de clasificación binaria desde cero. El laboratorio cubrió el preprocesamiento de datos, la selección y entrenamiento de un modelo como la regresión logística, y la evaluación de su rendimiento utilizando métricas clave como la precisión, el recall y la matriz de confusión para resolver un problema de predicción de "sí o no".',
        repoLink: 'https://github.com/Meliperez21/Laboratorio-2/blob/main/Laboratorio%202%20-%20Desarrollado%20-%20Melissa%20P%C3%A9rez.ipynb'
    },
    {
        id: 'lab3',
        imgSrc: 'lab3.jpg',
        titulo: 'Predicción de Bicicletas',
        descripcion: 'Desarrollo de un modelo de regresión para predecir la demanda de alquiler de bicicletas, utilizando datos históricos y variables externas como el clima para optimizar la disponibilidad.',
        repoLink: 'https://github.com/Meliperez21/Laboratorio-3/blob/main/Laboratorio%202%20-%20Alquiler%20de%20Bicicletas.ipynb'
    },
    {
        id: 'lab4',
        imgSrc: 'lab4.png',
        titulo: 'Análisis Exploratorio de Datos',
        descripcion: 'Análisis y visualización de datos para extraer insights y patrones relevantes.',
        repoLink: 'https://github.com/Meliperez21/Laboratorio-4/blob/main/Laboratorio_4_Melissa_Perez.ipynb'
    }
];

const parcialesData = [
    {
        id: 'parcial1',
        imgSrc: 'midterm.png',
        titulo: 'Mid-Term Project: RadiologyAI',
        descripcion: 'Desarrollo de un modelo de IA para el análisis de imágenes radiológicas y detección de anomalías.',
        repoLink: 'https://github.com/Meliperez21/Mid-Term-Project-/blob/main/RadiologyAI.ipynb'
    }
];
const proyectoFinalData = [];
