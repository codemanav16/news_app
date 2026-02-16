const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card" style={{ width: "100%", minHeight: "360px" }}>
      <img
        src={
          src ||
          "https://via.placeholder.com/400x200.png?text=No+Image"
        }
        className="card-img-top"
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title || "No title"}</h5>
        <p className="card-text">
          {description || "No description available."}
        </p>
        <a
          href={url}
          className="btn btn-primary mt-auto"
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
