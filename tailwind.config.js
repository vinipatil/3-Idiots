export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['"Indie Flower"', 'cursive'],
      },

      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 1.5s ease-out forwards',
        'fall': 'fall 10s linear infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },

        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },

        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        
        fall: {
          '0%': { transform: 'translateY(-10%) rotate(0deg)', opacity: 1 },
          '100%': { transform: 'translateY(120vh) rotate(360deg)', opacity: 0 },
        },
      },
    }

  },
  plugins: [],
}
