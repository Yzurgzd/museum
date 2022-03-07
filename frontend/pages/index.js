import Layout from "../components/layout";
import fetcher from "../libs/fetcher";
import Image from "next/image";
import useSWR, { SWRConfig } from "swr";
import Link from "next/link";

export default function Home() {
  const { data: heroes } = useSWR(
    `${process.env.API_URL}/heroes/last/`,
    fetcher
  );

  return (
    <Layout title={`Главная`}>
      <div
        className="moto-widget moto-widget-block moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
        data-widget="block"
        data-spacing="lala"
        style={{
          backgroundImage: "url(/assets/img/bg/mt-1505-content-bg-1.jpg)",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        data-bg-image="2018/06/mt-1505-content-bg-1.jpg"
        data-bg-position="top"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="moto-cell col-sm-12" data-container="container">
              <div
                className="moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                data-grid-type="sm"
                data-widget="row"
                data-spacing="aaaa"
                data-bg-position="left top"
              >
                <div className="container-fluid">
                  <div className="row" data-container="container">
                    <div
                      className="moto-widget moto-widget-row__column moto-cell col-sm-8 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-widget="row.column"
                      data-container="container"
                      data-spacing="aaaa"
                      data-bg-position="left top"
                    >
                      <div
                        className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                        data-widget="text"
                        data-preset="default"
                        data-spacing="aasa"
                        data-animation=""
                      >
                        <div className="moto-widget-text-content moto-widget-text-editable">
                          <p className="moto-text_227">Семейные хроники</p>
                        </div>
                      </div>
                      <div
                        className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
                        data-widget="text"
                        data-preset="default"
                        data-spacing="aama"
                        data-animation=""
                      >
                        <div className="moto-widget-text-content moto-widget-text-editable">
                          <p className="moto-text_228">
                            <span className="moto-color5_5">
                              У каждого из нас есть возможность увековечить
                              своих героев, сохранив в семейных хрониках имена
                              погибших и пропавших без вести солдат.
                            </span>
                          </p>
                        </div>
                      </div>

                      <div
                        data-widget-id="wid_1529602826_nmlrbt6ld"
                        className="moto-widget moto-widget-button moto-preset-2 moto-preset-provider-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                        data-widget="button"
                      >
                        <Link href={`/add-hero`}>
                          <a className="moto-widget-button-link moto-size-medium moto-link">
                            <span className="fa moto-widget-theme-icon"></span>{" "}
                            <span className="moto-widget-button-label">
                              Увековечить память героев
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div
                      className="moto-widget moto-widget-row__column moto-cell col-sm-4 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-widget="row.column"
                      data-container="container"
                      data-spacing="aaaa"
                      data-bg-position="left top"
                    ></div>
                  </div>
                </div>
              </div>
              <div
                data-widget-id="wid_1529603545_90kf6xsnj"
                className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_desktop"
                data-widget="spacer"
                data-preset="default"
                data-spacing="maaa"
                data-visible-on="desktop"
              >
                <div
                  className="moto-widget-spacer-block"
                  style={{ height: "10px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="moto-widget moto-widget-block moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
        data-widget="block"
        data-spacing="lala"
        style={{
          backgroundImage: "url(/assets/img/bg/mt-1505-content-bg-2.jpg)",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        data-bg-position="bottom"
        data-bg-image="2018/06/mt-1505-content-bg-2.jpg"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="moto-cell col-sm-12" data-container="container">
              <div
                className="moto-widget moto-widget-row row-fixed moto-justify-content_center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                data-grid-type="sm"
                data-widget="row"
                data-spacing="aaaa"
              >
                <div className="container-fluid">
                  <div className="row" data-container="container">
                    <div
                      className="moto-widget moto-widget-row__column moto-cell col-sm-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-widget="row.column"
                      data-container="container"
                      data-spacing="aaaa"
                    >
                      <div
                        data-widget-id="wid__divider_horizontal__5b18cfa21dc72"
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
                    >
                      <div
                        className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                        data-widget="text"
                        data-preset="default"
                        data-spacing="aaaa"
                        data-animation=""
                      >
                        <div className="moto-widget-text-content moto-widget-text-editable">
                          <p className="moto-text_system_11">О ПРОЕКТЕ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                    ></div>
                    <div
                      className="moto-widget moto-widget-row__column moto-cell col-sm-7 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-widget="row.column"
                      data-container="container"
                      data-spacing="aaaa"
                      data-bg-position="left top"
                    >
                      <div
                        className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                        data-widget="text"
                        data-preset="default"
                        data-spacing="aasa"
                        data-animation=""
                      >
                        <div className="moto-widget-text-content moto-widget-text-editable">
                          <p className="moto-text_system_6">
                            Увековечить память героев!
                          </p>
                        </div>
                      </div>
                      <div
                        className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                        data-widget="text"
                        data-preset="default"
                        data-spacing="aasa"
                        data-animation=""
                      >
                        <div className="moto-widget-text-content moto-widget-text-editable">
                          <p className="moto-text_system_9">
                            Проект «Музей славы» был создан по инициативе
                            студентов историко-географического факультета.
                            Ребята в течение нескольких лет собирали информацию
                            о своих родственниках, участвовавших в Великой
                            Отечественной войне и о тружениках тыла. Материалы
                            копились, студенты выкладывали их в социальных сетях
                            своего факультета в рамках марафона #СВЯЗЬВРЕМЕН,
                            посвященного Великой Победе. Затем появилась идея
                            сделать общеуниверситетский проект, в котором смогли
                            бы принять участие все студенты, преподаватели и
                            сотрудники вуза.
                          </p>
                          <p className="moto-text_normal">&nbsp;</p>
                          <p className="moto-text_normal">
                            К реализации проекта присоединились студенты
                            факультета математики и информатики. Они создали
                            интерактивный «Музей славы» на официальном сайте
                            вуза. Каждый желающий может загрузить на страницу
                            фото и информацию о своем герое. После того как
                            модераторы проверят достоверность данных, материал
                            будет опубликован.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="moto-widget moto-widget-row__column moto-cell col-sm-4 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-widget="row.column"
                      data-container="container"
                      data-spacing="aaaa"
                      data-bg-position="left top"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="moto-widget moto-widget-block moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto moto-background-fixed"
        data-widget="block"
        data-spacing="lala"
        style={{
          backgroundImage: "url(/assets/img/bg/mt-1505-content-bg-3.jpg)",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        data-bg-position="left top"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="moto-cell col-sm-12" data-container="container">
              <div
                className="moto-widget moto-widget-row row-fixed moto-justify-content_center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                        data-widget-id="wid_1529604991_c9dya0aoy"
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
                          <p className="moto-text_system_11">
                            <span className="moto-color5_5">ЧТО МЫ ДЕЛАЕМ</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                data-grid-type="sm"
                data-widget="row"
                data-spacing="aasa"
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
                    ></div>

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
                          <p className="moto-text_system_6">
                            <span className="moto-color5_5">
                              Уважаемые посетители Музея славы!
                            </span>
                          </p>
                          <p className="moto-text_system_9">&nbsp;</p>
                          <p className="moto-text_system_9">
                            <span className="moto-color5_5">
                              Данный сервис предназначен для сохранения памяти о
                              наших дорогих защитниках, ветеранах Великой
                              Отечественной войны.
                            </span>
                          </p>
                          <p className="moto-text_system_9">
                            <span className="moto-color5_5">
                              Каждый студент, преподаватель и сотрудник
                              Набережночелнинского государственного
                              педагогического университета может здесь
                              опубликовать информацию о своих родных,
                              принимавших участие в Великой Отечественной войне!
                            </span>
                          </p>
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
      <div
        className="moto-widget moto-widget-block moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
        data-widget="block"
        data-spacing="lala"
        data-bg-position="left top"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="moto-cell col-sm-12" data-container="container">
              <div
                className="moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                    ></div>

                    <div
                      className="moto-widget moto-widget-row__column moto-cell col-sm-7 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-widget="row.column"
                      data-container="container"
                      data-spacing="aaaa"
                      data-bg-position="left top"
                    >
                      <div
                        className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                        data-widget="text"
                        data-preset="default"
                        data-spacing="aasa"
                        data-animation=""
                      >
                        <div className="moto-widget-text-content moto-widget-text-editable">
                          <p className="moto-text_system_6">
                            Память народа – это память каждого из нас
                          </p>
                          <p className="moto-text_system_9">&nbsp;</p>
                          <p className="moto-text_system_9">
                            <span className="moto-color1_3">
                              Уникальный проект «Музей славы», призванном
                              увековечить память обо всех участниках Великой
                              Отечественной войны.
                            </span>
                          </p>
                        </div>
                      </div>

                      <div
                        data-widget-id="wid_1529606213_5heo72ts6"
                        className="moto-widget moto-widget-button moto-preset-4 moto-preset-provider-default moto-align-left moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
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
          </div>
        </div>
      </div>
      <div
        className="moto-widget moto-widget-block moto-bg-color5_3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
        data-widget="block"
        data-spacing="aaaa"
        data-bg-position="center"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="moto-cell col-sm-12" data-container="container">
              <div
                className="moto-widget moto-widget-row moto-justify-content_center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                data-grid-type="sm"
                data-widget="row"
                data-spacing="aaaa"
                data-bg-position="left top"
              >
                <div className="container-fluid">
                  <div className="row" data-container="container">
                    <div
                      className="moto-widget moto-widget-row__column moto-cell col-sm-2 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      data-widget="row.column"
                      data-container="container"
                      data-spacing="aaaa"
                      data-bg-position="left top"
                    ></div>
                    <div
                      className="moto-widget moto-widget-row__column moto-cell col-sm-4 moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
                      data-widget="row.column"
                      data-container="container"
                      data-spacing="mama"
                      data-bg-position="left top"
                    >
                      <div
                        className="moto-widget moto-widget-row moto-justify-content_center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                        data-grid-type="sm"
                        data-widget="row"
                        data-spacing="aaaa"
                        data-bg-position="left top"
                      >
                        <div className="container-fluid">
                          <div className="row" data-container="container">
                            <div
                              className="moto-widget moto-widget-row__column moto-cell col-sm-2 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                              data-widget="row.column"
                              data-container="container"
                              data-spacing="aaaa"
                              data-bg-position="left top"
                            >
                              <div
                                data-widget-id="wid__divider_horizontal__5b18cfa22319b"
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
                              className="moto-widget moto-widget-row__column moto-cell col-sm-10 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                                  <p className="moto-text_system_11">ANTIGUA</p>
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
                              className="moto-widget moto-widget-row__column moto-cell col-sm-2 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                              data-widget="row.column"
                              data-container="container"
                              data-spacing="aaaa"
                              data-bg-position="left top"
                            ></div>

                            <div
                              className="moto-widget moto-widget-row__column moto-cell col-sm-9 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                                  <p className="moto-text_system_6">
                                    Археологический кружок
                                  </p>
                                  <p className="moto-text_system_9">&nbsp;</p>
                                  <p className="moto-text_230">
                                    Студенческий научный археологический кружок
                                    «Antigua» Набережночелнинского
                                    государственного педагогического
                                    университета (НГПУ) - одна из форм
                                    организации научной деятельности студентов,
                                    направленная на расширение научного
                                    потенциала и формирования опыта
                                    научно-исследовательской деятельности
                                    студентов.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              className="moto-widget moto-widget-row__column moto-cell col-sm-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                              data-widget="row.column"
                              data-container="container"
                              data-spacing="aaaa"
                              data-bg-position="left top"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="moto-widget moto-widget-row__column moto-cell col-sm-6 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                      style={{
                        backgroundImage:
                          "url(/assets/img/bg/mt-1505-content-bg-4.jpg)",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                      data-widget="row.column"
                      data-container="container"
                      data-spacing="aaaa"
                      data-bg-position="center"
                    >
                      <div
                        data-widget-id="wid_1529606436_qeekj3vlo"
                        className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto "
                        data-widget="spacer"
                        data-preset="default"
                        data-spacing="aaaa"
                        data-visible-on="mobile-v"
                      >
                        <div
                          className="moto-widget-spacer-block"
                          style={{ height: "300px" }}
                        ></div>
                      </div>
                      <div
                        data-widget-id="wid_1529606797_5s5luh0ot"
                        className="moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_desktop"
                        data-widget="spacer"
                        data-preset="default"
                        data-spacing="aaaa"
                        data-visible-on="desktop"
                      >
                        <div
                          className="moto-widget-spacer-block"
                          style={{ height: "385px" }}
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
      <div
        className="moto-widget moto-widget-block moto-spacing-top-large moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
        data-widget="block"
        data-spacing="lala"
        data-bg-position="left top"
        data-draggable-disabled=""
      >
        <div className="container-fluid">
          <div className="row">
            <div className="moto-cell col-sm-12" data-container="container">
              <div
                className="moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                        className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                        data-widget="text"
                        data-preset="default"
                        data-spacing="aaaa"
                        data-animation=""
                      >
                        <div className="moto-widget-text-content moto-widget-text-editable">
                          <p
                            className="moto-text_system_6"
                            style={{ textAlign: "center" }}
                          >
                            Наши герои
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto"
                data-grid-type="sm"
                data-widget="row"
                data-spacing="aaaa"
                data-bg-position="left top"
                data-draggable-disabled=""
              >
                <div className="container-fluid">
                  <div className="row" data-container="container">
                    {heroes ? (
                      <>
                        {heroes.map((hero) => (
                          <div
                            key={hero.id}
                            className="moto-widget moto-widget-row__column moto-cell col-sm-4 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                            data-widget="row.column"
                            data-container="container"
                            data-spacing="aaaa"
                            data-bg-position="left top"
                          >
                            <div
                              data-widget-id="wid_1529609184_b7veyosrl"
                              className="moto-widget moto-widget-image moto-preset-default moto-align-center moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  "
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
                                  layout="fill"
                                  objectFit="contain"
                                  src={hero.photo}
                                  data-id="254"
                                  title=""
                                  alt=""
                                />
                              </span>
                            </div>
                            <div
                              className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                              style={{ textAlign: "center" }}
                              data-widget="text"
                              data-preset="default"
                              data-spacing="aaaa"
                              data-animation=""
                            >
                              <div className="moto-widget-text-content moto-widget-text-editable">
                                <p className="moto-text_186">
                                  <span className="moto-color4_3">
                                    February 15, 2018
                                  </span>
                                </p>
                                <p className="moto-text_231">
                                  <Link
                                    href={`/hero/[id]`}
                                    as={`/hero/${hero.id}`}
                                  >
                                    <a className="moto-link">
                                      {hero.last_name} {hero.first_name}
                                    </a>
                                  </Link>
                                </p>
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

              {heroes && heroes.length > 5 && (
                <div
                  className="moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                  data-grid-type="sm"
                  data-widget="row"
                  data-spacing="aaaa"
                >
                  <div className="container-fluid">
                    <div
                      data-widget-id="wid_1529604808_vvembcpgl"
                      className="moto-widget moto-widget-button moto-preset-2 moto-preset-provider-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                      data-widget="button"
                    >
                      <Link href={`/heroes`}>
                        <a
                          data-action="page"
                          className="moto-widget-button-link moto-size-medium moto-link"
                        >
                          <span className="fa moto-widget-theme-icon"></span>{" "}
                          <span className="moto-widget-button-label">
                            Смотреть больше
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
