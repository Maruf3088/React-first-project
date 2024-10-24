import { useState } from "react";


const Country = ({ country , handleLike }) => {

const [visited,setVisited]=useState(false);

const handleVisit=()=>{

    setVisited(!visited);
}

    const { name , flags } = country;
    return (
        <div className={`border border-black rounded-lg p-5 text-center space-y-5 flex flex-col justify-around ${
            visited ? 'bg-green-500' : 'bg-gray-500'
          }`}>
            <h1 className="font-bold text-4xl">Name :{name.common}</h1>
            <img className="mx-auto h-[200px]" src={flags.png} alt="" />
            <button onClick={handleVisit} className="bg-red-400 px-5 py-2 rounded text-white font-semibold border-black border">visited</button>
            <button onClick={()=>handleLike(name.common , flags.png)}  className="bg-red-400 px-5 py-2 rounded text-white font-semibold border-black border">Like</button>
           
            {
                visited ? <p className="font-semibold text-white text-2xl"> Visited</p>:<p  className="font-semibold text-white text-2xl"> Not Visited</p>
            }

        </div>
    );
};

export default Country;