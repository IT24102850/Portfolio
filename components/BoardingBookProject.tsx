"use client";
import Image from "next/image";

const BoardingBookProject = () => (
  <div className="boardingbook-project-container">
    <div className="boardingbook-image-wrapper">
      <Image
        src="/images/projects/screencapture-bording-book-vercel-app-find-2026-04-03-00_51_17.png"
        alt="BoardingBook Roommate Finder UI"
        layout="responsive"
        width={573}
        height={1478}
        className="boardingbook-image"
        priority
      />
    </div>
    <div className="boardingbook-description">
      <h2>Streamlining Student Living: Introducing BordingBook 🏠</h2>
      <p>
        Finding a compatible roommate is often the most stressful part of university life. I built BordingBook to solve this—a digital solution specifically designed for student group formation and roommate matching.
      </p>
      <h3>The Feature Set:</h3>
      <ul>
        <li><b>Custom Profiles:</b> Detailed preferences for budget, habits, and study focus.</li>
        <li><b>Swipe-to-Match:</b> A dynamic, "Tinder-style" interface for seamless connections.</li>
        <li><b>Group Workflows:</b> Handles joining existing rooms OR forming new groups from scratch.</li>
      </ul>
      <h3>Technical Deep Dive:</h3>
      <p>
        Built with React, TypeScript, Node.js, MongoDB, and Redis, I prioritized production-ready engineering:
      </p>
      <ul>
        <li><b>Resilient Backend:</b> Strict validation for complex group states.</li>
        <li><b>Reliable Logic:</b> Sophisticated error handling for real-time notifications.</li>
        <li><b>High Performance:</b> Optimized data persistence for a seamless UX.</li>
      </ul>
      <p>
        I’m proud to balance technical rigor with a real-world solution for the Sri Lankan student community.
      </p>
      <p>
        🔗 <a href="https://github.com/IT24102850/BordingBook" target="_blank" rel="noopener noreferrer">Explore the Code</a>
      </p>
      <div className="boardingbook-tags">
        #SoftwareEngineering #FullStack #BordingBook #ReactJS #NodeJS #TypeScript #SLIIT #ProjectLaunch
      </div>
    </div>
    <style jsx>{`
      .boardingbook-project-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 2rem;
        margin: 2rem 0;
      }
      .boardingbook-image-wrapper {
        flex: 1 1 50%;
        max-width: 400px;
      }
      .boardingbook-image {
        border-radius: 1rem;
        box-shadow: 0 4px 24px rgba(0,0,0,0.12);
        width: 100%;
        height: auto;
      }
      .boardingbook-description {
        flex: 2 1 50%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
      .boardingbook-tags {
        margin-top: 1rem;
        color: #6b7280;
        font-size: 0.95rem;
      }
      @media (max-width: 900px) {
        .boardingbook-project-container {
          flex-direction: column;
          gap: 1.5rem;
        }
        .boardingbook-image-wrapper {
          max-width: 100%;
        }
      }
      @media (max-width: 600px) {
        .boardingbook-project-container {
          flex-direction: column;
          gap: 1rem;
        }
        .boardingbook-image-wrapper {
          max-width: 100vw;
        }
        .boardingbook-description {
          padding: 0 0.5rem;
        }
      }
    `}</style>
  </div>
);

export default BoardingBookProject;
