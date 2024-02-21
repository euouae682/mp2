import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-40">
      <div className="w-3/4 m-auto mb-8 text-3xl">
        <h1>Debrief</h1>
      </div>
      <div className="w-3/4 m-auto mb-8 text-xl">
        <p>There are many negative effects of overcrowding, seen all over the country in our public lands, which range from the trampling of vegetation to pollution to the disruption of adjacent communities.<br/><br/>There’s no easy solution from the National Park Service or any other land management agency to fix this issue, so as visitors and tourists, we have to bear some of the responsibility and practice dispersion.<br/><br/>We should visit less visited areas. We should discover places hidden from the Instagram posts and travel articles. If we want to visit more popular parks, we should explore the hidden gems instead of the crowded frontcountry areas. <br/><br/>Instead of Going to the Sun Road at Glacier, try going to Two Medicine, a more secluded glacial lake. Instead of Mount Desert Island at Acadia, maybe go on a trip to the Schoodic Peninsula or Isle au Haut, two other units in Acadia National Park that reflect the same spirit.<br/><br/>However, no matter where you go, respect the land around you. Leave no trace and safe travels!
</p>
      </div>
      <nav className="flex w-3/4 m-auto">
        <button className="p-3 bg-slate-300 hover:bg-green-200 transition-all rounded-md">
          <Link href={`/slides/glac`}>Prev </Link>
        </button>
        <button className="p-3 bg-slate-300 transition-all rounded-md ml-auto opacity-60 cursor-default">
          <p>Next</p>
        </button>
      </nav>
    </main>
  );
}
