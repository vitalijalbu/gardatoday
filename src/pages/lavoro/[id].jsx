import React from 'react';
import RelatedArticles from '@/shared/sections/related-articles';
import graphQLClient from "@/lib/graphql/client";
import { VIEW_INDEX, VIEW_QUERY } from '@/lib/graphql/entries';


export async function getStaticPaths() {
  const data = await graphQLClient.request(VIEW_INDEX);

  return {
    paths: data.entries.map((post) => `/notizie/${post.slug}`),
    fallback: false,
  };
}



export async function getStaticProps({ params }) {
  const data = await graphQLClient.request({
    VIEW_QUERY,     
    variables: {
    slug: params.slug,
  }});

  return {
    props: { data },
  };
}

  const View = ({ data }) => {
console.log('view-entry', data);

    return (
      <div className="page">
      <div className="page-content">
<div className="uk-section-default uk-section uk-padding-remove-bottom">
  <div className="uk-container">
    <div className="uk-grid-margin uk-container uk-container-xsmall">
      <div
        className="tm-grid-expand uk-child-width-1-1 uk-grid uk-grid-stack"
        uk-grid=""
      >
        <div className="uk-width-1-1@m uk-first-column">
          <div className="uk-h6 uk-text-primary uk-margin-remove-vertical uk-text-center">
            Statue of Liberty
          </div>
          <h1 className="uk-heading-small uk-margin uk-text-center">
            
            Speculation around New York’s famous landmark turned out false
          </h1>
          <div className="uk-panel uk-text-lead uk-margin-medium uk-text-center">
            Tempor integre sit cu, alia iuvaret atomorum his cu, error omnium at
            nam. Ei decore labitur pro. Mea decore audire signiferumque in
            reprehenderit.
          </div>
          <div className="uk-panel uk-text-meta uk-margin uk-text-center">
            <time dateTime="2020-06-06T21:20:09+00:00">Jun 6, 2020</time>  | 
            Adrian Phelps  | 
            <a href="/notizie/demo">Humanities</a>
          </div>
        </div>
      </div>
    </div>
    <div
      className="tm-grid-expand uk-child-width-1-1 uk-margin-large uk-grid uk-grid-stack"
      uk-grid=""
    >
      <div className="uk-width-1-1@m uk-first-column">
        <div className="uk-margin-small">
          <picture>
            <source
              type="image/webp"
              srcSet="https://via.placeholder.com/800x533"
              sizes="(min-width: 1200px) 1200px"
            />
            <img
              src="https://via.placeholder.com/800x533"
              width={1200}
              height={750}
              className="el-image"
              alt=""
              loading="eager"
            />
          </picture>
        </div>
      </div>
    </div>
    <div className="uk-grid-margin uk-container uk-container-xsmall">
      <div
        className="tm-grid-expand uk-child-width-1-1 uk-grid uk-grid-stack"
        uk-grid=""
      >
        <div className="uk-width-1-1@m uk-first-column">
          <div className="uk-panel uk-text-large uk-dropcap uk-margin">
            <p className="uk-text-meta tm-page-break tm-page-break-first-page">
              Page 1 of 2
            </p>
            <div className="pagenavcounter">Page 1 of 2</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor. In
              reprehenderit in voluptate velit esse. Cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Ei pro erant populo consulatu, ea usu ludus suscipit. Laudem
              feugiat percipit id sed, aliquam habemus te sed, case ullum
              saperet eu per. Est causae commune senserit ea, pro reprimique
              dissentias id! Eu usu numquam legimus, dicant regione consequat id
              eam. Qui odio integre ne? Ut eam feugait fastidii consequat, et
              quo aliquip accumsan?
            </p>
            <figure className="uk-margin-large">
              <img
                src="https://via.placeholder.com/800x533"
                width={1500}
                height={1000}
                alt=""
                loading="lazy"
              />
              <figcaption className="uk-text-meta uk-margin-small-top">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </figcaption>
            </figure>
            <h2>Scientists are re-evaluating their assessment practices</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet
              <a href="/notizie/demo">consectetur adipiscing elit</a>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim.
            </p>
            <blockquote className="uk-width-5-6@s uk-margin-large">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore."
              </p>
              <footer className="el-footer">
                <cite className="el-author">John Doe</cite>
              </footer>
            </blockquote>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum.
            </p>
            <figure className="uk-margin-large">
              <img
                src="https://via.placeholder.com/800x533"
                width={1500}
                height={1000}
                alt=""
                loading="lazy"
              />
              <figcaption className="uk-text-meta uk-margin-small-top">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </figcaption>
            </figure>
            <h2>New evidence</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magn aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in <a href="/notizie/demo">culpa qui officia</a>
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<RelatedArticles/>

</div>
    )
}

export default View;
