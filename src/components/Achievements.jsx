import './Achievements.css';

export default function Achievements() {
  return (
    <section className="achievements-section" id="achievements" aria-labelledby="achievements-title">
      <div className="achievements-container">
        <div className="achievements-heading">
          <span className="achievements-eyebrow">Achievements</span>
          <h2 id="achievements-title">Proof of progress.</h2>
          <p>Explore a certificate from Abbey&apos;s learning and professional journey.</p>
        </div>

        <article className="achievement-card">
          <div className="certificate-stack" aria-hidden="true">
            <span />
            <span />
            <span />
            <div className="certificate-preview">
              <i className="fa-solid fa-certificate" />
              <span>Certificate</span>
            </div>
          </div>

          <div className="achievement-copy">
            <span className="achievement-label">Featured certificate</span>
            <h3>Abbey&apos;s Certificate</h3>
            <p>View or download the certificate directly from the portfolio.</p>
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
