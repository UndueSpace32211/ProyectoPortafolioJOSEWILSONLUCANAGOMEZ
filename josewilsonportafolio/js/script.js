
document.addEventListener("DOMContentLoaded", function () {
  // 1. CAMBIAR CONTENIDO: propiedad textContent
  const mensaje = document.getElementById("mensajeInicio");
  if (mensaje) {
    mensaje.textContent = "Bienvenido a mi portafolio. Explora las secciones para conocer mi formación y proyectos.";
  }

  // 2. MODIFICAR ESTILOS CSS: propiedad style
  const btnContacto = document.getElementById("btnContacto");
  if (btnContacto) {
    btnContacto.addEventListener("click", function () {
      const contacto = document.getElementById("contactoExtra");
      contacto.textContent = "Correo de demostración: jose.wilson@example.com (reemplazar por el correo real).";
      contacto.style.color = "#087e9a";
      contacto.style.fontWeight = "bold";
    });
  }

  // 3. AGREGAR O QUITAR CLASES: classList.toggle()
  const btnPerfil = document.getElementById("btnPerfil");
  if (btnPerfil) {
    btnPerfil.addEventListener("click", function () {
      document.querySelector(".info-card").classList.toggle("highlight");
    });
  }

  // 4. CONSULTAR Y MODIFICAR ATRIBUTOS: getAttribute / setAttribute
  const foto = document.querySelector(".profile-page");
  if (foto) {
    const textoAlternativo = foto.getAttribute("alt");
    foto.setAttribute("title", textoAlternativo + " - fotografía de perfil");
  }

  // 5. EVENTO CON addEventListener()
  const botonProyecto = document.getElementById("agregarProyecto");
  if (botonProyecto) {
    botonProyecto.addEventListener("click", agregarProyecto);
  }

  // 6. EVENTO MEDIANTE PROPIEDAD onclick
  const inicio = document.getElementById("mensajeInicio");
  if (inicio) {
    inicio.onclick = function () {
      inicio.textContent = "¡Gracias por visitar mi portafolio!";
    };
  }

  // 7. EVENTO MEDIANTE addEventListener() PARA TECLADO
  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
      const resaltado = document.querySelector(".highlight");
      if (resaltado) resaltado.classList.remove("highlight");
    }
  });
});

// 8. CREAR, INSERTAR Y ELIMINAR ELEMENTOS DEL DOM
function agregarProyecto() {
  const lista = document.getElementById("listaProyectos");
  if (!lista) return;

  const tarjeta = document.createElement("div"); // Crear elemento
  tarjeta.className = "alert alert-success d-flex justify-content-between align-items-center";
  tarjeta.textContent = "Nuevo proyecto de práctica agregado dinámicamente.";

  const eliminar = document.createElement("button");
  eliminar.textContent = "Eliminar";
  eliminar.className = "btn btn-sm btn-outline-danger ms-3";
  eliminar.setAttribute("type", "button");
  eliminar.addEventListener("click", function () {
    tarjeta.remove(); // Eliminar elemento
  });

  tarjeta.appendChild(eliminar); // Insertar botón dentro del elemento
  lista.appendChild(tarjeta); // Insertar tarjeta en la página
}
