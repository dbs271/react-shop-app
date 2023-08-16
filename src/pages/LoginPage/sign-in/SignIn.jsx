import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/form/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebase";

const SignIn = () => {
  const navegate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");

  const auth = getAuth(app);
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        navegate("/");
      })
      .catch((error) => {
        return (
          error &&
          setFirebaseError("이메일 또는 비밀번호를 잘못 입력하였습니다.")
        );
      });
  };
  return (
    <Form
      title={"로그인"}
      getDataForm={handleLogin}
      firebaseError={firebaseError}
    />
  );
};

export default SignIn;
