import { Icon, Link } from '@chakra-ui/react'
import { IoMdOpen } from 'react-icons/io'

export type Company = 'Ecole' | 'EBAC' | 'Alura' | 'DIO' | 'Udemy'

export type CompanyDetail = {
  name: string
  subDetail?: string
  url: string
  position: string
  duration: string
  description: string | (string | JSX.Element)[]
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Formations: {
  [key in Company]: CompanyDetail
} = {
  Ecole: {
    name: '42',
    subDetail: 'São Paulo',
    url: 'https://www.42sp.org.br/',
    position: 'Engenheiro de Software',
    duration: '',
    description: [
      'Piscina da 42 São Paulo.',
      <br></br>,
      <br key="br1" />,
      'Foram 26 dias de imersão total, aprendendo a programar em C, enfrentando desafios diários, lidando com dúvidas, erros, acertos — e vivendo tudo isso ao lado de pessoas incríveis. Gente com histórias, culturas e visões diferentes, mas com um objetivo em comum: aprender, crescer e se superar.',
      <br key="br2" />,
      <br></br>,
      'Desde o primeiro dia, a 42 me tirou da zona de conforto. A metodologia é diferente de tudo que eu já tinha vivido. Aqui, a gente aprende e se desenvolve na prática, colaborando, perguntando, ouvindo e explicando. Não é só sobre código. É sobre saber lidar com o outro, com o tempo, com o ego, com o cansaço. É sobre aprender a aprender.',
      <br key="br3" />,
      <br></br>,
      'Uma das coisas mais marcantes foi perceber que, com dedicação, a gente realmente consegue ir muito além do que imaginava. E mais: que ajudar os outros a aprender também faz parte do processo. A troca que rola ali dentro é algo que carrego comigo com muito carinho.',
      <br key="br4" />,
      <br></br>,
      'No fim das contas, me sinto realizado, inspirado e feliz que aprendi o que é aprender de fato.'
    ],
    logo: {
      light: '/certification_at_logos/logo_42.jpg',
      dark: '/certification_at_logos/logo_42.jpg',
    },
    roles: [],
  },
  EBAC: {
    name: 'EBAC',
    subDetail: 'Escola Britânica de Artes Criativas & Tecnologia',
    url: 'https://www.tp.com/pt-br/localizacoes/brasil/',
    position: 'Expert em interação bilíngue',
    duration: '',
    description: `No momento estou completamente focado e derterminado em aprimorar minhas habilidades em Java e Full stack.`,
    logo: {
      light: '/certification_at_logos/logo_ebac.png',
      dark: '/certification_at_logos/logo_ebac.png',
    },
    roles: [
      <>Desenvolvedor Full stack Java v2 - Previsão de termino Dez 2025</>
    ],
  },
  Alura: {
    name: 'Alura',
    subDetail: 'Cursos online de Tecnologia',
    url: 'https://www.alura.com.br/?srsltid=AfmBOooCRpeTlEWmPgG-xZaQq_vAG1-Cz0Kr11Qzt1qNoMxT5XsXZWmw',
    position: 'Curso',
    duration: '',
    description: `Na Alura durante o período de 1 ano fiz cursos básicos de JavaScript e Java para consolidar meu conhecimento.`,
    logo: {
      light: '/certification_at_logos/logo_alura.jpg',
      dark: '/certification_at_logos/logo_alura.jpg',
    },
    roles: [
      <>
        {' '}
        <Link
          variant="primaryLink"
          href="https://cursos.alura.com.br/certificate/4f24b555-bf29-40b0-9478-aa50ef4e919a"
          target="_blank"
          rel="noreferrer"
        >
          JavaScript​: conhecendo arrays <Icon as={IoMdOpen} />
        </Link>{' '}
      </>,
      <>
        {' '}
        <Link
          variant="primaryLink"
          href="https://cursos.alura.com.br/certificate/d56ad980-3d5e-49db-9609-444e2f56f175/"
          target="_blank"
          rel="noreferrer"
        >
          JavaScript​: conhecendo objetos <Icon as={IoMdOpen} />
        </Link>{' '}
      </>,
      <>
        {' '}
        <Link
          variant="primaryLink"
          href="https://cursos.alura.com.br/certificate/3794e438-c4b4-4f9c-b468-abb4442fe6a8"
          target="_blank"
          rel="noreferrer"
        >
          JavaScript​: utilizando tipos, variáveis e funções{' '}
          <Icon as={IoMdOpen} />
        </Link>{' '}
      </>,
      <>
        {' '}
        <Link
          variant="primaryLink"
          href="https://cursos.alura.com.br/certificate/58696d2e-d096-443c-a8c5-846927083e8b"
          target="_blank"
          rel="noreferrer"
        >
          Praticando Java: Strings e Regex <Icon as={IoMdOpen} />
        </Link>{' '}
      </>,
      <>
        {' '}
        <Link
          variant="primaryLink"
          href="https://cursos.alura.com.br/certificate/9eeb4b2b-c2d9-4bdf-bfaf-807158499002"
          target="_blank"
          rel="noreferrer"
        >
          Praticando Java: condicionais if e else <Icon as={IoMdOpen} />
        </Link>{' '}
      </>,
      <>
        {' '}
        <Link
          variant="primaryLink"
          href="https://cursos.alura.com.br/certificate/4b3f7685-c6a5-45e2-a26c-52b5ddc28d37"
          target="_blank"
          rel="noreferrer"
        >
          Praticando Java: laços for e while <Icon as={IoMdOpen} />
        </Link>{' '}
      </>,
      <>
        {' '}
        <Link
          variant="primaryLink"
          href="https://cursos.alura.com.br/certificate/3aff55ae-68a0-45f6-8514-63785bd40c3a"
          target="_blank"
          rel="noreferrer"
        >
          Praticando Java: variáveis e tipos <Icon as={IoMdOpen} />
        </Link>{' '}
      </>,
    ],
  },
  DIO: {
    name: 'DIO',
    subDetail: 'Bootcamp',
    url: 'https://www.dio.me/',
    position: 'Bootcamp',
    duration: '',
    description: `Durante o bootcamp da WEX - End to End Engineering aprendi tudo que sei sobre .NET e C#`,
    logo: {
      light: '/certification_at_logos/logo_dio.png',
      dark: '/certification_at_logos/logo_dio.png',
    },
    roles: [
      <>
        {' '}
        <Link
          variant="primaryLink"
          href="https://hermes.dio.me/certificates/FA36YIM5.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Array e Listas em C# <Icon as={IoMdOpen} />
        </Link>{' '}
      </>,
      <>
        {' '}
        <Link
          variant="primaryLink"
          href="https://hermes.dio.me/certificates/XXRL8DZZ.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Comentários e Boas Práticas em C# <Icon as={IoMdOpen} />
        </Link>{' '}
      </>,
      <>
        {' '}
        <Link
          variant="primaryLink"
          href="https://cursos.alura.com.br/certificate/3794e438-c4b4-4f9c-b468-abb4442fe6a8"
          target="_blank"
          rel="noreferrer"
        >
          Conhecendo a Organização de um Programa C# <Icon as={IoMdOpen} />
        </Link>{' '}
      </>,
      <>
        {' '}
        <Link
          variant="primaryLink"
          href="https://hermes.dio.me/certificates/8UA6MZTP.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Conhecendo as Estruturas de Repetição em C# <Icon as={IoMdOpen} />
        </Link>{' '}
      </>,
      <>
        {' '}
        <Link
          variant="primaryLink"
          href="https://hermes.dio.me/certificates/BE4MNBV5.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Operadores Aritméticos em C# <Icon as={IoMdOpen} />
        </Link>{' '}
      </>,
      <>
        {' '}
        <Link
          variant="primaryLink"
          href="https://hermes.dio.me/certificates/6RFYZPDV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Sintaxe e Tipos de Dados em C# <Icon as={IoMdOpen} />
        </Link>{' '}
      </>,
      <>
        {' '}
        <Link
          variant="primaryLink"
          href="https://hermes.dio.me/certificates/UPJIG2IR.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Tipos de Operadores em C# <Icon as={IoMdOpen} />
        </Link>{' '}
      </>,
      <>
        {' '}
        <Link
          variant="primaryLink"
          href="https://hermes.dio.me/certificates/TUNGJE8V.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Versionamento de Código com Git e GitHub <Icon as={IoMdOpen} />
        </Link>{' '}
      </>,
    ],
  },
  Udemy: {
    name: 'Udemy',
    subDetail: 'Online Courses | Learn Anything, Anytime',
    url: 'https://www.udemy.com/?deal_code=UDEAFNULP0324&utm_term=Homepage&utm_content=Textlink&utm_campaign=NewUserLP0324&utm_source=aff-campaign&utm_medium=udemyads&LSNPUBID=znpz0s2okgU&ranMID=47901&ranEAID=znpz0s2okgU&ranSiteID=znpz0s2okgU-07HjTMDNpRyPdqXOmynRNg&gad_source=1',
    position: 'Curso',
    duration: '',
    description: `A Udemy foi o ponta pé de tudo, foi onde comecei e testei se realmente gostava de programação. Bom, ca estamos haha. Tive meu primeiro contato com Algoritmos e lógica de programação e Java.`,
    logo: {
      light: '/certification_at_logos/logo_udemy.png',
      dark: '/certification_at_logos/logo_udemy.png',
    },
    roles: [
      <>
        <Link
          variant="primaryLink"
          href="https://www.udemy.com/certificate/UC-df035793-8cc2-41ae-b53f-4a2dffcf31a1/"
          target="_blank"
          rel="noreferrer"
        >
          Java COMPLETO - Programação Orientada a Objetos <Icon as={IoMdOpen} />
        </Link>
      </>,
      <>
        <Link
          variant="primaryLink"
          href="https://www.udemy.com/certificate/UC-957bf775-a812-46f2-859b-ddee84cc4998/"
          target="_blank"
          rel="noreferrer"
        >
          Algoritmos e lógica de programação 2023 - O Curso COMPLETO <Icon as={IoMdOpen} />
        </Link>
      </>,
    ],
  },
}

export const FormationsList = [
  Formations.Ecole,
  Formations.EBAC,
  Formations.Alura,
  Formations.DIO,
  Formations.Udemy,
]
