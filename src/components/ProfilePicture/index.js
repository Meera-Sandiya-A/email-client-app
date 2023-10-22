import "./ProfilePicture.css";

const ProfilePicture = ({
  src,
  alt,
  userName,
  width = "80px",
  height = "80px",
  size = "24px",
}) => {
  const userInitial = userName ? userName.charAt(0).toUpperCase() : "";

  return (
    <>
      {src ? (
        <img
          className="profile-picture__img"
          src={src}
          alt={alt}
          style={{ width, height }}
        />
      ) : (
        <div className="profile-picture" style={{ width, height }}>
          <span style={{ fontSize: size }} className="profile-picture__initials">
            {userInitial}
          </span>
        </div>
      )}
    </>
  );
};

export default ProfilePicture;
