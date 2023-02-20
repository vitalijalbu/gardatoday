
import Link from "next/link";


const ArticleNum = ({ data, key }) => {
  
  return (
<li className="d-flex align-items-center media-item_number">
  <div className="post-num_number flex-shrink-0 text-primary">
    <span className="text-points__index">
      {key}
    </span>
  </div>
  <div className="flex-grow-1 ms-3">
   
    <div className="category-top">
      
    {data.area && (
              <Link className="category" href={`/zone/${data?.area.slug}`}>
                {data?.area?.title}
              </Link>
            )}
            {data.category && (
              <Link
                className="category"
                href={`/sezioni/${data?.category.slug}`}
              >
                {data?.category.title}
              </Link>
            )}
      <span className="data">
       {data.postDate}
      </span>
    </div>

    <Link href={`/notizie/${data.slug}`} aria-label={data.title}>
      <h5 className="card-title serif underline text-serif">
        {data.title}
      </h5>
      <p className="text-muted card-text d-xs-none">
        {data.excerpt}
      </p>
    </Link>
  </div>
</li>

  );
};

export default ArticleNum;
