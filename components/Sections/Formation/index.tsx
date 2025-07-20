import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import FormationsTab from './FormationsTab'
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
      Formações.
    </Heading>
    <Text variant="description">
      Durante esta jornada topei com diversos cursos de varias plataformas, onde aprendi muito e continuo aprendendo cada dia mais.
    </Text>

    <FormationsTab />
  </Stack>
)

export default memo(DetailSection)
