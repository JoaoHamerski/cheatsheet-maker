import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  theme: {
    colors: {
      ...colors,
      'primary': '#0070E8',
      'secondary': '#00E8C9',
      'warning': '#FFCA3A',
      'danger': '#ff595e',
      'success': '#24E16D',
      'base-100': '#1d232a',
      'base-200': '#191e24',
      'base-300': '#15191e',
    },
  },
}
