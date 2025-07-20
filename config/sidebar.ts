import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/temaki_murata/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/guilherme-murata-238859229/',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/GuilhermeMurata',
    icon: FaGithub,
  }
]
