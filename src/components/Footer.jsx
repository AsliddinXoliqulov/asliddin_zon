import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import payme from "../assets/payme.png";
import clik from "../assets/clik.png";

const Footer = () => {
  return (
    <footer className="flex border-t-2 py-5  mt-10 w-full bg-white border-gray-100 items-center justify-between flex-wrap px-[6%]">
      <div>
        <b>Мы в социальных сетях</b>
        <div className="flex items-center gap-5 text-3xl mt-2">
          <a href="https://web.telegram.org">
            <FaTelegram />
          </a> 
          <a href="https://www.youtube.com/">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <ul className="text-end">
          <b>Контакты</b>
          <li>Эл. почта</li>
          <li><a href="mailto:info@zon.uz">info@zon.uz</a></li>
        </ul>
        <ul>
          <b>В будние</b>
          <li>с 09:00 до 18:00</li>
          <li><a href="tel:+998 88 120 60 40">+ 998 88 120 60 40</a></li>
        </ul>
      </div>
      <div>
        <div className="flex items-center gap-1">
            <a href="https://payme.uz/home/main"><img className="w-20 border-r-2 border-gray-300 pr-1" src={payme} alt="" /></a>
            <a href="https://click.uz"><img className="w-20" src={clik} alt="" /></a>
        </div>
        <div className="mt-1 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Zon.uz. Barcha <br /> huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
