
import Link from "next/link";
import { Flame, BookOpen, Sparkles, DollarSign } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="text-center space-y-6 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Story Insights
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Understand any topic through the lens of your favorite movies and web series
          </p>
          <Link 
            href="/search" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg font-medium shadow-lg transition-all duration-300 hover:scale-105"
          >
            Try Now
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/30 backdrop-blur-xl border-t border-b border-white/40">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/50 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enter Your Topic</h3>
              <p className="text-gray-600">Choose any topic you want to understand better</p>
            </div>
            <div className="p-6 bg-white/50 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Flame className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pick a Show</h3>
              <p className="text-gray-600">Select your favorite movie or web series</p>
            </div>
            <div className="p-6 bg-white/50 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Insights</h3>
              <p className="text-gray-600">Receive a unique story explaining your topic</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
          Simple Pricing
        </h2>
        <div className="max-w-sm mx-auto bg-white/50 rounded-xl shadow-lg p-8 backdrop-blur-xl border border-white/40">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Free Trial</h3>
            <div className="text-4xl font-bold text-purple-600 mb-4">$0</div>
            <ul className="text-gray-600 space-y-2 mb-8">
              <li>✓ 3 Story Generations</li>
              <li>✓ Basic Topics</li>
              <li>✓ Popular Shows</li>
            </ul>
            <Link 
              href="/search" 
              className="block w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg font-medium shadow-lg transition-all duration-300 hover:scale-105"
            >
              Start Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
