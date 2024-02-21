import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-40">
      <div className="w-3/4 m-auto mb-8 text-3xl">
        <h1>Welcome to Guess the Park!</h1>
      </div>
      <div className="w-3/4 m-auto mb-8 text-xl">
        <p>This is a short game intended to test your knowledge of the national parks while also exploring the issue of overcrowding in our public spaces.
          <br /><br />
          How do people crowd around certain places? What effect does this have on the environment? How can we improve the situation? This game will hopefully answer all of these questions while also providing insight on the variety of public lands around the country.
</p>
      </div>
      <nav className="flex w-3/4 m-auto">
        <button className="p-3 bg-slate-300 transition-all rounded-md cursor-default opacity-60">
          <p>Prev</p>
        </button>
        <button className="p-3 bg-slate-300 hover:bg-green-200 transition-all rounded-md ml-auto">
          <Link href={`/slides/zion`} className="ml-auto">Next </Link>
        </button>
      </nav>
    </main>
  );
}
