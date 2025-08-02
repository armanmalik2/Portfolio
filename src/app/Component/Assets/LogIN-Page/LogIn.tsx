'use client'

import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, Shield, Users, Target, TrendingUp, Calendar, BarChart3, Sun, Moon, Building2, CheckCircle, Sparkles } from 'lucide-react';

// Zod-like validation schema
const loginSchema = {
  email: {
    validate: (value) => {
      if (!value) return 'Email is required';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Please enter a valid email';
      return null;
    }
  },
  password: {
    validate: (value) => {
      if (!value) return 'Password is required';
      if (value.length < 8) return 'Password must be at least 8 characters';
      if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
        return 'Password must contain uppercase, lowercase, and number';
      }
      return null;
    }
  }
};

const projectFacts = [
  "Teams using project management tools are 2.5x more likely to complete projects successfully",
  "Effective project management can reduce project costs by up to 20%",
  "Organizations with mature project management practices waste 13x less money",
  "71% of organizations use project management software to improve team collaboration",
  "Project managers increase team productivity by an average of 30%",
  "Companies with strong project management complete 89% more projects successfully"
];

export default function GlassmorphicLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);
  const [attemptCount, setAttemptCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);

  // Rotate facts every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % projectFacts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // XSS Protection - Sanitize input
  const sanitizeInput = (input) => {
    return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                .replace(/javascript:/gi, '')
                .replace(/on\w+\s*=/gi, '');
  };

  const validateField = (name, value) => {
    const sanitizedValue = sanitizeInput(value);
    const fieldSchema = loginSchema[name];
    if (fieldSchema) {
      return fieldSchema.validate(sanitizedValue);
    }
    return null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    
    // Real-time validation
    const error = validateField(name, sanitizedValue);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async () => {
    // Rate limiting protection
    if (attemptCount >= 5) {
      alert('Too many login attempts. Please try again later.');
      return;
    }

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setAttemptCount(prev => prev + 1);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`${isSignUp ? 'Sign Up' : 'Login'} successful! (Demo)`);
    }, 2000);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-black' 
        : 'bg-gradient-to-br from-gray-50 to-white'
    } flex relative overflow-hidden`}>
      
      {/* Animated Gradient Orbs - HeroUI Style */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Purple gradient orb */}
        <div className={`absolute top-20 right-20 w-96 h-96 rounded-full transition-all duration-700 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20' 
            : 'bg-gradient-to-r from-purple-400/30 to-pink-400/30'
        } blur-3xl animate-pulse`}></div>
        
        {/* Blue gradient orb */}
        <div className={`absolute bottom-20 left-20 w-80 h-80 rounded-full transition-all duration-700 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20' 
            : 'bg-gradient-to-r from-blue-400/30 to-cyan-400/30'
        } blur-3xl animate-pulse delay-1000`}></div>
        
        {/* Central gradient orb */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full transition-all duration-700 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20' 
            : 'bg-gradient-to-r from-indigo-400/30 to-purple-400/30'
        } blur-3xl animate-pulse delay-500`}></div>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-2xl transition-all duration-300 hover:scale-110 ${
          isDarkMode 
            ? 'bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 text-white hover:bg-gray-700/50' 
            : 'bg-white/50 backdrop-blur-xl border border-gray-200/50 text-gray-800 hover:bg-white/70 shadow-lg'
        }`}
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Glassmorphic Container */}
          <div className={`backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 ${
            isDarkMode 
              ? 'bg-gray-900/30 border border-gray-700/30 shadow-2xl' 
              : 'bg-white/40 border border-white/60 shadow-2xl'
          }`}>
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500'
              }`}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h1>
              <p className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {isSignUp ? 'Join us to get started' : 'Sign in to your account to continue'}
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Email Address
                </label>
                <div className="relative">
                  <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      isDarkMode 
                        ? 'bg-gray-800/30 border border-gray-700/50 text-white placeholder-gray-400' 
                        : 'bg-white/50 border border-gray-300/50 text-gray-800 placeholder-gray-500'
                    } ${errors.email ? 'border-red-400' : ''}`}
                    style={{
                      WebkitBoxShadow: 'inset 0 0 0 1000px transparent',
                      WebkitTextFillColor: isDarkMode ? 'white' : '#1f2937'
                    }}
                    placeholder="Enter your email"
                    autoComplete="email"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Password
                </label>
                <div className="relative">
                  <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full pl-11 pr-12 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      isDarkMode 
                        ? 'bg-gray-800/30 border border-gray-700/50 text-white placeholder-gray-400' 
                        : 'bg-white/50 border border-gray-300/50 text-gray-800 placeholder-gray-500'
                    } ${errors.password ? 'border-red-400' : ''}`}
                    style={{
                      WebkitBoxShadow: 'inset 0 0 0 1000px transparent',
                      WebkitTextFillColor: isDarkMode ? 'white' : '#1f2937'
                    }}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className={`w-4 h-4 rounded border-0 text-purple-600 focus:ring-purple-500 focus:ring-2 transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-800/50 border-gray-600' 
                        : 'bg-white/70 border-gray-300'
                    }`}
                  />
                  <span className={`ml-2 text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Remember me
                  </span>
                </label>
                <button 
                  type="button" 
                  className={`text-sm transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-purple-400 hover:text-purple-300' 
                      : 'text-purple-600 hover:text-purple-500'
                  }`}
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className={`w-full py-3 px-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    {isSignUp ? 'Creating Account...' : 'Signing In...'}
                  </div>
                ) : (
                  isSignUp ? 'Sign Up' : 'Sign In'
                )}
              </button>

              {/* Toggle Sign In/Up */}
              <div className="text-center">
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className={`font-medium transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-purple-400 hover:text-purple-300' 
                        : 'text-purple-600 hover:text-purple-500'
                    }`}
                  >
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                  </button>
                </p>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-6 text-center">
              <p className={`text-xs transition-colors duration-300 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>
                Protected by advanced security measures
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Project Management Content */}
      <div className="flex-1 flex items-center justify-center p-8 lg:block hidden">
        <div className="max-w-lg">
          {/* Logo Section with HeroUI inspired circular avatar design */}
          <div className="text-center mb-8">
            <div className="relative mb-6">
              {/* Central logo circle */}
              <div className={`w-24 h-24 mx-auto rounded-full transition-all duration-500 flex items-center justify-center ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500'
              } shadow-2xl`}>
                <Building2 className="w-12 h-12 text-white" />
              </div>
              
              {/* Floating mini icons around the logo */}
              <div className="absolute inset-0">
                {[Users, Target, Calendar, BarChart3, TrendingUp, Sparkles].map((Icon, index) => {
                  const angle = (index * 60) * (Math.PI / 180);
                  const radius = 50;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={index}
                      className={`absolute w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isDarkMode 
                          ? 'bg-gray-800/50 border border-gray-700/50' 
                          : 'bg-white/50 border border-gray-200/50'
                      } backdrop-blur-sm animate-pulse`}
                      style={{
                        left: `calc(50% + ${x}px - 16px)`,
                        top: `calc(50% + ${y}px - 16px)`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    >
                      <Icon className={`w-4 h-4 transition-colors duration-300 ${
                        isDarkMode ? 'text-purple-400' : 'text-purple-600'
                      }`} />
                    </div>
                  );
                })}
              </div>
            </div>
            
            <h2 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              ProjectFlow Pro
            </h2>
            <p className={`text-sm transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's make the Web <span className={`transition-colors duration-300 ${
                isDarkMode ? 'text-purple-400' : 'text-purple-600'
              }`}>Prettier</span>
            </p>
          </div>

          {/* Hero Section */}
          <div className={`backdrop-blur-xl rounded-3xl p-8 mb-8 text-center transition-all duration-500 ${
            isDarkMode 
              ? 'bg-gray-900/20 border border-gray-700/30' 
              : 'bg-white/30 border border-white/50'
          } shadow-xl`}>
            <div className={`w-32 h-32 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-gray-700/30' 
                : 'bg-gradient-to-br from-purple-400/20 to-pink-400/20 border border-gray-200/30'
            }`}>
              <Target className={`w-16 h-16 transition-colors duration-300 ${
                isDarkMode ? 'text-purple-400' : 'text-purple-600'
              }`} />
            </div>
            <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Master Your <span className={`transition-colors duration-300 ${
                isDarkMode ? 'text-purple-400' : 'text-purple-600'
              }`}>Projects</span>
            </h3>
            <p className={`text-sm leading-relaxed transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Experience it firsthand and show us your creations!
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: Users, title: "Team Collaboration", desc: "Seamless teamwork" },
              { icon: TrendingUp, title: "Progress Tracking", desc: "Real-time insights" },
              { icon: Calendar, title: "Smart Scheduling", desc: "Automated planning" },
              { icon: BarChart3, title: "Analytics", desc: "Data-driven decisions" }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`backdrop-blur-xl rounded-2xl p-4 transition-all duration-500 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-900/10 border border-gray-700/20 hover:bg-gray-900/20' 
                    : 'bg-white/20 border border-white/30 hover:bg-white/30'
                } shadow-lg`}
              >
                <feature.icon className={`w-6 h-6 mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-purple-400' : 'text-purple-600'
                }`} />
                <h3 className={`font-semibold text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-xs transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Rotating Facts */}
          <div className={`backdrop-blur-xl rounded-2xl p-6 transition-all duration-500 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-gray-700/30' 
              : 'bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-white/40'
          } shadow-xl`}>
            <h3 className={`font-semibold mb-3 flex items-center transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              <CheckCircle className={`w-5 h-5 mr-2 transition-colors duration-300 ${
                isDarkMode ? 'text-purple-400' : 'text-purple-600'
              }`} />
              Did You Know?
            </h3>
            <p className={`text-sm leading-relaxed transition-all duration-500 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {projectFacts[currentFact]}
            </p>
            <div className="flex mt-4 space-x-1">
              {projectFacts.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentFact 
                      ? `w-8 ${isDarkMode ? 'bg-purple-400' : 'bg-purple-600'}` 
                      : `w-2 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Project Info */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4">
        <div className={`backdrop-blur-xl rounded-2xl p-4 transition-all duration-500 ${
          isDarkMode 
            ? 'bg-gray-900/30 border border-gray-700/30' 
            : 'bg-white/40 border border-white/60'
        } shadow-xl`}>
          <p className={`text-sm text-center transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {projectFacts[currentFact]}
          </p>
        </div>
      </div>
    </div>
  );
}