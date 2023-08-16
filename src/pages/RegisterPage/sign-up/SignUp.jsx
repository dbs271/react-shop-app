import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/form/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebase";
import { setUsers } from "../../../store/user/user.slice";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const dispatch = useDispatch();

  const auth = getAuth(app);

  const handleSignUpAndLogin = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          setUsers({
            email: userCredential.user.email,
            token: userCredential.user.refreshToken,
            id: userCredential.user.uid,
          })
        );
        navigate("/");
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
      title={"가입하기"}
      getDataForm={handleSignUpAndLogin}
      firebaseError={firebaseError}
    />
  );
};

export default SignUp;
