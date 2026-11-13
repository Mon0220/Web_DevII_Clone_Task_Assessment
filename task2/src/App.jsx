import './App.css';
import '@fontsource/lato';
import '@fontsource/teko';


{/* Header */}
function Header() {
  return (
    <header className="header">
      <h1 className="logo">watch.it</h1>

      <nav className="navigation">
        <a href="#movies">Action</a>
        <a href="#movies">Comedy</a>
        <a href="#movies">Romance</a>
        <a href="#movies">Drama</a>
      </nav>

      <button className="search-button" type="button">
        Search
      </button>
    </header>
  );
}


{/*Movie card */}
function MovieCard({ image, title, description }) {
  return (
    <article className={`movie-card`}>
      <img
        className="movie-poster"
        src={image}
        alt={`${title} movie poster`}
      />

      <div className="movie-info">
        <h2>{title}</h2>
        <p>{description}</p>

        <button className="watch-button" type="button">
          Watch Now
        </button>
      </div>
    </article>
  );
}

// All movies
function Movies() {
  return (
    <>
      {/* First movie */}
      <MovieCard

        image="/images/who-framed-roger-rabbit.jpg"
        title="Who Framed Roger Rabbit (1988)"
        description="In a world where cartoons and humans coexist,
            a detective must solve a zany, high-stakes mystery.
            Packed with wild humor, groundbreaking animation,
            and noir twists, this unique film will pull you into a world
            where anything is possible!."
        
      />

      {/* Second movie */}
      <MovieCard
       
        image="/images/hook.jpg"
        title="Hook (1991)"
        description="Rediscover Neverland in this thrilling twist on Peter Pan!
          Robin Williams stars as a grown-up Peter,
          who must rediscover his inner child to rescue his kids
          from the clutches of Captain Hook. Adventure, magic,
          and nostalgia blend in this timeless family classic."
      />

      {/* Third movie */}
      <MovieCard
        
        image="/images/la-la-land.jpg"
        title="La La Land (2016)"
        description="Love, dreams, and the magic of LA take center stage in this musical masterpiece.
          Watch as two starry-eyed artists navigate passion and ambition
          in a world where every moment feels like a cinematic spectacle!"
      />

      {/* Fourth movie */}
      <MovieCard
        
        image="/images/hidden-figures.jpg"
        title="Hidden Figures (2016)"
        description="Three unsung heroes of NASA's space race take the spotlight in this inspiring true story.
          Battling discrimination and defying the odds,
          these brilliant African-American women prove that intelligence,
          perseverance, and unity can change history and break barriers."
      />

      {/* Fifth movie */}
      <MovieCard
        
        image="/images/palm-springs.jpg"
        title="Palm Springs (2020)"
        description="A never-ending wedding day turns into an unforgettable time-loop romance!
          Stuck in the same day, two strangers find love, chaos,
          and meaning in the most unexpected ways."
      />

      {/* Sixth movie */}
      <MovieCard
        
        image="/images/barbie.jpg"
        title="Barbie (2023)"
        description="Step into the dazzling world of Barbie as she embarks on an unexpected journey
          from her perfect doll life to the real world.
          Filled with humor, heart, and empowering messages,
          this vibrant adventure redefines what it means to dream big!"
      />
    </>
  );
}

{/* Main app */}
function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content" id="movies">
        <Movies />
      </main>
    </div>
  );
}

export default App;
