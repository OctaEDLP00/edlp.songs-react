import Masonry from "react-masonry-css"
import lyrics from "../../lib/lyrics_edlp.json"
import Card from "./../custom/CustomCard"

export default function Main() {
  return (
    <main className="flex m-auto w-96 relative justify-center">
      <h2 className="text-3xl text-center w-full absolute">
        <span className="">
          Canciones de cancha de <br />
        </span>
        estudiantes de la plata
      </h2>
      <section className="grid grid-cols-4 w-max">
        {lyrics.songs.map((song, key) => {
          return (
            <div key={key}>
              <Card
                title={song.title}
                lyric={song.lyric}
                author={song.author}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}
