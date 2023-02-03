import Link from "next/link";


const CategoryCard = ({data}) => {
  return (
    <Link href={`/sezioni/${data.slug}`}>
    <div className="card-wrapper card-topic">

  <div className="card card-img no-after">
    <div className="img-responsive-wrapper">
      <div className="img-responsive">
        <figure className="img-wrapper">
          <source
            srcSet={data.cover_image[0]?.url ?? 'https://gardatoday.it/web/assets/images/placeholder.png'}
            media="(min-width: 62.5em)"
          />
          <img
             srcSet={data.cover_image[0]?.url}
            alt={data.title}
          />
        </figure>
        <div class="card-img-overlay">
      <h5 className="card-title underline">{data.title}</h5>
      
    </div>
    </div>
  </div>
</div>
</div>

  </Link>
            )
}

export default CategoryCard;