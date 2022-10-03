import { Image } from "react-bootstrap";

const RecNode = ({obj}) => {
    return ( <>
        <Image src={obj.imageUrl} />
        <h2>{obj.name}</h2>
    </> );
}
 
export default RecNode;
