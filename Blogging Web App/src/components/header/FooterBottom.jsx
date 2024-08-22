import footerlogo from "./../../images/Union.png";

const FooterBottom = () => {
  return (
      <div className='flex flex-col w-[100vw] h-auto py-8 bg-gray-300'>
      {/* Footer content */}
      <div className="flex justify-between items-center w-full px-8">
        {/* Left section */}
        <div className='left flex gap-2 items-center'>
          <div className='img'>
            <img src={footerlogo} alt="logo" />
          </div>
          <div className="flex flex-col">
            <p>Meta<strong>Meta</strong></p>
            <p>&copy;JS Template 2023. All Rights Reserved.</p>
          </div>
        </div>
        
        {/* Right section */}
        <div className='right flex gap-4'>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
