document.addEventListener("DOMContentLoaded", () => {
  // Frases motivacionales 🎀
  const frases = [
    "¡Hoy será un gran día! 💫",
    "Confía en ti misma ✨",
    "Pequeños pasos, grandes logros 🌱",
    "Eres capaz de cosas increíbles 🌟",
    "Organízate con amor y constancia 💕"
  ];
  document.getElementById("fraseMotivacional").textContent =
    frases[Math.floor(Math.random() * frases.length)];

  // Referencias al DOM
  const tablaHorario = document.getElementById("tablaHorario");
  const btnAgregar = document.getElementById("agregarFila");
  const btnEliminar = document.getElementById("eliminarFila");

  // Datos iniciales o recuperados
  let horarioData = JSON.parse(localStorage.getItem("horarioData")) || [
    ["08:00", "", "", "", "", ""],
    ["09:00", "", "", "", "", ""],
    ["10:00", "", "", "", "", ""]
  ];

  function guardarHorario() {
    localStorage.setItem("horarioData", JSON.stringify(horarioData));
  }

  function renderHorario() {
    tablaHorario.innerHTML = "";
    horarioData.forEach((fila, filaIndex) => {
      const tr = document.createElement("tr");
      fila.forEach((celda, celdaIndex) => {
        const td = document.createElement("td");
        td.contentEditable = true;
        td.textContent = celda;
        td.addEventListener("input", () => {
          horarioData[filaIndex][celdaIndex] = td.textContent;
          guardarHorario();
        });
        tr.appendChild(td);
      });
      tablaHorario.appendChild(tr);
    });
  }

  btnAgregar.addEventListener("click", () => {
    horarioData.push(["Nueva hora", "", "", "", "", ""]);
    guardarHorario();
    renderHorario();
  });

  btnEliminar.addEventListener("click", () => {
    if (horarioData.length > 1) {
      horarioData.pop();
      guardarHorario();
      renderHorario();
    }
  });

  renderHorario();
});
