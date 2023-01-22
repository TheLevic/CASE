function RegisterForm() {
  return (
    <>
      <div className="container">
        <form>
          <h1 className="title">Register</h1>
          <input
            className="login-input"
            type="email"
            placeholder="Enter email"
          />
          <input
            className="login-input"
            type="text"
            placeholder="Create Username"
          />
          <input
            className="login-input"
            type="password"
            placeholder="Enter password"
          />
          <button className="login-button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
