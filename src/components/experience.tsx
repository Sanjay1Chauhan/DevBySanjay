// src/components/experience.tsx
import { educationData, experienceData } from "@/lib/mockData/experienceData";

const Experience = () => {
  return (
    <section id="experience" className="experience section-pt">
      <div className="container">
        {/* Section Title */}
        <div className="section-title wow fadeInUp" data-wow-delay=".3s">
          <h3>Experience &amp; Education</h3>
          <span />
        </div>

        <div className="row g-5">
          {/* Work Experience Column */}
          <div className="col-lg-7">
            <h4 className="exp-col-title wow fadeInUp" data-wow-delay=".4s">
              <i className="bi bi-briefcase me-2" />
              Work Experience
            </h4>
            <div className="timeline">
              {experienceData.map((item, index) => (
                <div
                  key={item.id}
                  className="timeline-item wow fadeInUp"
                  data-wow-delay={`${0.4 + index * 0.15}s`}
                >
                  <div className="timeline-marker">
                    {item.current && <span className="current-dot" />}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h5>{item.role}</h5>
                      <div className="timeline-meta">
                        <span className="company">
                          {item.company}, {item.location}
                        </span>
                        <span
                          className={`period ${item.current ? "current-badge" : ""}`}
                        >
                          {item.period}
                        </span>
                      </div>
                    </div>
                    <ul className="timeline-highlights">
                      {item.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="col-lg-5">
            <h4 className="exp-col-title wow fadeInUp" data-wow-delay=".4s">
              <i className="bi bi-mortarboard me-2" />
              Education &amp; Certifications
            </h4>
            <div className="timeline">
              {educationData.map((item, index) => (
                <div
                  key={item.id}
                  className="timeline-item wow fadeInUp"
                  data-wow-delay={`${0.5 + index * 0.15}s`}
                >
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h5>{item.degree}</h5>
                      <div className="timeline-meta">
                        <span className="company">
                          {item.institution}, {item.location}
                        </span>
                        <span className="period">{item.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Key Stats */}
              <div className="exp-stats wow fadeInUp" data-wow-delay=".7s">
                <div className="exp-stat-item">
                  <span className="stat-number">35+</span>
                  <span className="stat-label">Client Projects</span>
                </div>
                <div className="exp-stat-item">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="exp-stat-item">
                  <span className="stat-number">12+</span>
                  <span className="stat-label">Active Accounts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
