import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Styles/Home.module.css";

import { useNavigate } from "react-router-dom";
import MyNavbar from "./Navbar";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <MyNavbar />
      <Carousel className={styles.carouseli}>
        <Carousel.Item interval={900}>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/512700990/photo/hydroponic-vertical-farm.jpg?s=612x612&w=0&k=20&c=cFNINt4afZDQuB4_gqj_bzgo90mBI046kXmGjH5YpAg="
            height={"500px"}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className={styles.creouselHeading}>Hydroponics Projects</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/615420436/photo/food-production-in-hydroponic-plant-lettuce.jpg?s=612x612&w=0&k=20&c=U2pqQ9YBwG53zbehepR3IwQyHTySk0W1LJcJzbnJkdk="
            height={"500px"}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className={styles.creouselHeading}>Hydroponics Projects</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/483721777/photo/tomatoes.jpg?s=612x612&w=0&k=20&c=Z6GqFTtOzvAKYjOAbr8knRLnn3UcEkRbkPTvzGhfF58="
            height={"500px"}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className={styles.creouselHeading}>Hydroponics Projects</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/519556290/photo/young-tomato-plant-under-led-grow-light.jpg?s=612x612&w=0&k=20&c=V43jfzO0yUfLvBiDDrwqlfnWdY2_bq4V829NVGQt68k="
            height={"500px"}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className={styles.creouselHeading}>Hydroponics Projects</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1165006052/photo/agri-tech-specialists-examining-stacks-of-indoor-crops.jpg?s=612x612&w=0&k=20&c=gx3jcttRVQRNTNWJ5Mi7XcpbNy4qoATS2gTnvDhoOBk="
            height={"500px"}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className={styles.creouselHeading}>Hydroponics Projects</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div id={styles.midcontainer}>
        <div className={styles.containerblog}>
          <p className={styles.blogPara}>
            <i>Our Latest Blog's</i>
          </p>

          <h2>Latest & Blog's</h2>
          <summary>
            In this article we will understand what hydroponics is, how it is
            different from traditional gardening and what are the different
            types hydroponic system. HYDROPONIC SYSTEM: Hydroponics is basically
            a soil-less way of growing plants, where the plan.
          </summary>

          <button onClick={() => navigate("/blog")}>READ MORE</button>
        </div>

        <div id={styles.minicrousel}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://ponicgreens.com/g_admin/public/uploads/3baa946045497446283c104ab95db4a9.jpg"
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://ponicgreens.com/g_admin/public/uploads/3baa946045497446283c104ab95db4a9.jpg"
                alt="Second slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://ponicgreens.com/g_admin/public/uploads/3baa946045497446283c104ab95db4a9.jpg"
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <div>
            <h4>HOW TO USE NUTRIENT FILM TECHNIQUE IN HYDROPONIC GARDENS?</h4>

            <button>READ MORE→</button>
          </div>
        </div>

        <div className={styles.thirdbloag}>
          <img
            src="https://ponicgreens.com/g_admin/public/uploads/b27e47a7bef095f215fe0b7a1597faef.jpg"
            alt="img"
            height={"250px"}
            width={"350px"}
          />
          <h4>Common Errors While Growing Hydroponic Plants</h4>
        </div>
      </div>

      <div id={styles.thirdcontainer}>
        <div className={styles.flower}>
          <img
            src="https://ponicgreens.com/images/service3.png"
            alt=""
            height={"400px"}
          />
        </div>

        <div className={styles.mainsumry}>
          <summary>
            Hydroponics is the latest technqiue of growing plant without soil.
            Hydroponic method use mineral nutrient which is dissolved in water.
            It is a smarter way to grow your plant faster than traditional
            methods.
          </summary>
          <button onClick={() => navigate("/products")}>
            {" "}
            VIEW ALL PRODUCTS
          </button>

          <div className={styles.dividercontainer}>
            <div className={styles.innercontainer}>
              <p>
                Hydroponic Gardening is Best clean and Very easy, It requiring
                very little effort nutrients and maintenance
              </p>
              <img
                src="https://ponicgreens.com/images/service1.jpg"
                alt=""
                width={"200px"}
              />
            </div>
            <div className={styles.innercontainer}>
              <p>
                Our Home Systems are fun and a Great learning tool. You Can Grow
                Way you want where you want & how you want.
              </p>
              <img
                src="https://ponicgreens.com/images/service2.jpg "
                alt=""
                width={"200px"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
