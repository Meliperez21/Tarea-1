// Datos para el Dashboard en la Página Principal
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
        imgSrc: 'https://placehold.co/600x400/5EEAD4/111827?text=Sobre+Mi',
        iconClass: 'fas fa-user-circle',
        link: 'acerca_de_mi.html'
    }
];

// Datos para la sección de Asignaciones (definidos individualmente)
const asignacionesData = [
    {
        id: 'asig1',
        imgSrc: 'https://placehold.co/400x300/14B8A6/FFFFFF?text=Asignacion+1',
        titulo: 'Asignación 1: Introducción y Configuración',
        descripcion: 'Configuración del entorno de desarrollo y primeros pasos con los conceptos básicos de IA.',
        actividades: 'Instalación de software, revisión de documentación, ejemplo "Hola Mundo" adaptado a IA.',
        resultados: 'Entorno configurado y comprensión inicial de las herramientas.',
        repoLink: 'https://github.com/Meliperez21/Tarea-1' // Enlace específico
    },
    {
        id: 'asig2',
        imgSrc: 'https://placehold.co/400x300/14B8A6/FFFFFF?text=Asignacion+2',
        titulo: 'Asignación 2',
        descripcion: 'Descripción detallada de la asignación 2. Aquí se explican los objetivos y el contexto.',
        actividades: 'Actividades realizadas en la asignación 2: Diseño, implementación, pruebas, etc.',
        resultados: 'Resultados obtenidos y lecciones aprendidas en la asignación 2.',
        repoLink: '#'
    },
    {
        id: 'asig3',
        imgSrc: 'https://placehold.co/400x300/14B8A6/FFFFFF?text=Asignacion+3',
        titulo: 'Asignación 3',
        descripcion: 'Descripción detallada de la asignación 3. Aquí se explican los objetivos y el contexto.',
        actividades: 'Actividades realizadas en la asignación 3: Diseño, implementación, pruebas, etc.',
        resultados: 'Resultados obtenidos y lecciones aprendidas en la asignación 3.',
        repoLink: '#'
    },
    {
        id: 'asig4',
        imgSrc: 'https://placehold.co/400x300/14B8A6/FFFFFF?text=Asignacion+4',
        titulo: 'Asignación 4',
        descripcion: 'Descripción detallada de la asignación 4. Aquí se explican los objetivos y el contexto.',
        actividades: 'Actividades realizadas en la asignación 4: Diseño, implementación, pruebas, etc.',
        resultados: 'Resultados obtenidos y lecciones aprendidas en la asignación 4.',
        repoLink: '#'
    },
    {
        id: 'asig5',
        imgSrc: 'https://placehold.co/400x300/14B8A6/FFFFFF?text=Asignacion+5',
        titulo: 'Asignación 5',
        descripcion: 'Descripción detallada de la asignación 5. Aquí se explican los objetivos y el contexto.',
        actividades: 'Actividades realizadas en la asignación 5: Diseño, implementación, pruebas, etc.',
        resultados: 'Resultados obtenidos y lecciones aprendidas en la asignación 5.',
        repoLink: '#'
    },
    {
        id: 'asig6',
        imgSrc: 'https://placehold.co/400x300/14B8A6/FFFFFF?text=Asignacion+6',
        titulo: 'Asignación 6',
        descripcion: 'Descripción detallada de la asignación 6. Aquí se explican los objetivos y el contexto.',
        actividades: 'Actividades realizadas en la asignación 6: Diseño, implementación, pruebas, etc.',
        resultados: 'Resultados obtenidos y lecciones aprendidas en la asignación 6.',
        repoLink: '#'
    },
    {
        id: 'asig7',
        imgSrc: 'https://placehold.co/400x300/14B8A6/FFFFFF?text=Asignacion+7',
        titulo: 'Asignación 7',
        descripcion: 'Descripción detallada de la asignación 7. Aquí se explican los objetivos y el contexto.',
        actividades: 'Actividades realizadas en la asignación 7: Diseño, implementación, pruebas, etc.',
        resultados: 'Resultados obtenidos y lecciones aprendidas en la asignación 7.',
        repoLink: '#'
    },
    {
        id: 'asig8',
        imgSrc: 'https://placehold.co/400x300/14B8A6/FFFFFF?text=Asignacion+8',
        titulo: 'Asignación 8',
        descripcion: 'Descripción detallada de la asignación 8. Aquí se explican los objetivos y el contexto.',
        actividades: 'Actividades realizadas en la asignación 8: Diseño, implementación, pruebas, etc.',
        resultados: 'Resultados obtenidos y lecciones aprendidas en la asignación 8.',
        repoLink: '#'
    },
    {
        id: 'asig9',
        imgSrc: 'https://placehold.co/400x300/14B8A6/FFFFFF?text=Asignacion+9',
        titulo: 'Asignación 9',
        descripcion: 'Descripción detallada de la asignación 9. Aquí se explican los objetivos y el contexto.',
        actividades: 'Actividades realizadas en la asignación 9: Diseño, implementación, pruebas, etc.',
        resultados: 'Resultados obtenidos y lecciones aprendidas en la asignación 9.',
        repoLink: '#'
    },
    {
        id: 'asig10',
        imgSrc: 'https://placehold.co/400x300/14B8A6/FFFFFF?text=Asignacion+10',
        titulo: 'Asignación 10',
        descripcion: 'Descripción detallada de la asignación 10. Aquí se explican los objetivos y el contexto.',
        actividades: 'Actividades realizadas en la asignación 10: Diseño, implementación, pruebas, etc.',
        resultados: 'Resultados obtenidos y lecciones aprendidas en la asignación 10.',
        repoLink: '#'
    },
    {
        id: 'asig11',
        imgSrc: 'https://placehold.co/400x300/14B8A6/FFFFFF?text=Asignacion+11',
        titulo: 'Asignación 11',
        descripcion: 'Descripción detallada de la asignación 11. Aquí se explican los objetivos y el contexto.',
        actividades: 'Actividades realizadas en la asignación 11: Diseño, implementación, pruebas, etc.',
        resultados: 'Resultados obtenidos y lecciones aprendidas en la asignación 11.',
        repoLink: '#'
    },
    {
        id: 'asig12',
        imgSrc: 'https://placehold.co/400x300/14B8A6/FFFFFF?text=Asignacion+12',
        titulo: 'Asignación 12',
        descripcion: 'Descripción detallada de la asignación 12. Aquí se explican los objetivos y el contexto.',
        actividades: 'Actividades realizadas en la asignación 12: Diseño, implementación, pruebas, etc.',
        resultados: 'Resultados obtenidos y lecciones aprendidas en la asignación 12.',
        repoLink: '#'
    },
    {
        id: 'asig13',
        imgSrc: 'https://placehold.co/400x300/14B8A6/FFFFFF?text=Asignacion+13',
        titulo: 'Asignación 13',
        descripcion: 'Descripción detallada de la asignación 13. Aquí se explican los objetivos y el contexto.',
        actividades: 'Actividades realizadas en la asignación 13: Diseño, implementación, pruebas, etc.',
        resultados: 'Resultados obtenidos y lecciones aprendidas en la asignación 13.',
        repoLink: '#'
    },
    {
        id: 'asig14',
        imgSrc: 'https://placehold.co/400x300/14B8A6/FFFFFF?text=Asignacion+14',
        titulo: 'Asignación 14',
        descripcion: 'Descripción detallada de la asignación 14. Aquí se explican los objetivos y el contexto.',
        actividades: 'Actividades realizadas en la asignación 14: Diseño, implementación, pruebas, etc.',
        resultados: 'Resultados obtenidos y lecciones aprendidas en la asignación 14.',
        repoLink: '#'
    },
    {
        id: 'asig15',
        imgSrc: 'https://placehold.co/400x300/14B8A6/FFFFFF?text=Asignacion+15',
        titulo: 'Asignación 15',
        descripcion: 'Descripción detallada de la asignación 15. Aquí se explican los objetivos y el contexto.',
        actividades: 'Actividades realizadas en la asignación 15: Diseño, implementación, pruebas, etc.',
        resultados: 'Resultados obtenidos y lecciones aprendidas en la asignación 15.',
        repoLink: '#'
    }
];

// Datos para la sección de Laboratorios (definidos individualmente)
const laboratoriosData = [];
for (let i = 1; i <= 15; i++) { // Mantengo el bucle para la cantidad, pero el contenido es genérico
    laboratoriosData.push({
        id: 'lab' + i,
        imgSrc: 'https://placehold.co/400x300/0D9488/FFFFFF?text=Laboratorio+' + i,
        titulo: 'Laboratorio ' + i,
        descripcion: 'Descripción del laboratorio ' + i + '. Enfoque en la experimentación y aplicación práctica.',
        actividades: 'Pasos y actividades desarrolladas durante el laboratorio ' + i + '.',
        resultados: 'Hallazgos y conclusiones del laboratorio ' + i + '.',
        repoLink: '#'
    });
}

// Datos para la sección de Parciales (definidos individualmente)
const parcialesData = [
    {
        id: 'parcial1',
        imgSrc: 'https://placehold.co/400x300/0F766E/FFFFFF?text=Parcial+1',
        titulo: 'Parcial 1',
        descripcion: 'Contenido y temas evaluados en el parcial 1.',
        calificacion: 'N/A',
        repoLink: '#'
    },
    {
        id: 'parcial2',
        imgSrc: 'https://placehold.co/400x300/0F766E/FFFFFF?text=Parcial+2',
        titulo: 'Parcial 2',
        descripcion: 'Contenido y temas evaluados en el parcial 2.',
        calificacion: 'N/A',
        repoLink: '#'
    },
    {
        id: 'parcial3',
        imgSrc: 'https://placehold.co/400x300/0F766E/FFFFFF?text=Parcial+3',
        titulo: 'Parcial 3',
        descripcion: 'Contenido y temas evaluados en el parcial 3.',
        calificacion: 'N/A',
        repoLink: '#'
    }
];

// Datos para la sección de Proyecto Final
const proyectoFinalData = [
    {
        id: 'proyFinal1',
        imgSrc: 'https://placehold.co/400x300/2DD4BF/111827?text=Proyecto+Final',
        titulo: 'Proyecto Final de Inteligencia Artificial',
        descripcion: 'Descripción exhaustiva del proyecto final, incluyendo el problema abordado, la metodología y las tecnologías utilizadas.',
        actividades: 'Fases del proyecto: Investigación, diseño, desarrollo, pruebas y documentación.',
        calificacion: 'N/A',
        repoLink: '#'
    }
];
