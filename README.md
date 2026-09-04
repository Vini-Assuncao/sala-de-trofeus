# 🏆 Sala de Troféus

O **Sala de Troféus** é uma aplicação web interativa que permite comparar simultaneamente a galeria de títulos de até 4 clubes do Campeonato Brasileiro. A ferramenta compara a hegemonia e o histórico dos times em torneios regionais, nacionais e internacionais.

## 🕹️ Funcionalidades
* **Compatação:** Permite comparar até 4 times e indica os maiores campeões em cada campeonato.
* **Links oficiais:** Ao clicar no nome do time, você é redirecionado ao site oficial do clube.
* **Limpar times:** Você pode limpar todos os times já selecionados para recomeçar.

## 📊 Competições Comparadas

* **Nacionais/Estaduais:** Estadual, Brasileirão, Copa do Brasil e Supercopa do Brasil.
* **Internacionais:** Copa Sul-Americana, Copa Libertadores, Recopa Sul-Americana e Mundial de Clubes.

## 🛠️ Tecnologias e Recursos

* **HTML5**
* **CSS3** (Estilização própria em `src/css/style.css`)
* **JavaScript** (Lógica de seleção e comparação em `src/js/script.js`)
* **Bootstrap 5** (Gerenciado via NPM, sem dependência de CDN externa)

## 📁 Estrutura do Repositório

```text
meu-projeto/
├── index.html
├── src/
│   ├── css/
│   │   └── styles.css       ← CSS customizado
│   └── js/
│       └── script.js       ← Lógica da aplicação
│       └── times.js        ← Dados dos times
├── package.json            ← Gerenciador de dependências
└── README.md               ← Documentação do projeto
