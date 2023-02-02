import React from 'react';
import RelatedArticles from '@/shared/sections/related-articles';
import graphQLClient from "@/lib/graphql/client";
//import { VIEW_INDEX } from '@/lib/graphql/entries';
import { Container, Row, Col } from 'reactstrap';

export async function getStaticPaths({ params }) {
  console.log('params', params)
  return {
    paths: ['/notizie/montichiari-finti-tecnici-rapinano-ultraottantenni'],
    fallback: false
  };
}



export async function getStaticProps({ params }) {
  const VIEW_QUERY = `query{
    entry(slug:"${params.slug}") {
      id
      title
      postDate @formatDateTime (format: "Y-m-d")
      author{
        fullName
        username
      }
      ... on news_default_Entry {
        
        category {
          slug
          id
          title
        }
         area {
          slug
          id
          title
        }
      }
    }
  }
`;
  const data = await graphQLClient.request(VIEW_QUERY);

  return {
    props: { data },
  };
}

  const View = ({ data }) => {
console.log('view-entry', data);

    return (
      <div className="page">
       
      <div className="page-content">
      <Container>
      <div className="row g-5">
  <div className="col-md-8">
    <h3 className="pb-4 mb-4 fst-italic border-bottom">{data.entry.excerpt}</h3>
    <article className="blog-post">
      <h2 className="blog-post-title mb-1">{data.entry.title}</h2>
      <p className="blog-post-meta">
        January 1, 2021 by <a href="#">Mark</a>
      </p>
      <p>
        This blog post shows a few different types of content that’s supported
        and styled with Bootstrap. Basic typography, lists, tables, images,
        code, and more are all supported as expected.
      </p>
      <hr />
      <p>
        This is some additional paragraph placeholder content. It has been
        written to fill the available space and show how a longer snippet of
        text affects the surrounding content. We'll repeat it often to keep the
        demonstration flowing, so be on the lookout for this exact same string
        of text.
      </p>
      <h2>Blockquotes</h2>
      <p>This is an example blockquote in action:</p>
      <blockquote className="blockquote">
        <p>Quoted text goes here.</p>
      </blockquote>
      <p>
        This is some additional paragraph placeholder content. It has been
        written to fill the available space and show how a longer snippet of
        text affects the surrounding content. We'll repeat it often to keep the
        demonstration flowing, so be on the lookout for this exact same string
        of text.
      </p>
      <h3>Example lists</h3>
      <p>
        This is some additional paragraph placeholder content. It's a slightly
        shorter version of the other highly repetitive body text used
        throughout. This is an example unordered list:
      </p>
      <ul>
        <li>First list item</li>
        <li>Second list item with a longer description</li>
        <li>Third list item to close it out</li>
      </ul>
      <p>And this is an ordered list:</p>
      <ol>
        <li>First list item</li>
        <li>Second list item with a longer description</li>
        <li>Third list item to close it out</li>
      </ol>
      <p>And this is a definition list:</p>
      <dl>
        <dt>HyperText Markup Language (HTML)</dt>
        <dd>
          The language used to describe and define the content of a Web page
        </dd>
        <dt>Cascading Style Sheets (CSS)</dt>
        <dd>Used to describe the appearance of Web content</dd>
        <dt>JavaScript (JS)</dt>
        <dd>
          The programming language used to build advanced Web sites and
          applications
        </dd>
      </dl>
      <h2>Inline HTML elements</h2>
      <p>
        HTML defines a long list of available inline tags, a complete list of
        which can be found on the{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">
          Mozilla Developer Network
        </a>
        .
      </p>
      <ul>
        <li>
          <strong>To bold text</strong>, use{" "}
          <code className="language-plaintext highlighter-rouge">
            &lt;strong&gt;
          </code>
          .
        </li>
        <li>
          <em>To italicize text</em>, use{" "}
          <code className="language-plaintext highlighter-rouge">
            &lt;em&gt;
          </code>
          .
        </li>
        <li>
          Abbreviations, like{" "}
          <abbr title="HyperText Markup Language">HTML</abbr> should use{" "}
          <code className="language-plaintext highlighter-rouge">
            &lt;abbr&gt;
          </code>
          , with an optional{" "}
          <code className="language-plaintext highlighter-rouge">title</code>{" "}
          attribute for the full phrase.
        </li>
        <li>
          Citations, like <cite>— Mark Otto</cite>, should use{" "}
          <code className="language-plaintext highlighter-rouge">
            &lt;cite&gt;
          </code>
          .
        </li>
        <li>
          <del>Deleted</del> text should use{" "}
          <code className="language-plaintext highlighter-rouge">
            &lt;del&gt;
          </code>{" "}
          and <ins>inserted</ins> text should use{" "}
          <code className="language-plaintext highlighter-rouge">
            &lt;ins&gt;
          </code>
          .
        </li>
        <li>
          Superscript <sup>text</sup> uses{" "}
          <code className="language-plaintext highlighter-rouge">
            &lt;sup&gt;
          </code>{" "}
          and subscript <sub>text</sub> uses{" "}
          <code className="language-plaintext highlighter-rouge">
            &lt;sub&gt;
          </code>
          .
        </li>
      </ul>
      <p>
        Most of these elements are styled by browsers with few modifications on
        our part.
      </p>
      <h2>Heading</h2>
      <p>
        This is some additional paragraph placeholder content. It has been
        written to fill the available space and show how a longer snippet of
        text affects the surrounding content. We'll repeat it often to keep the
        demonstration flowing, so be on the lookout for this exact same string
        of text.
      </p>
      <h3>Sub-heading</h3>
      <p>
        This is some additional paragraph placeholder content. It has been
        written to fill the available space and show how a longer snippet of
        text affects the surrounding content. We'll repeat it often to keep the
        demonstration flowing, so be on the lookout for this exact same string
        of text.
      </p>
      <pre>
        <code>Example code block</code>
      </pre>
      <p>
        This is some additional paragraph placeholder content. It's a slightly
        shorter version of the other highly repetitive body text used
        throughout.
      </p>
    </article>
    <article className="blog-post">
      <h2 className="blog-post-title mb-1">Another blog post</h2>
      <p className="blog-post-meta">
        December 23, 2020 by <a href="#">Jacob</a>
      </p>
      <p>
        This is some additional paragraph placeholder content. It has been
        written to fill the available space and show how a longer snippet of
        text affects the surrounding content. We'll repeat it often to keep the
        demonstration flowing, so be on the lookout for this exact same string
        of text.
      </p>
      <blockquote>
        <p>
          Longer quote goes here, maybe with some{" "}
          <strong>emphasized text</strong> in the middle of it.
        </p>
      </blockquote>
      <p>
        This is some additional paragraph placeholder content. It has been
        written to fill the available space and show how a longer snippet of
        text affects the surrounding content. We'll repeat it often to keep the
        demonstration flowing, so be on the lookout for this exact same string
        of text.
      </p>
      <h3>Example table</h3>
      <p>And don't forget about tables in these posts:</p>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Upvotes</th>
            <th>Downvotes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>10</td>
            <td>11</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>4</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Charlie</td>
            <td>7</td>
            <td>9</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Totals</td>
            <td>21</td>
            <td>23</td>
          </tr>
        </tfoot>
      </table>
      <p>
        This is some additional paragraph placeholder content. It's a slightly
        shorter version of the other highly repetitive body text used
        throughout.
      </p>
    </article>
    <article className="blog-post">
      <h2 className="blog-post-title mb-1">New feature</h2>
      <p className="blog-post-meta">
        December 14, 2020 by <a href="#">Chris</a>
      </p>
      <p>
        This is some additional paragraph placeholder content. It has been
        written to fill the available space and show how a longer snippet of
        text affects the surrounding content. We'll repeat it often to keep the
        demonstration flowing, so be on the lookout for this exact same string
        of text.
      </p>
      <ul>
        <li>First list item</li>
        <li>Second list item with a longer description</li>
        <li>Third list item to close it out</li>
      </ul>
      <p>
        This is some additional paragraph placeholder content. It's a slightly
        shorter version of the other highly repetitive body text used
        throughout.
      </p>
    </article>
    <nav className="blog-pagination" aria-label="Pagination">
      <a className="btn btn-outline-primary rounded-pill" href="#">
        Older
      </a>
      <a className="btn btn-outline-secondary rounded-pill disabled">Newer</a>
    </nav>
  </div>
  <div className="col-md-4">
    <div className="position-sticky" style={{ top: "2rem" }}>
      <div className="p-4 mb-3 bg-light rounded">
        <h4 className="fst-italic">About</h4>
        <p className="mb-0">
          Customize this section to tell your visitors a little bit about your
          publication, writers, content, or something else entirely. Totally up
          to you.
        </p>
      </div>
      <div className="p-4">
        <h4 className="fst-italic">Archives</h4>
        <ol className="list-unstyled mb-0">
          <li>
            <a href="#">March 2021</a>
          </li>
          <li>
            <a href="#">February 2021</a>
          </li>
          <li>
            <a href="#">January 2021</a>
          </li>
          <li>
            <a href="#">December 2020</a>
          </li>
          <li>
            <a href="#">November 2020</a>
          </li>
          <li>
            <a href="#">October 2020</a>
          </li>
          <li>
            <a href="#">September 2020</a>
          </li>
          <li>
            <a href="#">August 2020</a>
          </li>
          <li>
            <a href="#">July 2020</a>
          </li>
          <li>
            <a href="#">June 2020</a>
          </li>
          <li>
            <a href="#">May 2020</a>
          </li>
          <li>
            <a href="#">April 2020</a>
          </li>
        </ol>
      </div>
      <div className="p-4">
        <h4>Condividi</h4>
        <ol className="list-unstyled">
          <li>
            <a href="#">GitHub</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</div>

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
  </Container>

</div>
<RelatedArticles topics={[data?.entry.category[0].id]} limit={4}/>

</div>
    )
}

export default View;
