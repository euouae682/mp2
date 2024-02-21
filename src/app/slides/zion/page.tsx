import Slide from "@/app/Slide";

export default function Page() {
  return (
    <main>
        <Slide prompt={"Which of these images shows Zion National Park?"} img1={"/snowcanyon.jpg"} img1credit={"Perry Kibler on Unsplash"} img2={"/zion.jpg"} img2credit={"Den Harrson on Unsplash"} 
        descRight={["This image is Zion! It shows the Virgin River near the beginning of Zion Canyon.", "Currently, Zion has various issues related to overcrowding. The massive influx of people visiting the park has led to limitations on access, especially for the inner Zion Canyon road, which is often closed off during winter after reaching full capacity and controlled entirely by shuttles during summer. Overcrowding also leads to environmental damage, including the formation of “social trails” which damage the fragile soil of the desert climate and lead to increased erosion. An excess of people also leads to more vandalism and littering.", "To protect sites such as Zion, we can practice dispersion, which advocates for spreading visitation to other, less visited (but often just as beautiful) sites! In this case, more people can visit places such as Snow Canyon State Park. You can click on the other image to see more information about it."]} 
        descWrong={["This image is NOT Zion! This is Snow Canyon State Park, a similar park in Utah around 30 miles west of Zion. The image specifically shows the Petrified Sand Dunes area of the park.", "Both have slot canyons, petrified dunes, and views of surrounding cliffs. Differentiating the two, while Zion shows a history reflected by erosion from the Virgin River, Snow Canyon shows a more volcanic history, displaying other features such as lava tubes and a cinder cone.", "However, Zion receives nearly six times the visitors! According to the NPS and the Utah DNR, Zion received nearly 4.7 million visitors in 2022 compared to Snow Canyon’s mere 800,000 in 2022. By visiting parks such as Snow Canyon State Park, we can spread out visitation away from hotspots such as Zion National Park, which you can learn more about by clicking the other image."]} 
        correct={1} last={"/"} next={"/slides/acad"} />
    </main>
  );
}
