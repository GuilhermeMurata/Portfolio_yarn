/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Text,
  Link,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
  List,
  ListIcon,
  ListItem,
  SlideFade,
  Skeleton,
  useColorModeValue,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react'
import { BiRightArrow } from 'react-icons/bi'
import styles from './styles.module.css'
import { FormationsList } from 'config/formation'
import { mobileBreakpointsMap } from 'config/theme'

const FormationsTab = () => {
  const { colorMode } = useColorMode()
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const borderColor = useColorModeValue('gray.300', 'gray.600')
  const activeBordercolor = useColorModeValue('teal.500', '#97DFFC')
  const isMobile = useBreakpointValue(mobileBreakpointsMap)

  const tabOrientation =
    useBreakpointValue({
      base: 'horizontal',
      sm: 'horizontal',
      md: 'vertical',
      lg: 'vertical',
      xl: 'vertical',
    }) ?? ('vertical' as any)

  const tabMinWidth = useBreakpointValue({
    base: '160px',
    sm: '160px',
    md: 'auto',
    lg: 'auto',
    xl: 'auto',
  })
  return (
    <Tabs id="FormationsTabs" orientation={tabOrientation} isLazy>
      <TabList
        width={!isMobile ? '30%' : 'auto'}
        borderColor="transparent"
        overflowX={isMobile ? 'scroll' : 'auto'}
        overflowY={'hidden'}
        className={styles.FormationsTabs}
      >
        {FormationsList.map((company) => (
          <Tab
            key={`Tab-${company.name}`}
            fontSize="smaller"
            h="120px"
            minWidth={tabMinWidth}
            boxShadow="none"
            borderColor={borderColor}
            borderLeftWidth={tabOrientation === 'vertical' ? '4px' : '0'}
            _selected={{
              borderColor: activeBordercolor,
              boxShadow: 'none',
              borderLeftWidth: tabOrientation === 'vertical' ? '4px' : '0',
              borderBottomWidth: tabOrientation === 'horizontal' ? '4px' : '0',
              background: 'whiteAlpha.100',
            }}
            borderBottomWidth={tabOrientation === 'horizontal' ? '4px' : '0'}
          >
            <Image
              src={
                colorMode === 'dark' ? company.logo.dark : company.logo.light
              }
              maxWidth="88px"
              fallback={<Skeleton height="100%" width="100%" />}
            ></Image>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {FormationsList.map((company) => (
          <TabPanel key={`TabPanel-${company.name}`}>
            <SlideFade offsetY="20px" in={true}>
              <Stack spacing={1}>
                <Text
                  as="span"
                  fontSize="lg"
                  fontWeight="bold"
                  variant="description"
                >
                  {company.position}
                </Text>
                <Text as="span">
                  <Link
                    href={company.url}
                    aria-label="scentregroup"
                    rel="noreferrer"
                    target="_blank"
                    fontSize="lg"
                    fontWeight="bold"
                  >
                    #{company.name}
                  </Link>
                  <Text
                    as="span"
                    textTransform="none"
                    fontSize="x-small"
                    variant="description"
                  >
                    {' '}
                    {company.subDetail}
                  </Text>
                </Text>
                <Text fontSize="smaller">{company.duration}</Text>
                <Text fontSize="smaller">{company.description}</Text>
              </Stack>
              <List spacing={3} pt={5}>
                {company.roles?.map((roleDesc, idx) => (
                  <ListItem
                    key={`${company.name}-desc-${idx}`}
                    fontSize="smaller"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    <ListIcon
                      as={BiRightArrow}
                      color={emphasis}
                      display="block"
                    />
                    <Text as="span" display="block" variant="description">
                      {roleDesc}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </SlideFade>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default FormationsTab
