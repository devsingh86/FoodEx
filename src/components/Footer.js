const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="footer">
      <section className="footerWrapper">
        <p>Copyright © {year} FoodEx, Inc. All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
