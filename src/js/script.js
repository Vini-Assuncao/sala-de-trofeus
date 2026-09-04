document.addEventListener("DOMContentLoaded", () => {
  // Configuração das competições agrupadas por categoria
  const competicoes = [
    { key: "header_nacionais", label: "Nacionais / Estaduais", isCategory: true },
    { key: "estadual", label: "Estadual" },
    { key: "brasileirao", label: "Brasileirão" },
    { key: "copa_do_brasil", label: "Copa do Brasil" },
    { key: "supercopa_do_brasil", label: "Supercopa do Brasil" },
    { key: "header_internacionais", label: "Internacionais", isCategory: true },
    { key: "libertadores", label: "Copa Libertadores" },
    { key: "sul_americana", label: "Copa Sul-Americana" },
    { key: "recopa_sul_americana", label: "Recopa Sul-Americana" },
    { key: "mundial", label: "Mundial de Clubes" }
  ];

  const selects = document.querySelectorAll(".time-select");
  const headerRow = document.getElementById("header-row");
  const tbodyContent = document.getElementById("tbody-content");

  // Preenche todos os selects com os times de times.js[cite: 1]
  function popularSelects() {
    selects.forEach(select => {
      times.forEach(time => {
        const option = document.createElement("option");
        option.value = time.id;
        option.textContent = `${time.emoji_bandeira} ${time.nome} (${time.sigla_estado})`;
        select.appendChild(option);
      });
    });
  }

  // Predefine o primeiro time por padrão para iniciar com dados na tela
  function definirSelecaoInicial() {
    if (times.length >= 2) {
      selects[0].value = times[0].id; // São Paulo
      selects[1].value = times[1].id; // Palmeiras
    }
  }

  // Atualiza a tabela com base nos valores dos selects
  function renderizarTabela() {
    const timesSelecionados = Array.from(selects).map(select => {
      return times.find(t => t.id === select.value) || null;
    });

    renderizarCabecalho(timesSelecionados);
    renderizarCorpo(timesSelecionados);
  }

  function renderizarCabecalho(timesSelecionados) {
    headerRow.innerHTML = `<th scope="col" class="text-start ps-4" style="width: 250px;">Competição</th>`;

    timesSelecionados.forEach((time, index) => {
      const th = document.createElement("th");
      th.scope = "col";
      th.style.width = "200px";

      if (time) {
        th.innerHTML = `
          <div class="team-header-card shadow-sm" style="background-color: ${time.cor_rgb};">
            <span class="fs-4">${time.emoji_bandeira}</span>
            <div class="fw-bold">${time.nome}</div>
            <span class="badge bg-light text-dark badge-uf">${time.sigla_estado}</span>
          </div>
        `;
      } else {
        th.innerHTML = `<div class="empty-slot py-3">Vazio ${index + 1}</div>`;
      }

      headerRow.appendChild(th);
    });
  }

  function renderizarCorpo(timesSelecionados) {
    tbodyContent.innerHTML = "";

    competicoes.forEach(comp => {
      const tr = document.createElement("tr");

      // Linha de cabeçalho da categoria
      if (comp.isCategory) {
        tr.classList.add("category-header");
        tr.innerHTML = `<td colspan="5" class="text-start ps-4 py-2">${comp.label}</td>`;
        tbodyContent.appendChild(tr);
        return;
      }

      // Encontrar o maior número de títulos da competição entre os times selecionados
      const valoresValidos = timesSelecionados
        .filter(t => t !== null)
        .map(t => t.titulos[comp.key] || 0);

      const maxTitulos = valoresValidos.length > 0 ? Math.max(...valoresValidos) : 0;

      // Coluna com o nome da competição
      let rowHTML = `<td class="text-start ps-4 fw-semibold">${comp.label}</td>`;

      // Colunas dos times
      timesSelecionados.forEach(time => {
        if (!time) {
          rowHTML += `<td class="text-muted">-</td>`;
          return;
        }

        const qtd = time.titulos[comp.key] || 0;
        const eMaior = qtd > 0 && qtd === maxTitulos;
        const classeDestaque = eMaior ? "trophy-winner" : "";

        rowHTML += `
          <td class="${classeDestaque}">
            <span class="trophy-count">${qtd}</span>
          </td>
        `;
      });

      tr.innerHTML = rowHTML;
      tbodyContent.appendChild(tr);
    });

    renderizarLinhaTotal(timesSelecionados);
  }

  function renderizarLinhaTotal(timesSelecionados) {
    const tr = document.createElement("tr");
    tr.classList.add("table-dark", "fw-bold");

    let rowHTML = `<td class="text-start ps-4">Total de Títulos</td>`;

    timesSelecionados.forEach(time => {
      if (!time) {
        rowHTML += `<td>-</td>`;
        return;
      }

      const total = Object.values(time.titulos).reduce((acc, curr) => acc + curr, 0);
      rowHTML += `<td>${total}</td>`;
    });

    tr.innerHTML = rowHTML;
    tbodyContent.appendChild(tr);
  }

  // Event Listeners para re-renderizar ao alterar o dropdown
  selects.forEach(select => {
    select.addEventListener("change", renderizarTabela);
  });

  // Inicialização
  popularSelects();
  definirSelecaoInicial();
  renderizarTabela();
});