import Card from "../Card";

import images from "../../data/images";

function PlaceToStay() {
  console.log(images);
  return (
    <section className="place flex justify-center wrap">
      {images.slice(0, 8).map((img) => (
        <Card image={img} />
      ))}
    </section>
  );
}

export default PlaceToStay;
