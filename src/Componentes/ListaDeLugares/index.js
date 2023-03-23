

import Lugar from "../Lugar";


function ListaDeLugares({ lugares }) {

    

    return (
        <div className="lista_lugares">



                {console.log("lugares definitivos", lugares)}


                {lugares.map((lugar, index) =>


                    <Lugar lugar={lugar} index={index} />


                )}

            </div>
    );
}

export default ListaDeLugares;