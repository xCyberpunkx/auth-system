export default function Home() {
  return (
    <>
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
      <style jsx>{`
        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: url('/path/to/your/background-image.jpg') no-repeat center center fixed;
          background-size: cover;
          color: white;
          text-align: center;
        }
        .header {
          margin-bottom: 20px;
        }
        .main-content {
          background: rgba(0, 0, 0, 0.5);
          padding: 20px;
          border-radius: 10px;
        }
        .features {
          margin-top: 20px;
        }
        .shadcn-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .shadcn-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
}
