import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(var(--primary))',
        'secondary': 'rgb(var(--secondary))',
        'success': 'rgb(var(--success))',
        'warning': 'rgb(var(--warning))',
        'danger': 'rgb(var(--danger))',
        'base-100': 'rgb(var(--base-100))',
        'base-200': 'rgb(var(--base-200))',
        'base-300': 'rgb(var(--base-300))',
      },
    },
  },
}
