export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-white text-black text-center font-bold">
      {/* banner */}
      <div className="w-full bg-red-500">
        <h1 className="mt-12 px-6 text-3xl font-bold text-center text-white uppercase drop-shadow shadow-black">Si le ven, denle amor</h1>
        <img src="/main.png" className="brightness-125 px-10 pt-6" alt="" />
      </div>

      {/* quien esta detras de esto? */}
      <div className="w-full pt-10 pb-6">
        <h2 className="text-xl">Quien está detrás de esto?</h2>
        <p className="mt-6 px-4">
          <img src="/grupo.jpg" className="rounded-md w-9/12 m-auto mb-6" alt="" />
          Hola gente, soy Jorge, uno de los amigos de Alex.
          <br />
          <br />
          Como el mejor colega de ligues que existe en el mundo y, seamos sinceros, como Alex se merece un poco de amor de todos nosotros, he decidido crear esta página.
          Para que cuando no pueda ayudarle en las noches locas, tenga esta carta bajo la manga.
          <br />
          <br />
          Todos sus amigos esperamos que encuentre su media naranja? lima? (se llama así en Mexico?) o, al menos, que esta web le ayude a tener citas épicas.
        </p>
        {/* Button */}
        <div className="items-center justify-center">
          <div className="mb-4 w-fit h-fit mx-auto my-4">
            <a href="https://www.instagram.com/alexbedeca/" className='flex max-w-sm w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-xl uppercase font-bold shadow-md rounded-lg mx-auto p-5'>
              <div className="flex sm:flex-cols-12 gap-6">
                <div className="col-span-2 text-white">@alexbedeca</div>
              </div>
            </a>
          </div>
        </div>
        {/* End Button */}
      </div>

      {/* Quien es Alex? */}
      <div className="w-full pt-10 pb-6 bg-orange-300">
        <h2 className="text-2xl">Quien es Alex?</h2>

        <p className="mt-6 px-4">
        </p>

        <p className="mt-6 px-4">
          Por si tienes alguna duda, aquí te dejo a Alex salvando desinteresadamente a un desnutrido animalito indefenso.
        </p>
        <img src="/Subject.png" className="pt-10 pb-3 px-2" alt="" />
      </div>

      <div className="w-full min-h-40 text-white bg-black bg-cover bg-opacity-50" style={{ backgroundImage: "url(/IMG_2572.jpg)" }}>
        <div className="w-full h-full justify-center items-center backdrop-brightness-50">
          <h2 className="text-2xl pt-10 pb-4">Quieres una cita increíble con Alex?</h2>
          <p className="pt-6 px-4">
            Mandale un 🌮 a su Instagram para que sepa que eres chid@ y has llegado hasta aquí.
          </p>
          {/* Button */}
          <div className="items-center justify-center py-6">
            <div className="mb-4 w-fit h-fit mx-auto my-4">
              <a href="https://www.instagram.com/alexbedeca/" className='flex max-w-sm w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-xl uppercase font-bold shadow-md rounded-lg mx-auto p-5'>
                <div className="flex sm:flex-cols-12 gap-6">
                  <div className="col-span-2 text-white">@alexbedeca</div>
                </div>
              </a>
            </div>
          </div>
          {/* End Button */}
        </div>
      </div>
    </main>
  )
}
