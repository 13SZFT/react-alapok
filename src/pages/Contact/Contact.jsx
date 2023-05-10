import ImageFolder from '../../components/ImageFolder/ImageFolder';
import './Contact.css';

const Contact = () => {
  const adatok = {
    eldont: false,
    title: 'Contact Us',
    kepCim: './images/contact.jpg',
    desc: 'Lépj kapcsolatba velünk!',
  };

  return (
    <div className="contact-container">
      {adatok.eldont ? (
        <ImageFolder
          title={adatok.title}
          kepCim={adatok.kepCim}
          desc={adatok.desc}
        />
      ) : (
        <h1>Nem ismerem ....</h1>
      )}
    </div>
  );
};

export default Contact;
