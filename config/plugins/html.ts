import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import type { IApi } from '@umijs/max'

export default (api: IApi) => {
  api.modifyHTML(($) => {
    const loading = readFileSync(resolve(__dirname, './html/loading.html'), 'utf-8')
    $('#root').append(loading)
    return $
  })
  api.addHTMLStyles(() => {
    return `
      .dark { background: #000000 }
      .light { background: #f5f5f5 }
    `
  })
  api.addHTMLScripts(() => {
    return `
      let value = localStorage.getItem('Vivy-Theme-Setting')
      if (value) {
        try {
          value = JSON.parse(value)
          document.querySelector('body').classList.add(value.navTheme === 'realDark' ? 'dark' : 'light')
        } catch (error) {}
      }
    `
  })
}
