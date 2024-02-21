import Slide from "@/app/Slide";

export default function Page() {
  return (
    <main>
        <Slide prompt={"Which of these images shows Joshua Tree National Park?"} img1={"/joshuatree.jpg"} img1credit={"William Foley on Unsplash"} img2={"/mojave.jpg"} img2credit={"National Park Service"} 
        descRight={["This image is Joshua Tree!", "The problems with overcrowding in Joshua Tree are the same as the previous three parks: full parking lots, pollution, and soil damage. However, also important is that overcrowding in Joshua Tree affects places around it. Surrounding communities, especially the community of Joshua Tree around the most popular entrance, struggle with long backups on their roads, even some hikers walking in their yards.", "Therefore, dispersion is critical not just for the preservation of the environment, but also out of courtesy for smaller communities living adjacent to these public lands. One such area that could be visited instead is Mojave National Preserve. More information on this can be found by clicking on the other image."]} 
        descWrong={["This image is NOT Joshua Tree! This is Mojave National Preserve, a protected area northeast of Joshua Tree with similar landforms and vegetation.", "Both parks have dense concentrations of Joshua trees and also show other desert features including rock formations. Mojave National Preserve also contains a large dune field called the Kelso Dunes.", "However, the area sees less visitation than Joshua Tree as a result of it being less developed and its distance from metropolitan areas such as Los Angeles. This doesn’t mean it shouldn’t be visited! To ease the visitation on Joshua Tree and its surrounding communities, more people should visit Mojave National Preserve instead. You can read more about the issues facing Joshua Tree and its adjacent communities by clicking the other image."]} 
        correct={0} last={"/slides/yell"} next={"/slides/rock"} />
    </main>
  );
}
