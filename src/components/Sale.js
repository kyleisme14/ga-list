import "./Sale.css";
import { useParams } from "react-router-dom";

const Sale = () => {
  const { id } = useParams();

  return (
    <div className="Sale">
      <h2>Sale Page - { id }</h2>
    </div>
  )
}


export default Sale;