import React from 'react'
import sefLogo from "../../../Assets/images/seff_logo_transparent.png"


const Footer = () => {
  return (
    <footer class="text-white py-1 pb-4">
      <div class="footerContent container py-1">
        <div class="footerImg">
          <img src={sefLogo} alt="logo" width="200" height="200" />
        </div>
        <div class="footerDesc row ">
          <div class="footerDescLeft mr-auto col-9">
            <div>
              <h3>SOFTWARE ENGINEERING FOR FUTURE</h3>
            </div>
            <div class="mt-4 w-50 d-flex justify-content-between">
              <h6 class="text-uppercase">
                <a href="#" class="text-white text-decoration-none">Home</a>
              </h6>
              <h6 class="text-uppercase">
                <a href="#" class="text-white text-decoration-none">About</a>
              </h6>
              <h6 class="text-uppercase">
                <a href="#" class="text-white text-decoration-none">TECH</a>
              </h6>
              <h6 class="text-uppercase">
                <a href="#" class="text-white text-decoration-none">BUSINESS</a>
              </h6>
              <h6 class="text-uppercase">
                <a href="#" class="text-white text-decoration-none">SECURITY</a>
              </h6>
            </div>
            <div class="mt-1 w-75 d-flex justify-content-between">
              <h6 class="text-uppercase">
                <a href="#" class="text-white text-decoration-none">MEDICAL</a>
              </h6>
              <h6 class="text-uppercase">
                <a href="#" class="text-white text-decoration-none">STARTUPS</a>
              </h6>
              <h6 class="text-uppercase">
                <a href="#" class="text-white text-decoration-none">APPS</a>
              </h6>
              <h6 class="text-uppercase">
                <a href="#" class="text-white text-decoration-none">COURSES</a>
              </h6>
              <h6 class="text-uppercase">
                <a href="#" class="text-white text-decoration-none">CONTACT US</a>
              </h6>
              <h6 class="text-uppercase">
                <a href="#" class="text-white text-decoration-none">SPORTS</a>
              </h6>
            </div>
          </div>

          <div class="footerDescRight col-3 mt-4 text-end ">

            <p class="m-0">
              sefffuture@gmail.com
              <i class="far fa-envelope-open" style={{fontSize:" 21px", color: "#bf9b30", marginLeft:" 28px",}}></i>
            </p>
            <p class="my-1">
              +20 109 8481 288
              <i class="fas fa-phone-volume"
                style={{fontSize: "22px",color: "#bf9b30", marginLeft: "44px",}}></i>
            </p>
            <p class="m-0 text-center">+20 155 5177 645</p>
          </div>

        </div>

        <div class="copyRights border-top py-4  pb-5 my-3 ">
          <div class="float-start w-50">
            <p>@2023 EGYPT, ALL RIGHTS RESERVED</p>
          </div>
          <div class="float-end w-25 d-flex justify-content-between">
            <a href="https://www.facebook.com/profile.php?id=100088343374799" class="text-white">
              <i class="fab fa-facebook"></i>
            </a>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer