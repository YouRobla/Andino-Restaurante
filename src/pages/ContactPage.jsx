import ContactForm from "../componets/ContactForm"

const ContactPage = () => {
    return (
        <div className="h-[90vh] bg-gray-50">
            {/* Header */}
            <div className="px-4 pt-8 pb-4 md:pt-12 md:pb-8">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center tracking-wide">
                    Contáctanos
                </h2>
                <p className="text-gray-600 text-center mt-2 text-sm md:text-base">
                    Nos encantaría saber de ti
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="flex flex-col lg:flex-row min-h-[600px]">
                        
                        {/* Form Section */}
                        <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12 flex items-center">
                            <div className="w-full max-w-md mx-auto lg:mx-0">
                                <ContactForm />
                            </div>
                        </div>
                        
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-900/40 lg:hidden"></div>
                            <img 
                                src="https://www.shutterstock.com/image-photo/caucasian-woman-barista-take-order-600nw-2135289897.jpg" 
                                alt="Barista tomando orden" 
                                className="w-full h-64 md:h-80 lg:h-full object-cover"
                            />
                            
                            {/* Overlay content for mobile */}
                            <div className="absolute inset-0 flex items-end p-6 lg:hidden">
                                <div className="text-white">
                                    <h3 className="text-xl font-medium mb-2">¿Tienes preguntas?</h3>
                                    <p className="text-gray-200 text-sm">Estamos aquí para ayudarte</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Info Section - Optional */}
            <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                        <p className="text-gray-600 text-sm">contacto@empresa.com</p>
                    </div>
                    
                    <div className="p-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-1">Teléfono</h4>
                        <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                    </div>
                    
                    <div className="p-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-1">Ubicación</h4>
                        <p className="text-gray-600 text-sm">123 Calle Principal, Ciudad</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage