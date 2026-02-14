import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        // Debug ke liye (production me bhi console me dikhega)
        console.log("NewsAPI response:", data);

        if (response.ok && Array.isArray(data.articles)) {
          setArticles(data.articles);
          setError("");
        } else {
          // agar error ya articles nahi mile
          setArticles([]);
          setError(data.message || "Failed to load news");
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong while fetching news");
        setArticles([]);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container my-3">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {error && (
        <p className="text-center text-danger">
          {error}
        </p>
      )}

      <div className="row">
        {Array.isArray(articles) &&
          articles.map((news, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <NewsItem
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsBoard;
