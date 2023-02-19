import React from "react";
import "./Home.css";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import weddings from "../Assets/weddings.jpg";
const Home = () => {
  return (
    <>
      <section className="first_part">
        <div className="first_part_left_side">
          <img src = {weddings} alt = "weddings" className="weddings-photo"/>
        </div>
        <div className="first_part_right_side">
          <p className="weddings-heading">WEDDINGS</p>
          <p className="weddings_description">
            A wedding is the happiness of the people committing their lives to
            each other. The spirit of your wedding day is not captured in
            scripted or staged photos. It’s those moments of fun, laughter,
            emotion, and beauty that might not even be noticed. We capture your
            precious moments with love and promise our heart.
          </p>
        </div>
      </section>

      <section className="second_part">
        <div className="second_part_left_side">
          <p className="second-part-heading">PORTRAITS</p>
          <p className="second-part-description">
            A couple portrait lets you celebrate your magnificent relationship.
            No matter in what stage your relationship is, it deserves to be
            captured. We aim to capture your love for each other and your unique
            style, to create everlasting memories.
          </p>
        </div>
        <div className="second_part_right_side">
          {" "}
         <img src = {weddings} className="portraits-photo" alt="weddings"/>
        </div>
      </section>

      <section className="third_part">
        <div className="first_part_left_side">Left Photo</div>
        <div className="first_part_right_side">
          <p className="weddings-heading">KIDS</p>
          <p className="weddings_description">
            Children are life’s most precious gift. Their activities are a great
            delight to watch. Be it their new-toothed smile, first birthday,
            first time wearing school uniform and oh-so-many moments of pure joy
            and details. We will capture great moments for you to share for
            generations!
          </p>
        </div>
      </section>

      <section className="fourth_part">
        <div className="second_part_left_side">
          <p className="second-part-heading">PRE WEDDINGS</p>
          <p className="second-part-description">
            The love of family & friends in life is the greatest blessing.
            Capturing this love in portrait with all its personality & emotion
            is what we do the best. Whether waiting for the strict grandparent
            to smile or your shy friend to laugh, we get you that “Perfect
            Shot.”
          </p>
        </div>
        <div className="second_part_right_side">
          {" "}
          Second part right side photo
        </div>
      </section>

      <section className="fifth_part">
        <div className="first_part_left_side">Left Photo</div>
        <div className="first_part_right_side">
          <p className="weddings-heading">FASHION</p>
          <p className="weddings_description">
            Fashion is an art. It is our job to make you look stunning in your
            latest clothes, accessories, hairstyles, and make-up. Whether it’s
            an outdoor shot or studio setting we surely know the best angles,
            lighting and poses to produce amazing photos for fashion and
            editorial purposes.
          </p>
        </div>
      </section>


      <section className="sixth_part">
        <div className="second_part_left_side">
          <p className="second-part-heading">SAREE CEREMONIES</p>
          <p className="second-part-description">
            The love of family & friends in life is the greatest blessing.
            Capturing this love in portrait with all its personality & emotion
            is what we do the best. Whether waiting for the strict grandparent
            to smile or your shy friend to laugh, we get you that “Perfect
            Shot.”
          </p>
        </div>
        <div className="second_part_right_side">
          {" "}
          Second part right side photo
        </div>
      </section>


      <section className="get-in-touch">
        <div className="get-in-touch-card email-card">
          <p>momentsbymanu@gmail.com</p>
          <MailOutlinedIcon className = "get-in-touch-icon"/>
        </div>
        <div className="get-in-touch-card mobile-card">
          <p>+91 9010 676767</p>
          <PhoneIphoneOutlinedIcon className = "get-in-touch-icon"/>
        </div>
        <div className="get-in-touch-card facebook-card">
          <p>Connect with us on facebook</p>
          <FacebookIcon className = "get-in-touch-icon"/>
        </div>
        <div className="get-in-touch-card quote-card">
        <p>Get Quote</p>
        {/* RequestQuoteIc */}
        <RequestQuoteIcon className = "get-in-touch-icon"/>
        </div>
      </section>

      <section className="footer-section">
        <div className="social-icons">
          <FacebookIcon/>
          <YouTubeIcon/>
          <InstagramIcon/>
          <TwitterIcon/>
        </div>
        <div className="copy-right">
          <p>&copy; 2023 Moments By Manu</p>
        </div>
        <div className="locations">
          <p>DOMAKONDA | </p>
          <p> &nbsp; KAMAREDDY</p>
          {/* <p>KAMAREDDY</p> */}
        </div>
      </section>
    </>
  );
};

export default Home;
