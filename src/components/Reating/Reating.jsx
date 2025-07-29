import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Reating({reting}) {
    function getStar(num) {
        if (reting >= num ) {
            return faStar;
        }else if(reting >= num - 0.5){
            return faStarHalfStroke;
        }else{
            return starRegular;
            
        }
    }

    
    return (
        <>
        <div className="icon flex gap-1.5 items-center text-amber-300">
            {[1,2,3,4,5].map((num)=>(
                <FontAwesomeIcon key={num} icon={getStar(num)}/>
            ))}
        </div>
        </>
    );
}

export default Reating;
