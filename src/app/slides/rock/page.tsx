import Slide from "@/app/Slide";

export default function Page() {
  return (
    <main>
        <Slide prompt={"Which of these images shows Rocky Mountain National Park?"} img1={"/stateforest.jpg"} img1credit={"Colorado Parks and Wildlife"} img2={"/rockymountain.jpg"} img2credit={"Lauren Lopes on Unsplash"} 
        descRight={["This image is Rocky Mountain!", "Similarly to other parks facing overcrowding, such as Acadia, Rocky Mountain has implemented timed entry reservations, which proves to be a good solution on the side of management. However, signs of overcrowding still exist, including some parking and pollution.", "Although parks can implement reservations, that’s only one-half of the solution to the problem. The other half lies within visitors to practice dispersion. One great site to go to instead of Rocky Mountain is State Forest State Park, a more remote but just as worthwhile location. You can learn more about State Forest State Park by clicking on the other image."]} 
        descWrong={["This image is NOT Rocky Mountain! This is State Forest State Park, a state park north of Rocky Mountain NP with a very amusing name.", "When looking at images of State Forest State Park, one will notice that its scenery is very similar to Rocky Mountain. Both are nestled in the Rocky Mountains, and both show a variety of forests, rivers, and alpine lakes.", "Yet, when comparing the two, visitation is incomparable! This could be due to the accessibility of State Forest compared to Rocky Mountain. However, it makes up for it by allowing for a lot of solitude on its various hiking trails. By visiting State Forest instead of Rocky Mountain, visitors can reduce the load on the latter. You can learn more about visitation to Rocky Mountain by clicking on the other image."]} 
        correct={1} last={"/slides/jotr"} next={"/slides/glac"} />
    </main>
  );
}
