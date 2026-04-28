const productos = [
  {
    id: "p1",
    nombre: "Vestido blanco",
    categoria: "Vestidos",
    color: "blanco",
    precio: 400,
    descripcion: "Vestido corto blanco de hombros descubiertos",
    imagen: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "p2",
    nombre: "Vestido floreado",
    categoria: "Vestidos",
    color: "floreado",
    precio: 690,
    descripcion: "Vestido ligero con estampado floral",
    imagen: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "p3",
    nombre: "Blusa rosa",
    categoria: "Blusas",
    color: "blanco",
    precio: 380,
    descripcion: "Blusa clara de estilo clásico",
    imagen: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "p4",
    nombre: "Bolsa mini",
    categoria: "Bolsas",
    color: "negro",
    precio: 620,
    descripcion: "Bolsa elegante pequeña",
    imagen: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "p5",
    nombre: "Camisa blanca",
    categoria: "Camisas",
    color: "blanco",
    precio: 450,
    descripcion: "Camisa blanca de lino",
    imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "p6",
    nombre: "Falda negra",
    categoria: "Faldas",
    color: "negro",
    precio: 350,
    descripcion: "Falda corta negra elegante",
    imagen: "https://http2.mlstatic.com/D_708108-MLM95641109822_102025-O.jpg"
  },
  {
    id: "p7",
    nombre: "Pantalones azules",
    categoria: "Pantalones",
    color: "azul",
    precio: 550,
    descripcion: "Pantalones casuales azules",
    imagen: "https://www.paviitaly.com/wp-content/uploads/09-G0007-a.jpg"
  },
  {
    id: "p8",
    nombre: "Blusa azul",
    categoria: "Blusas",
    color: "azul",
    precio: 420,
    descripcion: "Blusa azul de manga larga",
    imagen: "https://bluhen.mx/cdn/shop/files/Blusa-Azul-Rey-Manga-Larga-Cordelia-1_jpg_1000x1000.webp?v=1702594833"
  },
  {
    id: "p9",
    nombre: "Vestido rojo",
    categoria: "Vestidos",
    color: "rojo",
    precio: 500,
    descripcion: "Vestido rojo de noche",
    imagen: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "p10",
    nombre: "Chaqueta denim",
    categoria: "Chaquetas",
    color: "azul",
    precio: 780,
    descripcion: "Chaqueta de mezclilla estilo casual",
    imagen: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "p11",
    nombre: "Suéter beige",
    categoria: "Suéteres",
    color: "beige",
    precio: 520,
    descripcion: "Suéter tejido cómodo y cálido",
    imagen: "https://image.hm.com/assets/hm/2e/cd/2ecd5268de4ec1c2c17d208537177abd7e3d58ac.jpg?imwidth=2160"
  },
  {
    id: "p12",
    nombre: "Short negro",
    categoria: "Shorts",
    color: "negro",
    precio: 300,
    descripcion: "Short casual negro de verano",
    imagen: "https://http2.mlstatic.com/D_936036-CBT108540061853_032026-O.jpg"
  },
  {
    id: "p13",
    nombre: "Blazer gris",
    categoria: "Blazers",
    color: "gris",
    precio: 950,
    descripcion: "Blazer elegante para ocasiones formales",
    imagen: "https://padre-santo.com/cdn/shop/files/Gris_Medio_2_OK.jpg?v=1746647968"
  },
  {
    id: "p14",
    nombre: "Tenis blancos",
    categoria: "Calzado",
    color: "blanco",
    precio: 650,
    descripcion: "Tenis cómodos para uso diario",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMP2h_N-dYRxozJYkQaL7DZ0g4BHPMq974Jg&s"
  }
];

let carrito = [];
let categoriaActiva = "Todas";
let terminoBusqueda = "";

const categoriesEl = document.getElementById("categories");
const productGridEl = document.getElementById("productGrid");
const cartContentEl = document.getElementById("cartContent");
const cartPanelEl = document.getElementById("cartPanel");
const cartToggleEl = document.getElementById("cartToggle");
const closeCartBtnEl = document.getElementById("closeCartBtn");
const searchToggleEl = document.getElementById("searchToggle");
const searchBoxEl = document.getElementById("searchBox");
const searchInputEl = document.getElementById("searchInput");
const clearSearchBtnEl = document.getElementById("clearSearchBtn");
const openChatBtnEl = document.getElementById("openChatBtn");
const closeChatBtnEl = document.getElementById("closeChatBtn");
const chatModalEl = document.getElementById("chatModal");
const chatMessagesEl = document.getElementById("chatMessages");
const chatInputEl = document.getElementById("chatInput");
const sendChatBtnEl = document.getElementById("sendChatBtn");
const menuBtnEl = document.getElementById("menuBtn");
const menuPanelEl = document.getElementById("menuPanel");
const closeMenuBtnEl = document.getElementById("closeMenuBtn");
const menuOpenCartEl = document.getElementById("menuOpenCart");
const menuOpenChatEl = document.getElementById("menuOpenChat");
const menuResetCatalogEl = document.getElementById("menuResetCatalog");

function getCategorias() {
  return ["Todas", ...new Set(productos.map(p => p.categoria))];
}

function limpiarBusqueda() {
  terminoBusqueda = "";
  searchInputEl.value = "";
  renderProductos();
}

function resetCatalogo() {
  categoriaActiva = "Todas";
  terminoBusqueda = "";
  searchInputEl.value = "";
  renderCategorias();
  renderProductos();
}

function renderCategorias() {
  categoriesEl.innerHTML = getCategorias().map(cat => `
    <button class="category-btn ${cat === categoriaActiva ? "active" : ""}" data-cat="${cat}">
      ${cat}
    </button>
  `).join("");

  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.cat;

      if (cat === "Todas") {
        resetCatalogo();
        return;
      }

      categoriaActiva = cat;
      renderCategorias();
      renderProductos();
    });
  });
}

function obtenerProductosFiltrados() {
  return productos.filter(prod => {
    const coincideCategoria =
      categoriaActiva === "Todas" || prod.categoria === categoriaActiva;

    const texto = `${prod.nombre} ${prod.categoria} ${prod.color} ${prod.descripcion}`.toLowerCase();
    const coincideBusqueda = texto.includes(terminoBusqueda.toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });
}

function renderProductos() {
  const filtrados = obtenerProductosFiltrados();

  if (filtrados.length === 0) {
    productGridEl.innerHTML = `
      <p style="grid-column: 1 / -1; text-align:center; padding: 40px; color:#7b736c;">
        No se encontraron productos.
      </p>
    `;
    return;
  }

  productGridEl.innerHTML = filtrados.map(prod => `
    <article class="card">
      <div class="product-image">
        <img src="${prod.imagen}" alt="${prod.nombre}">
      </div>
      <button class="add-btn" data-id="${prod.id}">+</button>
      <div class="card-info">
        <div class="card-title">${prod.nombre}</div>
        <div class="card-price">$${prod.precio}</div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      agregarAlCarrito(btn.dataset.id);
    });
  });
}

function agregarAlCarrito(id) {
  const existente = carrito.find(item => item.id === id);

  if (existente) {
    existente.qty += 1;
  } else {
    const producto = productos.find(p => p.id === id);
    carrito.push({ ...producto, qty: 1 });
  }

  renderCarrito();
  abrirBolsa();
}

function cambiarCantidad(id, cambio) {
  const item = carrito.find(p => p.id === id);
  if (!item) return;

  item.qty += cambio;

  if (item.qty <= 0) {
    carrito = carrito.filter(p => p.id !== id);
  }

  renderCarrito();
}

function renderCarrito() {
  if (carrito.length === 0) {
    cartContentEl.innerHTML = `<div class="cart-empty">Tu bolsa está vacía</div>`;
    return;
  }

  const subtotal = carrito.reduce((acc, item) => acc + item.precio * item.qty, 0);

  cartContentEl.innerHTML = `
    <div>
      <div class="cart-items">
        ${carrito.map(item => `
          <div class="cart-item">
            <div class="cart-thumb">
              <img src="${item.imagen}" alt="${item.nombre}">
            </div>
            <div>
              <h4>${item.nombre}</h4>
              <p>${item.descripcion}</p>
              <div class="qty">
                <button class="qty-btn" data-id="${item.id}" data-change="-1">−</button>
                <span>${item.qty}</span>
                <button class="qty-btn" data-id="${item.id}" data-change="1">+</button>
              </div>
            </div>
            <div class="cart-price">$${item.precio * item.qty}</div>
          </div>
        `).join("")}
      </div>

      <div class="summary">
        <div class="summary-lines">
          <div>Subtotal: $${subtotal}</div>
          <div>Descuentos: $0</div>
          <div class="summary-total">Total: $${subtotal}</div>
        </div>
        <button class="checkout-btn">Finalizar compra</button>
      </div>
    </div>
  `;

  document.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      cambiarCantidad(btn.dataset.id, Number(btn.dataset.change));
    });
  });
}

function abrirBolsa() {
  cartPanelEl.classList.remove("hidden");
}

function cerrarBolsa() {
  cartPanelEl.classList.add("hidden");
}

function abrirMenu() {
  menuPanelEl.classList.remove("hidden");
}

function cerrarMenu() {
  menuPanelEl.classList.add("hidden");
}

function agregarMensajeChat(texto, tipo) {
  const div = document.createElement("div");
  div.className = tipo === "user" ? "user-message" : "bot-message";
  div.textContent = texto;
  chatMessagesEl.appendChild(div);
  chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
}

// CHATBOT OFFLINE - No necesita API, funciona 100% local
async function responderChatIA(mensaje) {
  const msg = mensaje.toLowerCase();
  
  // Simular que el bot está "escribiendo"
  const loadingDiv = document.createElement("div");
  loadingDiv.className = "bot-message";
  loadingDiv.textContent = "✍️";
  loadingDiv.id = "chat-loading";
  chatMessagesEl.appendChild(loadingDiv);
  chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
  
  // Pequeña pausa para que se vea realista
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Remover indicador de escritura
  const loadingElement = document.getElementById("chat-loading");
  if (loadingElement) loadingElement.remove();
  
  // ========== COMANDOS DE NAVEGACIÓN ==========
  if (msg.includes("abrir bolsa") || msg.includes("ver carrito") || msg.includes("ver bolsa") || msg.includes("mi carrito") || msg.includes("mi bolsa")) {
    abrirBolsa();
    const totalItems = carrito.reduce((sum, item) => sum + item.qty, 0);
    if (totalItems > 0) {
      agregarMensajeChat(`🛍️ Abriendo tu bolsa de compras. Tienes ${totalItems} producto${totalItems !== 1 ? 's' : ''} en total.`, "bot");
    } else {
      agregarMensajeChat("🛍️ Abriendo tu bolsa. Está vacía por ahora. ¿Te gustaría agregar algún producto?", "bot");
    }
    return;
  }
  
  if (msg.includes("cerrar bolsa") || msg.includes("cerrar carrito")) {
    cerrarBolsa();
    agregarMensajeChat("🔒 Cerrando la bolsa de compras.", "bot");
    return;
  }
  
  if (msg.includes("ver todo") || msg.includes("mostrar todos") || msg.includes("resetear") || msg.includes("limpiar filtros") || msg.includes("todos los productos")) {
    resetCatalogo();
    agregarMensajeChat(`🔄 Mostrando todos los productos del catálogo (${productos.length} productos disponibles).`, "bot");
    return;
  }
  
  // ========== BÚSQUEDA POR CATEGORÍA ==========
  const categorias = {
    "vestidos": "Vestidos",
    "vestido": "Vestidos",
    "blusas": "Blusas",
    "blusa": "Blusas",
    "bolsas": "Bolsas",
    "bolsa": "Bolsas",
    "camisas": "Camisas",
    "camisa": "Camisas",
    "faldas": "Faldas",
    "falda": "Faldas",
    "pantalones": "Pantalones",
    "pantalon": "Pantalones",
    "chaquetas": "Chaquetas",
    "chaqueta": "Chaquetas",
    "sueteres": "Suéteres",
    "sueter": "Suéteres",
    "shorts": "Shorts",
    "short": "Shorts",
    "blazers": "Blazers",
    "blazer": "Blazers",
    "calzado": "Calzado",
    "tenis": "Calzado",
    "zapatos": "Calzado"
  };
  
  for (let [key, value] of Object.entries(categorias)) {
    if (msg.includes(key)) {
      categoriaActiva = value;
      terminoBusqueda = "";
      searchInputEl.value = "";
      renderCategorias();
      renderProductos();
      const cantidad = obtenerProductosFiltrados().length;
      agregarMensajeChat(`👗 Mostrando ${cantidad} productos de la categoría: ${value}.`, "bot");
      if (cantidad > 0 && cantidad <= 3) {
        const nombres = obtenerProductosFiltrados().map(p => p.nombre).join(", ");
        agregarMensajeChat(`Productos encontrados: ${nombres}`, "bot");
      }
      return;
    }
  }
  
  // ========== BÚSQUEDA POR COLOR ==========
  const colores = ["blanco", "negro", "azul", "rojo", "rosa", "beige", "gris", "floreado"];
  for (let color of colores) {
    if (msg.includes(color)) {
      terminoBusqueda = color;
      searchInputEl.value = color;
      renderProductos();
      const cantidad = obtenerProductosFiltrados().length;
      if (cantidad > 0) {
        agregarMensajeChat(`🎨 Te muestro los productos de color ${color}. Encontré ${cantidad} artículo${cantidad !== 1 ? 's' : ''}.`, "bot");
      } else {
        agregarMensajeChat(`🎨 Lo siento, no encontré productos de color ${color}.`, "bot");
      }
      return;
    }
  }
  
  // ========== BÚSQUEDA POR PRECIO ==========
  const precioMenosRegex = /menos de (\d+)/;
  const precioMaxRegex = /m[áa]s de (\d+)/;
  const precioEntreRegex = /entre (\d+) y (\d+)/;
  
  let precioMatch = msg.match(precioMenosRegex);
  if (precioMatch) {
    const maxPrecio = parseInt(precioMatch[1]);
    const filtrados = productos.filter(p => p.precio <= maxPrecio);
    if (filtrados.length > 0) {
      terminoBusqueda = "";
      categoriaActiva = "Todas";
      renderCategorias();
      renderProductos();
      agregarMensajeChat(`💰 Encontré ${filtrados.length} productos con precio menor a $${maxPrecio}.`, "bot");
      if (filtrados.length <= 5) {
        agregarMensajeChat("Aquí están: " + filtrados.map(p => `${p.nombre} ($${p.precio})`).join(", "), "bot");
      } else {
        agregarMensajeChat("Revisa la tienda para verlos todos. Ejemplos: " + filtrados.slice(0, 3).map(p => `${p.nombre} ($${p.precio})`).join(", "), "bot");
      }
    } else {
      agregarMensajeChat(`😕 No encontré productos por menos de $${maxPrecio}. El producto más económico cuesta $${Math.min(...productos.map(p => p.precio))}.`, "bot");
    }
    return;
  }
  
  precioMatch = msg.match(precioMaxRegex);
  if (precioMatch) {
    const minPrecio = parseInt(precioMatch[1]);
    const filtrados = productos.filter(p => p.precio >= minPrecio);
    if (filtrados.length > 0) {
      agregarMensajeChat(`💎 Tengo ${filtrados.length} productos desde $${minPrecio}. ¿Te gustaría ver algunos?`, "bot");
    } else {
      agregarMensajeChat(`😕 No hay productos de más de $${minPrecio}. El producto más caro cuesta $${Math.max(...productos.map(p => p.precio))}.`, "bot");
    }
    return;
  }
  
  precioMatch = msg.match(precioEntreRegex);
  if (precioMatch) {
    const minP = parseInt(precioMatch[1]);
    const maxP = parseInt(precioMatch[2]);
    const filtrados = productos.filter(p => p.precio >= minP && p.precio <= maxP);
    if (filtrados.length > 0) {
      terminoBusqueda = "";
      categoriaActiva = "Todas";
      renderCategorias();
      renderProductos();
      agregarMensajeChat(`🎯 Encontré ${filtrados.length} productos entre $${minP} y $${maxP}.`, "bot");
    } else {
      agregarMensajeChat(`😕 No encontré productos entre $${minP} y $${maxP}.`, "bot");
    }
    return;
  }
  
  // ========== RECOMENDACIONES ==========
  if (msg.includes("recomienda") || msg.includes("sugiere") || msg.includes("qué me recomiendas") || msg.includes("qué comprar") || msg.includes("qué me gustaría")) {
    const productosRecomendados = productos.slice(0, 5);
    agregarMensajeChat("✨ ¡Claro! Estos son algunos de nuestros productos más populares:", "bot");
    productosRecomendados.forEach(p => {
      agregarMensajeChat(`📌 ${p.nombre} - $${p.precio} (${p.categoria})`, "bot");
    });
    agregarMensajeChat("¿Te gustaría ver más detalles de alguno en particular? Puedes buscar por categoría o color.", "bot");
    return;
  }
  
  // ========== INFORMACIÓN DE PRODUCTO ESPECÍFICO ==========
  for (let producto of productos) {
    if (msg.includes(producto.nombre.toLowerCase())) {
      agregarMensajeChat(`📦 ${producto.nombre}:\n📝 ${producto.descripcion}\n💰 Precio: $${producto.precio}\n🏷️ Categoría: ${producto.categoria}\n🎨 Color: ${producto.color}`, "bot");
      agregarMensajeChat("¿Te gustaría agregarlo a tu bolsa? Puedes hacer clic en el botón '+' que está debajo de la imagen del producto.", "bot");
      return;
    }
  }
  
  // ========== INFORMACIÓN DE TIENDA ==========
  if (msg.includes("cuántos productos") || msg.includes("cuantos productos")) {
    agregarMensajeChat(`📊 Actualmente tenemos ${productos.length} productos en nuestra tienda, distribuidos en ${getCategorias().length - 1} categorías diferentes.`, "bot");
    return;
  }
  
  if (msg.includes("precio más alto") || msg.includes("producto más caro") || msg.includes("más caro")) {
    const masCaro = productos.reduce((max, p) => p.precio > max.precio ? p : max, productos[0]);
    agregarMensajeChat(`💰 El producto más caro es ${masCaro.nombre} con un precio de $${masCaro.precio}.`, "bot");
    return;
  }
  
  if (msg.includes("precio más bajo") || msg.includes("producto más barato") || msg.includes("más barato")) {
    const masBarato = productos.reduce((min, p) => p.precio < min.precio ? p : min, productos[0]);
    agregarMensajeChat(`💸 El producto más económico es ${masBarato.nombre} por solo $${masBarato.precio}.`, "bot");
    return;
  }
  
  // ========== AYUDA / SALUDOS ==========
  if (msg.includes("hola") || msg.includes("buenas") || msg.includes("saludos") || msg.includes("buen día") || msg.includes("buenas tardes") || msg.includes("buenas noches")) {
    const hora = new Date().getHours();
    let saludo = "¡Hola!";
    if (hora < 12) saludo = "¡Buenos días!";
    else if (hora < 19) saludo = "¡Buenas tardes!";
    else saludo = "¡Buenas noches!";
    
    agregarMensajeChat(`${saludo} Soy tu asistente de ventas. ¿En qué puedo ayudarte hoy?`, "bot");
    agregarMensajeChat("💡 Puedes preguntarme cosas como:\n• 'Ver vestidos'\n• 'Productos de color blanco'\n• 'Menos de 500 pesos'\n• 'Recomiéndame algo'\n• 'Abrir mi bolsa'\n• 'Ayuda' para ver más comandos", "bot");
    return;
  }
  
  if (msg.includes("gracias") || msg.includes("graciass")) {
    agregarMensajeChat("¡De nada! 😊 ¿Hay algo más en lo que pueda ayudarte? Estoy aquí para ti.", "bot");
    return;
  }
  
  if (msg.includes("ayuda") || msg.includes("qué puedes hacer") || msg.includes("comandos") || msg.includes("qué haces")) {
    agregarMensajeChat("🤖 ¡Hola! Soy tu asistente virtual. Puedo ayudarte con:", "bot");
    agregarMensajeChat(
      "📌 COMANDOS DISPONIBLES:\n\n" +
      "• Por CATEGORÍA: 'Ver vestidos', 'Ver blusas', etc.\n" +
      "• Por COLOR: 'Productos blancos', 'Ropa negra'\n" +
      "• Por PRECIO: 'Menos de 500', 'Entre 300 y 600', 'Más de 700'\n" +
      "• Ver tu BOLSA: 'Abrir bolsa', 'Ver carrito'\n" +
      "• RECOMENDACIONES: 'Recomiéndame algo'\n" +
      "• INFORMACIÓN: 'Producto más caro', 'Cuántos productos'\n" +
      "• RESETEAR: 'Ver todo', 'Resetear catálogo'", "bot");
    agregarMensajeChat("¿Qué te gustaría hacer?", "bot");
    return;
  }
  
  // ========== RESPUESTA POR DEFECTO ==========
  agregarMensajeChat("🤔 No estoy seguro de entender tu mensaje. Puedes pedirme ayuda escribiendo 'ayuda' para ver todos los comandos que entiendo.", "bot");
}

function enviarChat() {
  const mensaje = chatInputEl.value.trim();
  if (!mensaje) return;

  agregarMensajeChat(mensaje, "user");
  responderChatIA(mensaje);
  chatInputEl.value = "";
}

searchToggleEl.addEventListener("click", () => {
  searchBoxEl.classList.toggle("open");
  if (searchBoxEl.classList.contains("open")) {
    searchInputEl.focus();
  }
});

searchInputEl.addEventListener("input", (e) => {
  terminoBusqueda = e.target.value;
  renderProductos();
});

clearSearchBtnEl.addEventListener("click", () => {
  limpiarBusqueda();
});

cartToggleEl.addEventListener("click", abrirBolsa);
closeCartBtnEl.addEventListener("click", cerrarBolsa);

openChatBtnEl.addEventListener("click", () => {
  chatModalEl.classList.remove("hidden");
});

closeChatBtnEl.addEventListener("click", () => {
  chatModalEl.classList.add("hidden");
});

sendChatBtnEl.addEventListener("click", enviarChat);
chatInputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    enviarChat();
  }
});

menuBtnEl.addEventListener("click", abrirMenu);
closeMenuBtnEl.addEventListener("click", cerrarMenu);

menuOpenCartEl.addEventListener("click", () => {
  abrirBolsa();
  cerrarMenu();
});

menuOpenChatEl.addEventListener("click", () => {
  chatModalEl.classList.remove("hidden");
  cerrarMenu();
});

menuResetCatalogEl.addEventListener("click", () => {
  resetCatalogo();
  cerrarMenu();
});

document.querySelectorAll(".menu-link").forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.menuCat;

    if (cat === "Todas") {
      resetCatalogo();
    } else {
      categoriaActiva = cat;
      terminoBusqueda = "";
      searchInputEl.value = "";
      renderCategorias();
      renderProductos();
    }

    cerrarMenu();
  });
});

renderCategorias();
renderProductos();
renderCarrito();
cerrarBolsa();