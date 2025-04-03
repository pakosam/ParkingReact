import "./SignIn.css";

export const SignIn = () => {
  return (
    <>
      <div id="SignIn">
        <div className="main-content">
          <div className="parking-project-div">
            <h3 className="parking-project-text">PARKING PROJECT</h3>
          </div>
          <div className="info">
            <h4>SIGN IN</h4>
            <div className="info-sentence">
              <span>Enter your credentials to access your account</span>
            </div>
          </div>
          <div className="form-div">
            <form>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                required
              />

              <label htmlFor="psw">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="psw"
                required
              />

              <button type="submit" className="signinbtn">
                SIGN IN
              </button>
            </form>
          </div>
          <div className="psw-opt">
            <span className="question">Forgot your password?<span className="action">Reset password</span></span>
          </div>
        </div>
      </div>
    </>
  );
};
