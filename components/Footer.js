const Footer = () => {
  return (
    <footer className="md:px-10 lg: py-14 bg-gray-200 text-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-40 ml-10  lg:grid-cols-5 xl:grid-cols-5 gap-y-10 mx-auto">
        <div className="footerCol w-full">
          <h5 className="font-bold text-lg">ABOUT</h5>
          <p className="footerColItem">How Airbnb works</p>
          <p className="footerColItem">Newsroom</p>
          <p className="footerColItem">Investors</p>
          <p className="footerColItem">Airbnb Plus</p>
          <p className="footerColItem">Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold text-lg">COMMUNITY</h5>
          <p className="footerColItem">TEST A</p>
          <p className="footerColItem">TEST B</p>
          <p className="footerColItem">TEST C</p>
          <p className="footerColItem">TEST D</p>
          <p className="footerColItem">TEST E</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold text-lg">HOST</h5>
          <p className="footerColItem">TEST F</p>
          <p className="footerColItem">TEST G</p>
          <p className="footerColItem">TEST H</p>
          <p className="footerColItem">TEST I</p>
          <p className="footerColItem">TEST j</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold text-lg">SUPPORT</h5>
          <p className="footerColItem">TEST K</p>
          <p className="footerColItem">TEST L</p>
          <p className="footerColItem">TEST M</p>
          <p className="footerColItem">TEST N</p>
          <p className="footerColItem">TEST O</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
