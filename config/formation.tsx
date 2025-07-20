import { Icon, Link } from '@chakra-ui/react'
import { IoMdOpen } from 'react-icons/io'

export type Company = 'EBAC' | 'Alura' | 'DIO' | 'Udemy'

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

export const Formations: {
  [key in Company]: CompanyDetail
} = {
  EBAC: {
    name: 'EBAC',
    longName: 'EBAC',
    subDetail: 'Escola de artes britanica',
    url: 'https://www.tp.com/pt-br/localizacoes/brasil/',
    position: 'Expert em interação bilíngue',
    duration: 'Fev 2025 - Mai 2025',
    logo: {
      light: '/certification_at_logos/logo_ebac.png',
      dark: '/certification_at_logos/logo_ebac.png',
    },
    roles: [
      <>
       Contributed to the design and development of a comprehensive .NET payment integration project for a client
       That covered credit card payments and subscription management.
       Introduced Stripe as a new payment provider within the system architecture.
       Participated in triaging, fixing and adding new functionalitiesto multiple Azure powered APIs of the same client.
      </>,
      <>
        Worked as a Sitecore Backend on new{' '}
        <Link
          aria-label="Deloitte Digital AU"
          href="https://www.deloittedigital.com.au/"
          target="_blank"
          rel="noreferrer"
          >
          Deloitte Digital AU Site.
        </Link>
      </>,
      <>
        Udergone training for .NET Sitecore 10,
        Sitecore SXA and different topologies it provides.{' '} and Passed {' '}
        <Link
          aria-label="Sitecore 10 .NET Developer Certification"
          href="/certification/Lawingco-Sitecore 10 NET Developer Cert.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Sitecore 10 .NET Developer Certification.
        </Link>
      </>,
    ],
  },
  Alura: {
    name: 'Alura',
    longName: 'Alura',
    subDetail: 'International',
    url: 'https://pagbank.com.br/',
    position: 'Auxiliar administrativo',
    duration: 'Jul 2024 - Fev 2025',
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
          JavaScript​: utilizando tipos, variáveis e funções <Icon as={IoMdOpen} />
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
      </>
    ],
  },
  DIO: {
    name: 'Sanar',
    longName: 'Sanar Cetrus educação médica',
    subDetail: 'Pós graduação',
    url: 'https://sanarsaude.com/?gad_source=1&gad_campaignid=20534043116&gbraid=0AAAAACqYQxB5UMqQsmAMGiBfEnI6KEU2U&gclid=CjwKCAjwp_LDBhBCEiwAK7FnkqO5ksaojxEsfE9H3cmocv3uEcKvHAuQu-quM9VOyJI71TnI76bRmhoCwHYQAvD_BwE',
    position: 'Auxiliar administrativo',
    duration: 'Jun 2023 - Jul 2024',
    logo: {
      light: '/certification_at_logos/logo_dio.png',
      dark: '/certification_at_logos/logo_dio.png',
    },
    roles: [
      <>
        Developed a Twitter Raffle Campaign / Contest Bot called Camps with
        statistics similar to Facebook Ads.
      </>,
      <>
        In 2019 got promoted as Senior Software Engineer and worked with Cryto
        Exchange, Smart Contracts and other APIs using several techs such as
        NodeJS, .NET Core and React.
      </>,
      <>
        Create highly scalable Japanese e-commerce sites. Most notable clients
        were TV Tokyo, Layla EC using .NET.
      </>,
      <>
        Hired at 2016, Undergone Japanese language training first. Shortly
        after, worked with in-house .NET MVC Framework called ERS.
      </>,
    ],
  },
  Udemy: {
    name: 'Sanar',
    longName: 'Sanar Cetrus educação médica',
    subDetail: 'Pós graduação',
    url: 'https://sanarsaude.com/?gad_source=1&gad_campaignid=20534043116&gbraid=0AAAAACqYQxB5UMqQsmAMGiBfEnI6KEU2U&gclid=CjwKCAjwp_LDBhBCEiwAK7FnkqO5ksaojxEsfE9H3cmocv3uEcKvHAuQu-quM9VOyJI71TnI76bRmhoCwHYQAvD_BwE',
    position: 'Auxiliar administrativo',
    duration: 'Jun 2023 - Jul 2024',
    logo: {
      light: '/certification_at_logos/logo_udemy.png',
      dark: '/certification_at_logos/logo_udemy.png',
    },
    roles: [
      <>
        Developed a Twitter Raffle Campaign / Contest Bot called Camps with
        statistics similar to Facebook Ads.
      </>,
      <>
        In 2019 got promoted as Senior Software Engineer and worked with Cryto
        Exchange, Smart Contracts and other APIs using several techs such as
        NodeJS, .NET Core and React.
      </>,
      <>
        Create highly scalable Japanese e-commerce sites. Most notable clients
        were TV Tokyo, Layla EC using .NET.
      </>,
      <>
        Hired at 2016, Undergone Japanese language training first. Shortly
        after, worked with in-house .NET MVC Framework called ERS.
      </>,
    ],
  },
}

export const FormationsList = [
  Formations.EBAC,
  Formations.Alura,
  Formations.DIO,
  Formations.Udemy,
]
