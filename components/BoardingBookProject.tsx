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
      <h2>BoardingBook – Student Roommate Matcher</h2>
      <p>
        A digital platform to streamline student group formation and roommate matching. Features custom profiles, swipe-to-match, and group workflows. Built for real-time notifications and a seamless user experience.
      </p>
      <div className="boardingbook-tags">
        <span className="tag-pill">React</span>
        <span className="tag-pill">TypeScript</span>
        <span className="tag-pill">Node.js</span>
        <span className="tag-pill">MongoDB</span>
        <span className="tag-pill">Redis</span>
      </div>
      <p style={{marginTop: '1rem'}}>
        🔗 <a href="https://github.com/IT24102850/BordingBook" target="_blank" rel="noopener noreferrer">Explore the Code</a>
      </p>
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
