import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext.jsx";
import { schema } from "./schema";
import Header from "../../components/Header.jsx";
const LoginForm = () => {
  const { user, signUser } = useContext(UserContext);
  const navigate = useNavigate();

  // useEffect(() => {
  // if (user) {
  // navigate("/coins");
  // }
  // }, [user]);

  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    // form validayonlarını tanıtma
    validationSchema: schema,
    onSubmit: async (values, actions) => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      // kullanıcıyı kaydeder
      signUser(values);
      // formu temizler
      actions.resetForm();

      navigate("/coins");
    },
  });
  console.log(formik);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="logo">
          <img
            src="https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png"
            alt=""
            style={{ height: "100px" }}
          />
          <h2 className="text-warning">CoinMania</h2>
        </div>
        <form onSubmit={formik.handleSubmit} className="form">
          <label htmlFor="">Email</label>
          <input
            type="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={
              formik.errors.email && formik.touched.email && "input-error"
            }
          />
          {formik.errors.email && formik.touched.email && (
            <p className="error">{formik.errors.email} </p>
          )}
          <label htmlFor="">Yaş</label>
          <input
            type="number"
            id="age"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
            className={formik.errors.age && formik.touched.age && "input-error"}
          />
          {formik.errors.age && formik.touched.age && (
            <p className="error">{formik.errors.age} </p>
          )}

          <label htmlFor="">Şifre</label>
          <input
            type="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={
              formik.errors.password && formik.touched.password && "input-error"
            }
          />
          {formik.errors.password && formik.touched.password && (
            <p className="error">{formik.errors.password} </p>
          )}

          <label htmlFor="">Şifre Tekrar</label>
          <input
            type="password"
            id="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className={
              formik.errors.confirmPassword &&
              formik.touched.confirmPassword &&
              "input-error"
            }
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <p className="error">{formik.errors.confirmPassword} </p>
          )}

          <div className="check">
            <input
              type="checkbox"
              id="terms"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.confirmPassword &&
                formik.touched.confirmPassword &&
                "input-error"
              }
            />
            {formik.errors.terms && formik.touched.terms && (
              <p className="error">{formik.errors.terms} </p>
            )}

            <label htmlFor="">Okudum ve onaylıyorum</label>
          </div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="btn text-white bg-black mt-3 p-2">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
