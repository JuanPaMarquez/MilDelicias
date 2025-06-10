import Carrusel from "../components/Carrusel/Carrusel"
import Historia from "../ui/Inicio/Descripcion";
import Footer from "../ui/Inicio/Footer";
import Navegacion from "../ui/Inicio/Navegacion";
import Descripcion from "../ui/Inicio/Video";

function Inicio() {
  
  return (
    <>
      <Navegacion />
      <main>
        <div className="flex justify-center">
          <Carrusel />
        </div>
        <Historia />
        <Descripcion />
      </main>
      <Footer />
    </>
  )
}

export default Inicio;
