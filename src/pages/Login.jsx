import React, { useState } from 'react';

// Login page with toggleable Login/Register forms using local state.
// Forms are controlled; submit handlers are no-ops (client-side only, no backend).
function Login() {
  // 'mode' selects which form is visible: 'login' or 'register'
  const [mode, setMode] = useState('login');
  // Controlled inputs for each form
  const [login, setLogin] = useState({ username: '', password: '' });
  const [register, setRegister] = useState({ username: '', email: '', password: '' });

  return (
    // Centered auth card over a subtle gradient background
    <section
      className="login-page"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #1f1f3b, #3a3a5d)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        boxSizing: 'border-box',
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          padding: '40px 30px',
          borderRadius: 12,
          boxShadow: '0 0 15px rgba(0,0,0,0.3)',
          width: '100%',
          maxWidth: 420,
          color: '#fff',
        }}
      >
        {/* Toggle between Login and Register forms via `mode` */}
        {mode === 'login' ? (
          <form id="login-form" onSubmit={(e) => e.preventDefault()}>
            <h2 style={{ textAlign: 'center', marginBottom: 25, fontSize: 28 }}>Login</h2>
            <div className="form-group" style={{ marginBottom: 18 }}>
              <label htmlFor="login-username" style={{ display: 'block', marginBottom: 6, fontWeight: 'bold' }}>
                Username
              </label>
              <input
                type="text"
                id="login-username"
                name="username"
                placeholder="Enter username"
                required
                value={login.username}
                onChange={(e) => setLogin({ ...login, username: e.target.value })}
                style={{ width: '100%', padding: 12, borderRadius: 8, border: 'none', outline: 'none' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: 18 }}>
              <label htmlFor="login-password" style={{ display: 'block', marginBottom: 6, fontWeight: 'bold' }}>
                Password
              </label>
              <input
                type="password"
                id="login-password"
                name="password"
                placeholder="Enter password"
                required
                value={login.password}
                onChange={(e) => setLogin({ ...login, password: e.target.value })}
                style={{ width: '100%', padding: 12, borderRadius: 8, border: 'none', outline: 'none' }}
              />
            </div>
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: '#e63946',
                border: 'none',
                color: '#fff',
                padding: 12,
                width: '100%',
                borderRadius: 30,
                fontSize: 16,
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                marginTop: 10,
              }}
            >
              LOGIN
            </button>
            <div className="toggle-link" style={{ textAlign: 'center', marginTop: 15, fontSize: 14 }}>
              Don't have an account?{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMode('register');
                }}
                style={{ color: '#e63946', textDecoration: 'none', fontWeight: 'bold' }}
              >
                Register here
              </a>
            </div>
          </form>
        ) : (
          <form id="register-form" onSubmit={(e) => e.preventDefault()}>
            <h2 style={{ textAlign: 'center', marginBottom: 25, fontSize: 28 }}>Register</h2>
            <div className="form-group" style={{ marginBottom: 18 }}>
              <label htmlFor="register-username" style={{ display: 'block', marginBottom: 6, fontWeight: 'bold' }}>
                Username
              </label>
              <input
                type="text"
                id="register-username"
                name="username"
                placeholder="Choose a username"
                required
                value={register.username}
                onChange={(e) => setRegister({ ...register, username: e.target.value })}
                style={{ width: '100%', padding: 12, borderRadius: 8, border: 'none', outline: 'none' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: 18 }}>
              <label htmlFor="register-email" style={{ display: 'block', marginBottom: 6, fontWeight: 'bold' }}>
                Email
              </label>
              <input
                type="email"
                id="register-email"
                name="email"
                placeholder="Enter your email"
                required
                value={register.email}
                onChange={(e) => setRegister({ ...register, email: e.target.value })}
                style={{ width: '100%', padding: 12, borderRadius: 8, border: 'none', outline: 'none' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: 18 }}>
              <label htmlFor="register-password" style={{ display: 'block', marginBottom: 6, fontWeight: 'bold' }}>
                Password
              </label>
              <input
                type="password"
                id="register-password"
                name="password"
                placeholder="Choose a password"
                required
                value={register.password}
                onChange={(e) => setRegister({ ...register, password: e.target.value })}
                style={{ width: '100%', padding: 12, borderRadius: 8, border: 'none', outline: 'none' }}
              />
            </div>
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: '#e63946',
                border: 'none',
                color: '#fff',
                padding: 12,
                width: '100%',
                borderRadius: 30,
                fontSize: 16,
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                marginTop: 10,
              }}
            >
              REGISTER
            </button>
            <div className="toggle-link" style={{ textAlign: 'center', marginTop: 15, fontSize: 14 }}>
              Already have an account?{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMode('login');
                }}
                style={{ color: '#e63946', textDecoration: 'none', fontWeight: 'bold' }}
              >
                Login here
              </a>
            </div>
          </form>
        )}

        <div className="footer" style={{ textAlign: 'center', marginTop: 20, fontSize: 12, color: '#ccc' }}>
          © 2025 Autofix. All rights reserved.
        </div>
      </div>
    </section>
  );
}

export default Login;

