import "./Pokemon.css";
export const PokemonCards = (props) => {
  return (
    <>
      <li className="card p-2 " key={props.key}>
        <div className="imgwala">
          <img src={props.currElm.sprites.other.dream_world
.front_default
} alt="" className="mt-3 mb-4" />
        </div>
        <div className="detailwala border text-center">
          <span className="font-bold text-lg text-blue-600"><span className="text-red-500">Name:- </span>{props.currElm.name}</span>
          <span className="font-bold text-lg ml-3 text-blue-600"><span className="text-red-500">Weight:-</span> {props.currElm.weight}</span>
          <span className="font-bold text-lg ml-3 text-blue-600"><span className="text-red-500"> Height:- </span>{props.currElm.height}</span>

          <span className="font-bold text-lg ml-3 text-blue-600"><span className="text-red-500"> Types:- </span>{props.currElm.types.map((currElm) => 
            currElm.type.name
          ).join(", ")}</span>
        </div>
      </li>
    </>
  );
};
