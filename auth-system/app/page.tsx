'use client';

export default function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Our Dental Clinic</h1>
        <p>Your smile is our priority!</p>
      </header>
      <main className="main-content">
        <section className="features">
          <h2>Advanced Authentication</h2>
          <p>Securely manage your appointments and personal information.</p>
          <button className="shadcn-button">Get Started</button>
        </section>
      </main>
    </div>
  );
}
