import type { Config } from 'tailwindcss'
import daisyUI from 'daisyui'
import daisyUIThemes from 'daisyui/src/theming/themes'

export default <Partial<Config>>{
  plugins: [daisyUI],
  daisyui: {
    themes: [
      {
        dark: {
          ...daisyUIThemes['dark'],
          primary: '#0070E8',
          secondary: '#6A4C93',
          warning: '#FFCA3A',
          error: '#ff595e',
          success: '#8AC926',
        },
      },
    ],
  },
}
