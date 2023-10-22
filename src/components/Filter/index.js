import "./Filter.css";

const Filter = ({ filterTypes, activeTab, setActiveTab }) => {
  return (
    <div className="filter">
      <p className="filter__title">Filter By:</p>
      <div className="filter__btn-group">
        {filterTypes?.map((type) => (
          <div
            key={type}
            className={`filter__tab ${activeTab === type && "filter--active"}`}
            onClick={() => setActiveTab(type)}
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
