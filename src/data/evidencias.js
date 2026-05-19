export const unidades = [
  {
    id: 1,
    titulo: "Introducción y Fundamentos de Cómputo en la Nube",
    descripcion: "Conceptos básicos, modelos de servicio (IaaS, PaaS, SaaS) y modelos de implementación.",
    icono: "cloud",
    actividades: [
      {
        id: 1,
        titulo: "1.1 Arquitectura de red de computadoras.",
        fecha: "06/02/2026",
        descripcion: "Modelo de entrega de recursos informáticos (servidores, almacenamiento y apps) bajo demanda vía Internet, eliminando la gestión física.",
        aprendizaje: "Existen tres modelos de servicio (IaaS, PaaS, SaaS) y cuatro de implementación (Pública, Privada, Híbrida y Multinube) según el control necesario.",
        reflexion: "La nube democratiza el acceso a tecnología avanzada y escalabilidad, pero exige una gestión crítica de la seguridad y costos para ser eficiente.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "1.1 Arquitectura de Red",
            url: "/unidades/U1/1.1Arquitectura de Red Ruiz Alvarez Mauro Rodrigo .pdf",
          },
        ],
      },
      {
        id: 2,
        titulo: "1.2 Síntesis de las Características de concepto de Cómputo en la Nube.",
        fecha: "04/02/2026",
        descripcion: "Análisis de las características esenciales del cómputo en la nube según el NIST: autoservicio bajo demanda, acceso amplio a la red, agrupación de recursos, elasticidad rápida y medición del servicio.",
        aprendizaje: "Las cinco características esenciales definidas por el NIST proporcionan un marco claro para identificar un servicio como cómputo en la nube, destacando la elasticidad y la medición como diferenciadores clave.",
        reflexion: "Comprender estas características es fundamental para evaluar si una solución tecnológica realmente aprovecha los beneficios de la nube o si solo usa el término como etiqueta de marketing.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "1.2 Características del Cómputo en la Nube",
            url: "/unidades/U1/1.2 Características Ruiz Alvarez Mauro Rodrigo .pdf",
          },
        ],
      },
      {
        id: 3,
        titulo: "1.3 Ventajas, Desventajas y Riesgos del Cómputo en la Nube",
        fecha: "05/02/2026",
        descripcion: "Identificación de las principales ventajas (escalabilidad, reducción de costos, acceso global), desventajas (dependencia de internet, costos a largo plazo) y riesgos (seguridad, privacidad, vendor lock-in).",
        aprendizaje: "La adopción de la nube implica un análisis costo-beneficio donde factores como el tipo de carga de trabajo, los requisitos regulatorios y la estrategia de salida determinan si es la opción adecuada.",
        reflexion: "Migrar a la nube no es una decisión binaria; muchas organizaciones se benefician de un enfoque híbrido que combine lo mejor de ambos mundos según sus necesidades específicas.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "1.3 Ventajas, Desventajas y Riesgos",
            url: "/unidades/U1/1.3 ventajas y desventajas Ruiz Alvarez Mauro Rodrigo .pdf",
          },
        ],
      },
      {
        id: 4,
        titulo: "1.4 Mapa mental de los elementos del Cómputo en la Nube",
        fecha: "09/02/2026",
        descripcion: "Elaboración de un mapa mental que integra los conceptos fundamentales: modelos de servicio (IaaS, PaaS, SaaS), modelos de implementación (pública, privada, híbrida, comunitaria) y características esenciales.",
        aprendizaje: "Visualizar jerárquicamente los componentes del cómputo en la nube ayuda a comprender las relaciones entre los distintos modelos y cómo se complementan entre sí.",
        reflexion: "Los mapas mentales son una herramienta de estudio efectiva para internalizar conceptos abstractos y establecer conexiones significativas entre ellos.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "1.4 Mapa mental",
            url: "/unidades/U1/1.4 Mapa mental Ruiz Alvarez Mauro Rodrigo .pdf",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    titulo: "Arquitectura de la nube",
    descripcion: "Plataformas básicas (AWS, IBM Cloud) y especializadas (Azure, Google App Engine), herramientas de gestión y motores de base de datos.",
    icono: "server",
    actividades: [
      {
        id: 1,
        titulo: "2.1 Explorar la plataforma AWS",
        fecha: "13/02/2026",
        descripcion: "Exploración práctica de Amazon Web Services, incluyendo EC2, S3 y la consola de administración, comprendiendo los servicios fundamentales de cómputo, almacenamiento y red.",
        aprendizaje: "AWS ofrece la mayor variedad de servicios y regiones a nivel global, con un modelo de pago por uso que permite escalar desde proyectos pequeños hasta cargas empresariales.",
        reflexion: "La curva de aprendizaje de AWS es pronunciada dada su amplitud de servicios, pero su documentación extensa y comunidad activa facilitan la resolución de problemas.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "2.1 Explorar AWS",
            url: "/unidades/U2/2-1 Explorar la plataforma AWS.pdf",
          },
        ],
      },
      {
        id: 2,
        titulo: "2.2 Explorar plataforma Google Cloud",
        fecha: "20/02/2026",
        descripcion: "Exploración de Google Cloud Platform (GCP), enfocándose en Compute Engine, Cloud Storage y BigQuery, así como las herramientas de machine learning integradas.",
        aprendizaje: "GCP se destaca por sus capacidades nativas de análisis de datos y machine learning, además de su infraestructura de red de alta velocidad y precios competitivos.",
        reflexion: "La integración de GCP con herramientas de código abierto como Kubernetes lo convierte en una opción atractiva para equipos que buscan portabilidad y evitar vendor lock-in.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "2.2 Explorando Google Cloud",
            url: "/unidades/U2/2.2 Explorando Google Cloud.pdf",
          },
        ],
      },
      {
        id: 3,
        titulo: "2.3 Actividad GitHub",
        fecha: "25/02/2026",
        descripcion: "Uso de GitHub como plataforma de control de versiones y colaboración para el desarrollo de proyectos en la nube, incluyendo repositorios, ramas y pull requests.",
        aprendizaje: "GitHub facilita el trabajo colaborativo mediante ramas, forks y pull requests, permitiendo integrar cambios de múltiples desarrolladores de forma controlada.",
        reflexion: "El control de versiones es una práctica indispensable en cualquier proyecto de software, y GitHub añade una capa de colaboración social que mejora la revisión de código.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "2.3 Actividad GitHub",
            url: "/unidades/U2/2.3 Actividad GitHub Ruiz Alvarez y Sanchez Fraustro.pdf",
          },
        ],
      },
      {
        id: 4,
        titulo: "2.4 Explorar la plataforma MS Azure",
        fecha: "22/03/2026",
        descripcion: "Exploración de Microsoft Azure, abarcando máquinas virtuales, Azure DevOps, Active Directory y la integración con el ecosistema Microsoft.",
        aprendizaje: "Azure se integra profundamente con el ecosistema empresarial de Microsoft (Office 365, Active Directory), facilitando la adopción en organizaciones que ya usan estas herramientas.",
        reflexion: "La fortaleza de Azure en el entorno empresarial radica en su capacidad de hibridación con infraestructuras on-premise y su soporte para cargas de trabajo de Windows Server.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "2.4 Explorar MS Azure",
            url: "/unidades/U2/2_4_Explorar_la_plataforma_MS_Azure.pdf",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    titulo: "Consideraciones para el desarrollo",
    descripcion: "Aspectos básicos del desarrollo en la nube vs desarrollo tradicional, consideraciones para análisis y diseño, herramientas de desarrollo e instalación.",
    icono: "layers",
    actividades: [
      {
        id: 1,
        titulo: "3.1 Sinopsis de los microservicios y flujo DevOps",
        fecha: "26/02/2026",
        descripcion: "Análisis de la arquitectura de microservicios como alternativa al monolítico, y su relación con las prácticas DevOps para integración y despliegue continuos.",
        aprendizaje: "Los microservicios permiten desarrollar, desplegar y escalar componentes de forma independiente, mientras que DevOps automatiza el pipeline de entrega para mayor velocidad y confiabilidad.",
        reflexion: "Adoptar microservicios sin una cultura DevOps sólida puede aumentar la complejidad operativa; ambas prácticas deben implementarse juntas para obtener beneficios reales.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "3.1 Sinopsis microservicios y DevOps",
            url: "/unidades/U3/3.1 Sinopsis de los microservicios y flujo de devops Ruiz Alvarez Mauro Rodrigo .pdf",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    titulo: "Seguridad",
    descripcion: "Modelo de referencia de la nube, consideraciones y riesgos, opciones de seguridad, técnicas de gestión de identidad y principales amenazas.",
    icono: "shield",
    actividades: [
      {
        id: 1,
        titulo: "4.1 Práctica de seguridad informática — escalada de privilegios",
        fecha: "05/03/2026",
        descripcion: "Ejercicio práctico de escalada de privilegios en entornos Linux, identificando vulnerabilidades de configuración y permisos que permiten elevar privilegios.",
        aprendizaje: "Las configuraciones incorrectas de permisos, archivos SUID mal asignados y servicios con privilegios excesivos son vectores comunes de escalada de privilegios.",
        reflexion: "La seguridad por capas y el principio de mínimo privilegio son fundamentales para prevenir que un atacante pueda escalar privilegios incluso si compromete una cuenta inicial.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "4.1 Escalada de privilegios",
            url: "/unidades/U4/4.1 Práctica de seguridad informática escalada de privilegios.pdf",
          },
        ],
      },
      {
        id: 2,
        titulo: "4.2 Demostrar la inyección SQL",
        fecha: "19/03/2026",
        descripcion: "Demostración práctica de ataques de inyección SQL sobre aplicaciones web, mostrando cómo un input malicioso puede manipular consultas a la base de datos.",
        aprendizaje: "La inyección SQL ocurre cuando datos no confiables se concatenan directamente en consultas SQL; el uso de consultas parametrizadas y ORMs mitiga este riesgo.",
        reflexion: "A pesar de ser una vulnerabilidad conocida desde hace décadas, la inyección SQL sigue siendo una de las más comunes debido a malas prácticas de desarrollo.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "4.2 Inyección SQL",
            url: "/unidades/U4/4.2 Demostrar la inyección SQL.pdf",
          },
        ],
      },
      {
        id: 3,
        titulo: "4.3 Seguridad (hardening) en servidor web Apache 2",
        fecha: "20/03/2026",
        descripcion: "Aplicación de medidas de hardening sobre un servidor Apache 2, incluyendo configuración segura de módulos, cabeceras HTTP, cifrado TLS y control de acceso.",
        aprendizaje: "El hardening de servidores web implica deshabilitar módulos innecesarios, configurar cabeceras de seguridad (HSTS, CSP, X-Frame-Options) y cifrar comunicaciones con TLS.",
        reflexion: "Un servidor web seguro no solo depende de la configuración inicial, sino de un proceso continuo de actualización y monitoreo para responder a nuevas vulnerabilidades.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "4.3 Hardening Apache 2",
            url: "/unidades/U4/4.3 Seguridad (hardening) en servidor web Apache 2.pdf",
          },
        ],
      },
      {
        id: 4,
        titulo: "4.5 Comandos Dorks de Google",
        fecha: "09/03/2026",
        descripcion: "Uso de Google Dorks (operadores de búsqueda avanzada) para identificar información expuesta involuntariamente en sitios web y servidores.",
        aprendizaje: "Los operadores como site:, filetype:, intitle: e inurl: permiten refinar búsquedas para encontrar archivos sensibles, paneles de administración y exposiciones de datos.",
        reflexion: "Los Google Dorks son una herramienta de doble filo: útiles para que administradores encuentren sus propias exposiciones, pero también accesibles para atacantes.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "4.5 Comandos Dorks de Google",
            url: "/unidades/U4/4.5 Comandos Dorks de Google Mauro Rodrigo Ruiz Alvarez .pdf",
          },
        ],
      },
      {
        id: 5,
        titulo: "4.6 Lluvia de conceptos de los aspectos de la ciberseguridad en la nube",
        fecha: "11/03/2026",
        descripcion: "Identificación y organización de los principales conceptos de ciberseguridad aplicados al cómputo en la nube: confidencialidad, integridad, disponibilidad, autenticación y autorización.",
        aprendizaje: "La responsabilidad compartida es el modelo de seguridad en la nube: el proveedor asegura la infraestructura, mientras que el cliente es responsable de la seguridad dentro de sus recursos.",
        reflexion: "La falta de visibilidad y control directo sobre la infraestructura física en la nube hace que la gestión de identidades y accesos sea la principal línea de defensa.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "4.6 Ciberseguridad en la nube",
            url: "/unidades/U4/4.6 Lluvia de conceptos de los aspectos de la ciberseguridad en la nube.pdf",
          },
        ],
      },
      {
        id: 6,
        titulo: "4.7 Encontrar la contraseña (OverTheWire)",
        fecha: "11/03/2026",
        descripcion: "Resolución de los niveles iniciales del juego Bandit de OverTheWire, aplicando comandos básicos de Linux para encontrar contraseñas ocultas.",
        aprendizaje: "El manejo de comandos como ssh, find, grep y la navegación del sistema de archivos son habilidades fundamentales para la administración de sistemas y la seguridad informática.",
        reflexion: "Estos ejercicios demuestran que la seguridad no siempre depende de exploits complejos; a veces la información está expuesta por malas prácticas como permisos incorrectos.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "4.7 OverTheWire",
            url: "/unidades/U4/4.7 Encontrar la contraseña (overthewire).pdf",
          },
        ],
      },
      {
        id: 7,
        titulo: "4.8 Amenazas y Riesgos en Cómputo en la Nube",
        fecha: "19/03/2026",
        descripcion: "Análisis de las principales amenazas y riesgos de seguridad en entornos cloud, incluyendo violaciones de datos, pérdida de control, interfaces inseguras y secuestro de cuentas.",
        aprendizaje: "El Top Threats de la Cloud Security Alliance identifica violaciones de datos, configuración incorrecta y secuestro de cuentas como las amenazas más críticas en la nube.",
        reflexion: "Muchas brechas de seguridad en la nube son resultado de configuraciones incorrectas por parte del cliente, no de vulnerabilidades del proveedor, lo que resalta la importancia de la capacitación.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "4.8 Amenazas y Riesgos",
            url: "/unidades/U4/4.8 Amenazar y Riesgos en CN Ruiz Alvarez Mauro Rodrigo .pdf",
          },
        ],
      },
      {
        id: 8,
        titulo: "4.9 Políticas de ciberseguridad en CN",
        fecha: "23/03/2026",
        descripcion: "Elaboración de políticas de ciberseguridad para una organización que utiliza servicios en la nube, cubriendo control de acceso, gestión de incidentes y cumplimiento normativo.",
        aprendizaje: "Una política de ciberseguridad efectiva debe definir roles y responsabilidades, procedimientos de respuesta a incidentes, controles de acceso y requisitos de cifrado.",
        reflexion: "Las políticas son solo el primer paso; su efectividad depende de la capacitación continua y la aplicación consistente en toda la organización.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "4.9 Políticas de ciberseguridad",
            url: "/unidades/U4/4.9 Políticas de ciberseguridad en CN Ruiz Alvarez Mauro Rodrigo .pdf",
          },
        ],
      },
      {
        id: 9,
        titulo: "4.10 Análisis de tráfico de red con Wireshark para la prevención de ataques",
        fecha: "25/03/2026",
        descripcion: "Uso de Wireshark para capturar y analizar tráfico de red, identificando patrones sospechosos, conexiones no autorizadas y posibles indicadores de compromiso.",
        aprendizaje: "Wireshark permite inspeccionar paquetes a nivel de protocolo, identificar handshakes incompletos, tráfico cifrado inesperado y comunicaciones con direcciones IP maliciosas.",
        reflexion: "El análisis de tráfico de red es una habilidad esencial para la detección temprana de intrusiones, pero requiere práctica para distinguir entre tráfico normal y malicioso.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "4.10 Análisis de tráfico Wireshark",
            url: "/unidades/U4/4.10 Análisis de tráfico de red con Wireshark para la prevención de ataques.pdf",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    titulo: "Diseño y Desarrollo de una aplicación informática en la nube",
    descripcion: "Caso de estudio de desarrollo e implementación de una aplicación en la nube bajo plataforma open source o de licencia.",
    icono: "cpu",
    actividades: [
      {
        id: 1,
        titulo: "5.2 Análisis y Diseño de una Arquitectura de Red en la Nube (Caso Real)",
        fecha: "16/04/2026",
        descripcion: "Diseño de una arquitectura de red en la nube para un caso real, incluyendo VPC, subredes, balanceadores de carga, grupos de seguridad y alta disponibilidad.",
        aprendizaje: "Una arquitectura cloud bien diseñada debe considerar zonas de disponibilidad, escalabilidad horizontal, redundancia y segregación de red mediante subredes públicas y privadas.",
        reflexion: "El diseño de arquitectura en la nube requiere un cambio de mentalidad: pasar de pensar en servidores individuales a pensar en servicios gestionados y patrones de diseño resilientes.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "5.2 Arquitectura de Red en la Nube",
            url: "/unidades/U5/5_2_Arquitectura_Nube_Completo.pdf",
          },
        ],
      },
      {
        id: 2,
        titulo: "5.3 Curso introducción a la contenerización y virtualización",
        fecha: "21/04/2026",
        descripcion: "Introducción a los conceptos de virtualización tradicional (hipervisores) y contenerización (Docker), comparando sus enfoques, ventajas y casos de uso.",
        aprendizaje: "Los contenedores comparten el kernel del sistema anfitrión, lo que los hace más ligeros y rápidos de iniciar que las máquinas virtuales, aunque con menor aislamiento.",
        reflexion: "La contenerización no reemplaza a la virtualización; ambos enfoques tienen casos de uso distintos y a menudo se complementan en arquitecturas modernas.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "5.3 Contenerización y virtualización",
            url: "/unidades/U5/_Tarea 5.3 Curso introducción a la contenerización y virtualización..pdf",
          },
        ],
      },
      {
        id: 3,
        titulo: "5.4 Instalación de Docker",
        fecha: "22/04/2026",
        descripcion: "Instalación y configuración de Docker Engine en un entorno Linux, incluyendo la gestión de imágenes, contenedores, volúmenes y redes.",
        aprendizaje: "Docker simplifica el empaquetado y distribución de aplicaciones mediante imágenes ligeras y portables, con Docker Compose para entornos multi-contenedor.",
        reflexion: "La facilidad de uso de Docker democratizó la contenerización, pero la gestión de contenedores en producción requiere orquestación con herramientas como Kubernetes.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "5.4 Instalación de Docker",
            url: "/unidades/U5/5.4 Instalación de Docker Ruiz Alvarez Mauro Rodrigo.pdf",
          },
        ],
      },
      {
        id: 4,
        titulo: "5.7 Creación de VM en la nube",
        fecha: "24/04/2026",
        descripcion: "Creación y configuración de máquinas virtuales en un proveedor cloud, incluyendo selección de imagen, tipo de instancia, almacenamiento y reglas de firewall.",
        aprendizaje: "La creación de VMs en la nube ofrece flexibilidad para elegir sistema operativo, capacidad de cómputo y almacenamiento, con pago por hora o segundo.",
        reflexion: "Aunque las VMs en la nube son el servicio más básico, su correcta configuración (grupos de seguridad, IPs elásticas, snapshots) es crítica para la seguridad y disponibilidad.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "5.7 Creación de VM",
            url: "/unidades/U5/5.7 Creación de VM en la nube.pdf",
          },
        ],
      },
      {
        id: 5,
        titulo: "5.8 Instalación del entorno LAMP en una máquina virtual en infraestructura de la nube",
        fecha: "29/04/2026",
        descripcion: "Instalación y configuración de un stack LAMP (Linux, Apache, MySQL, PHP) sobre una máquina virtual en la nube, incluyendo conexión SSH y configuración de servicios.",
        aprendizaje: "La implementación manual de un stack LAMP en la nube proporciona control total sobre la configuración, aunque requiere conocimientos de administración del sistema.",
        reflexion: "Si bien los servicios gestionados simplifican el despliegue, conocer la configuración manual del stack LAMP es valioso para entender el funcionamiento del entorno de producción.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "5.8 Instalación entorno LAMP",
            url: "/unidades/U5/Actividad 5.8_ Instalación de entorno LAMP Ruiz Alvarez Mauro Rodrigo.pdf",
          },
        ],
      },
      {
        id: 6,
        titulo: "5.9 Despliegue de aplicación CRUD en la nube",
        fecha: "30/04/2026",
        descripcion: "Desarrollo y despliegue de una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) en la nube, conectando frontend, backend y base de datos.",
        aprendizaje: "Una aplicación CRUD en la nube puede beneficiarse de servicios gestionados como bases de datos, almacenamiento de objetos y balanceadores de carga para mejorar escalabilidad.",
        reflexion: "El despliegue de aplicaciones en la nube va más allá del desarrollo: requiere considerar CI/CD, monitoreo, logs y estrategias de backup desde el inicio del proyecto.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "5.9 Despliegue CRUD",
            url: "/unidades/U5/5.9 Despliegue de aplicación CRUD en la nube.pdf",
          },
        ],
      },
      {
        id: 7,
        titulo: "5.10 Migración a servicios administrados",
        fecha: "08/05/2026",
        descripcion: "Proceso de migración de una aplicación tradicional a servicios administrados en la nube, incluyendo evaluación, planificación, ejecución y validación.",
        aprendizaje: "La migración a servicios administrados reduce la carga operativa al delegar tareas como parches, backups y escalado al proveedor, pero puede requerir cambios en la aplicación.",
        reflexion: "No todas las aplicaciones se benefician de la migración directa; algunas requieren re-arquitectura para aprovechar plenamente los beneficios de los servicios nativos de la nube.",
        anexos: [
          {
            tipo: "pdf",
            nombre: "5.10 Migración a servicios administrados",
            url: "/unidades/U5/Ruiz Alvarez 5.10 Migracion a servicios administrados.pdf",
          },
        ],
      },
    ],
  },
];
