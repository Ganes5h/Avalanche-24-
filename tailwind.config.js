module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber': {
          'pink': '#FF006C',
          'blue': '#00FFF0',
          'yellow': '#FFE600',
          'purple': '#8B3DFF',
          'red': '#FF3D3D',
          'green': '#00FF6C',
          'black': '#0D0D0D',
          'dark': '#1A1A1A',
        },
        'neon': {
          'blue': '#00F0FF',
          'pink': '#FF00EA',
          'yellow': '#FFF700',
        }
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 2s ease-in-out infinite',
        'grid-flow': 'grid-flow 20s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 3px)' },
          '66%': { transform: 'translate(5px, -3px)' }
        },
        glow: {
          '0%': { textShadow: '0 0 5px #00F0FF, 0 0 15px #00F0FF, 0 0 20px #00F0FF' },
          '100%': { textShadow: '0 0 10px #00F0FF, 0 0 25px #00F0FF, 0 0 30px #00F0FF' }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        'grid-flow': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100% 100%' }
        }
      },
      // Remove the backgroundImage section since we're using CSS patterns
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}