
import { Link } from "react-router-dom";
import { Flame, BookOpen, Sparkles, DollarSign } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-40">
        <div className="text-center space-y-8 animate-fade-up">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] via-[#D6BCFA] to-[#8B5CF6]">
              Story Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Understand any topic through the lens of your favorite movies and web series
            </p>
          </div>
          <Link 
            to="/search" 
            className="inline-flex items-center px-8 py-4 bg-[#9b87f5] hover:bg-[#8B5CF6] text-white rounded-lg font-medium shadow-[0_0_30px_rgba(155,135,245,0.25)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(155,135,245,0.35)] hover:scale-105"
          >
            Try Now
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] via-[#221F26] to-[#1A1F2C] opacity-80"></div>
        <div className="container relative mx-auto px-4 py-32">
          <h2 className="text-3xl font-semibold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <div className="w-12 h-12 bg-[#9b87f5]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Enter Your Topic</h3>
              <p className="text-gray-400">Choose any topic you want to understand better</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <div className="w-12 h-12 bg-[#D6BCFA]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Flame className="w-6 h-6 text-[#D6BCFA]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Pick a Show</h3>
              <p className="text-gray-400">Select your favorite movie or web series</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <div className="w-12 h-12 bg-[#8B5CF6]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Get Insights</h3>
              <p className="text-gray-400">Receive a unique story explaining your topic</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-32">
        <h2 className="text-3xl font-semibold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]">
          Simple Pricing
        </h2>
        <div className="max-w-sm mx-auto p-[1px] rounded-2xl bg-gradient-to-r from-[#9b87f5] via-[#D6BCFA] to-[#8B5CF6]">
          <div className="bg-[#1A1F2C] rounded-2xl p-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] rounded-xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Free Trial</h3>
              <div className="text-4xl font-bold text-[#9b87f5] mb-6">$0</div>
              <ul className="text-gray-400 space-y-3 mb-8">
                <li>✓ 3 Story Generations</li>
                <li>✓ Basic Topics</li>
                <li>✓ Popular Shows</li>
              </ul>
              <Link 
                to="/search" 
                className="block w-full py-3 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] text-white rounded-lg font-medium shadow-[0_0_30px_rgba(155,135,245,0.25)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(155,135,245,0.35)] hover:scale-105"
              >
                Start Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
