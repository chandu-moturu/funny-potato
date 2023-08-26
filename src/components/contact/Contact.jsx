import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-area">
      <div className="contact-info">
        <h1>cluster</h1>
        <p>
          We believe in the power of collaboration and understanding your unique
          perspective. We invite you to provide us with insights into your
          project's objectives, challenges, and aspirations. Your input will
          serve as the cornerstone for our creative process, enabling us to
          craft a tailored solution that aligns with your vision. Your thoughts
          matter, and we are here to listen. Please take a moment to share your
          valuable insights below – together, we'll transform your ideas into a
          digital masterpiece.
        </p>
      </div>
      <div>
        <div class="form-container">
          <form class="form">
            <div class="form-group">
              <label for="email">Company Email</label>
              <input type="text" id="email" name="email" required="" />
            </div>
            <div class="form-group">
              <label for="textarea">How Can We Help You?</label>
              <textarea
                name="textarea"
                id="textarea"
                rows="10"
                cols="50"
                required=""
              >
                {" "}
              </textarea>
            </div>
            <button class="form-submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
