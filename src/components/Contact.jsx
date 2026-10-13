import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { contact, sectionHeadings } from "../data/data";

export default function Contact() {
  const { title, text } = sectionHeadings.contact;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    e.target.reset();
  };

  return (
    <Section id="contact">
      <SectionTitle title={title} text={text} />
      <div className="contact">
        <form onSubmit={handleSubmit}>
          <div className="radios">
            {contact.options.map((option, i) => (
              <label key={option}>
                <input type="radio" name="type" defaultChecked={i === 0} /> {option}
              </label>
            ))}
          </div>
          <label>
            Name
            <input type="text" placeholder="Name" />
          </label>
          <label>
            Email*
            <input type="email" placeholder="Email" required />
          </label>
          <label>
            Message*
            <textarea rows="5" placeholder="Message" required></textarea>
          </label>
          <Button type="submit" full>
            Send Message
          </Button>
        </form>
        <img className="ph-contact" src={contact.image} alt="Decorative starburst illustration" />
      </div>
    </Section>
  );
}
