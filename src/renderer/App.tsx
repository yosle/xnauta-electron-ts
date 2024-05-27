/* eslint-disable no-console */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import type React from 'react';
// import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleClick = () => {
    window.electron.ipcRenderer.sendMessage('ipc-example', ['ping', 'otro']);
    window.electronStore.set('foo', 'bar');
    // or
    console.log(window.electronStore.get('foo'));
  };

  return (
    <div className="container">
      <div id="login_section">
        <h1>X Nauta 0.1</h1>
        <input
          type="text"
          placeholder="...@nauta.com.cu"
          id="user"
          value={user}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setUser(e.currentTarget.value)
          }
          className="name-input"
        />
        <br />
        <input
          type="password"
          id="password"
          className="password-input"
          value={pass}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setPass(e.currentTarget.value)
          }
        />
        <br />
        <div
          style={{
            alignContent: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button type="button" onClick={handleClick}>
            <span role="img" aria-label="folded hands" style={{ padding: 4 }}>
              🔑
            </span>
            Iniciar Sesion
          </button>
        </div>
        <br />
        <a href="#container">Abrir portal Nauta</a>
      </div>
      <div className="divider" />
      <div id="history_section">
        <div style={{ maxWidth: 200 }}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            cumque cum officiis incidunt necessitatibus odio voluptatum possimus
            ipsa, sapiente ducimus ut iusto eveniet doloremque, nisi sint
            commodi quasi quae totam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
