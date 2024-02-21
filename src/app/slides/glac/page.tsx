import Slide from "@/app/Slide";

export default function Page() {
  return (
    <main>
        <Slide prompt={"Which of these images shows Glacier National Park?"} img1={"/glacier.jpg"} img1credit={"National Park Service"} img2={"/northcascades.jpg"} img2credit={"Jeff Hollett on Flickr"} 
        descRight={["This image is Glacier!", "Similarly to other parks, Glacier is dealing with issues relating to traffic, trampled vegetation, and limitations on visitation. However, it is facing additional, political issues. Although the ticketed entry system has improved the issue of overcrowding inside the parks, legislation introduced by Ryan Zinke, a representative for the state of Montana, may defund the park management and prevent the use of the ticketed entry system.", "Dispersion alone cannot fix the issue of overcrowding. The improvement of park management into a form more suited to handling a large volume of visitors is another important piece. We must be sure that such legislation cannot cause this improvement to fail. A national park with similar scenery is North Cascades National Park. More information can be learned about this park by clicking the other image."]} 
        descWrong={["This image is NOT Glacier! This is North Cascades NP, one of the least visited yet unique national parks in the U.S.", "Both national parks protect glaciated areas in an alpine environment. Glacier is located in the Rocky Mountains, while North Cascades protects peaks and passes in the Cascade Mountains.", "However, according to the NPS, there were only around 30,000 recorded visits to the North Cascades compared to Glacier’s 2.9 million (note that this doesn’t include visits to Ross Lake, which is often conventionally grouped with the North Cascades. However, the visitation numbers are still much smaller than those of Glacier’s). Visiting parks such as the North Cascades instead of Glacier will reduce the load on Glacier and bring more recognition to less visited areas such as the North Cascades. More information on overcrowding and the politics surrounding Glacier can be found by clicking on the other image."]} 
        correct={0} last={"/slides/rock"} next={"/fin"} />
    </main>
  );
}
