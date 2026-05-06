export const siteConfig = {
  name: "Emanuel Nicenboim",
  shortName: "Ema",
  clientName: "Nico",
  designerName: "Gero",
  location: "Ricardone, Santa Fe",
  price: "USD 300",
  priceNote: "Equivalentes en pesos al momento de pago",
  paymentTerms: "50% al inicio · 50% al cierre",
  estimatedDuration: "3 a 5 semanas",
  contactHref: "#cierre",
};

export const roles = [
  {
    name: "Gero",
    label: "Diseño visual",
    description:
      "Desarrolla la identidad visual: logo, paleta, tipografía y sistema gráfico.",
    items: ["Logo y sistema gráfico", "Paleta y tipografía", "Diseño aplicado"],
    color: "pista" as const,
    icon: "Palette",
  },
  {
    name: "Ema",
    label: "Estrategia + criterio",
    description:
      "Acompaña el proceso con dirección estratégica, criterio y gestión para que las decisiones tengan sentido en el negocio.",
    items: [
      "Dirección estratégica",
      "Gestión del proceso",
      "Bajada al negocio real",
    ],
    color: "choco" as const,
    icon: "Compass",
    highlight: true,
  },
  {
    name: "Nico",
    label: "Visión del negocio",
    description:
      "Trae la idea, el conocimiento del contexto local y toma las decisiones finales.",
    items: [
      "Idea y objetivos",
      "Decisiones clave",
      "Validación y definición",
    ],
    color: "stone" as const,
    icon: "Lightbulb",
  },
];

export const emaContributions = [
  {
    title: "Ordenar la idea",
    description:
      "Antes de diseñar, hay que saber qué se quiere comunicar, a quién y en qué contexto.",
  },
  {
    title: "Hacer las preguntas correctas",
    description:
      "Las que Gero necesita para diseñar bien y las que Nico necesita para decidir con claridad.",
  },
  {
    title: "Construir el brief",
    description:
      "Un documento claro que le da a Gero una dirección concreta, no un vacío donde interpretar.",
  },
  {
    title: "Acompañar decisiones",
    description:
      "Participar en las instancias clave para que el feedback sea útil y las decisiones tengan sustento.",
  },
  {
    title: "Traducir estrategia a diseño",
    description:
      "Conectar lo que el negocio necesita con lo que el diseño puede resolver.",
  },
  {
    title: "Cuidar la coherencia",
    description:
      "Que la marca funcione igual en el cartel, en Instagram, en el menú y en la experiencia del local.",
  },
];

export const problems = [
  {
    title: "Arrancar sin dirección",
    description:
      "Empezar el diseño antes de tener claro qué querés comunicar y a quién. El resultado: revisiones que van y vienen sin llegar a ningún lado.",
  },
  {
    title: "Feedback confuso",
    description:
      "Decirle al diseñador 'no me convence' sin saber explicar por qué. Eso complica el proceso y alarga los tiempos.",
  },
  {
    title: "Marca linda, poco práctica",
    description:
      "Un logo que se ve bien en la presentación pero que no funciona en el cartel, en el packaging o en el menú del local.",
  },
  {
    title: "Decisiones solo por gusto",
    description:
      "Elegir colores, nombres o estilos únicamente por preferencia personal, sin considerar cómo le hablan al público del barrio.",
  },
  {
    title: "Sin pensar los usos reales",
    description:
      "Olvidarse de que la marca va a vivir en Instagram, WhatsApp, Google Maps, una bolsa, una servilleta y un cartel en la calle.",
  },
  {
    title: "Lanzar sin base comunicacional",
    description:
      "Abrir sin saber cómo presentar la marca, qué tono usar en redes ni qué piezas tener listas para la apertura.",
  },
];

export const services = [
  {
    id: "A",
    title: "Reunión inicial de diagnóstico",
    description:
      "Una instancia para ordenar la idea del negocio: qué tipo de heladería querés construir, qué público imaginás, qué estilo te interesa, qué referencias te gustan y qué conviene evitar.",
    icon: "MessageSquare",
  },
  {
    id: "B",
    title: "Documento estratégico de marca",
    description:
      "Un documento breve y claro con las definiciones base: personalidad, público, tono, diferenciales posibles, ideas fuerza y criterios para orientar las decisiones de diseño.",
    icon: "FileText",
  },
  {
    id: "C",
    title: "Brief para Gero",
    description:
      "Una bajada ordenada para que Gero pueda diseñar con dirección: contexto, objetivos, estilo buscado, aplicaciones necesarias y referencias seleccionadas.",
    icon: "PenLine",
  },
  {
    id: "D",
    title: "Acompañamiento durante el proceso",
    description:
      "Participación en instancias clave de revisión para ordenar el feedback, evaluar propuestas con criterio y ayudar a tomar decisiones fundamentadas.",
    icon: "Users",
  },
  {
    id: "E",
    title: "Bajada inicial de comunicación",
    description:
      "Una primera orientación para pensar cómo presentar la marca: qué tono usar en redes, qué comunicar antes de abrir y qué piezas conviene tener listas.",
    icon: "Megaphone",
  },
  {
    id: "F",
    title: "Checklist de aplicaciones de marca",
    description:
      "Un listado práctico de todos los elementos donde la marca debería funcionar: cartel, menú, potes, bolsas, stickers, uniforme, Instagram, WhatsApp, Google Business y más.",
    icon: "CheckSquare",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Diagnóstico",
    description:
      "Nos juntamos para ordenar la idea, referencias, público, estilo y objetivos del negocio.",
    detail: "1 reunión",
  },
  {
    step: 2,
    title: "Definición estratégica",
    description:
      "Bajo toda esa información a un documento simple para alinear criterios antes de diseñar.",
    detail: "Entregable escrito",
  },
  {
    step: 3,
    title: "Brief + acompañamiento a Gero",
    description:
      "Convertimos la estrategia en una guía clara para el desarrollo visual. Participo en las revisiones.",
    detail: "Hasta 2 revisiones",
  },
  {
    step: 4,
    title: "Revisión final + bajada de apertura",
    description:
      "Acompaño las decisiones clave y dejo una base inicial para comunicar y lanzar la marca.",
    detail: "Entregable de cierre",
  },
];

export const notIncludeItems = [
  "Diseño visual final",
  "Logo, paleta o sistema gráfico",
  "Community management",
  "Gestión mensual de redes",
  "Producción de contenido",
  "Fotografía o video",
  "Gestión con imprentas o proveedores",
  "Plan financiero o de negocio completo",
  "Acompañamiento operativo indefinido post-apertura",
  "Reuniones ilimitadas",
];

export const pricingIncludes = [
  "1 reunión inicial de diagnóstico",
  "Documento estratégico de marca",
  "Brief para Gero",
  "Hasta 2 reuniones de revisión / seguimiento",
  "Ordenamiento de feedback en cada instancia",
  "Bajada inicial de comunicación y apertura",
  "Checklist de aplicaciones de marca",
];

export const whySensePoints = [
  {
    title: "Porque abrir una heladería implica muchas decisiones juntas",
    description:
      "Nombre, estilo, cartel, redes, menú, packaging, tono, local, experiencia, lanzamiento. Mi aporte es ayudarte a ordenar esas decisiones para que la marca tenga una dirección clara desde el principio, no después.",
  },
  {
    title: "Porque una marca no se construye solo cuando se diseña un logo",
    description:
      "Se construye en cómo se presenta, cómo se comunica, cómo se aplica y cómo se vive en el local. Gero puede diseñar algo muy bueno. Yo puedo ayudar a que ese diseño tenga sentido en el negocio real.",
  },
  {
    title: "Porque el brief importa tanto como el diseño",
    description:
      "Si Gero arranca con una dirección clara, el proceso es más fluido, los resultados son mejores y las revisiones son menos. Un buen brief es la diferencia entre un proceso ordenado y uno que da vueltas.",
  },
];
