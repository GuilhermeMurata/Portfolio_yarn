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
      Desde 2023 tive o privilégio de trabalhar com várias empresas que me permitiram aprimorar
      minhas habilidades e talentos. Essas empresas sempre terão um lugar especial no meu coração.
    </Text>

    <FormationsTab />
  </Stack>
)

export default memo(DetailSection)
