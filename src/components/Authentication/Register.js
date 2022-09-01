import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../utilltes/Loading";
import ValidationError from "../utilltes/error";
import { register } from "../Redux/features/userAction";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string().required().min(3).max(15),
  email: Yup.string()
    .email("That doesn't look like a valid email")
    .required("This field is required."),
  address: Yup.string().required().min(10).max(100),
  password: Yup.string().required("Password is required"),
  confirmpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

function Registerpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password, address));
  };

  return (
    <div className="bg-zinc-100">
      <div class="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
        <div class="flex items-center mb-6 text-2xl font-semibold text-gray-900 md:pt-20">
          <div className="flex justify-center">
            <img
              class="w-1/12   mr-2"
              src="https://athulyahomecare.com/lp/images/care.png"
              alt="logo"
            />
          </div>
        </div>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8 flex justify-center">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-sky-700 md:text-2xl font-serif ">
              Login In To Your Account
            </h1>
            <div>
              {error && <ValidationError message={error} />}
              {message && <ValidationError message={message} />}
              {loading && <Loading />}
            </div>
          </div>

          <Formik
            initialValues={{
              name: "",
              email: "",
              address: "",
              password: "",
              confirmpassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form
                class="space-y-4 md:space-y-6 px-8"
                onSubmit={submitHandler}
              >
                <div class="relative z-0 mb-6 w-full group">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <Field
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="name"
                    name="name"
                    id="name"
                    class="w-full text-lg py-2 border-b-2  border-spacing-2 border-sky-800 focus:outline-none focus:border-pink-500"
                    placeholder="Enter Your Name"
                  />
                  {errors.name && touched.name ? (
                    <p className="text-pink-500 font-Poppins font-semibold">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div class="relative z-0 mb-6 w-full group">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email address
                  </label>
                  <Field
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    class="w-full text-lg py-2 border-b-2  border-spacing-2 border-sky-800 focus:outline-none focus:border-pink-500"
                    placeholder="Enter Your Email "
                    required
                  />
                  {errors.email && touched.email ? (
                    <p className="text-pink-500 font-Poppins font-semibold">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                <div class="relative z-0 mb-6 w-full group">
                  <label
                    for="address"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Address
                  </label>
                  <Field
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    name="address"
                    id="address"
                    class="w-full text-lg py-2 border-b-2 border-spacing-2 border-sky-800 focus:outline-none focus:border-pink-500"
                    placeholder="Enter Your  Address "
                    required
                  />
                  {errors.address && touched.address ? (
                    <p className="text-pink-500 font-Poppins font-semibold">
                      {errors.address}
                    </p>
                  ) : null}
                </div>

                <div class="relative z-0 mb-6 w-full group">
                  <label
                    for=" confirmpassword"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <Field
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    class="w-full text-lg py-2 border-b-2 border-spacing-2 border-sky-800 focus:outline-none focus:border-pink-500"
                    placeholder="******** "
                    required
                  />
                  {errors.password && touched.password ? (
                    <p className="text-pink-500 font-Poppins font-semibold">
                      {errors.number}
                    </p>
                  ) : null}
                </div>
                <div class="relative z-0 mb-6 w-full group">
                  <label
                    for=" confirmpassword"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Confirm Password
                  </label>
                  <Field
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    name=" confirmpassword"
                    id="confirmpassword"
                    class="w-full text-lg py-2 border-b-2 border-spacing-2 border-sky-800 focus:outline-none focus:border-pink-500"
                    placeholder="******* "
                    required
                  />
                  {errors.confirmpassword && touched.confirmpassword ? (
                    <p className="text-pink-500 font-Poppins font-semibold">
                      {errors.confirmpassword}
                    </p>
                  ) : null}
                </div>
                <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 "
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    class="ml-2 text-sm font-medium text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="">
                  <button
                    type="submit"
                    class="w-full text-center py-3 rounded bg-sky-700 hover:bg-sky-800 text-white hover:bg-green-dark focus:outline-none my-1"
                  >
                    Create Account
                  </button>
                </div>
                <div class="text-grey-dark mt-6">
                  Already have an account?  Have an Account ?
                  <Link to="/login">
                    {" "}
                    <button className=" font-medium text-primary-600 hover:underline">
                      Login
                    </button>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Registerpage;
