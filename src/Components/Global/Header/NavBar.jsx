import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeaderLogo from '../../../Assets/images/seff_logo_transparent.png';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredArticles } from '../../../Redux/Reducers/ArticleSlice';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const categories = ['Tech', 'Business', 'Security', 'Sport', 'Medical', 'Startup', 'Apps'];
const techCategories = ['Labtops', 'Phones', 'Tablets'];

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const dispatch = useDispatch();
  const login = useSelector((state) => state.UserSlice.login);
  const [activeLink, setActiveLink] = useState('');

  // const allArticles = useSelector((state) => state.ArticleSlice.all);

  // const handleCategoryClick = (category) => {
  //   const filteredArticles = category
  //     ? allArticles.filter((article) => article.category === category)
  //     : allArticles;

  //   dispatch(setFilteredArticles(filteredArticles));
  //   console.log(`Filter articles by category: ${category}`);
  // };




  const handleCategoryClick = (category) => {
    dispatch(setFilteredArticles(category));
    console.log(`Filter by category: ${category}`);
    setActiveLink(category);
  };

  return (
    <>
    
      <Navbar expand="lg" className="z-3 nav1" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link className='text-decoration-none text-white '
            // to="/"
            >
              <img
                src={HeaderLogo}
                width="100"
                className="d-inline-block align-top me-4"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-between ps-5 w-100 align-items-center ">
              <Link
                to="/"
                className={`text-decoration-none text-white px-1 fs-7 fw-normal ${activeLink === '' ? 'active-nav' : ''}`}
                onClick={() => handleCategoryClick('')}
              >
                Home
              </Link>
              <Link
                // to="/about"
                className={`text-decoration-none text-white px-1 fs-7 fw-normal ${activeLink === 'About' ? 'active-nav' : ''}`}
                onClick={() => handleCategoryClick('About')}
              >
                ABOUT
              </Link>
              <NavDropdown className="fs-7 text-white fw-normal" title="TECH" id="basic-nav-dropdown" >
                {techCategories.map((category) => (
                  <NavDropdown.Item key={category} onClick={() => handleCategoryClick(category)} >
                    {category}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              {categories.map((category) => (
                category !== 'Tech' && (
                  <Link
                    key={category}
                    // to={`/${category.toLowerCase()}`}
                    className={`text-decoration-none text-white px-1 fs-7 fw-normal ${activeLink === category ? 'active-nav' : ''}`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category.toUpperCase()}
                  </Link>
                )
              ))}
              {login && (
                <Link
                  className={`text-decoration-none text-white px-1 fs-7 fw-normal  ${currentPath === '/AllJobsPage' ? 'active-nav' : ''}` }
                  to="/AllJobsPage"
                >
                  JOBS
                </Link>
              )}
              <button type="button" className="btn btn-primary ms-5 fs-7">
                CONTACT US
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}



export default NavBar;

