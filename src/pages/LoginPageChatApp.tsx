import { FunctionComponent } from "react";
import "./LoginPageChatApp.css";
const LoginPageChatApp: FunctionComponent = () => {
  return (
    <div className="loginpagechatapp">
      <div className="loginpagechatapp-inner">
        <div className="page-wrapper">
          <div className="page">
            <div className="frame-parent16">
              <div className="frame-parent17">
                <div />
                <div className="ellipse-parent">
                  <div className="ellipse-div" />
                  <div className="sign-in-to-chat-parent">
                    <div className="sign-in-to-container">
                      <p className="sign-in-to">Sign In to</p>
                      <p className="sign-in-to">Chat</p>
                    </div>
                    <div className="if-you-dont-container">
                      <p className="sign-in-to">If you don’t an account</p>
                      <p className="sign-in-to">
                        <span>{`you can `}</span>
                        <span className="register-here">register here</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent18">
                <div className="frame-parent19">
                  <div className="english-parent">
                    <div className="sign-in-to-container">English</div>
                    <img className="vector-icon2" alt="" src="/vector2.svg" />
                  </div>
                  <div className="sign-in-parent">
                    <div className="sign-in">Sign In</div>
                    <div className="group-child" />
                  </div>
                  <div className="rectangle-parent">
                    <div className="group-item" />
                    <div className="register">Register</div>
                  </div>
                </div>
                <div className="frame-parent20">
                  <div className="frame-parent21">
                    <div className="rectangle-container">
                      <input
                        className="rectangle-input"
                        type="text"
                        placeholder="Enter Email"
                        maxLength
                        minLength
                      />
                    </div>
                    <div className="rectangle-frame">
                      <input
                        className="frame-child12"
                        type="text"
                        placeholder="Password"
                        maxLength
                        minLength
                      />
                    </div>
                    <div className="recover-password">Recover Password?</div>
                  </div>
                  <div className="sign-in-wrapper">
                    <b className="or-continue-with">Sign In</b>
                  </div>
                  <div className="vector-parent">
                    <img className="frame-child13" alt="" src="/vector-1.svg" />
                    <div className="or-continue-with">Or continue with</div>
                    <img className="frame-child13" alt="" src="/vector-2.svg" />
                  </div>
                  <div className="frame-parent22">
                    <div className="rectangle-group">
                      <div className="frame-child15" />
                      <img
                        className="logosgoogle-icon"
                        alt=""
                        src="/logosgoogleicon.svg"
                      />
                    </div>
                    <div className="rectangle-group">
                      <div className="frame-child16" />
                      <img className="vector-icon3" alt="" src="/vector3.svg" />
                    </div>
                    <div className="rectangle-group">
                      <div className="frame-child15" />
                      <img className="vector-icon4" alt="" src="/vector4.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageChatApp;
