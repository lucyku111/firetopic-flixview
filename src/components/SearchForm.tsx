
import { useState } from "react";
import { Fire } from "lucide-react";

const SearchForm = () => {
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ topic, title });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md animate-fade-up">
        <div className="glass rounded-2xl p-8 shadow-xl">
          <h1 className="text-3xl font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            Find Your Next Watch
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="input-container">
              <input
                type="text"
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full h-12 px-3 pt-2 rounded-lg bg-white/50 border border-gray-200 focus:border-gray-300"
                placeholder=" "
                required
              />
              <label htmlFor="topic">Enter Topic</label>
            </div>

            <div className="input-container">
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full h-12 px-3 pt-2 rounded-lg bg-white/50 border border-gray-200 focus:border-gray-300"
                placeholder=" "
                required
              />
              <label htmlFor="title">Movie or Web Series Title</label>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              <Fire className="w-5 h-5 animate-pulse" />
              <span>Search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
