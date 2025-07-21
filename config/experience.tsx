import { Link } from '@chakra-ui/react'

export type Company = 'Teleperformance' | 'Pagseguro' | 'Sanar'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Teleperformance: {
    name: 'Teleperformance',
    longName: 'Teleperformance',
    subDetail: 'International',
    url: 'https://www.tp.com/pt-br/localizacoes/brasil/',
    position: 'Expert em interação bilíngue',
    duration: 'Fev 2025 - Mai 2025',
    logo: {
      light: '/worked_at_logos/teleperformance/Teleperformance_logo.png',
      dark: '/worked_at_logos/teleperformance/Teleperformance_logo.png',
    },
    roles: [
      <>Ingles Avançado B2</>,
      <>
        Uso de CRMs (Salesforce, HubSpot), plataformas de atendimento (Zendesk,
        Intercom).
      </>,
      <>
        Familiaridade com ferramentas colaborativas (Slack, Teams, Notion).
        Capacidade de atuar em ambientes remotos e multiculturais.
      </>,
      <>Domínio de nuances culturais em inglês e português.</>,
    ],
  },
  Pagseguro: {
    name: 'Pagseguro',
    longName: 'Pagseguro International',
    subDetail: 'International',
    url: 'https://pagbank.com.br/',
    position: 'Analista de dados trainee',
    duration: 'Jul 2024 - Fev 2025',
    logo: {
      light: '/worked_at_logos/pagseguro/Pagseguro_logo.png',
      dark: '/worked_at_logos/pagseguro/Pagseguro_logo.png',
    },
    roles: [
      <>Analise de dados.</>,
      <>Automatização de processos.</>,
      <>Criação de planilhas para big numbers (Excel & Power BI)</>,
      <>
        Expertise em elaborar fluxogramas, contribuindo com melhorias nas
        tarefas e rotinas do setor
      </>,
    ],
  },
  Sanar: {
    name: 'Sanar',
    longName: 'Sanar Cetrus educação médica',
    subDetail: 'Pós graduação médica',
    url: 'https://sanarsaude.com/?gad_source=1&gad_campaignid=20534043116&gbraid=0AAAAACqYQxB5UMqQsmAMGiBfEnI6KEU2U&gclid=CjwKCAjwp_LDBhBCEiwAK7FnkqO5ksaojxEsfE9H3cmocv3uEcKvHAuQu-quM9VOyJI71TnI76bRmhoCwHYQAvD_BwE',
    position: 'Auxiliar administrativo',
    duration: 'Jun 2023 - Jul 2024',
    logo: {
      light: '/worked_at_logos/sanar/Sanar_logo.png',
      dark: '/worked_at_logos/sanar/Sanar_logo.png',
    },
    roles: [
      <>
        Gerenciamento de documentos acadêmicos (históricos, diplomas,
        certificados). Arquivamento físico e digital com atenção aos prazos e
        normas institucionais.
      </>,
      <>
        Sistemas acadêmicos (Siga, Lyceum, TOTVS, Moodle, etc.). Pacote Office
        (Word, Excel e Outlook principalmente).
      </>,
      <>
        Atualização de dados acadêmicos em sistema. Geração de relatórios e
        planilhas para apoio à gestão acadêmica.
      </>
    ],
  },
}

export const ExperiencesList = [
  Experiences.Teleperformance,
  Experiences.Pagseguro,
  Experiences.Sanar,
]
