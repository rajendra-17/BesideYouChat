import styles from "../../../styles/SignIn.module.css";
import SignInButton from "../../../components/SignInButton";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { signOut } from "next-auth/react";
import Header from "../../../components/Header";

async function SignIn() {
  const providers = authOptions.providers;
  // TODO: redirect to home page if already logged in
  // do this when advanced routing is implemented
  return (
    <>
      <Header />
      <main className={styles.main}>
        {Object.values(providers!).map((provider) => {
          return (
            <div key={provider.id} className={styles.provider}>
              <h3>
                <img
                  className={styles.logo}
                  src="/google.png"
                  alt="google logo"
                />
                &nbsp;&nbsp;{`Sign in with ${provider.name}`}
              </h3>
              <SignInButton
                className={styles.authbtn}
                providerId={provider.id}
              />
            </div>
          );
        })}
      </main>
    </>
  );
}

export default SignIn;
