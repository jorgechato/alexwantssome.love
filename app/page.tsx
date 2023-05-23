export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between
    bg-gradient-to-b from-blue-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="bg-blue-500 w-full">
        <img src="/sticker.png" className="brightness-125 px-20 pt-10" alt="" />
      </div>
      <div className="bg-emerald-500 w-full">
        <img src="/Subject.png" className="pt-10 pb-3 px-2" alt="" />
      </div>
      <div className="w-full min-h-40 h-80 bg-cover" style={{ backgroundImage: "url(/IMG_2572.jpg)" }}>
      </div>
    </main>
  )
}
