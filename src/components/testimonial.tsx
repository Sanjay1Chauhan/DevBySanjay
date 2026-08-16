import { testimonialsData } from "@/lib/mockData/testimonialsData";
import { useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonial" className="testimonial position-relative section-pt">
      <div className="container">
        <div className="section-title wow fadeInUp" data-wow-delay=".3s">
          <h3>Testimonials</h3>
          <span />
        </div>

        <div className="testimonial-card-wrapper wow fadeInUp" data-wow-delay=".4s">
          <div className="testimonial-card">
            <figure className="quote-icon mb-4">
              <img
                width={60}
                height={44}
                src="/images/testimonial/quate.png"
                alt="quote"
              />
            </figure>

            <p className="testimonial-text">{current.text}</p>

            <div className="testimonial-footer d-flex flex-wrap justify-content-between align-items-end mt-4 pt-3 border-top border-secondary-subtle gap-3">
              <div className="testimonial-author-info">
                <h5 className="author-name mb-1">{current.author}</h5>
                <span className="author-role text-orange">{current.role}</span>
              </div>

              <div className="testimonial-nav d-flex align-items-center gap-3">
                <button
                  type="button"
                  className="nav-btn prev-btn"
                  onClick={handlePrev}
                  aria-label="Previous Testimonial"
                >
                  <i className="fa-solid fa-arrow-left" />
                </button>
                <span className="slider-counter">
                  0{currentIndex + 1} / 0{testimonialsData.length}
                </span>
                <button
                  type="button"
                  className="nav-btn next-btn"
                  onClick={handleNext}
                  aria-label="Next Testimonial"
                >
                  <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
