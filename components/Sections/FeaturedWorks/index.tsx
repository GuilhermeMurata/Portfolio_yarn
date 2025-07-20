import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Projetos.
      </Heading>
      <Text variant="description">
        Aqui estão alguns dos projetos que desenvolvi durante meu estudo e aprendizado.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Efood"
            src="/works/efood/Iphone_efood.png"
            description="Site com sugestões de restaurantes, utilizei Typescript, Redux e integrei pela primeira vez uma API. 
            Tudo isso aprendido durante o curso de 'Desenvolvedor Full stack Java' na EBAC."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://efoodcheckout.vercel.app/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Disney Clone"
            description="Clone do site de streaming da Disney utilizando SCSS e Javascript durante meu aprendizado no curso da EBAC."
            src="/works/Iphone_disney.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://clone-disneyplus-murata.vercel.app/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Calculadora"
            description="Calculadora desenvolvido com VUE."
            src="/works/Iphone_calculadora.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://calculadora-js-murata.vercel.app/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
