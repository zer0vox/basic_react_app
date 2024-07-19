import { useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "react-bootstrap";

const Reactdummy = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetch(
          `https://dummyjson.com/recipes/search?q=${search}`,
          { signal: controller.signal }
        );
        const result = await data.json();
        setRecipes(result.recipes);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
      setLoading(false);
    };
  }, [search]);

  return (
    <div className="container ">
      <h1 className="text-center ">Food</h1>
      <input
        name="search"
        placeholder="Enter food name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row mb-2">
          {recipes.length > 0 &&
            recipes.map((recipe) => (
              <div key={recipe.id} className="col-md-4">
                <Card style={{ width: "18rem" }}>
                  <CardImg variant="top" src={recipe.image} />
                  <CardBody>
                    <CardTitle>{recipe.name}</CardTitle>
                  </CardBody>
                </Card>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Reactdummy;
