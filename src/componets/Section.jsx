const Section = ({ 
  image, 
  title,
  subtitle, 
  description, 
  imagePosition = "left", // por defecto la imagen va a la izquierda
  bgColor = "bg-emerald-900" // verde esmeralda por defecto
}) => {
  const isImageRight = imagePosition === "right";

  return (
    <div className={`w-full min-h-[70vh] flex flex-col lg:flex-row ${bgColor}`}>
      {/* Imagen - Desktop: a la izquierda, Mobile: arriba */}
      {!isImageRight && (
        <div className="w-full lg:w-[70%] h-64 md:h-80 lg:h-[70vh] relative overflow-hidden">
          <img 
            src={image} 
            alt="section" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
        </div>
      )}

      {/* Contenido */}
      <div className="w-full lg:w-[30%] p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-yellow-400 text-2xl md:text-3xl lg:text-3xl font-light tracking-wider mb-6 lg:mb-12 leading-tight">
          {title}
        </h1>
        
        <div className="w-16 md:w-20 lg:w-24 h-px bg-yellow-400 mx-auto mb-4 lg:mb-8" />
        
        <p className="text-yellow-200 text-sm md:text-base lg:text-sm leading-relaxed mb-6 lg:mb-12 font-light max-w-md lg:max-w-none">
          {description}
        </p>
        
        <div className="mb-4 lg:mb-0">
          <div className="w-16 md:w-20 lg:w-24 h-px bg-yellow-400 mx-auto mb-3 lg:mb-4" />
          <p className="text-yellow-400 text-xs md:text-sm lg:text-xs tracking-widest uppercase font-medium">
            {subtitle}
          </p>
          <div className="w-16 md:w-20 lg:w-24 h-px bg-yellow-400 mx-auto mt-3 lg:mt-4" />
        </div>
        
        <div className="w-3 h-3 bg-yellow-400 transform rotate-45 mx-auto mt-4 lg:mt-8 animate-pulse" />
      </div>

      {/* Imagen - Desktop: a la derecha, Mobile: arriba */}
      {isImageRight && (
        <div className="w-full lg:w-[70%] h-64 md:h-80 lg:h-[70vh] relative overflow-hidden order-first lg:order-last">
          <img 
            src={image} 
            alt="section" 
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-1000 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
        </div>
      )}
    </div>
  );
};

export default Section;