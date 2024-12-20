import React, { useState } from "react";
import "./LoginPage.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <div className="hero-section">
        <p className="welcome-message">
          StudNet ברוכים הבאים לאתר שלנו 
        </p>

        <p className="tagline">
          האתר שסטודנט צריך <br />
          מבני נתונים ואלגוריתמים
        </p>

        <img
          className="logo"
          alt="לוגו של StudNet"
          src="https://c.animaapp.com/FNZyYIxm/img/codesquid-logo-1@2x.png"
        />

        <img
          className="hero-image"
          alt="אילוסטרציה"
          src="https://c.animaapp.com/FNZyYIxm/img/illustration-1@2x.png"
        />
      </div>

      <p className="signup-prompt">
        <span className="text">אין לך חשבון? </span>
        <span className="signup-link">הרשמה</span>
      </p>

      <div className="login-form-container">
        <div className="input-fields">
          <div className="input-field-group">
            <div className="username-input-container">
              <img
                className="input-line"
                alt="קווים"
                src="https://c.animaapp.com/FNZyYIxm/img/line-2.svg"
              />

              <div className="input-label">
                <div className="username-label">שם משתמש</div>
              </div>

              <input
                className="input-field"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="הכנס את שם המשתמש שלך"
                aria-label="שם משתמש"
              />
            </div>

            <div className="password-input-container">
              <img
                className="input-line"
                alt="קווים"
                src="https://c.animaapp.com/FNZyYIxm/img/line-3.svg"
              />

              <div className="input-label">
                <div className="password-label">סיסמה</div>
              </div>

              <input
                className="input-field"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="הכנס את הסיסמה שלך"
                aria-label="סיסמה"
              />
            </div>
          </div>

          <div className="remember-me-container">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox" />
              <div className="terms-text">זכור אותי</div>
            </label>
          </div>

          <div className="login-button-container">
            <button type="submit" className="login-button-wrapper">
              <div className="login-button-text">התחברות</div>
            </button>
          </div>
        </div>
      </div>

      <p className="community-welcome">
      ברוכים הבאים לאתר שלנו<br></br> StudNet
      </p>

      <div className="social-login-buttons">
        <div className="social-login-button google-login-button">
          <div className="social-login-content">
            <div className="social-login-text-container">
              <div className="google-signup-text">התחבר עם Google</div>
              <img
                className="social-login-icon"
                alt="Google"
                src="https://c.animaapp.com/FNZyYIxm/img/icons8-google-1@2x.png"
              />
            </div>
          </div>
        </div>

        <div className="social-login-button github-login-button">
          <div className="social-login-content">
            <div className="social-login-text-container">
              <div className="github-signup-text">התחבר עם Github</div>
              <img
                className="social-login-icon"
                alt="GitHub"
                src="https://c.animaapp.com/FNZyYIxm/img/shape-1.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="chat-icon-container">
        <div className="chat-wrapper">
          <img
            className="chat-icon"
            alt="שיחת צ'אט"
            src="https://c.animaapp.com/FNZyYIxm/img/chat-1@2x.png"
          />
        </div>
      </div>

      <img className="extra-icon" alt="צורת סימן חדש" src="/img/new-shape.svg" />

      <img
        className="tick-box-icon"
        alt="סמל סימון"
        src="https://c.animaapp.com/FNZyYIxm/img/tick-box-icon-1@2x.png"
      />
    </div>
  );
};
