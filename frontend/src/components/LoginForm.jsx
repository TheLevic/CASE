import "./css/login.css";

function LoginForm() {
  let handleSubmit = () => {
    console.log("Hello");
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1 className="title">Login</h1>
          <input
            className="login-input"
            type="email"
            placeholder="Enter email"
          />
          <input
            type="password"
            className="login-input"
            placeholder="Enter password"
          />
          <button className="login-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
