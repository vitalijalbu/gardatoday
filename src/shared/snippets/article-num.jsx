import Link from "next/link";

const ArticleNum = ({ data, key }) => {
  return (
    <li className="d-flex align-items-center media-item_number">
      <div className="post-num_number flex-shrink-0 text-primary">
        <span className="text-points__index">{key}</span>
      </div>
      <div className="flex-grow-1 ms-3">
        <div className="category-top">
        {data?.area?.length > 0 ? (
          <Link className="category" href={`/zone/${data?.area[0].slug}`}>
            {data?.area[0].title}
          </Link>
        ) : (
          <Link
            className="category"
            href={`/sezioni/${data?.category[0].slug}`}
          >
            {data?.category[0].title}
          </Link>
        )}
          <span className="data">{data.postDate}</span>
        </div>

        <Link href={`/notizie/${data.slug}`} aria-label={data.title}>
          <h5 className="card-title serif underline text-serif">
            {data.title}
          </h5>
        </Link>
      </div>
    </li>
  );
};

export default ArticleNum;
