export default function CustomCard({
  title,
  lyric,
  author
}) {
  return (
    <div className="flex justify-center items-center border rounded">
      <section className="">
        <h2 className="">{title}</h2>
      </section>
      <div className="text-center text-xl">
        {
          lyric.map((line, key) => {
            return <p key={key}>{line}</p>
          })
        }
      </div>
      <div className="border-t-2 ">
        <p className="uppercase">Autor: {author}</p>
      </div>
    </div>
  )
}
