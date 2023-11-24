import React from "react";
import { useParams } from "react-router-dom";
import { DummyArticlesData } from "../../Components/Home/DummyArticlesData";
import Footer from "../../Components/Global/Footer/Footer";



function DetailsArticle() {
  console.log("DetailsArticle Page");
  const { id } = useParams();
  const article = DummyArticlesData.find((article) => article.id === parseInt(id));
  const { title, content, date, image, category } = article;
  return (
    <>
      <section className="home pb-5">
        <div className="container pt-5">
          <div className="home-info d-flex justify-content-between align-items-center">
            <div className="right-info">
              <span className="subtitle mb-4 d-block">{category}</span>
              <h2 className="title">{title}</h2>
            </div>
            <div className="left-info">
              <i className="fa-solid fa-clock"></i>
              <span>{date}</span>
            </div>
          </div>
        </div>
        <div className="container pt-4 p-4">
          <div className="container hero-text p-5">
            <div className="hero-image">
              <img
                src={image}
                className=" w-100"
                // style={{ width: "100%", height: "600px", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="hero-content text-white">
              <p>{content}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default DetailsArticle;
