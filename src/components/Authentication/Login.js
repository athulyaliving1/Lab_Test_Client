import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Loading from "../utilltes/Loading";
import ValidationError from "../utilltes/error";
import { login } from "../Redux/features/userAction";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      toast.success(`welcome ${userInfo.name}`);
      navigate("/home");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <div className="">
        <div className="bg-zinc-100">
          <section class="bg-zinc-100 ">
            <ToastContainer />
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                <div className="flex justify-center">
                  <img
                    class="w-1/12   mr-2"
                    src="https://athulyahomecare.com/lp/images/care.png"
                    alt="logo"
                  />
                </div>
              </div>
              <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8  ">
                  <div className="grid text-center">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-sky-700 md:text-2xl font-serif ">
                      Sign In To Your Account
                    </h1>
                  </div>

                  <div>
                    {error && <ValidationError message={error} />}
                    {loading && <Loading />}
                  </div>

                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                      // same shape as initial values
                      console.log(values);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form
                        class="space-y-4 md:space-y-6"
                        onSubmit={submitHandler}
                      >
                        <div>
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Enter Your Email
                          </label>
                          <Field
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            placeholder="Enter Your Email"
                            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                            name="email"
                          />
                          {errors.email && touched.email ? (
                            <p className="text-pink-500 font-Poppins font-semibold">
                              {errors.email}
                            </p>
                          ) : null}
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Password
                          </label>
                          <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="????????????????????????"
                            class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                            required=""
                          />
                        </div>
                        <div class="flex items-center justify-between">
                          <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                                required=""
                              />
                            </div>
                            <div class="ml-3 text-sm">
                              <label for="remember" class="text-gray-500 ">
                                Remember me
                              </label>
                            </div>
                          </div>
                          <p class="text-sm font-medium text-primary-600 hover:underline ">
                            Forgot password?
                          </p>
                        </div>
                        <button
                          type="submit"
                          class="w-full  bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white "
                        >
                          Sign in
                        </button>
                        <p class="text-sm font-light text-gray-800 ">
                          Don???t have an account yet?
                          <Link
                            to="/register"
                            class="font-medium text-primary-600 hover:underline "
                          >
                            Sign up
                          </Link>
                        </p>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Login;
