import Slide from "@/app/Slide";

export default function Page() {
  return (
    <main>
        <Slide prompt={"Which of these images shows Yellowstone National Park?"} img1={"/yellowstone.jpg"} img1credit={"Jeromey Balderrama on Unsplash"} img2={"/lassen.jpg"} img2credit={"Adrian Valverde on Unsplash"} 
        descRight={["This image is Yellowstone! It shows the view from the boardwalk directly adjacent to the Grand Prismatic Spring.", "Similarly to parks such as Acadia, traffic and overflowing parking lots are often common. Parking in unauthorized spots next to the road directly leads to road erosion. The influx of people has also led to the trampling of vegetation, both intentional and unintentional, similar to the damage to soil and vegetation in Zion. Unlike the other two parks, however, management does not plan to implement a reservation system.", "Therefore, the best way to prevent overcrowding and its effects on the environment is to spread out to other gems in both the national park system and outside of it. One example of a similar gem in the national park system is Lassen Volcanic. You can learn more about Lassen by clicking the other image."]} 
        descWrong={["This image is NOT Yellowstone! This is Lassen Volcanic National Park, a smaller national park tucked in northern California. The image shows the Bumpass Hell hydrothermal area.", "Lassen Volcanic, despite being tens of times smaller than Yellowstone, exhibits almost the same features. Both parks feature hydrothermal areas, large lakes, and waterfalls. Lassen Volcanic also offers even more landforms related to volcanic activity, such as cinder cones or the Fantastic Lava Beds.", "However, its location and its smaller size have led to lower visitation numbers than the much larger Yellowstone. According to the NPS, in 2022, Yellowstone received nearly 3.3 million visitors, while Lassen Volcanic received only around 450,000. Extra visitation to Lassen would decrease the load of visitation on Yellowstone, which you can learn more about by clicking the other image."]} 
        correct={0} last={"/slides/acad"} next={"/slides/jotr"} />
    </main>
  );
}
