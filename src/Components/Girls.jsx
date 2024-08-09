import React from 'react';
import toysData from '../Toys.json'

const Girls = () => {
  const girlsToys = toysData.filter(toy => toy.gender === 'girls');

  return (
    <div className="container">
      <h1>Girl kid Toys</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {girlsToys.map(toy => (
          <div className="col" key={toy.id}>
            <div className="card h-100 hover-effect">
              <img src={toy.image} className="card-img-top" alt={toy.name} style={{cursor:"pointer"}} />
              <div className="card-body">
                <h5 className="card-title">{toy.name}</h5>
                <p className="card-text">Price: Rs:{toy.price}</p>
                <p className="card-text">Gender: {toy.gender}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Girls;
