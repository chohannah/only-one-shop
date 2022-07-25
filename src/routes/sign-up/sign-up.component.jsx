import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignUp = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <section className="sign-up">
      <SignUpForm />

      <div className="sign-up-divider">
        <span className="text">or</span>
      </div>

      <div className="sign-up-google">
        <button className="sign-up-button" onClick={logGoogleUser}>
          Continue with Google
        </button>
      </div>
    </section>
  );
};

export default SignUp;
