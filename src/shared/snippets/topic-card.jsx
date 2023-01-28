import Link from "next/link";


const CategoryCard = ({data}) => {
  return (
    <div
    className="el-itemuk-active">
    <div className="uk-light">
    <Link
                  href={`/sezioni/${data.slug}`}
        className="uk-cover-container uk-display-block uk-link-toggle"
        aria-label="All Articles"
      >
        <picture>
          <source
            type="image/webp"
            srcSet="https://via.placeholder.com/800"
            sizes="(min-width: 360px) 360px"
          />
          <img
            src="https://via.placeholder.com/800"
            width={360}
            height={561}
            alt=""
            loading="lazy"
            className="el-image uk-transition-opaque"
          />
        </picture>
        <div className="uk-position-bottom-center">
          <div className="uk-panel uk-padding uk-margin-remove-first-child">
            <h3 className="el-title uk-h2 uk-margin-top uk-margin-remove-bottom">
              {data.title}
            </h3>
            <div className="uk-margin-small-top">
              <div className="el-link uk-button uk-button-text">
                LEGGI DI PIù
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </div>

            );
};

export default CategoryCard;