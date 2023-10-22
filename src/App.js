import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addReadEmail,
  selectEmail,
  updateEmailList,
} from "./redux/slices/emailSlice";
import {
  useLazyGetEmailsQuery,
  useLazyGetEmailDetailsQuery,
} from "./services/emailApi";
import ShowToast from "./common/showToast";
import EmailList from "./components/EmailList";
import EmailDetails from "./components/EmailDetails";
import Filter from "./components/Filter";
import { getEmailsByType } from "./common/utils";

function App() {
  const { selectedEmail, emailList } = useSelector((state) => state.email);
  const dispatch = useDispatch();

  const filterTypes = ["Unread", "Read", "Favorites"];
  const [emails, setEmails] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [page, setPage] = useState(1);

  const [getEmailListApi, { data, isLoading, isError, error }] =
    useLazyGetEmailsQuery();

  const [
    getEmailDetailsApi,
    {
      data: emailDetail,
      isLoading: isEmailDetailLoading,
      isError: isEmailDetailError,
      error: emailDetailError,
    },
  ] = useLazyGetEmailDetailsQuery();

  useEffect(() => {
    getEmailListApi(page);
  }, [page]);

  useEffect(() => {
    if (isError && error) {
      ShowToast(error || "API failed!", "error");
    }

    if (data?.list) {
      const { list } = data;
      dispatch(updateEmailList(page > 1 ? list?.concat(emailList) : list));
    }
  }, [data, isError, error]);

  useEffect(() => {
    if (emailList?.length) {
      setEmails(getEmailsByType(emailList, activeTab));
    }
  }, [emailList]);

  useEffect(() => {
    if (selectedEmail) {
      getEmailDetailsApi(selectedEmail);
    }
  }, [selectedEmail]);

  useEffect(() => {
    if (emailDetail) {
      dispatch(addReadEmail(selectedEmail));
    }
  }, [emailDetail, emailDetailError, isEmailDetailError]);

  const handleTab = (type) => {
    dispatch(selectEmail(""));
    setEmails(getEmailsByType(emailList, type));
    setActiveTab(type);
  };

  return (
    <div className="container">
      <Filter
        filterTypes={filterTypes}
        activeTab={activeTab}
        setActiveTab={handleTab}
      />

      <div
        className="email-container"
        style={{
          gridTemplateColumns:
            selectedEmail && emailDetail ? ".8fr 1fr" : "1fr",
        }}
      >
        {isLoading && <p>Loading...</p>}
        {!isLoading && emails.length > 0 ? (
          <div>
            <EmailList emails={emails} />
            {data?.total > emails.length &&
              !filterTypes.includes(activeTab) && (
                <div className="loadMore">
                  <button
                    onClick={() => setPage((val) => val + 1)}
                    className="btn btn-loadMore"
                  >
                    Load more
                  </button>
                </div>
              )}
          </div>
        ) : (
          <div className="notFound">
            <p>No data found!</p>
          </div>
        )}
        {selectedEmail && emailDetail && (
          <EmailDetails
            emailData={emailDetail}
            isLoading={isEmailDetailLoading}
          />
        )}
      </div>
    </div>
  );
}

export default App;
