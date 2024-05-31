import React from "react";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/notifications/notifications.action";
import "./Contact.styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  // validations
  const initial_state = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  // Validations
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^[0-9]+$/, "Invalid phone number")
      .required("Phone is required").min(10).max(10),
    message: Yup.string().required("Message is required"),
  });

  // Handle form submission
  const handleSubmit = (formVal) => {
    console.log("formVa12345678l", formVal);
    dispatch(
      showToast({
        type: "success",
        msg: "FormSubmitted successfuly.",
      })
    );
    setFormVal(initial_state)
  };

  const formik = useFormik({
    initialValues: initial_state,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (formik.isValid) {
        handleSubmit(values);
      }
    },
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const [formVal, setFormVal] = React.useState(initial_state);

  return (
    <div className="cm-right-col" style={{ margin: "2rem" }}>
      <h3 className="cm-section-sh">Contact Us</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="cm-form-field-half">
          <div className="cm-form-field">
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="cm-form-field">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="cm-form-field-half">
          <div className="cm-form-field">
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error">{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className="cm-form-field">
            <input
              type="text"
              name="subject"
              value={formik.values.subject}
              placeholder="Subject"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="cm-form-field">
          <textarea
            name="message"
            placeholder="Message*"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
        </div>
        <div className="cm-form-field-submit">
          <button
            type="Submit"
            className="cm-btn cm-btn-lg cm-prim-bg cm-white-col cm-uppercase"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
