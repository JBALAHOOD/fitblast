import React, { useState } from 'react'
import { ArrowLeft, Zap, Loader2, Clock, Target, User, Activity } from 'lucide-react'
import { Link } from 'react-router-dom'

const Generator = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [preferences, setPreferences] = useState({
    fitness_level: '',
    duration: '',
    focus_area: '',
    primary_goal: '',
    gender: ''
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedWorkout, setGeneratedWorkout] = useState(null)

  const handleInputChange = (field, value) => {
    setPreferences(prev => ({ ...prev, [field]: value }))
  }

  // Exercise database with different categories and difficulty levels
  const exerciseDatabase = {
    full_body: {
      beginner: [
        { name: 'Marching in Place', reps: '30 seconds', description: 'Lift knees alternately while standing in place', calories: 3 },
        { name: 'Wall Push-ups', reps: '8-12 reps', description: 'Stand arm\'s length from wall, push against it', calories: 4 },
        { name: 'Chair Squats', reps: '8-12 reps', description: 'Sit and stand from a chair without using hands', calories: 5 },
        { name: 'Arm Circles', reps: '15 each direction', description: 'Extend arms and make small circles', calories: 2 },
        { name: 'Standing Side Bends', reps: '10 each side', description: 'Stand tall and bend sideways at waist', calories: 3 }
      ],
      intermediate: [
        { name: 'Jumping Jacks', reps: '30-45 seconds', description: 'Jump while spreading legs and raising arms overhead', calories: 8 },
        { name: 'Push-ups', reps: '10-15 reps', description: 'Start in plank position, lower body and push back up', calories: 6 },
        { name: 'Bodyweight Squats', reps: '15-20 reps', description: 'Stand with feet shoulder-width apart, squat down', calories: 7 },
        { name: 'Mountain Climbers', reps: '30 seconds', description: 'Plank position, alternate bringing knees to chest', calories: 9 },
        { name: 'Lunges', reps: '10 each leg', description: 'Step forward and lower back knee toward ground', calories: 6 },
        { name: 'Plank', reps: '30-45 seconds', description: 'Hold straight body position on forearms', calories: 5 }
      ],
      advanced: [
        { name: 'Burpees', reps: '8-12 reps', description: 'Squat, jump back to plank, push-up, jump forward, jump up', calories: 12 },
        { name: 'Diamond Push-ups', reps: '8-15 reps', description: 'Push-ups with hands forming diamond shape', calories: 8 },
        { name: 'Jump Squats', reps: '12-20 reps', description: 'Squat down then explode up into a jump', calories: 10 },
        { name: 'Pike Push-ups', reps: '8-12 reps', description: 'Downward dog position, lower head toward hands', calories: 7 },
        { name: 'Single-leg Deadlifts', reps: '8 each leg', description: 'Balance on one leg, hinge at hip', calories: 6 }
      ]
    },
    upper_body: {
      beginner: [
        { name: 'Wall Push-ups', reps: '10-15 reps', description: 'Stand arm\'s length from wall, push against it', calories: 4 },
        { name: 'Arm Circles', reps: '20 each direction', description: 'Extend arms and make circles', calories: 3 },
        { name: 'Shoulder Shrugs', reps: '15 reps', description: 'Lift shoulders up toward ears', calories: 2 },
        { name: 'Tricep Dips (Chair)', reps: '8-12 reps', description: 'Sit on chair edge, lower body using arms', calories: 5 }
      ],
      intermediate: [
        { name: 'Push-ups', reps: '12-20 reps', description: 'Standard push-up position', calories: 6 },
        { name: 'Pike Push-ups', reps: '8-12 reps', description: 'Downward dog position push-ups', calories: 7 },
        { name: 'Tricep Dips', reps: '10-15 reps', description: 'Dips using chair or bench', calories: 6 },
        { name: 'Plank to Downward Dog', reps: '10-15 reps', description: 'Move from plank to downward dog', calories: 5 }
      ],
      advanced: [
        { name: 'Diamond Push-ups', reps: '10-20 reps', description: 'Hands in diamond shape', calories: 8 },
        { name: 'Handstand Push-ups', reps: '5-10 reps', description: 'Push-ups against wall in handstand', calories: 10 },
        { name: 'Archer Push-ups', reps: '6-12 reps', description: 'Push-up with weight shifted to one arm', calories: 9 },
        { name: 'Pseudo Planche Push-ups', reps: '5-10 reps', description: 'Hands positioned lower, lean forward', calories: 11 }
      ]
    },
    lower_body: {
      beginner: [
        { name: 'Chair Squats', reps: '10-15 reps', description: 'Sit and stand from chair', calories: 5 },
        { name: 'Standing Marches', reps: '20 each leg', description: 'Lift knees while standing', calories: 4 },
        { name: 'Calf Raises', reps: '15-20 reps', description: 'Rise up on toes', calories: 3 },
        { name: 'Wall Sits', reps: '20-30 seconds', description: 'Sit against wall with thighs parallel to floor', calories: 6 }
      ],
      intermediate: [
        { name: 'Bodyweight Squats', reps: '15-25 reps', description: 'Standard squats', calories: 7 },
        { name: 'Lunges', reps: '12 each leg', description: 'Step forward into lunge position', calories: 6 },
        { name: 'Single-leg Glute Bridges', reps: '10 each leg', description: 'Bridge with one leg extended', calories: 5 },
        { name: 'Step-ups', reps: '10 each leg', description: 'Step up onto chair or platform', calories: 8 }
      ],
      advanced: [
        { name: 'Jump Squats', reps: '15-25 reps', description: 'Explosive squat jumps', calories: 10 },
        { name: 'Bulgarian Split Squats', reps: '10 each leg', description: 'Rear foot elevated split squats', calories: 8 },
        { name: 'Single-leg Squats', reps: '5-10 each leg', description: 'Pistol squats or assisted', calories: 12 },
        { name: 'Lateral Lunges', reps: '12 each side', description: 'Lunge to the side', calories: 7 }
      ]
    },
    cardio: {
      beginner: [
        { name: 'Marching in Place', reps: '45 seconds', description: 'Lift knees while marching', calories: 5 },
        { name: 'Step Touch', reps: '45 seconds', description: 'Step side to side', calories: 4 },
        { name: 'Arm Swings', reps: '30 seconds', description: 'Swing arms back and forth', calories: 3 },
        { name: 'Gentle Jumping Jacks', reps: '30 seconds', description: 'Low impact jumping jacks', calories: 6 }
      ],
      intermediate: [
        { name: 'Jumping Jacks', reps: '45 seconds', description: 'Full jumping jacks', calories: 8 },
        { name: 'High Knees', reps: '30 seconds', description: 'Run in place with high knees', calories: 9 },
        { name: 'Butt Kickers', reps: '30 seconds', description: 'Kick heels toward glutes', calories: 7 },
        { name: 'Mountain Climbers', reps: '30 seconds', description: 'Fast alternating knee drives', calories: 10 }
      ],
      advanced: [
        { name: 'Burpees', reps: '45 seconds', description: 'Full burpee movement', calories: 15 },
        { name: 'Jump Rope (imaginary)', reps: '60 seconds', description: 'Jump rope motion without rope', calories: 12 },
        { name: 'Sprint in Place', reps: '30 seconds', description: 'Maximum effort running in place', calories: 14 },
        { name: 'Plank Jacks', reps: '45 seconds', description: 'Jumping jacks in plank position', calories: 11 }
      ]
    }
  }

  const generateWorkout = async () => {
    setIsGenerating(true)
    
    setTimeout(() => {
      const duration = parseInt(preferences.duration)
      const level = preferences.fitness_level
      const focus = preferences.focus_area
      const goal = preferences.primary_goal
      
      // Get exercises for the selected focus area and level
      const availableExercises = exerciseDatabase[focus][level] || []
      
      // Calculate number of exercises based on duration
      let numExercises
      if (duration <= 5) numExercises = 3
      else if (duration <= 10) numExercises = 4
      else if (duration <= 15) numExercises = 5
      else numExercises = 6
      
      // Randomly select exercises
      const shuffled = [...availableExercises].sort(() => 0.5 - Math.random())
      const selectedExercises = shuffled.slice(0, numExercises)
      
      // Adjust reps based on goal and duration
      const adjustedExercises = selectedExercises.map(exercise => {
        let adjustedReps = exercise.reps
        let adjustedCalories = exercise.calories
        
        // Adjust based on goal
        if (goal === 'weight_loss') {
          // Higher intensity for weight loss
          adjustedCalories = Math.floor(exercise.calories * 1.2)
          if (exercise.reps.includes('seconds')) {
            adjustedReps = exercise.reps.replace(/\d+/, (match) => Math.min(60, parseInt(match) + 10))
          }
        } else if (goal === 'muscle_gain') {
          // More reps for muscle gain
          if (exercise.reps.includes('reps')) {
            adjustedReps = exercise.reps.replace(/\d+-?\d*/, (match) => {
              const nums = match.split('-')
              const min = parseInt(nums[0]) + 2
              const max = nums[1] ? parseInt(nums[1]) + 3 : min + 5
              return `${min}-${max}`
            })
          }
        } else if (goal === 'endurance') {
          // Longer duration for endurance
          if (exercise.reps.includes('seconds')) {
            adjustedReps = exercise.reps.replace(/\d+/, (match) => Math.min(90, parseInt(match) + 15))
          }
          adjustedCalories = Math.floor(exercise.calories * 1.1)
        }
        
        return {
          ...exercise,
          reps: adjustedReps,
          duration: Math.floor(duration * 60 / numExercises), // Distribute time evenly
          calories: adjustedCalories
        }
      })
      
      // Calculate total calories
      const totalCalories = adjustedExercises.reduce((sum, ex) => sum + ex.calories, 0)
      
      // Generate workout title based on preferences
      const focusNames = {
        full_body: 'Full Body',
        upper_body: 'Upper Body',
        lower_body: 'Lower Body',
        cardio: 'Cardio Blast'
      }
      
      const goalSuffixes = {
        weight_loss: 'Fat Burner',
        muscle_gain: 'Strength Builder',
        endurance: 'Endurance Booster',
        flexibility: 'Flexibility Flow'
      }
      
      const workout = {
        title: `${focusNames[focus]} ${goalSuffixes[goal]} (${duration} min)`,
        description: `A personalized ${level} level ${focusNames[focus].toLowerCase()} workout designed for ${goalSuffixes[goal].toLowerCase()}`,
        duration: duration,
        calories_burned: totalCalories,
        exercises: adjustedExercises
      }
      
      setGeneratedWorkout(workout)
      setIsGenerating(false)
      setCurrentStep(3)
    }, 2000)
  }

  const resetGenerator = () => {
    setCurrentStep(1)
    setPreferences({
      fitness_level: '',
      duration: '',
      focus_area: '',
      primary_goal: '',
      gender: ''
    })
    setGeneratedWorkout(null)
  }

  return (
    <div className="min-h-screen py-8 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="gradient-text">AI Workout Generator</span>
        </h1>
        <p className="text-xl text-gray-300">
          Tell us about yourself and we'll create the perfect workout for you
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                currentStep >= step ? 'bg-orange-500 text-white' : 'bg-gray-600 text-gray-300'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-16 h-1 mx-2 ${
                  currentStep > step ? 'bg-orange-500' : 'bg-gray-600'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Preferences Form */}
      {currentStep === 1 && (
        <div className="card max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Tell us about yourself</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-3">Fitness Level</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                  <button
                    key={level}
                    onClick={() => handleInputChange('fitness_level', level.toLowerCase())}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      preferences.fitness_level === level.toLowerCase()
                        ? 'border-orange-500 bg-orange-500/20 text-orange-400'
                        : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-3">Workout Duration</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['5', '10', '15', '30'].map((duration) => (
                  <button
                    key={duration}
                    onClick={() => handleInputChange('duration', duration)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      preferences.duration === duration
                        ? 'border-orange-500 bg-orange-500/20 text-orange-400'
                        : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {duration} min
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-3">Focus Area</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { value: 'full_body', label: 'Full Body' },
                  { value: 'upper_body', label: 'Upper Body' },
                  { value: 'lower_body', label: 'Lower Body' },
                  { value: 'cardio', label: 'Cardio' }
                ].map((area) => (
                  <button
                    key={area.value}
                    onClick={() => handleInputChange('focus_area', area.value)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      preferences.focus_area === area.value
                        ? 'border-orange-500 bg-orange-500/20 text-orange-400'
                        : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {area.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-3">Primary Goal</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { value: 'weight_loss', label: 'Weight Loss' },
                  { value: 'muscle_gain', label: 'Muscle Gain' },
                  { value: 'endurance', label: 'Endurance' },
                  { value: 'flexibility', label: 'Flexibility' }
                ].map((goal) => (
                  <button
                    key={goal.value}
                    onClick={() => handleInputChange('primary_goal', goal.value)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      preferences.primary_goal === goal.value
                        ? 'border-orange-500 bg-orange-500/20 text-orange-400'
                        : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {goal.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setCurrentStep(2)}
              disabled={!preferences.fitness_level || !preferences.duration || !preferences.focus_area || !preferences.primary_goal}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Generate Workout */}
      {currentStep === 2 && (
        <div className="card max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to generate your workout?</h2>
          
          <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Your Preferences:</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-gray-300">
                <span className="font-medium">Fitness Level:</span> {preferences.fitness_level}
              </div>
              <div className="text-gray-300">
                <span className="font-medium">Duration:</span> {preferences.duration} minutes
              </div>
              <div className="text-gray-300">
                <span className="font-medium">Focus:</span> {preferences.focus_area.replace('_', ' ')}
              </div>
              <div className="text-gray-300">
                <span className="font-medium">Goal:</span> {preferences.primary_goal.replace('_', ' ')}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={generateWorkout}
              disabled={isGenerating}
              className="btn-primary w-full"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating Your Workout...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 mr-2" />
                  Generate Workout
                </>
              )}
            </button>
            
            <button
              onClick={() => setCurrentStep(1)}
              className="btn-secondary w-full"
            >
              Back to Preferences
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Generated Workout */}
      {currentStep === 3 && generatedWorkout && (
        <div className="card max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">{generatedWorkout.title}</h2>
            <p className="text-gray-300 mb-4">{generatedWorkout.description}</p>
            
            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-orange-400">
                <Clock className="w-4 h-4" />
                {generatedWorkout.duration} minutes
              </div>
              <div className="flex items-center gap-2 text-orange-400">
                <Activity className="w-4 h-4" />
                ~{generatedWorkout.calories_burned} calories
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Exercises:</h3>
            {generatedWorkout.exercises.map((exercise, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white">{exercise.name}</h4>
                  <div className="text-orange-400 font-medium">{exercise.reps}</div>
                </div>
                <p className="text-gray-300 text-sm">{exercise.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={resetGenerator}
              className="btn-secondary"
            >
              Generate Another
            </button>
            <Link to="/workouts">
              <button className="btn-primary">
                Save to Workouts
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Generator