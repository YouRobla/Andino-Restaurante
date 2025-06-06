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
    <div className={`w-full h-[70vh] flex flex-row ${bgColor}`}>
      {/* Imagen a la izquierda */}
      {!isImageRight && (
        <img 
          src={image} 
          alt="section" 
          className="w-[70%] h-full object-cover" 
        />
      )}

      {/* Contenido */}
      <div className="w-[30%] p-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-yellow-400 text-3xl font-light tracking-wider mb-12 leading-tight">
          {title}
        </h1>
        <div className="w-24 h-px bg-yellow-400 mx-auto mb-8" />
        <p className="text-yellow-200 text-sm leading-relaxed mb-12 font-light">
          {description}
        </p>
        <div>
          <div className="w-24 h-px bg-yellow-400 mx-auto mb-4" />
          <p className="text-yellow-400 text-xs tracking-widest uppercase">{subtitle}</p>
          <div className="w-24 h-px bg-yellow-400 mx-auto mt-4" />
        </div>
        <div className="w-3 h-3 bg-yellow-400 transform rotate-45 mx-auto mt-8" />
      </div>

      {/* Imagen a la derecha */}
      {isImageRight && (
        <img 
          src={image} 
          alt="section" 
          className="w-[70%] h-full object-cover" 
        />
      )}
    </div>
  );
};

export default Section;
