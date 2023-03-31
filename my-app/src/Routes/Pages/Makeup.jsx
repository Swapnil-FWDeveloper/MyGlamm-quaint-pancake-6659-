import React, { useEffect, useState } from "react";
import { AllData } from "../../Context/db";

console.log(AllData);
const Makeup = () => {
  const [data, setData] = useState(AllData);

  console.log(data);

  return (
    <div>
      Makeup
      <hr style={{ marginTop: "7px" }} />
      {data.Makeup.map((el) => (
        <div key={el.id}>
          <img src={el.image} />
        </div>
      ))}
    </div>
  );
};

export default Makeup;
