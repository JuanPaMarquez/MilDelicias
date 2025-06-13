import { personas } from "../../utils/textoInfo";
import { redesIcon } from "../../utils/redIcons";

function Social() {

  return (
    <section id="contacts" className="bg-[#ECFADC] flex flex-col items-center text-center py-10">
      {/* <div className="espacio-con"></div> */}
      <div className="contenido">
        <div className="flex flex-col justify-center items-center gap-7">
          {
            personas.map(persona => {
              return (
                <div key={persona.id} className="flex flex-col md:flex-row items-center justify-between text-2xl w-full gap-5 max-w-[500px]">
                  <img src={persona.foto} alt={persona.nombre} className="size-30 rounded-full object-cover" />
                  <div className="w-full">
                    <p className="font-bold">{persona.nombre}</p>
                    <div className="flex flex-col min-[324px]:flex-row gap-2 justify-center items-center mt-2">
                      {
                        persona.redes.map(red => {
                          return (
                            <a 
                              key={red.id} 
                              href={red.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="flex items-center justify-center gap-3 p-1 text-2xl hover:bg-blue-600 rounded-2xl"
                            >
                              {redesIcon[red.nombre.toLowerCase()]}
                              {red.nombre}
                            </a>
                          )
                        })
                      }
                    </div>
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