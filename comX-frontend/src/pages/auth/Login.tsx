import Background from "@/components/canvas/auth/Background";
import LoginForm from "@/components/example/login-form";

const Login = () => {
  return (
    <>
      <Background />
      <div className="no-scrollbar relative flex justify-center p-6 sm:items-center h-screen overflow-y-scroll">
        <LoginForm/>
      </div>
    </>
  );
};

export default Login;
