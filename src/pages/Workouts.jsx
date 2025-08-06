import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, PlayCircle, Clock, Flame, Target, Filter, Search } from 'lucide-react'

const Workouts = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterLevel, setFilterLevel] = useState('all')
  const [filterDuration, setFilterDuration] = useState('all')

  // Sample workout data
  const sampleWorkouts = [
    {
      id: 1,
      title: 'Morning Energy Boost',
      description: 'Quick 10-minute workout to start your day with energy',
      duration: 10,
      calories: 80,
      level: 'beginner',
      focus: 'full_body',
      exercises: 8,
      image: '🌅'
    },
    {
      id: 2,
      title: 'HIIT Fat Burner',
      description: 'High-intensity interval training for maximum calorie burn',
      duration: 20,
      calories: 200,
      level: 'intermediate',
      focus: 'cardio',
      exercises: 6,
      image: '🔥'
    },
    {
      id: 3,
      title: 'Upper Body Strength',
      description: 'Build upper body strength with bodyweight exercises',
      duration: 25,
      calories: 150,
      level: 'intermediate',
      focus: 'upper_body',
      exercises: 10,
      image: '💪'
    },
    {
      id: 4,
      title: 'Flexibility Flow',
      description: 'Gentle stretching and flexibility routine',
      duration: 15,
      calories: 60,
      level: 'beginner',
      focus: 'flexibility',
      exercises: 12,
      image: '🧘'
    },
    {
      id: 5,
      title: 'Core Crusher',
      description: 'Intense core workout for a strong midsection',
      duration: 18,
      calories: 120,
      level: 'advanced',
      focus: 'core',
      exercises: 8,
      image: '⚡'
    },
    {
      id: 6,
      title: 'Lower Body Power',
      description: 'Strengthen and tone your legs and glutes',
      duration: 30,
      calories: 250,
      level: 'intermediate',
      focus: 'lower_body',
      exercises: 12,
      image: '🦵'
    }
  ]

  const filteredWorkouts = sampleWorkouts.filter(workout => {
    const matchesSearch = workout.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workout.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = filterLevel === 'all' || workout.level === filterLevel
    const matchesDuration = filterDuration === 'all' || 
                           (filterDuration === 'short' && workout.duration <= 15) ||
                           (filterDuration === 'medium' && workout.duration > 15 && workout.duration <= 25) ||
                           (filterDuration === 'long' && workout.duration > 25)
    
    return matchesSearch && matchesLevel && matchesDuration
  })

  const getLevelColor = (level) => {
    switch (level) {
      case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'advanced': return 'bg-red-500/20 text-red-400 border-red-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <div className="min-h-screen py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Your <span className="gradient-text">Workout Library</span>
        </h1>
        <p className="text-xl text-gray-300">
          Browse and start your favorite workouts
        </p>
      </div>

      {/* Search and Filters */}
      <div className="card mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search workouts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-4">
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            <select
              value={filterDuration}
              onChange={(e) => setFilterDuration(e.target.value)}
              className="px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
            >
              <option value="all">All Durations</option>
              <option value="short">≤ 15 min</option>
              <option value="medium">16-25 min</option>
              <option value="long">&gt; 25 min</option>
            </select>
          </div>
        </div>
      </div>

      {/* Workouts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkouts.map((workout) => (
          <div key={workout.id} className="card hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">{workout.image}</div>
              <h3 className="text-xl font-bold text-white mb-2">{workout.title}</h3>
              <p className="text-gray-400 text-sm">{workout.description}</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-4 h-4" />
                  {workout.duration} min
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Flame className="w-4 h-4" />
                  {workout.calories} cal
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Target className="w-4 h-4" />
                  {workout.exercises} exercises
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(workout.level)}`}>
                  {workout.level}
                </div>
              </div>
            </div>

            <button className="w-full btn-primary group-hover:scale-105 transition-transform">
              <PlayCircle className="w-5 h-5 mr-2" />
              Start Workout
            </button>
          </div>
        ))}
      </div>

      {filteredWorkouts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-white mb-2">No workouts found</h3>
          <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
          <Link to="/generator">
            <button className="btn-primary">
              Generate New Workout
            </button>
          </Link>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-12 text-center">
        <div className="card bg-gradient-to-r from-orange-500/10 to-pink-500/10 border-orange-500/20">
          <h3 className="text-xl font-bold text-white mb-4">Need a custom workout?</h3>
          <p className="text-gray-300 mb-6">Generate a personalized workout tailored to your specific needs and goals.</p>
          <Link to="/generator">
            <button className="btn-primary">
              <Target className="w-5 h-5 mr-2" />
              Create Custom Workout
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Workouts