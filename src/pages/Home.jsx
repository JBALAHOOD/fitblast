import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Play, ArrowRight, Clock, Target, TrendingUp, Flame, Star } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Generated',
      description: 'Workouts tailored to your fitness level and goals',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: '5-30 Minutes',
      description: 'Quick sessions that fit into your busy schedule',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'No Equipment',
      description: 'Use just your body weight for effective workouts',
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  const stats = [
    { label: 'Active Users', value: '10K+', icon: TrendingUp },
    { label: 'Workouts Generated', value: '50K+', icon: Zap },
    { label: 'Calories Burned', value: '2M+', icon: Flame },
    { label: 'Success Rate', value: '95%', icon: Star }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 blur-3xl"></div>
        
        <div className="relative px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-white text-sm font-medium">AI-Powered Workouts</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Train at home.
              <br />
              <span className="gradient-text">No gym. No gear.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get personalized workout routines powered by AI. 
              From 5-minute energy boosters to full-body transformations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/generator">
                <button className="btn-primary">
                  <Zap className="w-5 h-5 mr-2" />
                  Generate Workout
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </Link>
              
              <Link to="/workouts">
                <button className="btn-secondary">
                  <Play className="w-5 h-5 mr-2" />
                  Try Sample Workout
                </button>
              </Link>
            </div>
            
            {/* Features Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-4 floating`} style={{animationDelay: `${index * 0.5}s`}}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Thousands of <span className="gradient-text">Fitness Enthusiasts</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our AI-powered platform has helped people achieve their fitness goals from the comfort of their homes.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="card text-center">
                <Icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="card text-center bg-gradient-to-r from-orange-500/10 to-pink-500/10 border-orange-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start with a personalized workout designed just for you. No equipment needed, just your determination.
          </p>
          <Link to="/generator">
            <button className="btn-primary text-lg px-8 py-4">
              <Zap className="w-6 h-6 mr-2" />
              Get Started Now
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home