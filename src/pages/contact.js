function Contact() {
  return (
    <div className="contact">
      <form class="container">
        <div class="contact-body">
          <div class="contact-left"></div>
          <div class="contact-right">
            <h2>Contact Us</h2>
            <input
              type="text"
              class="inputf"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              class="inputf"
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              class="inputf"
              placeholder="(XXX)-XXX-XXXX"
              required
            />
            <textarea
              class="inputf area"
              placeholder="Your Message"
              required
            ></textarea>
            <button class="send">Send Your Owl</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Contact;
