const Map = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.707647856547!2d-71.9845!3d-13.5115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5d826c2c2f7%3A0x4b5c4a4c8a4c4a4c!2sPlaza%20San%20Blas%2C%20Cusco%2C%20Peru!5e0!3m2!1sen!2sus!4v1699123456789!5m2!1sen!2sus"
        className="w-full h-full border-0 rounded-md shadow-lg"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa ubicación Plaza San Blas"
      ></iframe>
    </div>
  );
};

export default Map;
