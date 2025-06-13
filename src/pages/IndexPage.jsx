import Section from "../componets/Section";
import Header from "../componets/header"
import Contact from "../componets/Contact"
const IndexPage = () => {
  return (
    <>
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
    <Contact></Contact>
    </>
  );
};

export default IndexPage;