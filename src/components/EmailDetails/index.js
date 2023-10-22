import React, { useEffect, useState } from "react";
import "./EmailDetails.css";
import ProfilePicture from "../ProfilePicture";
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteEmail } from "../../redux/slices/emailSlice";
import Moment from "react-moment";

const EmailDetails = ({ emailData, isLoading }) => {
  const { selectedEmail, emailList } = useSelector((state) => state.email);
  const dispatch = useDispatch();

  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (selectedEmail) {
      const res = emailList?.find((item) => item?.id === selectedEmail);

      setEmail(res);
    }
  }, [selectedEmail, emailList]);

  return (
    <div className="email-details">
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <ProfilePicture
            userName={"hello"}
            width="50px"
            height="50px"
            size="20px"
          />
          <div className="email-details__data">
            <div className="email-details__header">
              <div className="email-details_titleDate">
                <h2 className="email-details__title">{email?.subject}</h2>
                <p className="email-details__date">
                  <Moment format="DD/MM/YYYY hh:mm A" date={email?.date} />
                </p>
              </div>
              {!email?.favorite && (
                <button
                  className="btn btn--fav"
                  onClick={() => dispatch(addFavoriteEmail(selectedEmail))}
                >
                  Mark as favorite
                </button>
              )}
            </div>
            <div
              className="email-details__description"
              dangerouslySetInnerHTML={{ __html: emailData?.body }}
            ></div>
          </div>
        </>
      )}
    </div>
  );
};

export default EmailDetails;
