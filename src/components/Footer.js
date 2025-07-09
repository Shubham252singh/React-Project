const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p className="text-center">
        Copyright &copy; {currYear}, Made with 💗 by <strong>Shubham</strong>
      </p>
    </footer>
  );
};

export default Footer;