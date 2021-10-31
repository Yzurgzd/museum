import Layout from "../components/layout";
import React, { useState, useEffect } from "react";
import Editor from "../components/editor";
import Image from "next/image";

export default function AddHero() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [description, setDescription] = useState("");
  const [last_name, setLastName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [middle_name, setMiddleName] = useState("");
  const [student, setStudent] = useState("");
  const [email, setEmail] = useState("");
  const [kinship, setKinship] = useState("");
  const [signature, setSignature] = useState("");
  const [photo, setPhoto] = useState(null);

  const [description_error, setDescriptionError] = useState("");
  const [photo_error, setPhotoError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photo ? photo : "");
    formData.append("last_name", last_name);
    formData.append("first_name", first_name);
    formData.append("middle_name", middle_name);
    formData.append("description", description);
    formData.append("student", student);
    formData.append("kinship", kinship);
    formData.append("email", email);
    formData.append("signature", signature);

    const res = await fetch(`${process.env.API_URL}/heroes/create/`, {
      method: "POST",
      body: formData,
    });

    if (await res.ok) {
    } else {
      const req = await res.json();
      req.description && setDescriptionError(req.description[0]);
      req.photo && setPhotoError(req.photo[0]);
    }
  }

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <Layout title={`Увековечить память героя`}>
      <div
        className="moto-widget moto-widget-block moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto"
        data-widget="block"
        data-spacing="mama"
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
                        data-widget-id="wid__divider_horizontal__5b18e5dd61ac3"
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
                          <p className="moto-text_system_11">
                            УВЕКОВЕЧИТЬ ПАМЯТЬ ГЕРОЯ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="moto-widget moto-widget-block moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto"
                data-widget="block"
                data-spacing="mala"
                data-bg-position="left top"
              >
                <div className="container-fluid">
                  <div className="row">
                    <div
                      className="moto-cell col-sm-12"
                      data-container="container"
                    >
                      <div
                        className="moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                            ></div>
                            <div
                              className="moto-widget moto-widget-row__column moto-cell col-sm-5 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
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
                                  <p className="moto-text_system_6">
                                    Добавление информации о Герое войны
                                  </p>
                                  <p className="moto-text_normal">
                                    <br />
                                  </p>
                                  <p className="moto-text_normal">
                                    Пожалуйста, внесите корректные данные. После
                                    подтверждении информации вам на Email адрес
                                    будет выслано сообщение.
                                    <br />
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="moto-widget moto-widget-row__column moto-cell col-sm-5 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                              data-widget="row.column"
                              data-container="container"
                              data-spacing="aaaa"
                            >
                              <div
                                id="wid__contact_form__5b18e5dd7a183"
                                className="moto-widget moto-widget-contact_form moto-preset-2 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  "
                                data-preset="2"
                                data-widget="contact_form"
                                data-spacing="aaaa"
                              >
                                <div
                                  ng-controller="widget.ContactForm.Controller"
                                  ng-init='hash = &apos;2@eyJoIjoidmp2eCtrVjB4THZKcEtoXC95VTlZWU54OGhTNkVWWnVObGVUbERWS0dQR0E9IiwiaSI6IjFuUW9NSXMraDRvN1ZxckF0eFFseWc9PSIsInYiOiI0OGhadmQySlF6cUx5TlFBXC9ZeGQ3SUpyekJKaWtCaG55RjJieWRBZDV5S1U1VkxCSHU3a0trbUo4SHUxSWllYVh5UHZyZng3YmxRZm5jVHRuV1ZyV0YyNXVlS1RjWTJ3YzA4a2hCRzNtOWs9In0=&apos;;actionAfterSubmission={"action":"none","url":"","target":"_self","id":""};resetAfterSubmission=false'
                                >
                                  <form
                                    id="wid__contact_form__5b18e5dd7a183__form"
                                    className="moto-widget-contact_form-form"
                                    role="form"
                                    name="contactForm"
                                    onSubmit={handleSubmit}
                                  >
                                    <div
                                      ng-show="sending"
                                      className="contact-form-loading"
                                    ></div>

                                    <div className="moto-cell col-sm-12 moto-widget-blog-recent_posts-item">
                                      <div className="moto-widget-blog-recent_posts-item__content  moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto">
                                        {photo && (
                                          <div className="moto-widget-blog-recent_posts-item-preview moto-spacing-bottom-small">
                                            <div
                                              data-widget-id="wid__image__617da7b60fae7"
                                              className="moto-widget moto-widget-image moto-preset-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  "
                                              data-widget="image"
                                              style={{
                                                position: "relative",
                                                width: "100%",
                                                height: "272px",
                                              }}
                                            >
                                              <Image
                                                className="moto-widget-image-picture lazyloaded"
                                                layout="fill"
                                                objectFit="contain"
                                                title=""
                                                alt=""
                                                src={URL.createObjectURL(photo)}
                                              />
                                            </div>
                                          </div>
                                        )}

                                        <div className="moto-widget-blog-recent_posts-item-title">
                                          <div
                                            data-widget-id="wid_1529602801_tnhjzs2ex"
                                            className="moto-widget moto-widget-button moto-preset-4 moto-preset-provider-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                                            data-widget="button"
                                          >
                                            <label
                                              htmlFor="file-upload"
                                              className="moto-widget-button-link moto-size-medium moto-link"
                                            >
                                              <span className="fa"></span>{" "}
                                              Загрузить изображение
                                            </label>
                                            <input
                                              id="file-upload"
                                              type="file"
                                              style={{
                                                display: "none",
                                              }}
                                              accept="image/*"
                                              onChange={(e) => (
                                                setPhoto(e.target.files[0]),
                                                setPhotoError("")
                                              )}
                                            />
                                          </div>
                                          {photo_error && (
                                            <span className="moto-widget-contact_form-field-error">
                                              {photo_error}
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="moto-widget-contact_form-group">
                                      <label
                                        htmlFor="field_name_wid__contact_form__5b18e5dd7a183"
                                        className="moto-widget-contact_form-label"
                                      >
                                        Фамилия ветерана
                                      </label>
                                      <input
                                        type="text"
                                        className="moto-widget-contact_form-field moto-widget-contact_form-input"
                                        placeholder="Фамилия"
                                        required
                                        name="last_name"
                                        value={last_name}
                                        onChange={(e) =>
                                          setLastName(e.target.value)
                                        }
                                        id="field_name_wid__contact_form__5b18e5dd7a183"
                                      />
                                    </div>

                                    <div className="moto-widget-contact_form-group">
                                      <label
                                        htmlFor="field_name_wid__contact_form__5b18e5dd7a183"
                                        className="moto-widget-contact_form-label"
                                      >
                                        Имя ветерана
                                      </label>
                                      <input
                                        type="text"
                                        className="moto-widget-contact_form-field moto-widget-contact_form-input"
                                        placeholder="Имя"
                                        required
                                        name="first_name"
                                        value={first_name}
                                        onChange={(e) =>
                                          setFirstName(e.target.value)
                                        }
                                        id="field_name_wid__contact_form__5b18e5dd7a183"
                                      />
                                    </div>

                                    <div className="moto-widget-contact_form-group">
                                      <label
                                        htmlFor="field_name_wid__contact_form__5b18e5dd7a183"
                                        className="moto-widget-contact_form-label"
                                      >
                                        Отчество ветерана
                                      </label>
                                      <input
                                        type="text"
                                        className="moto-widget-contact_form-field moto-widget-contact_form-input"
                                        placeholder="Отчество"
                                        name="middle_name"
                                        value={middle_name}
                                        onChange={(e) =>
                                          setMiddleName(e.target.value)
                                        }
                                        id="field_name_wid__contact_form__5b18e5dd7a183"
                                      />
                                      <span className="moto-widget-contact_form-field-error">
                                        Не обязательное поле
                                      </span>
                                    </div>

                                    <div className="moto-widget-contact_form-group">
                                      <label
                                        htmlFor="field_name_wid__contact_form__5b18e5dd7a183"
                                        className="moto-widget-contact_form-label"
                                      >
                                        Студент(ка)
                                      </label>
                                      <input
                                        type="text"
                                        className="moto-widget-contact_form-field moto-widget-contact_form-input"
                                        placeholder="Студент(ка)"
                                        required
                                        name="student"
                                        value={student}
                                        onChange={(e) =>
                                          setStudent(e.target.value)
                                        }
                                        id="field_name_wid__contact_form__5b18e5dd7a183"
                                      />
                                    </div>

                                    <div className="moto-widget-contact_form-group">
                                      <label
                                        htmlFor="field_name_wid__contact_form__5b18e5dd7a183"
                                        className="moto-widget-contact_form-label"
                                      >
                                        Ветеран приходится
                                      </label>
                                      <input
                                        type="text"
                                        className="moto-widget-contact_form-field moto-widget-contact_form-input"
                                        placeholder="Ветеран приходится"
                                        required
                                        name="kinship"
                                        value={kinship}
                                        onChange={(e) =>
                                          setKinship(e.target.value)
                                        }
                                        id="field_name_wid__contact_form__5b18e5dd7a183"
                                      />
                                    </div>

                                    <div className="moto-widget-contact_form-group">
                                      <label
                                        htmlFor="field_name_wid__contact_form__5b18e5dd7a183"
                                        className="moto-widget-contact_form-label"
                                      >
                                        Email адрес
                                      </label>
                                      <input
                                        type="text"
                                        className="moto-widget-contact_form-field moto-widget-contact_form-input"
                                        placeholder="Email адрес"
                                        required
                                        name="email"
                                        value={email}
                                        onChange={(e) =>
                                          setEmail(e.target.value)
                                        }
                                        id="field_name_wid__contact_form__5b18e5dd7a183"
                                      />
                                    </div>

                                    <div className="moto-widget-contact_form-group">
                                      <label
                                        htmlFor="field_name_wid__contact_form__5b18e5dd7a183"
                                        className="moto-widget-contact_form-label"
                                      >
                                        Подпись
                                      </label>
                                      <input
                                        type="text"
                                        className="moto-widget-contact_form-field moto-widget-contact_form-input"
                                        placeholder="Ветеран приходится"
                                        name="signature"
                                        value={signature}
                                        onChange={(e) =>
                                          setSignature(e.target.value)
                                        }
                                        id="field_name_wid__contact_form__5b18e5dd7a183"
                                      />
                                      <span className="moto-widget-contact_form-field-error">
                                        Не обязательное поле
                                      </span>
                                    </div>

                                    <div className="moto-widget-contact_form-group">
                                      <label
                                        htmlFor="field_message_wid__contact_form__5b18e5dd7a183"
                                        className="moto-widget-contact_form-label"
                                      >
                                        Message
                                      </label>
                                      <Editor
                                        name="description"
                                        onChange={(data) => {
                                          setDescription(data),
                                            setDescriptionError("");
                                        }}
                                        editorLoaded={editorLoaded}
                                      />
                                      {description_error && (
                                        <span className="moto-widget-contact_form-field-error">
                                          {description_error}
                                        </span>
                                      )}
                                    </div>

                                    <div className="moto-widget-contact_form-success ng-cloak">
                                      Your message was sent successfully
                                    </div>
                                    <div className="moto-widget-contact_form-danger ng-cloak">
                                      Sorry, your message was not sent
                                    </div>
                                    <div className="moto-widget-contact_form-buttons">
                                      <div
                                        className="moto-widget moto-widget-button moto-preset-2 moto-preset-provider-default moto-align-left"
                                        data-preset="2"
                                        data-align="left"
                                      >
                                        <button
                                          type="submit"
                                          className="moto-widget-button-link moto-size-medium"
                                          data-size="medium"
                                        >
                                          <span className="fa moto-widget-theme-icon"></span>
                                          <span className="moto-widget-button-label">
                                            Отправить
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div
                              className="moto-widget moto-widget-row__column moto-cell col-sm-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto"
                              data-widget="row.column"
                              data-container="container"
                              data-spacing="aaaa"
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
        </div>
      </div>
    </Layout>
  );
}
