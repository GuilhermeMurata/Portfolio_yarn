import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiDotNet,
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiReact,
  SiNextDotJs,
  SiNodeDotJs,
  SiDocker,
  SiJava,
  SiC,
} from 'react-icons/si'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2023

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Oque eu faço.
      </Heading>
      <Text variant="description">
        Eu venho estudando programação a {professionalYears} anos com um objetivo claro em me tornar <b>Software Engineer</b> com foco em {' '}
        <b>Java</b> para {' '}
        <Tooltip>
          <Text as="span" variant="emphasis">
            <b>back-end.</b>
          </Text>
        </Tooltip>{' '}
        <br /> <br />
        No momento busco minha primeira oportunidade na área mesmo que front-end.
        <br /> <br />
        Aqui esta algumas das tecnologias que tenho contato e prática. {' '}
      </Text>

      <SimpleGrid columns={1} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJava} color={emphasis} fontSize="2em" />
            Java
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javascript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiC} color={emphasis} fontSize="2em" />
            C
          </ListItem>
          </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            Meu arsenal <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
