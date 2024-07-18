const Car = ({brand}) => {
    return <div>I am {brand} car</div>;
}

const Garage = () => {
   const cars = ["Audi", "Bmw", "Tesla"];

   return<>
{ cars.length>0 && cars.map((car, index)=><Car key={index} brand={car}/>)}
   </>;
}

export default Garage;