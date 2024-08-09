import React from 'react';
import toysData from '../Toys.json'

const Boys = () => {
  const boysToys = toysData.filter(toy => toy.gender === 'boys');

  return (
    <div className="container">
      <h1>Boy kid Toys</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {boysToys.map(toy => (
          <div className="col" key={toy.id}>
            <div className="card h-100">
              <img src={toy.image} className="card-img-top" alt={toy.name} style={{cursor:"pointer"}} />
              <div className="card-body hover-effect">
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

export default Boys;
