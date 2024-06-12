module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'appBackground': "#1E1E1E",
        'background-white': '#ffffff',
        'background-gray': '#fafafa',
        'accent-default': '#005fb8',
        'accent-secondary': '#1a6fc0',
        'accent-tertiary': '#337fc6',
        'accent-selected': '#0078d4',
        'accent-disabled': '#c8c8c8',
        'text-primary': '#1b1b1b',
        'text-secondary': '#646464',
        'text-tertiary': '#8d8d8d',
        'text-disabled': '#a3a3a3',
        'primaryColorBlue': '#3d79f2',
        'dark-black': '#1B1B1B',
        'primaryLight': '#3796F6',
        'primaryColor-accent': '#3796F6',
        'bacground-gray-dark': '#F1F1F1',
        'text-primary': '#1B1B1B',
        'text-green': '#1CD6A3',
        'primary-light': '#e6f9ff',
        'light-blue': '#3796F6',
        'accent-skyblue':'#7ACEF9'
      },
      fontFamily: {
		    inter: ['Inter', 'sans-serif'],
			},
      screens: {
        'xs': '475px',
        
      },
    },
  },
  plugins: [],
}

