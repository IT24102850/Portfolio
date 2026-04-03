import Image from "next/image";

const SLIITGroupProject = () => (
  <div className="sliit-group-project-container">
    <div className="sliit-group-images">
      <div className="sliit-group-image-wrapper">
        <Image
          src="/images/projects/sliit-group.jpg"
          alt="SLIIT Group Project Team at SLIIT International Center"
          width={1024}
          height={768}
          className="sliit-group-image"
          style={{ objectFit: 'cover', borderRadius: '1rem' }}
          priority
        />
      </div>
      <div className="sliit-group-image-wrapper">
        <Image
          src="/images/projects/screencapture-bording-book-vercel-app-find-2026-04-03-00_51_17.png"
          alt="BoardingBook Roommate Finder UI"
          width={573}
          height={1478}
          className="sliit-group-image"
          style={{ objectFit: 'contain', borderRadius: '1rem' }}
          priority
        />
      </div>
    </div>
    <div className="sliit-group-description">
      <h2>SLIIT Group Project: BoardingBook</h2>
      <p>
        Our team at SLIIT collaborated to create <b>BoardingBook</b>, a digital platform designed to streamline student living and roommate matching. The project focused on solving real-world challenges faced by university students when searching for compatible roommates and forming groups.
      </p>
      <h3>Key Features:</h3>
      <ul>
        <li>Custom profiles for preferences, budget, and lifestyle</li>
        <li>Swipe-to-match interface for easy connections</li>
        <li>Group workflows for joining or creating rooms</li>
        <li>Real-time notifications and robust error handling</li>
      </ul>
      <h3>Tech Stack:</h3>
      <ul>
        <li>React, TypeScript, Node.js, MongoDB, Redis</li>
        <li>Production-grade backend with strict validation</li>
        <li>Optimized for high performance and seamless UX</li>
      </ul>
      <p>
        This project demonstrates our commitment to technical excellence and practical solutions for the Sri Lankan student community.
      </p>
      <p>
        🔗 <a href="https://github.com/IT24102850/BordingBook" target="_blank" rel="noopener noreferrer">Explore the Code</a>
      </p>
    </div>
    <style jsx>{`
      .sliit-group-project-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 2rem;
        margin: 2rem 0;
        flex-wrap: wrap;
      }
      .sliit-group-images {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 350px;
        flex: 1 1 40%;
      }
      .sliit-group-image-wrapper {
        width: 100%;
        background: #18181b;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 4px 24px rgba(0,0,0,0.12);
      }
      .sliit-group-image {
        width: 100%;
        height: auto;
        display: block;
      }
      .sliit-group-description {
        flex: 2 1 60%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0 1rem;
      }
      @media (max-width: 900px) {
        .sliit-group-project-container {
          flex-direction: column;
          gap: 1.5rem;
        }
        .sliit-group-images {
          flex-direction: row;
          max-width: 100vw;
          gap: 1rem;
        }
        .sliit-group-image-wrapper {
          max-width: 48vw;
        }
      }
      @media (max-width: 600px) {
        .sliit-group-project-container {
          flex-direction: column;
          gap: 1rem;
        }
        .sliit-group-images {
          flex-direction: column;
          max-width: 100vw;
        }
        .sliit-group-image-wrapper {
          max-width: 100vw;
        }
        .sliit-group-description {
          padding: 0 0.5rem;
        }
      }
    `}</style>
  </div>
);

export default SLIITGroupProject;
