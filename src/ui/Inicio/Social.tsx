import { personas } from "../../utils/textoInfo";

function Social() {

  return (
    <section id="contacts" className="bg-[#ECFADC] flex flex-col items-center text-center py-10">
      {/* <div className="espacio-con"></div> */}
      <div className="contenido">
        <div className="flex flex-col justify-center items-center gap-5 ">
          {
            personas.map(persona => {
              return (
                <div key={persona.id} className="flex flex-col md:flex-row items-center justify-between text-2xl w-full gap-5 max-w-[500px]">
                  <img src={persona.foto} alt={persona.nombre} className="size-30 rounded-full object-cover" />
                  <div className="w-full">
                    <p className="font-bold">{persona.nombre}</p>
                    <p>{persona.correo}</p>
                    <p>{persona.telefono}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Social;