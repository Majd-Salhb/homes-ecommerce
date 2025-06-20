import { useEffect, useState } from "react";
import { reviews } from "./data";

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, reviews]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3500);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section id="Reviews" className="container  ">
      <div className="section-center ">
        {reviews.map((review, reviewIndex) => {
          const { id, img, name, quote, title } = review;

          let position = "nextSlide";
          if (reviewIndex === index) {
            position = "activeSlide";
          }
          if (
            reviewIndex === index - 1 ||
            (index === 0 && reviewIndex === reviews.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <div className="row">
                <div className="col-10  mx-auto">
                  <div className="person-img mx-auto">
                    <img
                      src={img}
                      alt={name}
                      className=" person-img"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-10 mx-auto person-data ">
                  <h4>{name}</h4>
                  <h3>{title}</h3>
                  <p className="quote">{quote}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
