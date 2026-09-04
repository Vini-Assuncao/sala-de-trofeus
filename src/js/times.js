const times = [
  {
    id: "sao-paulo",
    nome: "São Paulo",
    sigla_estado: "SP",
    cor_rgb: "rgb(220, 0, 0)",
    emoji_bandeira: "😇", 
    site_oficial: "https://www.saopaulofc.net",
    titulos: {
      estadual: 22,
      brasileirao: 6,
      copa_do_brasil: 1,
      supercopa_do_brasil: 1,
      sul_americana: 1,
      libertadores: 3,
      recopa_sul_americana: 2,
      mundial: 3
    }
  },
  {
    id: "palmeiras",
    nome: "Palmeiras",
    sigla_estado: "SP",
    cor_rgb: "rgb(0, 100, 0)",
    emoji_bandeira: "🐖", 
    site_oficial: "https://www.palmeiras.com.br",
    titulos: {
      estadual: 27,
      brasileirao: 12,
      copa_do_brasil: 4,
      supercopa_do_brasil: 1,
      sul_americana: 0,
      libertadores: 3,
      recopa_sul_americana: 1,
      mundial: 0 // Copa Rio 1951
    }
  },
  {
    id: "flamengo",
    nome: "Flamengo",
    sigla_estado: "RJ",
    cor_rgb: "rgb(200, 0, 0)",
    emoji_bandeira: "🐦‍⬛", 
    site_oficial: "https://www.flamengo.com.br",
    titulos: {
      estadual: 40,
      brasileirao: 9,
      copa_do_brasil: 5,
      supercopa_do_brasil: 2,
      sul_americana: 0,
      libertadores: 3,
      recopa_sul_americana: 1,
      mundial: 1
    }
  },
  {
    id: "gremio",
    nome: "Grêmio",
    sigla_estado: "RS",
    cor_rgb: "rgb(0, 128, 255)",
    emoji_bandeira: "🤺",
    site_oficial: "https://gremio.net",
    titulos: {
      estadual: 44,
      brasileirao: 2,
      copa_do_brasil: 5,
      supercopa_do_brasil: 1,
      sul_americana: 0,
      libertadores: 3,
      recopa_sul_americana: 2,
      mundial: 1
    }
  },
  {
    id: "corinthians",
    nome: "Corinthians",
    sigla_estado: "SP",
    cor_rgb: "rgb(20, 20, 20)",
    emoji_bandeira: "🦅", 
    site_oficial: "https://www.corinthians.com.br",
    titulos: {
      estadual: 30,
      brasileirao: 7,
      copa_do_brasil: 3,
      supercopa_do_brasil: 1,
      sul_americana: 0,
      libertadores: 1,
      recopa_sul_americana: 1,
      mundial: 2
    }
  },
  {
    id: "santos",
    nome: "Santos",
    sigla_estado: "SP",
    cor_rgb: "rgb(230, 230, 230)",
    emoji_bandeira: "🐳", 
    site_oficial: "https://www.santosfc.com.br",
    titulos: {
      estadual: 22,
      brasileirao: 8,
      copa_do_brasil: 1,
      supercopa_do_brasil: 0,
      sul_americana: 0,
      libertadores: 3,
      recopa_sul_americana: 1,
      mundial: 2
    }
  },
  {
    id: "cruzeiro",
    nome: "Cruzeiro",
    sigla_estado: "MG",
    cor_rgb: "rgb(0, 51, 153)",
    emoji_bandeira: "🦊", 
    site_oficial: "https://www.cruzeiro.com.br",
    titulos: {
      estadual: 39,
      brasileirao: 4,
      copa_do_brasil: 6,
      supercopa_do_brasil: 0,
      sul_americana: 0,
      libertadores: 2,
      recopa_sul_americana: 1,
      mundial: 0
    }
  },
  {
    id: "atletico-mg",
    nome: "Atlético Mineiro",
    sigla_estado: "MG",
    cor_rgb: "rgb(30, 30, 30)",
    emoji_bandeira: "🐓", 
    site_oficial: "https://atletico.com.br",
    titulos: {
      estadual: 49,
      brasileirao: 3,
      copa_do_brasil: 2,
      supercopa_do_brasil: 1,
      sul_americana: 0,
      libertadores: 1,
      recopa_sul_americana: 1,
      mundial: 0
    }
  },
  {
    id: "internacional",
    nome: "Internacional",
    sigla_estado: "RS",
    cor_rgb: "rgb(230, 0, 0)",
    emoji_bandeira: "🔴", 
    site_oficial: "https://internacional.com.br",
    titulos: {
      estadual: 45,
      brasileirao: 3,
      copa_do_brasil: 1,
      supercopa_do_brasil: 0,
      sul_americana: 1,
      libertadores: 2,
      recopa_sul_americana: 2,
      mundial: 1
    }
  },
  {
    id: "fluminense",
    nome: "Fluminense",
    sigla_estado: "RJ",
    cor_rgb: "rgb(128, 0, 32)",
    emoji_bandeira: "🛡️", 
    site_oficial: "https://www.fluminense.com.br",
    titulos: {
      estadual: 33,
      brasileirao: 4,
      copa_do_brasil: 1,
      supercopa_do_brasil: 0,
      sul_americana: 0,
      libertadores: 1,
      recopa_sul_americana: 1,
      mundial: 0
    }
  },
  {
    id: "vasco",
    nome: "Vasco da Gama",
    sigla_estado: "RJ",
    cor_rgb: "rgb(10, 10, 10)",
    emoji_bandeira: "⛵", 
    site_oficial: "https://vasco.com.br",
    titulos: {
      estadual: 24,
      brasileirao: 4,
      copa_do_brasil: 1,
      supercopa_do_brasil: 0,
      sul_americana: 0,
      libertadores: 1,
      recopa_sul_americana: 0,
      mundial: 0
    }
  },
  {
    id: "botafogo",
    nome: "Botafogo",
    sigla_estado: "RJ",
    cor_rgb: "rgb(15, 15, 15)",
    emoji_bandeira: "⭐", 
    site_oficial: "https://www.botafogo.com.br",
    titulos: {
      estadual: 21,
      brasileirao: 2,
      copa_do_brasil: 0,
      supercopa_do_brasil: 0,
      sul_americana: 0,
      libertadores: 1,
      recopa_sul_americana: 0,
      mundial: 0
    }
  },
  {
    id: "bahia",
    nome: "Bahia",
    sigla_estado: "BA",
    cor_rgb: "rgb(0, 85, 164)",
    emoji_bandeira: "🦸",
    site_oficial: "https://www.esporteclubebahia.com.br",
    titulos: {
      estadual: 51,
      brasileirao: 2,
      copa_do_brasil: 0,
      supercopa_do_brasil: 0,
      sul_americana: 0,
      libertadores: 0,
      recopa_sul_americana: 0,
      mundial: 0
    }
  },
  {
    id: "fortaleza",
    nome: "Fortaleza",
    sigla_estado: "CE",
    cor_rgb: "rgb(0, 40, 120)",
    emoji_bandeira: "🦁", 
    site_oficial: "https://fortaleza1918.com.br",
    titulos: {
      estadual: 47,
      brasileirao: 0,
      copa_do_brasil: 0,
      supercopa_do_brasil: 0,
      sul_americana: 0,
      libertadores: 0,
      recopa_sul_americana: 0,
      mundial: 0
    }
  },
  {
    id: "athletico-pr",
    nome: "Athletico-PR",
    sigla_estado: "PR",
    cor_rgb: "rgb(200, 16, 46)",
    emoji_bandeira: "🌪️", 
    site_oficial: "https://www.athletico.com.br",
    titulos: {
      estadual: 28,
      brasileirao: 1,
      copa_do_brasil: 1,
      supercopa_do_brasil: 0,
      sul_americana: 2,
      libertadores: 0,
      recopa_sul_americana: 0,
      mundial: 0
    }
  },
  {
    id: "vitoria",
    nome: "Vitória",
    sigla_estado: "BA",
    cor_rgb: "rgb(220, 0, 0)",
    emoji_bandeira: "🦁", 
    site_oficial: "https://ecvitoria.com.br",
    titulos: {
      estadual: 30,
      brasileirao: 0,
      copa_do_brasil: 0,
      supercopa_do_brasil: 0,
      sul_americana: 0,
      libertadores: 0,
      recopa_sul_americana: 0,
      mundial: 0
    }
  },
  {
    id: "bragantino",
    nome: "Red Bull Bragantino",
    sigla_estado: "SP",
    cor_rgb: "rgb(220, 0, 40)",
    emoji_bandeira: "🐂🪽", 
    site_oficial: "https://www.redbullbragantino.com.br",
    titulos: {
      estadual: 1,
      brasileirao: 0,
      copa_do_brasil: 0,
      supercopa_do_brasil: 0,
      sul_americana: 0,
      libertadores: 0,
      recopa_sul_americana: 0,
      mundial: 0
    }
  },
  {
    id: "juventude",
    nome: "Juventude",
    sigla_estado: "RS",
    cor_rgb: "rgb(0, 128, 64)",
    emoji_bandeira: "🦜", 
    site_oficial: "https://www.juventude.com.br",
    titulos: {
      estadual: 1,
      brasileirao: 0,
      copa_do_brasil: 1,
      supercopa_do_brasil: 0,
      sul_americana: 0,
      libertadores: 0,
      recopa_sul_americana: 0,
      mundial: 0
    }
  },
  {
    id: "ceara",
    nome: "Ceará",
    sigla_estado: "CE",
    cor_rgb: "rgb(20, 20, 20)",
    emoji_bandeira: "👴", 
    site_oficial: "https://cearasc.com",
    titulos: {
      estadual: 47,
      brasileirao: 0,
      copa_do_brasil: 0,
      supercopa_do_brasil: 0,
      sul_americana: 0,
      libertadores: 0,
      recopa_sul_americana: 0,
      mundial: 0
    }
  },
  {
    id: "mirassol",
    nome: "Mirassol",
    sigla_estado: "SP",
    cor_rgb: "rgb(255, 204, 0)",
    emoji_bandeira: "🦁", 
    site_oficial: "https://mirassolfc.com.br",
    titulos: {
      estadual: 0,
      brasileirao: 0,
      copa_do_brasil: 0,
      supercopa_do_brasil: 0,
      sul_americana: 0,
      libertadores: 0,
      recopa_sul_americana: 0,
      mundial: 0
    }
  }
];