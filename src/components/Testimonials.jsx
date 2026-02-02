import "./Testimonials.css";

const testimonials = [
  {
    name: "Aman Singh",
    role: "Client",
    review:
      "I got inventory software development for my business from Arpit Menaria. He did a very good job and it was very expensive for me in the market and he developed it within my budget. Thank you very much. Arpit is best in software & web development.",
  },
  {
    name: "Randheer",
    role: "Website Client",
    review:
      "I haven't find any good web developer and if it there, they are super expensive. But Arpit Menaria has done a great job, not only completed the website on time but also consulted about the Digital Marketing and Help us to grow our sales. Highly recommended.",
  },
  {
    name: "Ajay Bisht",
    role: "Client",
    review:
      "Your custom software for our gym has been incredibly helpful in streamlining our operations. The user-friendly interface and efficient features have made member management and scheduling much easier. Thank you for your hard work and dedication!",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonial">
      <p className="testimonials-subtitle">Testimonial</p>
      <h2 className="testimonials-title">
        Reviews from Our <br /> Satisfied Client
      </h2>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <div className="avatar">👤</div>
              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>

            <p className="testimonial-text">{item.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;