import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const TopicDetail = () => {
  const { state } = useLocation();
  const [wikiData, setWikiData] = useState("");
  const [book, setBook] = useState(null);
  const [movie, setMovie] = useState(null);

  const fetchWikipedia = async (title) => {
    try {
      const response = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          prop: "extracts",
          titles: title,
          format: "json",
          explaintext: true,
          origin: "*",
        },
      });
      const pages = response.data.query.pages;
      const page = Object.values(pages)[0];
      setWikiData(page.extract || "No full article found.");
    } catch (err) {
      setWikiData("Failed to fetch Wikipedia content.");
    }
  };

  const fetchBook = async (bookTitle) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`
      );
      setBook(res.data.items[0]);
    } catch (err) {
      setBook(null);
    }
  };

  const fetchMovie = async (movieTitle) => {
    try {
      const tmdbKey = "f9400952c1284dc2cdb7b5e0ca5b188b";
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=${tmdbKey}`
      );
      setMovie(res.data.results[0]);
    } catch (err) {
      setMovie(null);
    }
  };

  useEffect(() => {
    if (state) {
      fetchWikipedia(state.wikipedia);
      fetchBook(state.book);
      fetchMovie(state.movie);
    }
  }, [state]);

  return (
    <div className="bg-black text-white min-h-screen py-10 px-6 font-serif">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
        <span className="text-lime-400 shadow-[0_0_8px_#84cc16]">
          {state?.title}
        </span>
      </h1>

      <div className="grid md:grid-cols-12 gap-10">
        {/* Left: Wikipedia Article */}
        <div className="col-span-12 md:col-span-7 prose prose-invert max-w-none bg-gray-900 p-6 rounded-xl overflow-y-auto max-h-[80vh] text-justify leading-relaxed text-gray-200 space-y-4">
          <h2 className="text-cyan-400 text-3xl mb-4 font-bold">Detailed Insights</h2>
          {wikiData.split("\n").map((line, index) => {
            const trimmed = line.trim();

            // Sub-subheading: === Heading ===
            if (/^===.*===$/.test(trimmed)) {
              const heading = trimmed.replace(/^===\s*|\s*===$/g, "");
              return (
                <h4
                  key={index}
                  className="text-blue-300 font-semibold text-xl mt-4"
                >
                  {heading}
                </h4>
              );
            }

            // Subheading: == Heading ==
            if (/^==.*==$/.test(trimmed)) {
              const heading = trimmed.replace(/^==\s*|\s*==$/g, "");
              return (
                <h3
                  key={index}
                  className="text-lime-400 font-bold text-2xl mt-6"
                >
                  {heading}
                </h3>
              );
            }

            // Normal paragraph
            return <p key={index}>{trimmed}</p>;
          })}
        </div>

        {/* Right: Book and Movie Recommendations */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-6 bg-slate-900 p-6 rounded-xl max-h-[80vh] overflow-y-auto">
          <h3 className="text-4xl font-bold text-yellow-400 mb-6 text-center">
            Content Collection
          </h3>
          {/* Book Section */}
          {book && (
            <div className="flex gap-6 items-start bg-gray-800 p-4 rounded-xl shadow">
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
                className="w-48 h-64 object-contain rounded"
              />
              <div className="flex-1">
                <h3 className="text-green-400 text-lg font-semibold mb-1">
                  Book
                </h3>

                {/* Book Title */}
                <p className="text-lg font-bold">{book.volumeInfo.title}</p>

                {/* Author Name */}
                <p className="text-sm text-gray-300">
                  <strong>Author:</strong> {book.volumeInfo.authors?.join(", ")}
                </p>

                {/* Publisher */}
                <p className="text-sm text-gray-300">
                  <strong>Publisher:</strong> {book.volumeInfo.publisher}
                </p>

                {/* Published Date */}
                <p className="text-sm text-gray-300">
                  <strong>Published Date:</strong>{" "}
                  {book.volumeInfo.publishedDate}
                </p>

                {/* ISBN */}
                <p className="text-sm text-gray-300">
                  <strong>ISBN:</strong>{" "}
                  {book.volumeInfo.industryIdentifiers
                    ?.map((id) => id.identifier)
                    .join(", ")}
                </p>
              </div>
            </div>
          )}

          {/* Movie Section */}
          {movie && (
            <div className="flex gap-6 items-start bg-gray-800 p-4 rounded-xl shadow">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/placeholder.png"
                }
                alt={movie.title}
                className="w-48 h-64 object-contain rounded"
              />
              <div className="flex-1">
                <h3 className="text-yellow-400 text-lg font-semibold mb-1">
                  Movie
                </h3>
                <p className="text-lg font-bold">{movie.title}</p>
                <p className="text-sm text-gray-300">{movie.overview}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
