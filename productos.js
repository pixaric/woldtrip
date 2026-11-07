// 1) Pon aquí tu ID de Amazon Asociados
const TAG = "TUTAG-21";

// 2) Productos. El primero de cada categoría es "Nuestra elección".
// img: ruta de la imagen (ej. "img/aeezo.jpg") o enlace de imagen de Amazon. url: enlace directo de Amazon.
// Para usar un enlace directo de Amazon (SiteStripe), añade url: "https://amzn.to/..." al producto.
const cats = [
{id:"marcos-digitales", t:"Mejores marcos digitales", s:"Marcos digitales", i:"🖼️",
 intro:"Pantallas WiFi que reciben fotos desde el móvil. Perfectas para regalar a quien está lejos.",
 guide:"Busca pantalla IPS, WiFi con app propia y al menos 16 GB. Si es para una persona mayor, elige el que se configura solo.",
 p:[
 {img:"", url:"", n:'AEEZO WiFi 10,1" táctil', w:"La mejor opción para casi todos", v:["Pantalla IPS HD con giro automático","Envío de fotos desde la app"], q:"marco digital AEEZO WiFi 10.1 pulgadas"},
 {img:"", url:"", n:"Pix-Star WiFi", w:"Para abuelos y regalos", v:["Recibe fotos por email","Admite vídeo y audio"], q:"marco digital Pix-Star WiFi"},
 {img:"", url:"", n:"FUNCARE 32 GB", w:"Para muchas fotos y vídeos", v:["32 GB de memoria propia","No depende de la nube"], q:"marco digital FUNCARE 32GB"},
 {img:"", url:"", n:'Nixplay WiFi 10,1"', w:"Para álbumes compartidos", v:["Gestión desde la app","Listas compartidas con la familia"], q:"marco digital Nixplay WiFi"},
 {img:"", url:"", n:"Aura Carver", w:"Para el salón", v:["Acabado de diseño","Pantalla de gran calidad"], q:"marco digital Aura Carver"}]},
{id:"impresoras-fotograficas", t:"Mejores impresoras fotográficas para casa", s:"Impresoras fotográficas", i:"🖨️",
 intro:"Desde impresoras de bolsillo hasta equipos de tinta de gran formato.",
 guide:"Para fotos de 10×15 elige sublimación: es más barata por copia. Para formatos grandes, una de tinta con 6 colores.",
 p:[
 {img:"", url:"", n:"Canon SELPHY CP1500", w:"La mejor para fotos 10×15", v:["Impresión resistente al agua","Calidad de laboratorio"], q:"Canon SELPHY CP1500"},
 {img:"", url:"", n:"Epson EcoTank ET-8550", w:"Para formato grande", v:["Hasta A3+","Tinta recargable de 6 colores"], q:"Epson EcoTank ET-8550"},
 {img:"", url:"", n:"Canon Zoemini 2", w:"Para imprimir desde el móvil", v:["Cabe en el bolsillo","Conexión directa con el móvil"], q:"Canon Zoemini 2"},
 {img:"", url:"", n:"HP Envy Inspire 7220e", w:"Para toda la familia", v:["Multifunción versátil","Impresión a doble cara"], q:"HP Envy Inspire 7220e"},
 {img:"", url:"", n:"Xiaomi Portable Photo Printer Pro", w:"Para no gastar en tinta", v:["Impresión térmica sin tinta","Bluetooth y accesorios incluidos"], q:"Xiaomi Portable Photo Printer Pro"}]},
{id:"regalos-boda", t:"Regalos personalizados para bodas", s:"Regalos de boda", i:"💍",
 intro:"Detalles con nombres y fecha para novios e invitados.",
 guide:"Comprueba el plazo de grabado antes de la boda y escribe nombres y fecha tal como van a aparecer.",
 p:[
 {img:"", url:"", n:"Copas de brindis grabadas", w:"El regalo que nunca falla", v:["Nombres y fecha grabados","Se guardan como recuerdo"], q:"copas boda personalizadas grabadas novios"},
 {img:"", url:"", n:"Libro de firmas personalizado", w:"Para el día de la boda", v:["Los invitados dejan su mensaje","Portada personalizable"], q:"libro de firmas boda personalizado"},
 {img:"", url:"", n:"Marco de fotos grabado", w:"Para la mejor foto", v:["Madera con dedicatoria","Fácil de regalar"], q:"marco fotos boda personalizado grabado"},
 {img:"", url:"", n:"Caja de recuerdos de madera", w:"Para guardar cartas y entradas", v:["Tapa grabada","Dura toda la vida"], q:"caja recuerdos madera personalizada boda"},
 {img:"", url:"", n:"Lámpara LED con foto", w:"Para sorprender", v:["Se ilumina con vuestra foto","Original y decorativa"], q:"lámpara led foto personalizada regalo boda"}]},
{id:"albumes-premium", t:"Álbumes de fotos premium", s:"Álbumes premium", i:"📖",
 intro:"Materiales nobles y páginas que cuidan tus fotos durante décadas.",
 guide:"Elige páginas libres de ácido y confirma el tamaño de tus copias (10×15 o 13×18) antes de comprar.",
 p:[
 {img:"", url:"", n:"Álbum de lino 10×15", w:"El más equilibrado", v:["Hasta 500 fotos en bolsillos","Portada de tela elegante"], q:"álbum fotos lino 10x15 500 fotos"},
 {img:"", url:"", n:"Álbum de cuero", w:"Para regalar con estilo", v:["Tapa de piel","Páginas libres de ácido"], q:"álbum fotos cuero premium"},
 {img:"", url:"", n:"Álbum autoadhesivo clásico", w:"Para pegar sin complicarte", v:["Páginas adhesivas","Lámina protectora transparente"], q:"álbum fotos autoadhesivo grande"},
 {img:"", url:"", n:"Álbum para Polaroid", w:"Para fotos instantáneas", v:["Bolsillos del tamaño justo","Ligero y compacto"], q:"álbum fotos polaroid instax"},
 {img:"", url:"", n:"Álbum scrapbook kraft", w:"Para decorar a tu gusto", v:["Hojas para pegar y escribir","Ideal para manualidades"], q:"álbum scrapbook kraft DIY"}]},
{id:"fotolibros", t:"Fotolibros recomendados", s:"Fotolibros", i:"📚",
 intro:"Libros de recuerdos, kits y guías para contar una historia con tus fotos.",
 guide:"Si quieres un fotolibro impreso a medida, se pide en servicios de impresión. Aquí tienes libros y kits para montarlo tú.",
 p:[
 {img:"", url:"", n:"Libro de recuerdos de pareja", w:"El favorito para regalar", v:["Guiado: solo rellenar","Espacio para fotos y vivencias"], q:"libro de recuerdos pareja para rellenar fotos"},
 {img:"", url:"", n:"Álbum de bebé", w:"Para el primer año", v:["Mes a mes","Recuerdos de los primeros pasos"], q:"álbum bebé primer año recuerdos libro"},
 {img:"", url:"", n:"Diario de viaje con fotos", w:"Para viajeros", v:["Hojas para pegar entradas","Cabe en la mochila"], q:"diario de viaje scrapbook fotos"},
 {img:"", url:"", n:"Kit fotolibro DIY", w:"Para hacerlo tú mismo", v:["Todo incluido","Resultado personal"], q:"kit fotolibro scrapbook DIY"},
 {img:"", url:"", n:"Libro de fotografía creativa", w:"Para mejorar tus fotos", v:["Ideas de composición","Para todos los niveles"], q:"libro fotografía creativa guía"}]}
];