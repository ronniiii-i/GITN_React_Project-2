import Card from "../components/Card";

import images from "../data/images";

import img from "../img/filter.png";

function Places() {
  return (
    <>
      <div className="location flex align-center full-width justify-center">
        <select>
          <option value="Resturant">Resturant</option>
          <option value="Cottage">Cottage</option>
          <option value="Castle">Castle</option>
          <option value="fantast city">fantast city</option>
          <option value="beach">beach</option>
          <option value="Carbins">Carbins</option>
          <option value="Off-grid">Off-grid</option>
          <option value="Farm">Farm</option>
        </select>
        <div className="options">
          <ul>
            <li>Resturant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>Fantastic City</li>
            <li>Beach</li>
            <li>Cabins</li>
            <li>Off-Grid</li>
            <li>Farm</li>
          </ul>
        </div>
        <img src={img} alt="Filter" />
      </div>
      <section className="place flex justify-center wrap">
        {images.map((img) => (
          <Card image={img} />
        ))}
      </section>
    </>
  );
}

export default Places;
