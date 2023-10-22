import EmailItem from "../EmailItem";
import "./EmailList.css";

const EmailList = ({ emails }) => {
  return (
    <div className="email-list">
      {emails.map((email) => (
        <EmailItem key={email.id} email={email} />
      ))}
    </div>
  );
};

export default EmailList;
