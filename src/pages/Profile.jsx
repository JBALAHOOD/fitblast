import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, User, Settings, Trophy, Flame, Calendar, Target, Edit3, Save, X } from 'lucide-react'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [userProfile, setUserProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    fitness_level: 'intermediate',
    primary_goal: 'weight_loss',
    preferred_duration: '20',
    age: '28',
    height: '5\'8"',
    weight: '165 lbs'
  })
  
  const [editedProfile, setEditedProfile] = useState({ ...userProfile })

  const stats = [
    {
      icon: Flame,
      label: 'Current Streak',
      value: '7 days',
      color: 'from-orange-500 to-red-500',
      progress: 70
    },
    {
      icon: Trophy,
      label: 'Total Workouts',
      value: '24',
      color: 'from-blue-500 to-cyan-500',
      progress: 80
    },
    {
      icon: Target,
      label: 'Goals Achieved',
      value: '3/5',
      color: 'from-green-500 to-emerald-500',
      progress: 60
    },
    {
      icon: Calendar,
      label: 'This Month',
      value: '12 workouts',
      color: 'from-purple-500 to-pink-500',
      progress: 75
    }
  ]

  const achievements = [
    { title: 'First Workout', description: 'Completed your first workout', earned: true, icon: '🎯' },
    { title: 'Week Warrior', description: 'Maintained a 7-day streak', earned: true, icon: '🔥' },
    { title: 'Consistency King', description: 'Worked out 20 times', earned: true, icon: '👑' },
    { title: 'Month Master', description: 'Complete 30 workouts', earned: false, icon: '🏆' },
    { title: 'Fitness Fanatic', description: 'Reach 50 total workouts', earned: false, icon: '⭐' },
    { title: 'Streak Legend', description: 'Maintain a 30-day streak', earned: false, icon: '🚀' }
  ]

  const handleSave = () => {
    setUserProfile({ ...editedProfile })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedProfile({ ...userProfile })
    setIsEditing(false)
  }

  const handleInputChange = (field, value) => {
    setEditedProfile(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen py-8 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Your <span className="gradient-text">Profile</span>
        </h1>
        <p className="text-xl text-gray-300">
          Track your progress and manage your fitness journey
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Info */}
        <div className="lg:col-span-1">
          <div className="card">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">{userProfile.name}</h2>
              <p className="text-gray-400">{userProfile.email}</p>
            </div>

            <div className="space-y-4">
              {isEditing ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      value={editedProfile.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Fitness Level</label>
                    <select
                      value={editedProfile.fitness_level}
                      onChange={(e) => handleInputChange('fitness_level', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Primary Goal</label>
                    <select
                      value={editedProfile.primary_goal}
                      onChange={(e) => handleInputChange('primary_goal', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                    >
                      <option value="weight_loss">Weight Loss</option>
                      <option value="muscle_gain">Muscle Gain</option>
                      <option value="endurance">Endurance</option>
                      <option value="flexibility">Flexibility</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Duration (minutes)</label>
                    <input
                      type="number"
                      value={editedProfile.preferred_duration}
                      onChange={(e) => handleInputChange('preferred_duration', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button onClick={handleSave} className="flex-1 btn-primary">
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </button>
                    <button onClick={handleCancel} className="flex-1 btn-secondary">
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-400">Fitness Level</span>
                    <span className="text-white capitalize">{userProfile.fitness_level}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-400">Primary Goal</span>
                    <span className="text-white capitalize">{userProfile.primary_goal.replace('_', ' ')}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-400">Preferred Duration</span>
                    <span className="text-white">{userProfile.preferred_duration} minutes</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-400">Age</span>
                    <span className="text-white">{userProfile.age} years</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-400">Height</span>
                    <span className="text-white">{userProfile.height}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-400">Weight</span>
                    <span className="text-white">{userProfile.weight}</span>
                  </div>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full btn-secondary mt-4"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Stats and Achievements */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stats Cards */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Your Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="card">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-500`}
                        style={{ width: `${stat.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className={`card ${achievement.earned ? 'border-orange-500/30 bg-orange-500/5' : 'opacity-60'}`}>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{achievement.title}</h4>
                      <p className="text-sm text-gray-400">{achievement.description}</p>
                    </div>
                    {achievement.earned && (
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card bg-gradient-to-r from-orange-500/10 to-pink-500/10 border-orange-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Ready for your next workout?</h3>
            <p className="text-gray-300 mb-6">Keep your streak going and reach your fitness goals!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/generator" className="flex-1">
                <button className="w-full btn-primary">
                  <Target className="w-5 h-5 mr-2" />
                  Generate Workout
                </button>
              </Link>
              <Link to="/workouts" className="flex-1">
                <button className="w-full btn-secondary">
                  <Trophy className="w-5 h-5 mr-2" />
                  Browse Workouts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile