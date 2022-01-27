import styles from "./Login.module.css";

const { Kakao } = window;

function Login() {
  const LoginWithKakao = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        console.log(JSON.stringify(authObj));
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };
  return (
    <button
      id="custom-login-btn"
      onClick={LoginWithKakao}
      className={styles.btn}
    >
      <img
        src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
        height="60"
        width="222"
        alt="카카오 로그인 버튼"
      />
    </button>
  );
}

export default Login;
