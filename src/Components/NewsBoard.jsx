import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const baseUrl =
          import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

        const url = `${baseUrl}/api/news?category=${category}&country=us`;

        const response = await fetch(url);
        const data = await response.json();

        console.log("Proxy response:", data);

        if (response.ok && Array.isArray(data.articles)) {
          setArticles(data.articles);
          setError("");
        } else {
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
