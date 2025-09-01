// src/App.jsx

import React from 'react';
import Header from './komponen/header.jsx';
import Footer from './komponen/footer.jsx';
import Profile from './komponen/profile.jsx';
import KartuSiswa from './komponen/kartusiswa.jsx';
import JamSekarang from './komponen/jamSekarang.jsx';

// Pastikan untuk mengimpor App.css di sini
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <h1>WELCOME SINAU VITE BERSAMA KAMI</h1>
          <p>By Kepo!...</p>
        </section>

        {/* Profile */}
        <Profile />

        {/* Daftar Siswa */}
        <section className="siswa-section">
          <h2>Daftar Siswa</h2>
          <div className="kartu-container">
            <KartuSiswa nama="Arga" jurusan="SIJA" />
            <KartuSiswa nama="Nabil" jurusan="SIJA" />
            <KartuSiswa nama="Aliando" jurusan="TJAT" />
          </div>
        </section>

        {/* Jam Sekarang */}
        <JamSekarang />
      </main>
      <Footer />
    </div>
  );
}

export default App;