import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <section className="sign-in">
      <h2 className="sign-in-header">Sign in</h2>

      <article className="sign-in-google">
        <button className="sign-in-button" onClick={logGoogleUser}>
          Sign in with Google
        </button>
      </article>
      <SignUpForm />
    </section>
  );
};

export default SignIn;
