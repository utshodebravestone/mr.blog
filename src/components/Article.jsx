const Article = ({
  thumbnail,
  title,
  description,
  authorImage,
  authorName,
  authorType,
  date,
}) => {
  return (
    <article className="p-2 rounded flex flex-col gap-2.5 shadow">
      <div className="flex flex-col gap-1">
        <img
          src={thumbnail}
          alt="article thumbnail"
          className="w-full h-80 object-cover rounded-t"
        />
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-normal">{description}</p>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex gap-2.5 items-center">
          <img
            src={authorImage}
            alt="author image"
            className="h-14 w-14 rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold">{authorName}</h1>
            <small className="text-normal font-medium">{authorType}</small>
          </div>
        </div>

        <span className="text-xl font-bold">{date}</span>
      </div>
    </article>
  );
};

export default Article;
