import useSWR, { SWRConfig } from "swr";
import fetcher from "../../libs/fetcher";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps({ params }) {
  const hero = await fetcher(`${process.env.API_URL}/hero/${params.id}/`);
  return {
    props: {
      fallback: {
        [`${process.env.API_URL}/hero/${params.id}/`]: hero,
      },
    },
  };
}

function Content() {
  const router = useRouter();
  const query = router.query;
  const { data: hero } = useSWR(`${process.env.API_URL}/hero/${query.id}/`);

  const { data: last_heroes } = useSWR(
    `${process.env.API_URL}/heroes/last/`,
    fetcher
  );

  return (
    <Layout title={`${hero.last_name} ${hero.first_name}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="moto-cell col-sm-12" data-container="container">
            <div
              className="moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-justify-content_center"
              data-grid-type="sm"
              data-widget="row"
              data-spacing="aaaa"
              data-bg-position="left top"
            >
              <div className="container-fluid">
                <div className="row" data-container="container">
                  <div
                    className="moto-widget moto-widget-row__column moto-cell col-sm-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    data-widget="row.column"
                    data-container="container"
                    data-spacing="aaaa"
                    data-bg-position="left top"
                  >
                    <div
                      data-widget-id="wid_1529656732_29323z1o7"
                      className="moto-widget moto-widget-divider moto-preset-default moto-align-left moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  "
                      data-widget="divider_horizontal"
                      data-preset="default"
                    >
                      <hr
                        className="moto-widget-divider-line"
                        style={{ maxWidth: "100%", width: "60px" }}
                      />
                    </div>
                  </div>

                  <div
                    className="moto-widget moto-widget-row__column moto-cell col-sm-11 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                    data-widget="row.column"
                    data-container="container"
                    data-spacing="aaaa"
                    data-bg-position="left top"
                  >
                    <div
                      className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-widget="text"
                      data-preset="default"
                      data-spacing="aaaa"
                      data-animation=""
                    >
                      <div className="moto-widget-text-content moto-widget-text-editable">
                        <p className="moto-text_system_11">ОДИН ИЗ ГЕРОЕВ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="moto-widget moto-widget-row row-fixed"
              data-widget="row"
            >
              <div className="container-fluid">
                <div className="row" data-container="container">
                  <div
                    className="moto-cell col-sm-9 moto-widget moto-widget-row__column"
                    data-container="container"
                    data-widget="row.column"
                  >
                    <div
                      data-widget-id="wid__blog_post_name__5b2cb4c0d4ebd"
                      className="moto-widget moto-widget-blog-post_name moto-preset-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                      data-preset="default"
                      data-widget="blog.post_name"
                    >
                      <div
                        className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                        data-widget="text"
                        data-preset="default"
                        data-spacing="aaaa"
                      >
                        <div className="moto-widget-text-content moto-widget-text-editable">
                          <h1 className="moto-text_system_8">
                            {hero.last_name} {hero.first_name}{" "}
                            {hero.middle_name}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div
                      data-widget-id="wid__spacer__5b2cb4c0d9a0e"
                      className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto "
                      data-widget="spacer"
                      data-preset="default"
                      data-spacing="aaaa"
                      data-visible-on="mobile-v"
                    >
                      <div
                        className="moto-widget-spacer-block"
                        style={{ height: "10px" }}
                      ></div>
                    </div>
                    <div
                      data-widget-id="wid__social_buttons__5b2cb4c0dab31"
                      className="moto-widget moto-widget-social-buttons moto-preset-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto "
                      data-widget="social_buttons"
                      data-preset="default"
                      data-spacing="aasa"
                    >
                      <ul className="social-buttons-list">
                        <li
                          className="social-button"
                          data-name="facebook_share"
                          data-provider="facebook"
                        >
                          <div
                            className="fb-share-button"
                            data-href="https://template68189.motopreview.com/blog/the-most-common-mistakes-when-managing-personal-finances/"
                            data-layout="button_count"
                            moto-dependency-require="facebook"
                          ></div>
                        </li>
                        <li
                          className="social-button"
                          data-name="twitter_tweet"
                          data-provider="twitter"
                        >
                          <a
                            href="index.html"
                            className="twitter-share-button"
                            moto-dependency-require="twitter"
                          ></a>
                        </li>
                        <li
                          className="social-button"
                          data-name="linkedIn_share"
                          data-provider="linkedin"
                        >
                          <span
                            type="IN/Share"
                            data-url="https://template68189.motopreview.com/blog/the-most-common-mistakes-when-managing-personal-finances/"
                            data-counter="right"
                            moto-dependency-require="linkedin"
                          ></span>
                        </li>
                      </ul>
                    </div>
                    <div
                      data-widget-id="wid__spacer__5b2cb4c0dbe5d"
                      className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto "
                      data-widget="spacer"
                      data-preset="default"
                      data-spacing="aaaa"
                      data-visible-on="mobile-v"
                    >
                      <div
                        className="moto-widget-spacer-block"
                        style={{ height: "10px" }}
                      ></div>
                    </div>
                    <div
                      data-widget-id="wid__blog_post_content__5b2cb4c0dce24"
                      className="moto-widget moto-widget-blog-post_content moto-preset-default  moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                      data-widget="blog.post_content"
                    >
                      <section
                        id="section-content"
                        className="content page-27 moto-section"
                        data-widget="section"
                        data-container="section"
                      >
                        <div
                          className="moto-widget moto-widget-row"
                          data-widget="row"
                          data-draggable-disabled=""
                        >
                          <div className="container-fluid">
                            <div className="row" data-container="container">
                              <div
                                className="moto-cell col-sm-12 moto-widget moto-widget-row__column"
                                data-container="container"
                                data-widget="row.column"
                              >
                                <div
                                  data-widget-id="wid__image__5b2cb430830e7"
                                  className="moto-widget moto-widget-image moto-preset-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  "
                                  data-widget="image"
                                >
                                  <span
                                    className="moto-widget-image-link"
                                    style={{
                                      position: "relative",
                                      width: "100%",
                                      height: "272px",
                                    }}
                                  >
                                    <Image
                                      className="moto-widget-image-picture lazyload"
                                      src={hero.photo}
                                      layout="fill"
                                      objectFit="contain"
                                      data-id="267"
                                      title=""
                                      alt=""
                                    />
                                  </span>
                                </div>
                                <div
                                  className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
                                  data-widget="text"
                                  data-preset="default"
                                  data-spacing="sala"
                                  data-draggable-disabled=""
                                >
                                  <div className="moto-widget-text-content moto-widget-text-editable">
                                    <div
                                      className="moto-text_normal"
                                      dangerouslySetInnerHTML={{
                                        __html: hero.description,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div
                    className="moto-cell col-sm-3 moto-widget moto-widget-row__column"
                    data-container="container"
                    data-widget="row.column"
                  >
                    <div
                      data-widget-id="wid__blog_recent_posts__5b2cb4c0e0cee"
                      className="moto-widget moto-widget-blog-recent_posts moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto "
                      data-widget="blog.recent_posts"
                    >
                      <div className="moto-widget-blog-recent_posts-title">
                        <div
                          className="moto-widget moto-widget-text moto-preset-default moto-align-left  moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                          data-preset="default"
                          data-spacing="aasa"
                        >
                          <div className="moto-widget-text-content moto-widget-text-editable">
                            <p className="moto-text_system_8">Последнее</p>
                          </div>
                        </div>
                      </div>

                      <div
                        className="moto-widget moto-widget-row"
                        data-widget="row"
                      >
                        <div className="container-fluid">
                          <div className="row moto-widget-blog-recent_posts-list">
                            {last_heroes ? (
                              <>
                                {last_heroes.map((last_hero) => (
                                  <div
                                    key={last_hero.id}
                                    className="moto-cell col-sm-12 moto-widget-blog-recent_posts-item"
                                  >
                                    <div className="moto-widget-blog-recent_posts-item__content  moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto">
                                      <div className="moto-widget-blog-recent_posts-item-preview">
                                        <div
                                          data-widget-id="wid__image__61732c3d06cf3"
                                          className="moto-widget moto-widget-image moto-preset-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  "
                                          data-widget="image"
                                        >
                                          <Link
                                            href={`/hero/[id]`}
                                            as={`/hero/${last_hero.id}`}
                                          >
                                            <a
                                              className="moto-widget-image-link moto-link"
                                              style={{
                                                position: "relative",
                                                width: "100%",
                                                height: "272px",
                                              }}
                                            >
                                              <Image
                                                src={last_hero.photo}
                                                className="moto-widget-image-picture lazyload"
                                                layout="fill"
                                                objectFit="contain"
                                                data-id=""
                                                title=""
                                                alt=""
                                              />
                                            </a>
                                          </Link>
                                        </div>
                                      </div>

                                      <div className="moto-widget-blog-recent_posts-item-title">
                                        <div
                                          className="moto-widget moto-widget-text moto-align-left  moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                                          data-preset="default"
                                          data-spacing="aasa"
                                        >
                                          <div className="moto-widget-text-content moto-widget-text-editable">
                                            <h2 className="blog-post-title moto-text_system_9">
                                              <Link
                                                href={`/hero/[id]`}
                                                as={`/hero/${last_hero.id}`}
                                              >
                                                <a>
                                                  {last_hero.last_name}{" "}
                                                  {last_hero.first_name}
                                                </a>
                                              </Link>
                                            </h2>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </>
                            ) : (
                              "load..."
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default function Hero({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Content />
    </SWRConfig>
  );
}
