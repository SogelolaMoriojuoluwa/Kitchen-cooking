import { useState, useEffect } from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import Account from "../component/Account";
import NewImg from "../assets/image/news.jpg";
import "../assets/css/NewsPage.css";

function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "3df336986bmshace758b5715f5f2p16060bjsn13e09e113ddf",
            Accept: "image/jpeg,image/png,image/*,*/*;q=0.8",
          },
          redirect: "follow",
        };

        const respond = await fetch(
          "https://real-time-news-data.p.rapidapi.com/search?query=food",
          requestOptions
        );
        if (respond.status === 403 || respond.status === 406) {
          // Forbidden or Not Acceptable, do not show error, just return
          return;
        }
        const result = await respond.json();
        // console.log(result)
        setNews(result.data);
      } catch (error) {
        if (error && error.message && (error.message.includes('403') || error.message.includes('406'))) {
          // Silently handle 403 or 406 error
          return;
        }
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="news-container">
        <img src={NewImg} alt="" />
        <div className="container d-flex flex-column justify-content-center align-items-start news-content">
          <h1>Simplify your Cooking, Wellness and Time All in One App</h1>
          <p>Get personalized recipe, plan tasks and stay healthy.</p>
          <button className="btn">Start Cooking Smarter</button>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row gy-3">
          {news &&
            news.length > 0 &&
            news.map((item, idx) => (
              <div
                key={item.url && idx}
                className="col col-lg-4 col-md-6 col-sm-12">
                <div className="news-card">
                  <img
                    src={item.photo_url || NewImg}
                    alt={item.title || "News image"}
                    onError={e => { e.target.onerror = null; e.target.src = NewImg; }}
                  />
                  <div className="news-card-content">
                    <h3>{item.authors || "Unknown Author"}</h3>
                    <p>{item.snippet || "No description available."}</p>
                    <p>{item.title || "No title available."}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Account />
      <Footer />
    </>
  );
}

export default NewsPage;
