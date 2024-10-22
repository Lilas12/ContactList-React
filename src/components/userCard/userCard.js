import "./userCard.css";

function UserCard({ name, email, address, latitude, longitude, phone }) {
  return (
    <div className="card_container">
      <div className="card_header">
        <h2>{name}</h2>
        <h4>{email}</h4>
      </div>
      <div className="card_content">
        <h4>Address:</h4>
        <p className="card_content_address">{address}</p>
        <p>
          Latitude: {latitude}, Longitude:{longitude}
        </p>
        <h4>Phone: {phone}</h4>
      </div>
    </div>
  );
}

export default UserCard;
