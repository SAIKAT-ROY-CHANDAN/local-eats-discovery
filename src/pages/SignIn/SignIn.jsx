import { Link, useNavigate } from "react-router-dom";
import SignInForm from "./SignInForm";
import bgImage from "/src/assets/background.png";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";
import { useContext } from "react";

const SignIn = () => {
  const { loginWithEmail, googleLogin, user } = useContext(AuthContext);

  console.log(user);

  const navigate = useNavigate();

  const handledUserCreation = async (values, { setSubmitting }) => {
    try {
      const loginResponse = await loginWithEmail(values.email, values.password);
      if (loginResponse) {
        setSubmitting(false);
        navigate("/");
      } else {
        console.log("Login Failed");
      }
    } catch (error) {
      console.log(error.message, error.code);
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await googleLogin(); // Await googleLogin() call
      console.log(userCredential);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})`, height: "100vh" }}
      className=" bg-no-repeat bg-cover
    "
    >
      <div className="flex gap-2 justify-end pt-6 pr-10">
        <Link
          to="/sign-up"
          className="bg-white duration-300 hover:bg-[#3D83D9] hover:text-white hover:scale-95 hover:trans w-28 py-3 px-[2px] text-[#3D83D9] rounded-2xl font-bold text-center"
        >
          <button>Sign Up</button>
        </Link>
        <Link
          to="/sign-in"
          className="bg-[#3D83D9] hover:bg-white hover:text-[#3D83D9] hover:scale-95 duration-300 w-28 py-3 px-[2px] text-white rounded-2xl font-bold text-center"
        >
          <button>Sign In</button>
        </Link>
      </div>
      <SignInForm
        handledUserCreation={handledUserCreation}
        handleGoogleLogin={handleGoogleLogin}
      />
    </div>
  );
};

export default SignIn;
