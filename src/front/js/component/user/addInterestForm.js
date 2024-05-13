import React, { useContext, useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

import { Context } from "../../store/appContext";

export const AddInterestForm = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(store.user);
  // const {
  //   values,
  //   errors,
  //   touched,
  //   isSubmitting,
  //   handleBlur,
  //   handleChange,
  //   handleSubmit,
  //   setFieldValue,
  //   resetForm,
  // } = useFormik({
  //   initialValues: store.user,
  //   //validationSchema: postDealSchema,
  //   onSubmit: (values) => {
  //     actions.updateUserDetails(values);
  //     setClicked("");
  //     // onValuesChange(values);
  //     console.log("values", values);
  //     console.log("Saved successufully", store.user);
  //   },
  // });

  const [newUserData, setNewUserData] = useState({
    username: "",
    imageUrl: "",
    steamUsername: "",
    twitchUsername: "",
    newInterest: "",
  });
  const [newInterest, setNewInterest] = useState("");
  const [clicked, setClicked] = useState("");

  useEffect(() => {
    setUser(store.user);
    setNewUserData(store.user.username);
    if (store.user.image_url !== null) {
      setNewUserData({ ...newUserData, imageUrl: store.user.image_url });
    }
  }, []);

  useEffect(() => {
    setUser(store.user);
  }, [store.user]);

  function updateItem(e, newItem, itemType) {
    e.preventDefault();
    if (newItem && typeof newItem === "string") {
      newItem = newItem.trim();
      if (
        newItem === "" &&
        itemType !== "steam_username" &&
        itemType !== "twitch_username"
      ) {
        setUser(store.user);
        setClicked("");
      } else {
        setUser((prevState) => ({
          ...prevState,
          [itemType]: newItem,
        }));
        actions.updateItem(newItem, itemType);
      }
      setClicked("");
    }
  }

  //The interests get updated in the store but the page doesn't re-render when deleted, function in line 346
  function updateInterests(e) {
    e.preventDefault();
    actions.addInterest(newUserData.newInterest);
    setUser((prevState) => ({
      ...prevState,
      interests: [...prevState.interests, newUserData.newInterest],
    }));
    setNewUserData({ ...newUserData, newInterest: "" });
  }

  if (store.loggedIn === false) {
    navigate("/login");
  }

  if (user == {}) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {/*----------------------------Modify Interests Modal-------------------------------*/}
      <div
        className="modal fade"
        id="modifyInterestsModal"
        tabIndex="-1"
        aria-labelledby="modifyInterestsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div
            className="modal-content text-white"
            style={{ background: "#020D19" }}
          >
            <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="modifyInterestsModalLabel">
                Add interests
              </h1>
              <div className="ms-auto" data-bs-theme="dark">
                <button
                  type="button"
                  className="btn-close "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={{
                  newInterest: "",
                  interests: store.user.interests || [],
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  const updatedValues = {
                    ...values,
                    interests: [...values.interests, values.newInterest],
                    newInterest: ""
                  };
                  actions.updateUserDetails(updatedValues);
                  setSubmitting(false);
                  resetForm({ values: updatedValues });
                  console.log(store.user)
                }}
              >
                {({ isSubmitting, values, handleChange, handleBlur }) => (
                  <Form>
                    <div className="d-flex align-items-center">
                      <Field
                        className="form-control rounded-5 bg-transparent text-white mb-3"
                        type="text"
                        name="newInterest"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.newInterest}
                      />
                      <button
                        className="btn btn-effect border-0 m-3 py-0"
                        type="submit"
                        disabled={isSubmitting || !values.newInterest}
                      >
                        <i className="fa-solid fa-square-plus fs-2"></i>
                      </button>
                    </div>
                    <FieldArray name="interests">
                      {({ remove }) => (
                        <div className="d-flex flex-wrap">
                          {values.interests.map((interest, index) => (
                            <div className="mx-2" key={index}>
                              <p className="form-control rounded-5 bg-transparent text-white mb-3">
                                {interest}
                                <button
                                className="btn btn-effect-blue border-0 py-0 ms-2"
                                  type="button"
                                  onClick={() => remove(index)}
                                >
                                  <i className="fa-solid fa-trash"></i>
                                </button>
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </FieldArray>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
