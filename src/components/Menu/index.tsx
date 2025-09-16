import styles from './styles.module.css'
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

type AvailableThemes = 'dark' | 'light'

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme = localStorage.getItem('theme') as AvailableThemes | null
    return savedTheme ? savedTheme : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleThemeChange = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='#' aria-label='Voltar para o início' title='Voltar para o início'>
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href='#' aria-label='Ver histórico' title='Ver histórico'>
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href='#' aria-label='Configurações' title='Configurações'>
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href='#' aria-label='Tema' title='Tema' onClick={handleThemeChange}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </a>
    </nav>
  )
}
