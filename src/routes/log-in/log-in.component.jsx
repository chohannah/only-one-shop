import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import LogInForm from "../../components/log-in-form/log-in-form.component";

const LogIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <section className="log-in">
      <LogInForm />

      <div className="log-in-divider">
        <span className="text">or</span>
      </div>

      <div className="log-in-google">
        <button className="log-in-button" onClick={logGoogleUser}>
          Continue with Google
        </button>
      </div>
    </section>
  );
};

export default LogIn;
