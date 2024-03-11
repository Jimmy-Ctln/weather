import SunAndCloud from "../assets/sun&cloud.svg";
import Rain from "../assets/rain.svg";

export const WeatherIcon = ({cloudcover}) => {

  const images = [
    {
      image: SunAndCloud,
      minCloudcover: 0,
      maxCloudcover: 0.5
    },
    {
      image: Rain,
      minCloudcover: 0.5, 
      maxCloudcover: 1
    },
  ]

  const matchingImages = images
    .filter((image) => cloudcover >= image.minCloudcover) 
    .filter((image) => cloudcover < image.maxCloudcover)


  return (
    <div>
      <img src={matchingImages[0].image} alt="" />
    </div>
  )
}
