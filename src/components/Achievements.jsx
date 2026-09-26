import './Achievements.css';

export default function Achievements() {
  return (
    <section className="achievements-section" id="achievements" aria-labelledby="achievements-title">
      <div className="achievements-container">
        <div className="achievements-heading">
          <span className="achievements-eyebrow">Achievements</span>
        </div>

        <article className="achievement-card">
          <div className="certificate-stack" aria-hidden="true">
            <span />
            <span />
            <span />
            <div className="certificate-preview">
              <iframe src="/images/abbey.pdf#toolbar=0&navpanes=0&scrollbar=0" title="Introduction to Front End Development certificate" />
            </div>
          </div>

          <div className="achievement-copy">
            <span className="achievement-label">Featured certificate</span>
            <h3>Introduction to Front End Development</h3>
            <p>Ssenkubuge Abbey · 26th September 2026</p>
            <div className="achievement-actions">
              <a className="btn btn1" href="/images/abbey.pdf" target="_blank" rel="noreferrer">View certificate</a>
              <a className="btn btn2" href="/images/abbey.pdf" download>Download PDF</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
