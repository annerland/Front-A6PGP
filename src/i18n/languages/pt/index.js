const keys = {
  test: {
    testing: 'testando'
  },
  ListItem: {
    name: 'Nome',
    description: 'Descrição'
  },
  SideMenu: {
    home: 'Inicio',
    vaccines: 'Vacinas',
    wallets: 'Carteiras',
    establish: 'Estabelecimentos',
    news: 'Notícias',
    exit: 'Sair',
    config: 'Configurações'
  },
  Config: {
    title: 'Configurações',
    'delete-account': 'Deletar dados da conta',
    'delete-text': 'Todos os dados da conta serão deletados',
    cancel: 'Cancelar',
    continue: 'Continuar',
    terms: 'Termos de uso',
    policy: 'Politica de privacidade'
  },

  CreateVaccineModal: {
    title: 'Criar Vacina',
    name: 'Nome da vacina',
    description: 'Descrição',
    restricted: 'Restrições',
    doses: 'Quantidade de doses',
    interval: 'Intervalos entre doses',
    send: 'Enviar',
    'placeholder-name': 'Ex. Covid-19',
    'placeholder-desc': 'Ex. A vacina da Covid-19 é...',
    'placeholder-rest': 'Ex. Mulheres grávidas',
    'placeholder-doses': 'Ex. 2',
    'placeholder-interval': 'Ex. 1',
    'empty-name': 'Nome vázio',
    'empty-desc': 'Descrição vazia',
    'empty-dose': 'Dose vazia',
    'empty-rest': 'Restrição vazia',
    'empty-inter': 'Indicação vazio',
    'empty-app': 'Via de aplicação vazia',
    'empty-effects': 'Efeitos vazio',
    'empty-care': 'Cuidados vazio',
    indications: 'Indicações',
    effects: 'Efeitos',
    care: 'Cuidados',
    'suggest-title': 'Sugerir vacina',
    suggest: 'Sua vacina foi criada com sucesso! Aguarde a aprovação do administrador para adiciona-lá a lista.',
    application: 'Via de aplicação',
    'edit-vaccine': 'Editar Vacina',
    'edit-vaccine-text': 'Você tem certeza? Os dados serão alterados',
    continue: 'Continuar',
    cancel: 'Cancelar'
  },
  ResetPassword: {
    title: 'Resetar sua senha',
    label: 'Insira seu e-mail para resetar sua senha',
    placeholder: 'Senha',
    back: 'Voltar',
    reset: 'Resetar'
  },
  Home: {
    home: 'Início',
    about: 'Sobre',
    contact: 'Contato',
    login: 'Login',
    vaccines: 'Para ver nossa lista de vacinas públicas',
    click: 'clique aqui',
    title: 'Vaccinator',
    register: 'Registre-se',
    resume: 'Vaccinator é um aplicativo que visa facilitar a organização e manutenção da carteira de vacinação do usuário e seus dependentes, agregando agilidade e eficiência a técnica atualmente realizada de forma manual, permitindo consultas rápidas as informações e um prático manuseio do sistema.'
  },
  Login: {
    password: 'Senha',
    text: 'Não tem uma conta?',
    sign: 'Registre-se',
    forgot: 'Esqueci minha senha',
    invalidPass: 'Senha inválida',
    weakPass: 'Senhas devem ser no mínimo com 8 caracteres de diferentes tipos (letra maíuscula, mínuscula, números e caractere especial)',
    equalPass: 'As Senhas não coincidem',
    invalidUser: 'Usuário inválido',
    welcome: 'Bem-vindo!',
    'confirm-password': 'Confirmar senha',
    back: 'Voltar',
    send: 'Enviar',
    'text-sign-up': 'Seu registro foi criado com sucesso! Verifique seu email para ativar seu registro',
    cancel: 'Cancelar',
    continue: 'Continuar',
    register: 'Ao se registrar-se, você concorda com nossos',
    subtitle: 'termos de uso'
  },
  Vaccines: {
    title: 'Vacinas',
    add: 'Sugerir vacina +',
    search: 'Pesquisar vacinas',
    delete: 'Deletar Vacina',
    text: 'Deseja realmente deletar essa vacina?',
    cancel: 'Cancelar',
    analize: 'Vacinas em análise',
    approved: 'Vacinas aprovadas',
    continue: 'Continuar',
    approve: 'Aprovar Vacina',
    'approve-text': 'Deseja aprovar essa vacina? Ela ficará visível publicamente'
  },
  Establishments: {
    title: 'Estabelecimentos',
    description: 'Para filtrar por distância, todos os campos abaixo devem estar preenchidos',
    'label-cep': 'Digite seu CEP',
    'label-address': 'Digite seu Endereço',
    'label-distance': 'Digite a distância em km',
    'label-vaccine': 'Selecione a vacina',
    send: 'Enviar',
    name: 'Nome do estabelecimento',
    address: 'Endereço',
    info: 'Informações adicionais',
    vaccines: 'Clique aqui para visualizar as vacinas disponíveis',
    district: 'Bairro',
    cep: 'CEP',
    'info-text': 'Avise outros usuários que há vacinas disponíveis',
    here: 'aqui',
    'add-vaccine': 'Adicionar vacina',
    'add-vaccine-text': 'Sua vacina foi adicionada com sucesso!',
    application: 'Data da aplicação',
    'application-invalid': 'Data da aplicação inválida',
    'vaccine-invalid': 'Vacina inválida'
  },

  Wallets: {
    wallets: 'Carteiras',
    name: 'Nome',
    vaccines: 'Vacinas tomadas',
    surname: 'Sobrenome',
    birthday: 'Nascimento',
    gender: 'Gênero',
    cpf: 'CPF',
    cep: 'CEP',
    address: 'Endereço',
    infos: 'Informações adicionais',
    view: 'Visualizar carteira',
    add: 'Adicionar vacina',
    date: 'Data de nascimento',
    'application-invalid': 'Data da aplicação inválida',
    'vaccine-invalid': 'Vacina inválida',
    'add-vaccine': 'Adicionar vacina',
    'add-vaccine-text': 'Sua vacina foi adicionada com sucesso!',
    send: 'Enviar',
    'dose-date': 'Insira a data da dose',
    'label-vaccine': 'Selecione a vacina',
    application: 'Data da aplicação',
    scheduling: 'Data de agendamento',
    info: 'Insira as quantidades de doses de vacinas a serem agendadas',
    'empty-name': 'Nome inválido',
    'empty-surname': 'Sobrenome inválido',
    'empty-date': 'Data de nascimento inválida',
    'empty-gender': 'Gênero vazio',
    'empty-cpf': 'CPF inválido',
    'empty-address': 'Endereço inválido',
    'empty-cep': 'CEP inválido',
    'create-wallet': 'Criar carteira',
    'create-wallet-text': 'Sua Carteira foi criada com sucesso!',
    'type-name': 'Digite seu nome',
    'type-surname': 'Digite seu sobrenome',
    'type-date': 'Digite sua data de nascimento',
    'type-gender': 'Selecione seu gênero',
    'type-cpf': 'Digite seu cpf',
    'type-address': 'Digite seu endereço',
    'type-cep': 'Digite seu cep',
    'edit-wallet': 'Editar carteira',
    'edit-wallet-text': 'Você tem certeza? Esses dados serão alterados',
    cancel: 'Cancelar',
    continue: 'Continuar',
    female: 'Feminino',
    male: 'Masculino',
    'add-button': 'Adicionar +',
    'info-vaccine': 'O que você deseja fazer?',
    establishments: 'Estabelecimentos',
    schedule: 'Agendar vacina'
  },

  News: {
    title: 'Notícias',
    search: 'Pesquisar notícias'
  },

  Policy: {
    cookie: 'Nós usamos cookies para melhorar a sua experiência. Ao utilizar nossos serviços, você concorda com as nossas',
    policy: 'políticas de privacidade',
    title: 'Politica de privacidade',
    'paragraph-1': 'A sua privacidade é importante para nós. É política do Vaccinator respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Vaccinator, e outros sites que possuímos e operamos.',
    'paragraph-2': 'Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.',
    'paragraph-3': 'Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.',
    'paragraph-4': 'Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.',
    'paragraph-5': 'O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.',
    'paragraph-6': 'Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.',
    'paragraph-7': 'O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto conosco.',
    'paragraph-8': 'Política de Cookies Vaccinator',
    'paragraph-9': 'O que são cookies?',
    'paragraph-10': "Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.",
    'paragraph-12': 'Como usamos os cookies?',
    'paragraph-13': 'Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados ​​para fornecer um serviço que você usa.',
    'paragraph-14': 'Desativar cookies',
    'paragraph-15': 'Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.',
    'paragraph-16': 'Cookies que definimos',
    'paragraph-17': 'Cookies relacionados à conta',
    'paragraph-18': 'Se você criar uma conta connosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.',
    'paragraph-19': 'Cookies relacionados ao login',
    'paragraph-20': 'Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.',
    'paragraph-21': 'Cookies de preferências do site',
    'paragraph-22': 'Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências. Cookies de Terceiros',
    'paragraph-23': 'Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site. Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis ​​da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente. Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics. As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você. Periodicamente, testamos novos recursos e fazemos alterações sutis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados ​​para garantir que você receba uma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam. À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses cookies rastrearam. Isso é importante para você, pois significa que podemos fazer previsões de negócios com precisão que nos permitem analisar nossos custos de publicidade e produtos para garantir o melhor preço possível. Mais informações Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.',
    'paragraph-24': 'Esta política é efetiva a partir de September/2020.',
    continue: 'Prosseguir'
  },

  Terms: {
    title: 'Termos de uso',
    terms: '1. Termos',
    paragraph: 'Ao acessar ao site Vaccinator, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.',
    'paragraph-2': '2. Uso de Licença',
    'paragraph-3': 'É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Vaccinator , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: ',
    'paragraph-4': '1. modificar ou copiar os materiais;',
    'paragraph-5': '2. usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);',
    'paragraph-6': '3. tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Vaccinator;',
    'paragraph-7': '4. remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou',
    'paragraph-8': "5. transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.",
    'paragraph-9': 'Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Vaccinator a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.',
    'paragraph-10': '3. Isenção de responsabilidade',
    'paragraph-11': "Os materiais no site da Vaccinator são fornecidos 'como estão'. Vaccinator não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.",
    'paragraph-12': 'Além disso, o Vaccinator não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.',
    'paragraph-13': '4. Limitações',
    'paragraph-14': 'Em nenhum caso o Vaccinator ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Vaccinator, mesmo que Vaccinator ou um representante autorizado da Vaccinator tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.',
    'paragraph-15': 'Precisão dos materiais',
    'paragraph-16': 'Os materiais exibidos no site da Vaccinator podem incluir erros técnicos, tipográficos ou fotográficos. Vaccinator não garante que qualquer material em seu site seja preciso, completo ou atual. Vaccinator pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Vaccinator não se compromete a atualizar os materiais.',
    'paragraph-17': '6. Links',
    'paragraph-18': 'O Vaccinator não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Vaccinator do site. O uso de qualquer site vinculado é por conta e risco do usuário.',
    'paragraph-19': 'Modificações',
    'paragraph-20': 'O Vaccinator pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.',
    'paragraph-21': 'Lei aplicável',
    'paragraph-22': 'Estes termos e condições são regidos e interpretados de acordo com as leis do Vaccinator e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.'
  }
}

export default keys
