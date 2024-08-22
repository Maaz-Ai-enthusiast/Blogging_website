import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex justify-around w-[100vw] h-auto py-8 bg-gray-200 ">
      <div className="c1 h-[236px] w-[289px] flex flex-col gap-1">
        <p>
          <strong>About</strong>
        </p>
        <p className="my-2 text-balance">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <p>
          <strong>Email :</strong> info@jstemplate.net
        </p>
        <p>
          <strong>Phone:</strong> +123 456 7890
        </p>
      </div>
      <div className="c2 flex flex-col">
        <p className="mb-2">
          <strong>Quick Link</strong>
        </p>
        <ul className="font-semibold">
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Home">About</a>
          </li>
          <li>
            <a href="/Home">Blog</a>
          </li>
          <li>
            <a href="/Home">Archived</a>
          </li>
          <li>
            <a href="/Home">Author</a>
          </li>
          <li>
            <a href="/Home">Contact</a>
          </li>
        </ul>
      </div>
      <div className="c3">
        <p className="mb-2">
          <strong>Category</strong>
        </p>
        <ul className="font-semibold">
          <li>
            <a href="/Home">Lifestyle</a>
          </li>
          <li>
            <a href="/Home">Technology</a>
          </li>
          <li>
            <a href="/Home">Travel</a>
          </li>
          <li>
            <a href="/Home">Business</a>
          </li>
          <li>
            <a href="/Home">Economy</a>
          </li>
          <li>
            <a href="/Home">Sports</a>
          </li>
        </ul>
      </div>
      <div className="c4 h-[254px] w-[393px] bg-white rounded-sm shadow flex flex-col p-5 justify-center items-center gap-2">
        <strong>
          <p>Weekly Newsletter</p>
        </strong>
        <p className="mb-4">Get blog articles and offers via email</p>

        <div className="w-[100%] h-auto border border-gray-200 px-5 py-2">
          <span>Your Email</span>
          <span>{IoMdMail}</span>
        </div>
        <button className="bg-[#4b6bfb] text-center px-3 py-2 w-[100%]">
          Subscribe
        </button>
      </div>   
    </div>
  );
};

export default Footer;
