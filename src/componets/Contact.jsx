import Map from "./Map";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen lg:max-h-[90vh] bg-[#5B0F0F]">
      {/* Contenido de texto */}
      <div className="w-full lg:w-[37%] p-4 sm:p-6 lg:p-12 flex flex-col justify-center text-center lg:text-left">
        <h1 className="text-yellow-400 text-2xl sm:text-3xl lg:text-5xl font-light tracking-wider mb-4 sm:mb-6 leading-tight">
          Visítanos
        </h1>
        <p className="text-yellow-100 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-10 font-light max-w-md mx-auto lg:mx-0">
          Estamos ubicados en el corazón histórico de Cusco, donde la tradición andina cobra vida en cada rincón de nuestra ciudad imperial.
        </p>

        {/* Información de contacto */}
        <div className="space-y-4 sm:space-y-6 max-w-md mx-auto lg:mx-0">
          {[
            {
              icon: (
                <svg
                  className="w-4 h-4 text-emerald-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
              title: "Dirección",
              content: (
                <>
                  Plaza San Blas 123
                  <br />
                  Cusco 08002, Perú
                </>
              ),
            },
            {
              icon: (
                <svg
                  className="w-4 h-4 text-emerald-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              ),
              title: "Teléfono",
              content: "+51 84 123-4567",
            },
            {
              icon: (
                <svg
                  className="w-4 h-4 text-emerald-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
              title: "Horarios",
              content: "Lun - Dom: 12:00 PM - 10:00 PM",
            },
          ].map(({ icon, title, content }, i) => (
            <div
              key={i}
              className="bg-emerald-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-yellow-400/20"
            >
              <div className="flex items-center justify-center lg:justify-start mb-2 sm:mb-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  {icon}
                </div>
                <h3 className="text-yellow-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  {title}
                </h3>
              </div>
              <p className="text-yellow-100 text-sm sm:text-base leading-relaxed">
                {content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mapa */}
      <div className="flex-grow w-full lg:w-[63%] h-[400px] sm:h-[500px] lg:h-auto lg:min-h-[500px]">
        <Map />
      </div>
    </div>
  );
};

export default Contact;