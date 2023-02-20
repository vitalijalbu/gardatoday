import Link from "next/link";
import { IconHistoryToggle } from "@tabler/icons-react";

const StoryCard = ({data}) => {
  return (
    <div className="card card-overlay-bottom card-image-scale">
      <span className="card-featured" title="Featured post">
  <IconHistoryToggle/>
</span>

    {/* Card Image */}
    <div className="img-responsive-wrapper">
            <div className="img-responsive story">
              <figure className="img-wrapper">
                <source
                  srcSet={data.cover_image ? data.cover_image[0].url : '/images/placeholder.svg'}
                  media="(min-width: 62.5em)"
                />
                <img
                  srcSet={data.cover_image ? data.cover_image[0].url : '/images/placeholder.svg'}
                  className="p-card__image"
                  alt={data.title}
                />
              </figure>
            </div>
          </div>
    {/* Card Image overlay */}
    <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
      <div>
        {/* Card category */}
        {data?.category && data?.category.length > 0 ? (
          <span className="text-white category">
            {data?.category[0].title}
          </span>
        ) : null}
      </div>
      <div className="w-100 mt-auto">
         {/* Card info */}
         <span className="data text-white-400">{data.postDate}</span>
        {/* Card title */}
        <h5 className="card-title text-white"><Link href={'#'}>{data.title}</Link></h5>
      </div>
    </div>
  </div>
  

            );
};

export default StoryCard;