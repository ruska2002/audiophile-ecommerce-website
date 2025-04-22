import data from "../../../data.json";
import { useParams } from "react-router-dom";

export default function Page() {
  console.log(data);

  const { CategoryName } = useParams<{ CategoryName: string }>();

  const filteredProducts = data.filter(
    (product) => product.category === CategoryName
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{CategoryName}</h1>
      {filteredProducts.map((product) => (
        <div key={product.id} className="mb-8">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <img
            src={product.categoryImage.mobile}
            alt={product.name}
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
}
