import "../../Styles/Collection.scss";
import { watches, brands } from "../../Assets/Watches/watchesData";
import { useState } from "react";
import { Link } from "react-router-dom";

function CollectionCard(props) {
  return (
    <Link to={"/watch/" + props.id} className="wrapper">
      <div className="image-wrapper">
        <img src={props.img} />{" "}
        <button className="view-watch">VEZI CEASUL</button>
      </div>
      <p className="name">{props.name}</p>
      <p className="price">{props.price}</p>
    </Link>
  );
}

export default function Collection() {
  const [filter, setFilter] = useState("");

  return (
    <div className="collection-page">
      <div className="section-title-wrapper">
        <h1>COLECTIE</h1>
        <hr />
      </div>
      <div className="section-container">
      <div className="select-wrapper">
            <p>Brand</p>
            <select
              name="brands"
              defaultValue=""
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            >
              <option value="">Toate</option>
              {brands.map((brand, index) => (
                <option value={brand} key={"option" + index}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        <div className="container">
          {filter === ""
            ? watches.map((watch, index) => (
                <CollectionCard
                  id={watch.id}
                  img={watch.images[0]}
                  name={watch.name}
                  price={watch.price}
                  key={index}
                />
              ))
            : watches
                .filter((watch) => watch.brand === filter)
                .map((watch, index) => (
                  <CollectionCard
                    id={watch.id}
                    img={watch.images[0]}
                    name={watch.name}
                    price={watch.price}
                    key={index}
                  />
                ))}
        </div>
      </div>
    </div>
  );
}
