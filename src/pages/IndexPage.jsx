import Section from "../componets/Section";
import Header from "../componets/header"

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <Section
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="El Sabor Andino: Un Viaje Gastronómico"
        subtitle="Sabores auténticos, tradición viva"
        description="Sumérgete en la riqueza culinaria de los Andes, donde cada plato es una historia y cada ingrediente, una experiencia que despierta tus sentidos."
        imagePosition="left"
      />

      <Section
        image="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Descubre Nuestro Menú"
        subtitle="De la tierra a tu mesa"
        description="Deléitate con entradas, platos principales y postres elaborados con ingredientes frescos y recetas ancestrales, para un festín que honra la cultura andina."
        imagePosition="right"
        bgColor="bg-[#5B0F0F]"
      />

      <Section
        image="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Reserva tu Experiencia"
        subtitle="Tu mesa te espera"
        description="Planifica tu visita con facilidad. Nuestro sistema de reservas te asegura un lugar para disfrutar momentos inolvidables en un ambiente acogedor y auténtico."
      />

      {/* Sección del Mapa Mejorada */}
      <div className="w-full max-h-[80vh] flex flex-col lg:flex-row bg-[#5B0F0F] relative overflow-hidden ">
       
        {/* Contenido de texto mejorado */}
        <div className="w-full lg:w-[37%] p-8 lg:p-12 flex flex-col justify-center text-center lg:text-left ">
        
          <h1 className="text-yellow-400 text-4xl lg:text-5xl font-light tracking-wider mb-6 leading-tight">
            Visítanos
          </h1>
          

          
          <p className="text-yellow-100 text-base lg:text-lg leading-relaxed mb-10 font-light max-w-md mx-auto lg:mx-0">
            Estamos ubicados en el corazón histórico de Cusco, donde la tradición andina cobra vida en cada rincón de nuestra ciudad imperial.
          </p>

          {/* Información de contacto mejorada */}
          <div className="space-y-6">
            <div className="bg-emerald-800/50 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/20">
              <div className="flex items-center justify-center lg:justify-start mb-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-emerald-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Dirección</h3>
              </div>
              <p className="text-yellow-100 text-base">
                Plaza San Blas 123<br />
                Cusco 08002, Perú
              </p>
            </div>

            <div className="bg-emerald-800/50 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/20">
              <div className="flex items-center justify-center lg:justify-start mb-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-emerald-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Teléfono</h3>
              </div>
              <p className="text-yellow-100 text-base">+51 84 123-4567</p>
            </div>

            <div className="bg-emerald-800/50 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/20">
              <div className="flex items-center justify-center lg:justify-start mb-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-emerald-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Horarios</h3>
              </div>
              <p className="text-yellow-100 text-base">
                Lun - Dom: 12:00 PM - 10:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Mapa mejorado */}
        <div className="w-full flex items-center justify-center pt-10">
        
          {/* Mapa de Google Maps centrado en Plaza San Blas, Cusco */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.707647856547!2d-71.9845!3d-13.5115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5d826c2c2f7%3A0x4b5c4a4c8a4c4a4c!2sPlaza%20San%20Blas%2C%20Cusco%2C%20Peru!5e0!3m2!1sen!2sus!4v1699123456789!5m2!1sen!2sus"
            width="70%"
            height="70%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
      
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default IndexPage;