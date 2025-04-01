function Card({ selectedProfile }) {
  return (
    <div className="card">
      <div
        className="border"
        style={{
          backgroundImage: `url(${selectedProfile.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <p className="description">{selectedProfile.description}</p>
      <p className="info">{selectedProfile.info}</p>
      <p className="footer">&copy; 2025 Tytan. All rights reserved.</p>
    </div>
  );
}

export default Card;
