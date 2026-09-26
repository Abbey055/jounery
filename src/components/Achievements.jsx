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
              <img src="/images/abbey-preview.png" alt="Introduction to Front End Development certificate for Ssenkubuge Abbey" />
            </div>
          </div>

          <div className="achievement-copy">
            <span className="achievement-label">Featured certificate</span>
            <h3>Introduction to Front End Development</h3>
            <p>Ssenkubuge Abbey · 26th September 2026</p>
            <div className="achievement-actions">
              <a className="reference-button achievement-button" href="/images/abbey.pdf" target="_blank" rel="noreferrer">
                <span>View certificate</span>
                <span className="button-icon-shift" aria-hidden="true">→</span>
              </a>
              <a className="reference-button reference-button--secondary achievement-button" href="/images/abbey.pdf" download>
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
