import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primaryColor: '#04091C',
      secondaryColor: '#FFFFFF',
      tertiaryColor: '#0F36C3',
      fourthColor: '#2651EE'
    }
  },
  plugins: [],
}
export default config
