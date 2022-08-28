import Link from "next/link";

function ProductCard({ 
  cardText,
  cardDescription,
  cardSlug, 
}) {
  return (
    <div>
       <span>{cardText}</span>
       <p>{cardDescription} </p>  
    </div>
  );
}

export default ProductCard;