
import { useState } from "react";
import { Flame } from "lucide-react";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ topic, title });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 p-4">
      <div className="w-full max-w-md animate-fade-up">
        <Link 
          to="/"
          className="block text-center mb-8 text-purple-600 hover:text-purple-700 transition-colors"
        >
          ← Back to Home
        </Link>
        <div className="glass rounded-2xl p-8 shadow-xl backdrop-blur-xl bg-white/30 border border-white/40">
          <h1 className="text-3xl font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Find Your Next Watch
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="input-container">
              <input
                type="text"
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full h-12 px-3 pt-2 rounded-lg bg-white/60 border border-purple-100 focus:border-purple-300 focus:ring-purple-200 shadow-sm"
                placeholder=" "
                required
              />
              <label htmlFor="topic" className="text-purple-600">Enter Topic</label>
            </div>

            <div className="input-container">
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full h-12 px-3 pt-2 rounded-lg bg-white/60 border border-purple-100 focus:border-purple-300 focus:ring-purple-200 shadow-sm"
                placeholder=" "
                required
              />
              <label htmlFor="title" className="text-purple-600">Movie or Web Series Title</label>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              <Flame className="w-5 h-5 animate-pulse text-yellow-300" />
              <span className="font-medium">Search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
