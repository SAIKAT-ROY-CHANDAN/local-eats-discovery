import { Field, Formik } from "formik";
import { GrGoogle } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignInForm = ({ handledUserCreation, handleGoogleLogin }) => {
  return (
    <div className="flex items-center w-full justify-center font-roboto">
      <div className="bg-[#3D83D9] bg-opacity-70 p-8 w-3/12 rounded-md">
        <div className="mb-5 flex flex-col gap-3 items-start text-white">
          <div className="flex justify-between items-center w-full mb-5">
            <h1 className="font-bold text-2xl">Log in</h1>
            <button className="border border-white w-10 flex justify-center items-center h-10 rounded-full">
              <IoClose size={28} />
            </button>
          </div>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="border gap-3 flex items-center text-white justify-center mb-5 w-full border-gray-300 bg-transparent rounded-md py-3 px-4 focus:outline-none"
        >
          <GrGoogle size={24} />
          <h1 className="font-bold text-xl">Log in with Google</h1>
        </button>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handledUserCreation}
        >
          {({ errors, touched, handleSubmit, isSubmitting }) => (
            <div className="">
              <div className="">
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <div className="mb-5 flex flex-col gap-3 items-start text-white">
                    <h1 className="font-bold text-xl">Email</h1>
                    <Field
                      className="border w-full border-gray-300 bg-transparent rounded-md py-4 px-4 focus:outline-none focus:border-white"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                  {errors.email && touched.email && errors.email}
                  <div className="mb-5 flex flex-col gap-3 items-start text-white">
                    <h1 className="font-bold text-xl text-white">Password</h1>
                    <Field
                      className="border w-full border-gray-300 bg-transparent rounded-md py-4 px-4 focus:outline-none focus:border-white"
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                    />
                  </div>
                  {errors.password && touched.password && errors.password}
                  <button
                    className="bg-[#0286F7] rounded-md text-white py-4 font-bold text-xl"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Log in
                  </button>
                </form>
                <div className="border-[1px] border-white mt-5 mb-5"></div>
                <h1 className="font-semibold text-2xl text-center text-white mb-5">
                  Don’t have an account?
                </h1>
                <Link
                  to="/sign-up"
                  className="font-semibold text-2xl font-roboto flex justify-center items-center text-[#0286F7]"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignInForm;
