import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
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
      Lugares que.
    </Heading>
    <Text variant="description">
      Desde 2023 tive o privilégio de trabalhar com várias empresas que me permitiram aprimorar
      minhas habilidades e talentos. Essas empresas sempre terão um lugar especial no meu coração.
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
