import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";

const Form = ({ title, firebaseError, getDataForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = ({ email, password }) => {
    getDataForm(email, password);
    reset();
  };

  const userEmail = {
    required: "필수 입력 사항입니다.",
    pattern: {},
  };

  const userPassword = {
    required: "필수 입력 사항입니다.",
    minLength: {
      value: 6,
      message: "6자리 이상 입력해주세요.",
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", userEmail)}
        />
        {errors?.email && (
          <div>
            <span className={styles.form_error}>{errors.email.message}</span>
          </div>
        )}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", userPassword)}
        />
        {errors?.password && (
          <div>
            <span className={styles.form_error}>{errors.password.message}</span>
          </div>
        )}
      </div>
      <button type="submit">{title}</button>
      {firebaseError && (
        <span className={styles.form_error}> {firebaseError} </span>
      )}
    </form>
  );
};

export default Form;
