import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { dummyData } from "./config";
import "./Home.css";

const Home = () => {
  const [patientsList, setPatientsList] = useState();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchdata = async () => {
      const test = await api.getPatientData({
        patientName: "Testing task group 1 main",
      });
      console.log(test);
    };
    setPatientsList(dummyData);
    // fetchdata()
  }, []);

  return (
    <div className="home-main">
      {patientsList ? (
        <>
          {patientsList.length > 0 ? (
            <>
              <form action="#" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search Patient Name"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="svg-outer-btn" type="submit">
                  {" "}
                  <svg
                    type="submit"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                </button>
              </form>
              <div className="card-container">
                {patientsList
                  .filter((patient) =>
                    patient.patient_name
                      .toLowerCase()
                      .startsWith(searchQuery.toLowerCase())
                  )
                  .map((data, index) => (
                    <Card key={index} patientData={data} />
                  ))}
              </div>
            </>
          ) : (
            <h3>No result</h3>
          )}
        </>
      ) : (
        <h3>Loading please wait...</h3>
      )}
    </div>
  );
};

export default Home;
