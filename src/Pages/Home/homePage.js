import React, { useEffect } from "react";
import './articlePage.css'
// import image from '../../images/images.png'
import { DummyArticlesData } from "../.././Components/Home/DummyArticlesData";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllArticles, setFilteredArticles } from "../../Redux/Reducers/ArticleSlice";

function HomePage() {

  const dispatch = useDispatch();
// const filteredArticles = DummyArticlesData;
const filteredArticles = useSelector((state) => state.ArticleSlice.filteredArticles);

  useEffect(() => {
    dispatch(setAllArticles(DummyArticlesData));
    dispatch(setFilteredArticles(''));
  }, []);

  return (
    <>
      <div className="main position-relative">
        <div className="overlay position-absolute">
          <div className="container">
            <div className="container text-white">
              <h1 className="home-h3 mt-3">
                SOFTWARE ENGINEERING
                <br />
                FUTURE
              </h1>
              <div className="row d-flex justify-content-between home-div-row border-rounded rounded-3 my-5 pt-5">
                <div
                  className="row d-flex justify-content-between my-3 home-row w-50 ml-5"
                  style={{
                    marginLeft: "25px",
                    height: "300px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <div className="home-div-1">
                    <h2 className="FEATURED" style={{ paddingLeft: "50px" }}>
                      FEATURED NEWS
                    </h2>
                  </div>
                  {filteredArticles.slice(0, 1).map((item) => (
                    <div className="left-div">
                      <div>
                        <p>{item.category}</p>
                        <div className="home-line"></div>
                        <div className="row">
                          <h2 className="col-9 ">{item.title}</h2>
                          <span className="col-3">
                            <i className="fas fa-clock about-span-icon5"></i>
                            <span> {item.date} </span>
                          </span>
                        </div>
                      </div>
                      <p
                        className="fs-5 pt-2"
                        style={{ textOverflow: "ellipsis" }}
                      >{item.content}
                      </p>
                    </div>))}
                </div>
                {filteredArticles.slice(1, 2).map((item) => (

                  <div className="about-right-div mb-5 h-100  pr-3">
                    <div
                      className="about-right-top-div mb-4 pb-4"
                      style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                    >
                      <div className="about-right">
                        <p>{item.category}</p>
                        <div className="home-line"></div>
                        <h4>{item.title}</h4>
                        <span className="span-icon-about">
                          <i className="fas fa-clock"></i>
                          <span>{item.date}</span>
                        </span>
                      </div>
                      <p className="fs-5">{item.content}</p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
          {filteredArticles.slice(2).map((item) => (
            <section className="card-section mt-5">
              <div className="Card-Business-bottom-box mb-5">
                <div className="row">
                  <div className="col-md-4 col-12 ">
                    <img
                      src={item.image}
                      alt=""
                      className="img-fluid rounded-start Businss-Left-image"
                    />
                  </div>
                  <div className="col-md-8 col-12">
                    <div className="Card-Business-bottom-box-text">
                      <div className="Card-Businss-Left-box115">
                        <p className="fs-3">{item.category} </p>
                        <div className="Card-Businss-Left-subtitle-line"></div>
                        <h4 className="Businss-Left-text2">{item.title}</h4>
                        <span className="Businss-Left-icon-about">
                          <i className="fas fa-clock mx-2 Businss-Left-icon"></i>
                          <span className="Businss-Left-text22">
                            {item.date}{" "}
                          </span>
                        </span>
                      </div>
                      <div className="row">
                        <div className="col-11">
                          <p className="buisness-text">{item.content} </p>
                        </div>
                        <div className="col-1">
                        <Link to={`/article/${item.id}`} key={item.id}>
                            <i className="fas fa-angle-right Businss-Left-icon2"></i>
                          </Link>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      
    </>
  );
}


export default HomePage;
