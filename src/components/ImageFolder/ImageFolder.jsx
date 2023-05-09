const ImageFolder = ({ title, kepCim, desc }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={kepCim} alt="kép" />
      <p>{desc}</p>
    </div>
  );
};

export default ImageFolder;
