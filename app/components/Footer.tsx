const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto flex gap-8 flex-col">
        <p className="text-sm text-center p-4 hidden">
          Image Source:{" "}
          <a className="text-red-600" href="http://www.wocintechchat.com/">
            WOCinTechChat
          </a>
          ,{" "}
          <a
            className="text-red-600"
            href="https://www.iconfinder.com/iconsets/elpis"
          >
            Icon Finder
          </a>
        </p>
        <div className="flex flex-col md:flex-row text-center justify-between p-4">
          <p>Trevor Renson, Enrolled Agent</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
