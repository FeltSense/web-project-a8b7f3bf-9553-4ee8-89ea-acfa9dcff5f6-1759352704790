'use client'

import React, { useState, useEffect } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/20 sticky top-0 z-50 transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex items-center">
        <div className="flex-shrink-0 flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">CloudSync Pro</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex md:items-center md:space-x-8">
        <a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
          Features
        </a>
        <a href="#solutions" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
          Solutions
        </a>
        <a href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
          Pricing
        </a>
        <a href="#resources" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
          Resources
        </a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
          Contact
        </a>
        <a href="#login" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
          Login
        </a>
        <a href="#demo" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-md">
          Get Demo
        </a>
      </div>

      {/* Mobile menu button */}

      {/* Dark mode toggle */}
      <div className="hidden md:flex md:items-center md:ml-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
      <div className="md:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile menu */}
  <div className="md:hidden hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
      <a href="#features" className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
        Features
      </a>
      <a href="#solutions" className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
        Solutions
      </a>
      <a href="#pricing" className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
        Pricing
      </a>
      <a href="#resources" className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
        Resources
      </a>
      <a href="#contact" className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
        Contact
      </a>
      <a href="#login" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
        Login
      </a>
      <a href="#demo" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 text-center mt-2">
        Get Demo
      </a>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
  </div>

  {/* Grid Pattern Overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

  <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <div className="space-y-8 z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-sm font-medium text-cyan-300">Marketing Automation Reimagined</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="text-white">Sync Your</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Marketing Data</span>
          <br />
          <span className="text-white">In Real-Time</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
          CloudSync Pro unifies your marketing platforms, CRM, and analytics tools into one intelligent ecosystem. Launch campaigns faster, track ROI instantly, and scale with confidence.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 pt-4">
          <div>
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-sm text-slate-400">Data Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">3.2x</div>
            <div className="text-sm text-slate-400">Campaign ROI</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-sm text-slate-400">Auto-Sync</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Start Free Trial</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
          </button>
          
          <button className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:border-white/20">
            <span className="flex items-center gap-2">
              Watch Demo
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center gap-6 pt-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>14-day free trial</span>
          </div>
        </div>
      </div>

      {/* Right Visual */}
      <div className="relative lg:h-[600px] z-10">
        {/* Glass Card */}
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          {/* Dashboard Preview */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Campaign Dashboard</div>
                  <div className="text-xs text-slate-400">Real-time sync active</div>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-medium">Live</div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-slate-400 text-sm mb-1">Conversions</div>
                <div className="text-2xl font-bold text-white">2,847</div>
                <div className="text-green-400 text-xs mt-1">↑ 23.5%</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-slate-400 text-sm mb-1">Engagement</div>
                <div className="text-2xl font-bold text-white">94.2%</div>
                <div className="text-green-400 text-xs mt-1">↑ 12.8%</div>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="space-y-3 pt-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                  <div className="flex-1">
                    <div className="text-white text-sm">Platform sync completed</div>
                    <div className="text-slate-400 text-xs">Just now</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-xs text-slate-300">Integrations</div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
      </div>
    </div>
  </div>
</div>
      
      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        Elevate Your Marketing with CloudSync Pro
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        The all-in-one platform that connects your marketing stack, automates campaigns, and delivers actionable insights to drive growth.
      </p>
    </div>

    {/* Service Cards Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200">
        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          Unified Marketing Stack
        </h3>
        <p className="text-slate-600 mb-4">
          CloudSync Pro seamlessly integrates with 100+ marketing tools including HubSpot, Salesforce, Google Analytics, Mailchimp, and social media platforms. Centralize your data and eliminate silos.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start text-sm text-slate-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            One-click integrations with CRM & email platforms
          </li>
          <li className="flex items-start text-sm text-slate-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Real-time data sync across all channels
          </li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200">
        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          No-Code Campaign Automation
        </h3>
        <p className="text-slate-600 mb-4">
          Build sophisticated marketing workflows without writing code. CloudSync Pro's visual automation builder lets you create drip campaigns, lead nurturing sequences, and multi-channel campaigns in minutes.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start text-sm text-slate-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Drag-and-drop workflow designer
          </li>
          <li className="flex items-start text-sm text-slate-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Pre-built templates for common campaigns
          </li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200">
        <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          AI-Powered Marketing Intelligence
        </h3>
        <p className="text-slate-600 mb-4">
          CloudSync Pro analyzes your marketing data in real-time to surface actionable insights. Predict campaign performance, identify high-value leads, and optimize spend with machine learning algorithms.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start text-sm text-slate-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Predictive lead scoring & attribution
          </li>
          <li className="flex items-start text-sm text-slate-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Custom dashboards with ROI tracking
          </li>
        </ul>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200">
        <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          Team Collaboration Hub
        </h3>
        <p className="text-slate-600 mb-4">
          Keep your marketing team aligned with CloudSync Pro's real-time collaboration features. Share campaigns, assign tasks, track approvals, and manage permissions all in one secure workspace.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start text-sm text-slate-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Role-based access controls
          </li>
          <li className="flex items-start text-sm text-slate-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Activity feeds & comment threads
          </li>
        </ul>
      </div>

      {/* Card 5 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200">
        <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          Enterprise Security & Compliance
        </h3>
        <p className="text-slate-600 mb-4">
          CloudSync Pro protects your marketing data with enterprise-grade security. GDPR and CCPA compliant, SOC 2 certified, with end-to-end encryption and regular security audits.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start text-sm text-slate-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            SOC 2 Type II certified infrastructure
          </li>
          <li className="flex items-start text-sm text-slate-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            GDPR & CCPA compliance built-in
          </li>
        </ul>
      </div>

      {/* Card 6 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-200">
        <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          24/7 Expert Support
        </h3>
        <p className="text-slate-600 mb-4">
          CloudSync Pro delivers 99.9% uptime SLA with round-the-clock support from marketing automation experts. Get help via chat, email, or phone whenever you need it.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start text-sm text-slate-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Dedicated account manager for enterprise
          </li>
          <li className="flex items-start text-sm text-slate-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Comprehensive knowledge base & training
          </li>
        </ul>
      </div>
    </div>

    {/* CTA Section */}
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
      <h3 className="text-3xl font-bold mb-4">
        Ready to Transform Your Marketing Operations?
      </h3>
      <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
        Join 10,000+ marketing teams using CloudSync Pro to streamline workflows, boost productivity, and drive measurable results.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg">
          Start Free Trial
        </button>
        <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
          Schedule Demo
        </button>
      </div>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Trusted by Marketing Teams Worldwide
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        See how CloudSync Pro is transforming marketing workflows and collaboration
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
            alt="Sarah Mitchell"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">Sarah Mitchell</h3>
            <p className="text-gray-600 text-sm">Marketing Director</p>
            <p className="text-gray-500 text-sm">BrandVision Agency</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "CloudSync Pro has revolutionized how our team manages campaign assets. We can now collaborate on creative files in real-time across three offices. The version control alone has saved us countless hours of confusion and rework."
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
            alt="Marcus Chen"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">Marcus Chen</h3>
            <p className="text-gray-600 text-sm">Content Marketing Lead</p>
            <p className="text-gray-500 text-sm">TechGrowth Solutions</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "Managing content calendars and media libraries used to be a nightmare. CloudSync Pro's seamless integration with our marketing stack means our team can access everything from blog drafts to video assets instantly. It's a game-changer for productivity."
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
            alt="Emily Rodriguez"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">Emily Rodriguez</h3>
            <p className="text-gray-600 text-sm">Social Media Manager</p>
            <p className="text-gray-500 text-sm">Momentum Digital</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "As someone managing multiple client accounts, CloudSync Pro keeps all our social media graphics, brand guidelines, and campaign materials perfectly organized. The mobile app means I can approve content on-the-go. Absolutely essential for modern marketing teams."
        </p>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-bold text-white mb-4">CloudSync Pro</h3>
        <p className="text-gray-400 mb-4 max-w-md">
          Empowering marketing teams with seamless cloud collaboration and data synchronization solutions.
        </p>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://twitter.com" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://instagram.com" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
          <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
          <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-white font-semibold mb-4">Contact Us</h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <a href="mailto:hello@cloudsyncpro.com" className="hover:text-white transition-colors">hello@cloudsyncpro.com</a>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <a href="tel:+18005551234" className="hover:text-white transition-colors">+1 (800) 555-1234</a>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>San Francisco, CA 94102</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} CloudSync Pro. All rights reserved.
      </p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
        <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
        <a href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}