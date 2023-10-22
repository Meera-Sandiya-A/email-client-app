import ProfilePicture from "../ProfilePicture";
import "./EmailItem.css";
import Moment from "react-moment";
import { useSelector, useDispatch } from "react-redux";
import { selectEmail } from "../../redux/slices/emailSlice";

const EmailItem = ({ email }) => {
  const { selectedEmail } = useSelector((state) => state.email);
  const dispatch = useDispatch();
  const { id, from, subject, short_description, date, favorite, read } = email;

  return (
    <div
      className={`email-item ${selectedEmail === id && "email-item--active"} ${read && "email-item--read"}`}
      onClick={() => dispatch(selectEmail(id))}
    >
      <ProfilePicture
        src=""
        alt={from?.name}
        userName={from?.name}
        width="50px"
        height="50px"
        size="20px"
      />

      <div className="email-item__group">
        <p className="email-item__from">
          From:&nbsp;
          <span className="email-item__text-bold">
            {from.name} &lt;{from.email}&gt;
          </span>
        </p>
        <p className="email-item__subject">
          Subject:&nbsp;<span className="email-item__text-bold">{subject}</span>
        </p>
        <p className="email-item__description">{short_description}</p>
        <div className="email-item__dateAndFav">
          <p className="email-item__date">
            <Moment format="DD/MM/YYYY" date={date} />
          </p>
          {favorite && <p className="email-item__fav">Favorite</p>}
        </div>
      </div>
    </div>
  );
};

export default EmailItem;
