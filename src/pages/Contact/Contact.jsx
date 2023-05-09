import ImageFolder from "../../components/ImageFolder/ImageFolder";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <ImageFolder
        title="Contact Us"
        kepCim="./images/contact.jpg"
        desc="Lépj kapcsolatba velünk!"
      />
    </div>
  );
};

export default Contact;
