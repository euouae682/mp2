import Slide from "@/app/Slide";

export default function Page() {
  return (
    <main>
        <Slide prompt={"Which of these images shows Acadia National Park?"} img1={"/acadia.jpg"} img1credit={"Rachel C on Unsplash"} img2={"/whitemtn.jpg"} img2credit={"Mattia Panciroli on Flickr"} 
        descRight={["This image is Acadia! It shows the view from the Bubble Rock trail near Jordan Pond.", "There are many impacts of overcrowding on both the natural environment in Acadia and our access to it. First of all, access to Acadia is limited by the overcrowding of parking lots and the implementation of vehicle reservations. The vehicle reservation system has improved the issue of overcrowding but does limit access to Acadia and reflects the issue Acadia and so many other parks are facing. The excess of people and cars has also led to pollution and littering, both of which negatively affect the conservation of Acadia.", "We can apply the principles of dispersion and visit areas other than Acadia with similar scenery, whether it's the rocky coastlines or the forests. White Mountain National Forest is one such area that suffers less from overcrowding due to its immense area. You can click on the other image to learn more about it."]} 
        descWrong={["This image is NOT Acadia! This is White Mountain National Forest, a massive region shared between New Hampshire and Maine.", "Both parks exhibit lakes and mountainous scenery, especially in the fall. However, the area of White Mountain National Forest is much larger than Acadia; according to the USFS, it spans more than 750,000 acres in the northern part of New Hampshire.", "This massive area offers more space for adventuring and also leads to less crowding. This directly contrasts with the much denser Acadia National Park (specifically the portion of the park on Mount Desert Island). You can learn more about it by clicking the other image."]} 
        correct={0} last={"/slides/zion"} next={"/slides/yell"} />
    </main>
  );
}
