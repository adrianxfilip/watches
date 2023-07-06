import "../../Styles/Watch.scss";
import { useParams } from "react-router-dom";
import { watches } from "../../Assets/Watches/watchesData";
import ImageCarousel from "./ImagesCarousel";
import { useState } from "react";

export default function Watch() {
  const { id } = useParams();

  const watch = watches.filter((watch) => watch.id === id)[0];

  const [count, setCount] = useState(1)

  const handleCount = (type) => {
    if(type === "decrement" && count > 1){
        setCount(count - 1)
    }
    if(type === "increment"){
        setCount(count + 1)
    }
  }

  return watch ? (
    <div className="watch-page">
      <ImageCarousel images={watch.images} />
      <div className="watch-container">
        <div className="info-wrapper">
          <h1>{watch.name}</h1>
          <p className="price">{watch.price}</p>
          <p className="description">{watch.description}</p>
          <h2>Materiale</h2>
          {Object.keys(watch.materials).map((key, index)=>(
            <p className="material"><span>{key}:</span> {watch.materials[key]}</p>
          ))}
        </div>
        <div className="add-to-cart-wrapper">
            <button>ADAUGĂ ÎN COȘ</button>
            <button onClick={()=>{handleCount("decrement")}}>-</button>
            <p>{count}</p>
            <button onClick={()=>{handleCount("increment")}}>+</button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <p>Watch not found</p>
    </div>
  );
}
