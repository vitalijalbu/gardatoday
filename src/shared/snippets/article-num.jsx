
import Link from "next/link";


const ArticleNum = ({ data }) => {
  
  return (
<li className="media media-item_number">
  <div className="mr-3 post-num_number text-primary">
    <span className="text-points__index">
      {data.id}
    </span>
  </div>
  <div className="media-body">
   
    <div className="category-top">
      
      <a className="category" href="{{ entry.area.one().url }}">
       area
      </a>

      <a className="category" href="{{ entry.category.one().url }}">
       categ
      </a>

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
