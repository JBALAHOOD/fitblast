# FitBlast - AI-Powered Home Workouts

A modern, responsive fitness application built with React and Vite that generates personalized AI-powered workouts for home fitness enthusiasts.

## 🚀 Features

### 🤖 AI Workout Generator
- **Personalized Workouts**: Generate custom workouts based on fitness level, duration, focus area, and goals
- **Dynamic Exercise Selection**: 80+ exercises across 4 focus areas with 3 difficulty levels
- **Smart Adaptation**: Workouts adjust based on your specific goals (weight loss, muscle gain, endurance, flexibility)
- **Varied Routines**: Each generation creates unique exercise combinations

### 🎯 Focus Areas
- **Full Body**: Complete workouts targeting all muscle groups
- **Upper Body**: Focused on arms, chest, shoulders, and back
- **Lower Body**: Targeting legs, glutes, and core
- **Cardio**: High-intensity cardiovascular exercises

### 📊 Fitness Levels
- **Beginner**: Gentle, accessible exercises for newcomers
- **Intermediate**: Moderate intensity for regular exercisers
- **Advanced**: High-intensity challenges for experienced athletes

### ⏱️ Flexible Duration
- Quick 5-minute sessions
- Standard 10-15 minute workouts
- Extended 30-minute routines

## 🛠️ Tech Stack

- **Frontend**: React 18 with functional components and hooks
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with custom components
- **Routing**: React Router DOM for navigation
- **Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach with glass morphism UI

## 🏗️ Project Structure

```
fitblast/
├── src/
│   ├── components/
│   │   └── Layout.jsx          # Main layout with navigation
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with hero section
│   │   ├── Generator.jsx       # AI workout generator
│   │   ├── Workouts.jsx        # Workout library
│   │   └── Profile.jsx         # User profile and stats
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles and Tailwind
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fitblast.git
   cd fitblast
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Design Features

- **Glass Morphism UI**: Modern frosted glass effects
- **Gradient Backgrounds**: Beautiful purple-to-orange gradients
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Floating effects and smooth transitions
- **Dark Theme**: Eye-friendly dark color scheme

## 📱 Pages Overview

### Home Page
- Hero section with call-to-action
- Feature highlights (AI-Generated, 5-30 Minutes, No Equipment)
- User statistics and engagement metrics

### Workout Generator
- Step-by-step preference collection
- Real-time workout generation
- Detailed exercise instructions with rep counts
- Calorie burn estimates

### Workout Library
- Browse saved and sample workouts
- Search and filter functionality
- Workout difficulty and duration filters

### Profile
- User statistics and achievements
- Fitness level and goal tracking
- Quick action buttons

## 🔧 Customization

### Adding New Exercises

To add new exercises to the generator, edit the `exerciseDatabase` object in `src/pages/Generator.jsx`:

```javascript
const exerciseDatabase = {
  focus_area: {
    difficulty_level: [
      {
        name: 'Exercise Name',
        reps: 'Rep count or duration',
        description: 'Exercise description',
        calories: estimated_calories_per_minute
      }
    ]
  }
}
```

### Styling Customization

Custom styles are defined in `src/index.css` and can be modified:
- Glass effects
- Gradient colors
- Animation timings
- Component styles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) for lightning-fast development
- Styled with [Tailwind CSS](https://tailwindcss.com/) for rapid UI development
- Icons provided by [Lucide React](https://lucide.dev/)
- Inspired by modern fitness applications and AI-powered workout generation

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**FitBlast** - Transform your fitness journey with AI-powered home workouts! 💪✨