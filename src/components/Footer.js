const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="footer">
      <section className="footerWrapper">
        <div className="two-col-flex va-center">
          <p>© {year} FoodEx, Inc. All rights reserved.</p>
          <div className="social-icons">
            <a href="#" title="Instagram">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" title="Facebook">
              <i className="ri-facebook-circle-line"></i>
            </a>
            <a href="#" title="YouTube">
              <i className="ri-youtube-line"></i>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
