import { useState } from 'react';
import { Link } from 'react-router-dom';

const LOGO =
  'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750755146/Screenshot_2025-06-24_142016_bhw1jn.png';

const ArrowRight = () => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    className="bi bi-arrow-right"
    fill="#d0b200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
    />
  </svg>
);

const menuItems = [
  {
    name: 'Coffee',
    img: 'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750835924/Screenshot_2025-06-25_124825_qe0ayg.png',
  },
  {
    name: 'Veg Starters',
    img: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png',
  },
  {
    name: 'Chicken Biryani',
    img: 'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750837311/Chicken-Biryani-Recipe_haxwcm.jpg',
  },
  {
    name: 'Fish & Sea food',
    img: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png',
  },
  {
    name: 'Main Course',
    img: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png',
  },
  {
    name: 'Noodles',
    img: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png',
  },
  {
    name: 'Pizza',
    img: 'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750835981/Screenshot_2025-06-25_124923_xetaqa.png',
  },
  {
    name: 'Desserts',
    img: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png',
  },
];

export default function MainPage() {
  const [feedback, setFeedback] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState({ text: '', color: '' });

  function handleFeedbackSubmit() {
    const val = feedback.trim();
    if (val === '') {
      setFeedbackMsg({ text: 'Please enter your feedback!', color: 'red' });
    } else {
      setFeedbackMsg({ text: 'Thank you for your feedback!', color: 'green' });
      setFeedback('');
    }
  }

  return (
    <div id="sectionhome">
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#!">
            <img src={LOGO} className="fud-byte-logo" alt="FudByte" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-link active" id="navItem1" href="#Sectionwhy">
                Why Choose Us?
                <span className="sr-only">(current)</span>
              </a>
              <a className="nav-link" href="#exploreMenuSection" id="navItem2">
                Explore Menu
              </a>
              <a
                className="nav-link"
                href="#deliveryPaymentSection"
                id="navItem3"
              >
                Delivery & Payment
              </a>
              <a className="nav-link" href="#followUsSection" id="navItem4">
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="imgbanner d-flex flex-column justify-content-center">
        <div className="text-center">
          <h1 className="imgHead">Welcome to FudByte</h1>
          <br />
          <br />
          <a className="nav-link" href="#exploreMenuSection">
            <button className="imgbtn">order now</button>
          </a>
        </div>
      </div>

      <div id="Sectionwhy" className="whysection">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h1>Why choose us?</h1>
              <p>
                We offer both original creations and classic versions of
                renowned culinary favorites..
              </p>
            </div>
            <div className="col-12 col-md-3  effect">
              <div className="shadow-lg info-cards-head">
                <p className="wcu-head pt-2">Food Service</p>
              </div>
              <div className="shadow-lg info-cards mb-3 effect">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png"
                  className="wcu-card-image"
                  alt="Food Service"
                />
                <p className="wcu-para pt-2">
                  Experience fine dining in the comfort of your home. Every
                  order is thoughtfully packaged and presented to ensure
                  nothing less than perfection.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3 effect">
              <div className="shadow-lg info-cards-head">
                <p className="wcu-head pt-2">Fresh Food</p>
              </div>
              <div className="shadow-lg info-cards mb-3 effect">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png"
                  className="wcu-card-image"
                  alt="Fresh Food"
                />
                <p className="wcu-para pt-2">
                  The Fresh Food Group delivers freshly cut fruits and
                  vegetables, sourced directly from our trusted partner farms
                  and farmhouses, ensuring a seamless journey from tree to
                  plate.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3 effect">
              <div className="shadow-lg info-cards-head">
                <p className="wcu-head pt-2">Best offers</p>
              </div>
              <div className="shadow-lg info-cards mb-3 effect">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png"
                  className="wcu-card-image"
                  alt="Best offers"
                />
                <p className="wcu-para pt-2">
                  Enjoy food coupons and offers of up to{' '}
                  <span className="offers">50% OFF</span>, along with
                  exclusive promo codes on all online food orders.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3 effect">
              <div className="shadow-lg info-cards-head">
                <p className="wcu-head pt-2">Place order</p>
              </div>
              <div className="shadow-lg info-cards mb-3 effect">
                <p className="wcu-para pt-2">make you first order free</p>
                <Link to="/menu">
                  <button className="btn btn-primary">Order now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="healthy-food-section pt-5 pb-5 shadow-lg effect">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwkrH8YFP5yNXN8CyPZfOyDeiMf2MU3Maew&s"
                  className="spimg"
                  alt="Healthy food"
                />
              </div>
            </div>
            <div className="col-12 col-md-7 mt-3">
              <h1 className="healthy-food-section-heading">
                Fresh, Healthy, Organic and Spicy
              </h1>
              <p className="healthy-food-section-description">
                Whether you're craving something spicy or seeking nature's
                purest flavors, we've got you covered. From bold, flavorful
                dishes to fresh and organic fruits and veggies, enjoy the best
                of both worlds—deliciously and naturally.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="explore-menu-section pt-5 pb-5"
        id="exploreMenuSection"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="menu-section-heading">Explore Menu</h1>
            </div>
            {menuItems.map((item) => (
              <div className="col-12 col-md-6 col-lg-3" key={item.name}>
                <div className="menu-item-card shadow p-3 mb-3 effect">
                  <img
                    src={item.img}
                    className="menu-item-image w-100"
                    alt={item.name}
                  />
                  <h1 className="menu-card-title">{item.name}</h1>
                  <Link to="/menu" className="menu-item-link">
                    View All
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        id="deliveryPaymentSection"
        className="thankcustomers shadow-lg mt-4 p-4 effect"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 text-center">
              <img
                src="https://png.pngtree.com/png-clipart/20220228/original/pngtree-30-off-sale-and-discount-tag-elements-png-image_7323839.png"
                className="fuddiscount"
                alt="Discount"
              />
            </div>
            <div className="col-12 col-md-7">
              <h1 className="delivery-and-payment-section-heading">
                Delivery and Payment
              </h1>
              <p className="delivery-and-payment-section-description">
                Enjoy seamless payments with a wide range of convenient
                options. Track your order in real-time with live map updates
                and watch your food arrive at your doorstep. Plus, receive a
                5% discount on every order when you pay online.
              </p>
              <Link to="/menu">
                <button className="btn btn-primary">Order Now</button>
              </Link>
              <div className="mt-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png"
                  className="payment-card-img effect"
                  alt="PayPal"
                />
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png"
                  className="payment-card-img effect"
                  alt="American Express"
                />
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png"
                  className="payment-card-img effect"
                  alt="Visa"
                />
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png"
                  className="payment-card-img effect"
                  alt="Mastercard"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="follow-us-section pt-5 pb-5" id="followUsSection">
        <div className="container followcontainer shadow-lg">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="follow-us-section-heading">Follow Us</h1>
            </div>
            <div className="col-12">
              <div className="d-flex flex-row justify-content-center">
                <div className="follow-us-icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </div>
                <div className="follow-us-icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </div>
                <div className="follow-us-icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </div>
                <div className="follow-us-icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" container feedbacksection pt-5 pb-5 shadow-lg effect">
        <div className="row">
          <div className="col-12 col-md-6">
            <div>
              <p>
                We value your experience! If you have any thoughts, ideas, or
                issues while exploring our website, please take a moment to
                share your feedback. Your insights help us improve and serve
                you better.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <textarea
              rows="2"
              cols="20"
              placeholder="give feedback"
              className="w-100"
              id="Feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <br />
            <div className="text-right">
              <button
                className="btn btn-primary"
                id="fdbtn"
                onClick={handleFeedbackSubmit}
              >
                Submit
              </button>
            </div>
            <div id="feedbackcontainer">
              <p id="realfeedback" style={{ color: feedbackMsg.color }}>
                {feedbackMsg.text}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section pt-5 pb-5 shadow-md effect">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src={LOGO}
                className="fud-byte-logo effect"
                alt="FudByte"
              />
              <h1 className="footer-section-mail-id">order@fudbyte.com</h1>
              <p className="footer-section-address">
                123 vizianagram, Andhra pradesh, India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
