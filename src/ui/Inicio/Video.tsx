export default function Video() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="bg-gradient-to-l from-[#AEDCAE] text-center font-bold text-2xl p-3 w-full">Descripcion</h1>
      <div className="flex items-center justify-center flex-col gap-5 my-3 max-w-[900px]">
        <p><span className="font-bold">¿Antojo de algo dulce, cremoso y lleno de sabor?</span> En Mil Delicias tenemos el postre perfecto para ti. Disfruta nuestras irresistibles cremas de leche con galletas Ducales, combinadas con sabores únicos que te harán cerrar los ojos de puro gusto:</p>
        <ul className="max-w-[800px]">
          <li><p>🍋‍🟩 Limón – refrescante y cremoso con ese toque ácido que encanta.</p></li>
          <li><p>🍈 Lulo – un sabor tropical que despierta todos tus sentidos.</p></li>
          <li><p>🍋 Maracuyá – exótico, suave y con una acidez que contrasta perfectamente con la dulzura.</p></li>
          <li><p>🍪 Oreo – clásico y adictivo, con trozos de galleta que te harán sonreír.</p></li>
        </ul>
        <p className="font-bold">Nuestros postres vienen en envases de:</p>
        <ul className="max-w-[800px]">
          <li><p>🥄 3 onzas por solo $3.000 – ideal para calmar el antojo.</p></li>
          <li><p>🍮 12 onzas por $10.000 – porque tú mereces una porción completa de felicidad.</p></li>
        </ul>
        <p>Perfectos para estudiantes de la U.P. o para cualquier persona que viva enamorada de lo dulce.</p>
        <p>📍Pide el tuyo hoy y déjate consentir con una dulce caricia de Mil Delicias</p>
      </div>
    </div>
  )
}