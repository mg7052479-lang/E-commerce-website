const Footer = () => {
  return (
    <div>
      <div className="bg-gray-800 text-white p-6 flex flex-col md:flex-row justify-evenly items-center gap-6 text-center md:text-left">
        
        <h1 className='text-3xl font-extrabold text-white tracking-wide cursor-pointer'>
          SHOPIX
        </h1>

        <div className="flex justify-center gap-6 text-4xl cursor-pointer">
          <i className="fa-brands fa-instagram hover:text-blue-500 transition-colors duration-200"></i>
          <i className="fa-brands fa-snapchat hover:text-yellow-200 transition-colors duration-200"></i>
          <i className="fa-brands fa-youtube hover:text-red-500 transition-colors duration-200"></i>
          <i className="fa-brands fa-twitch hover:text-green-600 transition-colors duration-200"></i>
        </div>

        <p>&copy; 2026 Your Store. All rights reserved.</p>
        
      </div>
    </div>
  );
};

export default Footer;