import { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [valto, setValto] = useState(0);
  const adatok = [
    { igaz: true, title: 'Első', szin: 'red' },
    { igaz: true, title: 'Második', szin: 'green' },
    { igaz: false, title: 'Harmadik', szin: 'red' },
    { igaz: true, title: 'Negyedik', szin: 'red' },
    { igaz: false, title: 'Ötödik', szin: 'blue' },
    { igaz: true, title: 'Hatodik', szin: 'red' },
  ];

  const novel = () => {
    setValto(valto + 1);
  };

  return (
    <div className="faq-container">
      <p>A váltó értéke: {valto}</p>
      <button onClick={novel}>Növel</button>
      {adatok.map((data, index) => (
        <div key={index}>
          {data.igaz ? (
            <h1
              style={
                valto % 2 === 0 ? { color: 'red' } : { color: 'royalblue' }
              }>
              {data.title}
            </h1>
          ) : (
            <h1
              style={
                valto % 2 === 1 ? { color: 'red' } : { color: 'royalblue' }
              }>
              Ezt a tartalmat nem ismerem!
            </h1>
          )}
        </div>
      ))}
      {adatok.map((data, index) => (
        <div key={index}>{data.igaz === false && <h3>{data.title}</h3>}</div>
      ))}
    </div>
  );
};

export default Faq;
