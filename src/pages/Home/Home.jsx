import React from 'react';
import './Home.css';
import ImageFolder from '../../components/ImageFolder/ImageFolder';

const Home = () => {
  const adatok = {
    eldont: true,
    title: 'Home Sweet Home',
    kepCim: './images/home.jpg',
    desc: 'Üdvözlünk az otthonunkban!',
  };

  return (
    <div className="home-container">
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

export default Home;
