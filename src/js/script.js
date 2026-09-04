const torneios = [
  { id: 'estadual', nome: 'Estadual' },
  { id: 'brasileirao', nome: 'Brasileirão' },
  { id: 'copa_do_brasil', nome: 'Copa do Brasil' },
  { id: 'supercopa_do_brasil', nome: 'Supercopa do Brasil' },
  { id: 'sul_americana', nome: 'Sul-Americana' },
  { id: 'libertadores', nome: 'Libertadores' },
  { id: 'recopa_sul_americana', nome: 'Recopa Sul-Americana' },
  { id: 'mundial', nome: 'Mundial' }
];

const selects = document.querySelectorAll('.time-select');
const btnLimpar = document.getElementById('btn-limpar');
let timesSelecionados = [null, null, null, null];

function ajustarBrilho(rgbString, fator) {
  const rgb = rgbString.match(/\d+/g);
  if (!rgb || rgb.length < 3) return rgbString;

  let r = parseInt(rgb[0], 10);
  let g = parseInt(rgb[1], 10);
  let b = parseInt(rgb[2], 10);

  if (fator > 1) {
    const percent = Math.min(fator - 1, 1);
    r = Math.round(r + (255 - r) * percent);
    g = Math.round(g + (255 - g) * percent);
    b = Math.round(b + (255 - b) * percent);
  } else {
    r = Math.round(r * fator);
    g = Math.round(g * fator);
    b = Math.round(b * fator);
  }

  return `rgb(${Math.min(255, Math.max(0, r))}, ${Math.min(255, Math.max(0, g))}, ${Math.min(255, Math.max(0, b))})`;
}

function getCorTexto(rgbString) {
  const rgb = rgbString.match(/\d+/g);
  if (!rgb || rgb.length < 3) return '#ffffff';
  const r = parseInt(rgb[0], 10);
  const g = parseInt(rgb[1], 10);
  const b = parseInt(rgb[2], 10);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? '#000000' : '#ffffff';
}

function calcularTotalTitulos(time) {
  if (!time || !time.titulos) return 0;
  return Object.values(time.titulos).reduce((acc, curr) => acc + curr, 0);
}

function inicializarSelects() {
  selects.forEach((select, index) => {
    select.innerHTML = '<option value="">Selecione...</option>';
    
    times.forEach(time => {
      const option = document.createElement('option');
      option.value = time.id;
      option.textContent = `${time.emoji_bandeira} ${time.nome} (${time.sigla_estado})`;
      select.appendChild(option);
    });

    select.addEventListener('change', (e) => {
      const idSelecionado = e.target.value;
      timesSelecionados[index] = times.find(t => t.id === idSelecionado) || null;
      renderizarTabela();
    });
  });

  // Funcionalidade do botão Limpar Seleção
  if (btnLimpar) {
    btnLimpar.addEventListener('click', () => {
      timesSelecionados = [null, null, null, null];
      selects.forEach(select => select.value = '');
      renderizarTabela();
    });
  }
  
  renderizarTabela();
}

function renderizarTabela() {
  const headerRow = document.getElementById('header-row');
  const tbodyContent = document.getElementById('tbody-content');

  headerRow.innerHTML = '<th scope="col" class="text-start ps-4 align-middle" style="width: 250px;">Competição</th>';
  tbodyContent.innerHTML = '';

  // 1. Renderização do Cabeçalho
  timesSelecionados.forEach((time, index) => {
    if (time) {
      const corTexto = getCorTexto(time.cor_rgb);
      headerRow.innerHTML += `
        <th scope="col" class="text-center align-middle py-2" style="background-color: ${time.cor_rgb}; color: ${corTexto}; width: 18%;">
          <div>
            <a href="${time.site_oficial}" target="_blank" rel="noopener noreferrer" class="emoji-link fs-4 mb-1" title="Acessar site oficial do ${time.nome}">
              ${time.emoji_bandeira}
            </a>
          </div>
          <div class="fw-bold">
            <a href="${time.site_oficial}" target="_blank" rel="noopener noreferrer" title="Acessar site oficial do ${time.nome}">
              ${time.nome}
            </a>
          </div>
          <span class="badge bg-white text-dark mt-1 px-2 py-1 shadow-sm">${time.sigla_estado}</span>
        </th>
      `;
    } else {
      headerRow.innerHTML += `
        <th scope="col" class="text-center align-middle py-3 text-white-50" style="width: 18%;">
          Vazio ${index + 1}
        </th>
      `;
    }
  });

  const timesAtivos = timesSelecionados.filter(t => t !== null);

  // 2. Linhas das Competições
  torneios.forEach(torneio => {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td class="text-start ps-4 fw-bold align-middle">${torneio.nome}</td>`;

    let maxTitulos = -1;
    if (timesAtivos.length > 0) {
      maxTitulos = Math.max(...timesAtivos.map(t => t.titulos[torneio.id]));
    }

    timesSelecionados.forEach(time => {
      if (time) {
        const qtdTitulos = time.titulos[torneio.id];
        let style = '';
        let classes = 'fs-5 align-middle';

        if (qtdTitulos === maxTitulos && maxTitulos > 0 && timesAtivos.length > 1) {
          const corClara = ajustarBrilho(time.cor_rgb, 1.4);
          const corTexto = getCorTexto(corClara);
          style = `background-color: ${corClara}; color: ${corTexto};`;
          classes += ' fw-bold';
        }

        tr.innerHTML += `<td class="${classes}" style="${style}">${qtdTitulos}</td>`;
      } else {
        tr.innerHTML += `<td class="text-muted align-middle">-</td>`;
      }
    });

    tbodyContent.appendChild(tr);
  });

  // 3. Linha de Total de Títulos
  let trTotal = document.createElement('tr');
  trTotal.className = 'table-dark border-top border-3';
  trTotal.innerHTML = `<td class="text-start ps-4 fw-bold align-middle text-uppercase">Total de Títulos</td>`;

  let maxTotal = -1;
  if (timesAtivos.length > 0) {
    maxTotal = Math.max(...timesAtivos.map(t => calcularTotalTitulos(t)));
  }

  timesSelecionados.forEach(time => {
    if (time) {
      const total = calcularTotalTitulos(time);
      let style = '';
      let classes = 'fs-5 align-middle';

      if (total === maxTotal && maxTotal > 0 && timesAtivos.length > 1) {
        const corEscura = ajustarBrilho(time.cor_rgb, 0.7);
        const corTexto = getCorTexto(corEscura);
        style = `background-color: ${corEscura}; color: ${corTexto};`;
        classes += ' fw-bold total-highlight'; // Adicionada classe CSS para manipular no hover
      }

      trTotal.innerHTML += `<td class="${classes}" style="${style}">${total}</td>`;
    } else {
      trTotal.innerHTML += `<td class="text-muted align-middle">-</td>`;
    }
  });

  tbodyContent.appendChild(trTotal);
}

document.addEventListener('DOMContentLoaded', inicializarSelects);