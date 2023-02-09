import Link from "next/link";

const TopicCard = ({ data }) => {
  return (
    <Link href={`/sezioni/${data.slug}`}>
      <div className="card-wrapper card-topic">
        <div className="card card-img no-after">
          <div className="img-responsive-wrapper">
            <div className="img-responsive">
            <figure className="img-wrapper">
                <source
                  srcSet={data.cover_image ? data.cover_image[0]?.url : '/images/placeholder.png'}
                  media="(min-width: 62.5em)"
                />
                <img
                  srcSet={data.cover_image ? data.cover_image[0]?.url : '/images/placeholder.png'}
                  className="p-card__image"
                  alt={data.title}
                />
              </figure>
              <div className="card-img-overlay">
                <h5 className="card-title serif underline">{data.title}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopicCard;
