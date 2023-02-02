import React, { useState, useEffect } from "react";
import graphQLClient from "@/lib/graphql/client";
import { request, gql } from 'graphql-request';

export async function getStaticProps() {
  const data = await graphQLClient.request(gql`
  query {
    entries(section: "news", limit: 30) {
      id
      title
      slug
      dateCreated
      ... on news_default_Entry {
        excerpt
        cover_image {
          id,
          url
        }
        author {
          id,
          fullName
        }
        area {
          id,
          title
        }
         category {
          id,
          title
        }
      }
    }
  }
  `);

  return {
    props: { data },
  };
}

const Index = ({data}) => {
  const [loading, setLoading] = useState(false);

  if (!data) return <h1 strong>Nessun dato</h1>;

  return (
    
    <div className='page'>
    <div
        className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
        uk-grid=""
      >
        <div
          className="uk-grid-item-match uk-width-1-1@m uk-first-column"
          id="page#1"
        >
          <div className="uk-tile-muted uk-flex">
            <div
              data-src="https://via.placeholder.com/800x533"
              data-sources='[{"type":"image\/webp","srcset":"\/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=file%3D..%252Fdemo%252Fpaladin%252Fimages%252Ftechnology-post-new-tablet-inspires-with-unique-features-teaser-bg-left.jpg%26type%3Dwebp%2C85%26thumbnail%3D768%2C360&hash=2a12312c 768w, \/joomla\/themes\/paladin\/component\/ajax\/?p=image&src=file%3D..%252Fdemo%252Fpaladin%252Fimages%252Ftechnology-post-new-tablet-inspires-with-unique-features-teaser-bg-left.jpg%26type%3Dwebp%2C85%26thumbnail%3D1024%2C480&hash=da7bc1d9 1024w, \/joomla\/templates\/yootheme\/cache\/eb\/technology-post-new-tablet-inspires-with-unique-features-teaser-bg-left-eb8fda64.webp 1366w, \/joomla\/templates\/yootheme\/cache\/5e\/technology-post-new-tablet-inspires-with-unique-features-teaser-bg-left-5e6f3054.webp 1600w, \/joomla\/templates\/yootheme\/cache\/0b\/technology-post-new-tablet-inspires-with-unique-features-teaser-bg-left-0b1e7302.webp 1920w, \/joomla\/templates\/yootheme\/cache\/61\/technology-post-new-tablet-inspires-with-unique-features-teaser-bg-left-61d0186e.webp 2560w","sizes":"(max-aspect-ratio: 1600\/750) 213vh"}]'
              loading="eager"
              uk-img=""
              className="uk-background-norepeat uk-background-cover uk-background-center-center uk-background-image@l uk-tile uk-width-1-1 uk-tile-small uk-flex uk-flex-middle"
              style={{
                backgroundImage:
                  'url("https://demo.yootheme.com/joomla/templates/yootheme/cache/61/technology-post-new-tablet-inspires-with-unique-features-teaser-bg-left-61d0186e.webp")'
              }}
            >
              <div className="uk-panel uk-width-1-1">
                <div className="uk-hidden@l uk-margin-medium">
                  <a
                    className="el-link"
                    href="/sezioni/politica"
                  >
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="/joomla/templates/yootheme/cache/97/technology-post-new-tablet-inspires-with-unique-features-97f5a74a.webp 768w, /joomla/templates/yootheme/cache/dd/technology-post-new-tablet-inspires-with-unique-features-ddc9b33d.webp 930w, /joomla/templates/yootheme/cache/fc/technology-post-new-tablet-inspires-with-unique-features-fcf2bef5.webp 1024w, /joomla/themes/paladin/component/ajax/?p=image&src=file%3D..%252Fdemo%252Fpaladin%252Fimages%252Ftechnology-post-new-tablet-inspires-with-unique-features.jpg%26type%3Dwebp%2C85%26thumbnail%3D1366%2C853&hash=ac9fd48f 1366w, /joomla/themes/paladin/component/ajax/?p=image&src=file%3D..%252Fdemo%252Fpaladin%252Fimages%252Ftechnology-post-new-tablet-inspires-with-unique-features.jpg%26type%3Dwebp%2C85%26thumbnail%3D1600%2C1000&hash=afe475e4 1600w, /joomla/templates/yootheme/cache/a2/technology-post-new-tablet-inspires-with-unique-features-a28720bb.webp 1860w"
                        sizes="(min-width: 930px) 930px"
                      />
                      <img
                        src="https://via.placeholder.com/800x533"
                        width={930}
                        height={581}
                        className="el-image"
                        alt=""
                        loading="eager"
                      />
                    </picture>
                  </a>
                </div>
                <div
                  className="uk-panel uk-margin-remove-first-child uk-margin-remove-vertical uk-width-xlarge@s uk-margin-auto-left@l"
                  id="page#0"
                >
                  <div className="el-meta uk-h6 uk-text-primary uk-margin-top uk-margin-remove-bottom">
                    Innovations for designers
                  </div>
                  <h2 className="el-title uk-heading-small uk-margin-small-top uk-margin-remove-bottom">
                    
                    <a
                      href="/sezioni/politica"
                      className="uk-link-heading"
                    >
                      The new tablet manages to inspire with unique features
                    </a>
                  </h2>
                  <div className="el-content uk-panel uk-text-lead uk-margin-medium-top">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua quis
                    nostrud exercitation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
  className="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
  uk-grid=""
>
  <div className="uk-width-1-1@m uk-first-column">
    <h2 className="uk-h6"> In the News </h2>
    <div className="uk-margin">
      <div
        className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-4@l uk-grid-column-medium uk-grid-row-small uk-grid-divider uk-grid-match uk-grid"
        uk-grid=""
      >
        
        <div className="uk-first-column">
          <div className="el-item uk-panel uk-margin-remove-first-child">
            <div
              className="uk-child-width-expand uk-grid-column-small uk-grid"
              uk-grid=""
            >
              
              <div className="uk-width-auto uk-first-column">
                <a
                  href="/sezioni/politica"
                  aria-label="This is why you need a wireless stylus even if you don’t draw"
                >
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/joomla/templates/yootheme/cache/be/technology-post-this-is-why-you-need-an-apple-pencil-even-if-you-don-t-draw-bed681d8.webp 70w, /joomla/templates/yootheme/cache/7d/technology-post-this-is-why-you-need-an-apple-pencil-even-if-you-don-t-draw-7ddf29d4.webp 140w"
                      sizes="(min-width: 70px) 70px"
                    />
                    <img
                      src="https://via.placeholder.com/800x533"
                      width={70}
                      height={70}
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
              <div className="uk-margin-remove-first-child">
                <h3 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">
                  
                  <a
                    href="/sezioni/politica"
                    className="uk-link-heading"
                  >
                    This is why you need a wireless stylus even if you don’t
                    draw
                  </a>
                </h3>
                <div className="el-meta uk-text-meta uk-margin-small-top">
                  11:00 am
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="el-item uk-panel uk-margin-remove-first-child">
            <div
              className="uk-child-width-expand uk-grid-column-small uk-grid"
              uk-grid=""
            >
              
              <div className="uk-width-auto uk-first-column">
                <a
                  href="/sezioni/politica"
                  aria-label="Apple Watch: New software updates are in the starting blocks"
                >
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/joomla/templates/yootheme/cache/f7/technology-post-apple-watch-new-software-updates-are-in-the-starting-blocks-f71c0b60.webp 70w, /joomla/templates/yootheme/cache/c7/technology-post-apple-watch-new-software-updates-are-in-the-starting-blocks-c7e1c173.webp 140w"
                      sizes="(min-width: 70px) 70px"
                    />
                    <img
                      src="https://via.placeholder.com/800x533"
                      width={70}
                      height={70}
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
              <div className="uk-margin-remove-first-child">
                <h3 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">
                  
                  <a
                    href="/sezioni/politica"
                    className="uk-link-heading"
                  >
                    Apple Watch: New software updates are in the starting blocks
                  </a>
                </h3>
                <div className="el-meta uk-text-meta uk-margin-small-top">
                  11:00 am
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="el-item uk-panel uk-margin-remove-first-child">
            <div
              className="uk-child-width-expand uk-grid-column-small uk-grid"
              uk-grid=""
            >
              
              <div className="uk-width-auto uk-first-column">
                <a
                  href="/sezioni/politica"
                  aria-label="It’s official: E3 2020 has been cancelled"
                >
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/joomla/templates/yootheme/cache/b6/technology-post-it-s-official-e3-2020-has-been-cancelled-b68b506e.webp 70w, /joomla/templates/yootheme/cache/a5/technology-post-it-s-official-e3-2020-has-been-cancelled-a5db2516.webp 140w"
                      sizes="(min-width: 70px) 70px"
                    />
                    <img
                      src="https://via.placeholder.com/800x533"
                      width={70}
                      height={70}
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
              <div className="uk-margin-remove-first-child">
                <h3 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">
                  
                  <a
                    href="/sezioni/politica"
                    className="uk-link-heading"
                  >
                    It’s official: E3 2020 has been cancelled
                  </a>
                </h3>
                <div className="el-meta uk-text-meta uk-margin-small-top">
                  11:00 am
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="el-item uk-panel uk-margin-remove-first-child">
            <div
              className="uk-child-width-expand uk-grid-column-small uk-grid"
              uk-grid=""
            >
              
              <div className="uk-width-auto uk-first-column">
                <a
                  href="/sezioni/politica"
                  aria-label="Porsche launches its first pure electric car with 670 horsepower"
                >
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/joomla/templates/yootheme/cache/7a/technology-post-porsche-launches-its-first-pure-electric-car-7ae5703f.webp 70w, /joomla/templates/yootheme/cache/a6/technology-post-porsche-launches-its-first-pure-electric-car-a65a4a46.webp 140w"
                      sizes="(min-width: 70px) 70px"
                    />
                    <img
                      src="https://via.placeholder.com/800x533"
                      width={70}
                      height={70}
                      className="el-image"
                      alt=""
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
              <div className="uk-margin-remove-first-child">
                <h3 className="el-title uk-h5 uk-margin-top uk-margin-remove-bottom">
                  
                  <a
                    href="/sezioni/politica"
                    className="uk-link-heading"
                  >
                    Porsche launches its first pure electric car with 670
                    horsepower
                  </a>
                </h3>
                <div className="el-meta uk-text-meta uk-margin-small-top">
                  10:30 am
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="uk-margin-medium" />
  </div>
  {data.entries.map((article, i) => (
    <div>
            {article.title}
    </div>
   ))}
</div>
</div>

  )
}

export default Index;
