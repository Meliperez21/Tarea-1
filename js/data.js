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
        imgSrc: 'https://github.com/Meliperez21/Tarea-1/blob/bbc68af2345f760f91d4430a35d8f390b9534af3/perfil.jpg',
        iconClass: 'fas fa-user-circle',
        link: 'acerca_de_mi.html'
    }
];

const asignacionesData = [
    {
        id: 'asig1',
        imgSrc: 'https://linuxiac.b-cdn.net/wp-content/uploads/2023/12/top-github-program-languages.jpg',
        titulo: 'Asignación 1: Pagina Web de Github',
        descripcion: 'Crear una página web en GitHub que sea un portafolio del curso de Inteligencia Artificial.',
        actividades: 'Hacer el código del portafolio, subirlo a GitHub en un repositorio para la asignación 1 y publicarlo como página web en GitHub Pages.',
        resultados: 'Se creó un página web de GitHub con éxito.',
        repoLink: 'https://github.com/Meliperez21/Tarea-1' 
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

const laboratoriosData = [
    {
        id: 'lab1',
        imgSrc: 'https://res.cloudinary.com/dte7upwcr/image/upload/f_auto,c_limit,w_3840,q_10/v1721932793/blog/blog2/github-o-que-e/image_header-github-o-que-e.jpg',
        titulo: 'Laboratorio 1',
        descripcion: 'Crear un perfil de GitHub con Overview y crear el primer repositorio de la Tarea 1.',
        actividades: 'Crear primero el perfil de GitHub, modificar la información personal y crear el primer repositorio para subir la asignación 1 de la página web.',
        resultados: 'Se pudo crear un perfil de GitHub y un repositorio con éxito.',
        repoLink: 'https://github.com/Meliperez21'
    },
    {
        id: 'lab2',
        imgSrc: 'https://placehold.co/400x300/0D9488/FFFFFF?text=Laboratorio+2',
        titulo: 'Laboratorio 2',
        descripcion: 'Descripción del laboratorio 2. Crear un perfil de github con repositorios.',
        actividades: 'Crear primero el repositorio para subir la asignacion 2.',
        resultados: 'Se pudo crear un perfil de github con repositorios con exito 2.',
        repoLink: '#'
    },
    {
        id: 'lab3',
        imgSrc: 'https://placehold.co/400x300/0D9488/FFFFFF?text=Laboratorio+3',
        titulo: 'Laboratorio 3',
        descripcion: 'Descripción del laboratorio 3. Crear un perfil de github con repositorios.',
        actividades: 'Crear primero el repositorio para subir la asignacion 3.',
        resultados: 'Se pudo crear un perfil de github con repositorios con exito 3.',
        repoLink: '#'
    },
    {
        id: 'lab4',
        imgSrc: 'https://placehold.co/400x300/0D9488/FFFFFF?text=Laboratorio+4',
        titulo: 'Laboratorio 4',
        descripcion: 'Descripción del laboratorio 4. Crear un perfil de github con repositorios.',
        actividades: 'Crear primero el repositorio para subir la asignacion 4.',
        resultados: 'Se pudo crear un perfil de github con repositorios con exito 4.',
        repoLink: '#'
    },
    {
        id: 'lab5',
        imgSrc: 'https://placehold.co/400x300/0D9488/FFFFFF?text=Laboratorio+5',
        titulo: 'Laboratorio 5',
        descripcion: 'Descripción del laboratorio 5. Crear un perfil de github con repositorios.',
        actividades: 'Crear primero el repositorio para subir la asignacion 5.',
        resultados: 'Se pudo crear un perfil de github con repositorios con exito 5.',
        repoLink: '#'
    },
    {
        id: 'lab6',
        imgSrc: 'https://placehold.co/400x300/0D9488/FFFFFF?text=Laboratorio+6',
        titulo: 'Laboratorio 6',
        descripcion: 'Descripción del laboratorio 6. Crear un perfil de github con repositorios.',
        actividades: 'Crear primero el repositorio para subir la asignacion 6.',
        resultados: 'Se pudo crear un perfil de github con repositorios con exito 6.',
        repoLink: '#'
    },
    {
        id: 'lab7',
        imgSrc: 'https://placehold.co/400x300/0D9488/FFFFFF?text=Laboratorio+7',
        titulo: 'Laboratorio 7',
        descripcion: 'Descripción del laboratorio 7. Crear un perfil de github con repositorios.',
        actividades: 'Crear primero el repositorio para subir la asignacion 7.',
        resultados: 'Se pudo crear un perfil de github con repositorios con exito 7.',
        repoLink: '#'
    },
    {
        id: 'lab8',
        imgSrc: 'https://placehold.co/400x300/0D9488/FFFFFF?text=Laboratorio+8',
        titulo: 'Laboratorio 8',
        descripcion: 'Descripción del laboratorio 8. Crear un perfil de github con repositorios.',
        actividades: 'Crear primero el repositorio para subir la asignacion 8.',
        resultados: 'Se pudo crear un perfil de github con repositorios con exito 8.',
        repoLink: '#'
    },
    {
        id: 'lab9',
        imgSrc: 'https://placehold.co/400x300/0D9488/FFFFFF?text=Laboratorio+9',
        titulo: 'Laboratorio 9',
        descripcion: 'Descripción del laboratorio 9. Crear un perfil de github con repositorios.',
        actividades: 'Crear primero el repositorio para subir la asignacion 9.',
        resultados: 'Se pudo crear un perfil de github con repositorios con exito 9.',
        repoLink: '#'
    },
    {
        id: 'lab10',
        imgSrc: 'https://placehold.co/400x300/0D9488/FFFFFF?text=Laboratorio+10',
        titulo: 'Laboratorio 10',
        descripcion: 'Descripción del laboratorio 10. Crear un perfil de github con repositorios.',
        actividades: 'Crear primero el repositorio para subir la asignacion 10.',
        resultados: 'Se pudo crear un perfil de github con repositorios con exito 10.',
        repoLink: '#'
    },
    {
        id: 'lab11',
        imgSrc: 'https://placehold.co/400x300/0D9488/FFFFFF?text=Laboratorio+11',
        titulo: 'Laboratorio 11',
        descripcion: 'Descripción del laboratorio 11. Crear un perfil de github con repositorios.',
        actividades: 'Crear primero el repositorio para subir la asignacion 11.',
        resultados: 'Se pudo crear un perfil de github con repositorios con exito 11.',
        repoLink: '#'
    },
    {
        id: 'lab12',
        imgSrc: 'https://placehold.co/400x300/0D9488/FFFFFF?text=Laboratorio+12',
        titulo: 'Laboratorio 12',
        descripcion: 'Descripción del laboratorio 12. Crear un perfil de github con repositorios.',
        actividades: 'Crear primero el repositorio para subir la asignacion 12.',
        resultados: 'Se pudo crear un perfil de github con repositorios con exito 12.',
        repoLink: '#'
    },
    {
        id: 'lab13',
        imgSrc: 'https://placehold.co/400x300/0D9488/FFFFFF?text=Laboratorio+13',
        titulo: 'Laboratorio 13',
        descripcion: 'Descripción del laboratorio 13. Crear un perfil de github con repositorios.',
        actividades: 'Crear primero el repositorio para subir la asignacion 13.',
        resultados: 'Se pudo crear un perfil de github con repositorios con exito 13.',
        repoLink: '#'
    },
    {
        id: 'lab14',
        imgSrc: 'https://placehold.co/400x300/0D9488/FFFFFF?text=Laboratorio+14',
        titulo: 'Laboratorio 14',
        descripcion: 'Descripción del laboratorio 14. Crear un perfil de github con repositorios.',
        actividades: 'Crear primero el repositorio para subir la asignacion 14.',
        resultados: 'Se pudo crear un perfil de github con repositorios con exito 14.',
        repoLink: '#'
    },
    {
        id: 'lab15',
        imgSrc: 'https://placehold.co/400x300/0D9488/FFFFFF?text=Laboratorio+15',
        titulo: 'Laboratorio 15',
        descripcion: 'Descripción del laboratorio 15. Crear un perfil de github con repositorios.',
        actividades: 'Crear primero el repositorio para subir la asignacion 15.',
        resultados: 'Se pudo crear un perfil de github con repositorios con exito 15.',
        repoLink: '#'
    }
];

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
