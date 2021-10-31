import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [hide, setHide] = useState(true);
  const router = useRouter();

  return (
    <header
      id="section-header"
      className="header moto-section"
      data-widget="section"
      data-container="section"
    >
      <div
        className="moto-widget moto-widget-block moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
        data-widget="block"
        data-spacing="aaaa"
        data-bg-position="top"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="moto-cell col-sm-12" data-container="container">
              <div
                className="moto-widget moto-widget-container moto-container_header_5b2be2f12"
                data-widget="container"
                data-container="container"
                data-moto-sticky="{}"
                data-css-name="moto-container_header_5b2be2f12"
                data-bg-position="left top"
              >
                <div
                  className="moto-widget moto-widget-row row-fixed moto-justify-content_center moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                  data-grid-type="sm"
                  data-widget="row"
                  data-spacing="sasa"
                  data-bg-position="left top"
                >
                  <div className="container-fluid">
                    <div className="row" data-container="container">
                      <div
                        className="moto-widget moto-widget-row__column moto-cell col-sm-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                        data-widget="row.column"
                        data-container="container"
                        data-spacing="aaaa"
                        data-bg-position="left top"
                      >
                        <div
                          className="moto-widget moto-widget-row moto-justify-content_center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                          data-grid-type="xs"
                          data-widget="row"
                          data-spacing="aaaa"
                          data-bg-position="left top"
                        >
                          <div className="container-fluid">
                            <div className="row" data-container="container">
                              <div
                                className="moto-widget moto-widget-row__column moto-cell col-xs-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                data-widget="row.column"
                                data-container="container"
                                data-spacing="aaaa"
                                data-bg-position="left top"
                              >
                                <div
                                  data-widget-id="wid_1529602801_7tb5r8qky"
                                  className="moto-widget moto-widget-image moto-preset-default  moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                                  data-widget="image"
                                >
                                  <Link href={`/`}>
                                    <a
                                      data-action="page"
                                      className="moto-widget-image-link moto-link"
                                    >
                                      <Image
                                        className="moto-widget-image-picture lazyload"
                                        width={50}
                                        height={50}
                                        src="/static/img/logos/logo_ngpu.png"
                                        title=""
                                        alt=""
                                      />
                                    </a>
                                  </Link>
                                </div>
                              </div>
                              <div
                                className="moto-widget moto-widget-row__column moto-cell col-xs-9 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                                    <p className="moto-text_system_1">
                                      <Link href={`/`}>
                                        <a
                                          data-action="page"
                                          data-id="1"
                                          className="moto-link"
                                        >
                                          НГПУ
                                        </a>
                                      </Link>
                                    </p>
                                    <p className="moto-text_system_2">
                                      <Link href={`/`}>
                                        <a
                                          data-action="page"
                                          data-id="1"
                                          className="moto-link"
                                        >
                                          Музей славы
                                        </a>
                                      </Link>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="moto-widget moto-widget-row__column moto-cell col-sm-7 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                        data-widget="row.column"
                        data-container="container"
                        data-spacing="aaaa"
                        data-bg-position="left top"
                      >
                        <div
                          data-widget-id="wid_1529602801_j3l88byty"
                          className={`moto-widget moto-widget-menu moto-preset-3 moto-align-center moto-align-center_mobile-h moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto ${
                            !hide && "moto-widget-menu-mobile-open"
                          }`}
                          data-preset="3"
                          data-widget="menu"
                        >
                          <a
                            className="moto-widget-menu-toggle-btn"
                            role="button"
                            onClick={() => setHide(!hide)}
                          >
                            <i className="moto-widget-menu-toggle-btn-icon fa fa-bars"></i>
                          </a>
                          <ul className="moto-widget-menu-list moto-widget-menu-list_horizontal">
                            <li className="moto-widget-menu-item">
                              <Link href={`/`}>
                                <a
                                  data-action="page"
                                  className={`moto-widget-menu-link moto-widget-menu-link-level-1 ${
                                    router.pathname === "/" &&
                                    "moto-widget-menu-link-active"
                                  } moto-link`}
                                >
                                  Главная
                                </a>
                              </Link>
                            </li>
                            <li className="moto-widget-menu-item">
                              <Link href={`/heroes`}>
                                <a
                                  className={`moto-widget-menu-link moto-widget-menu-link-level-1 ${
                                    router.pathname === "/heroes" &&
                                    "moto-widget-menu-link-active"
                                  } moto-link`}
                                >
                                  Герои
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="moto-widget moto-widget-row__column moto-cell col-sm-2 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                        data-widget="row.column"
                        data-container="container"
                        data-spacing="aaaa"
                        data-bg-position="left top"
                      >
                        <div
                          data-widget-id="wid_1529602801_tnhjzs2ex"
                          className="moto-widget moto-widget-button moto-preset-4 moto-preset-provider-default moto-align-right moto-align-right_tablet moto-align-center_mobile-h moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                          data-widget="button"
                        >
                          <Link href={`/add-hero`}>
                            <a className="moto-widget-button-link moto-size-medium moto-link">
                              <span className="fa moto-widget-theme-icon"></span>{" "}
                              <span className="moto-widget-button-label">
                                Увековечить
                              </span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="moto-widget moto-widget-row moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                data-grid-type="sm"
                data-widget="row"
                data-spacing="aaaa"
                data-bg-position="left top"
              >
                <div className="container-fluid">
                  <div className="row" data-container="container">
                    <div
                      className="moto-widget moto-widget-row__column moto-cell col-sm-12 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-widget="row.column"
                      data-container="container"
                      data-spacing="aaaa"
                      data-bg-position="left top"
                    >
                      <div
                        data-widget-id="wid_1529602801_rm8sn248q"
                        className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_desktop"
                        data-widget="spacer"
                        data-preset="default"
                        data-spacing="saaa"
                        data-visible-on="desktop"
                      >
                        <div
                          className="moto-widget-spacer-block"
                          style={{ height: "5px" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
