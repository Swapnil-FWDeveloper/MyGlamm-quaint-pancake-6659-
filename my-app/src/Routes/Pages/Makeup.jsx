import React, { useEffect, useState } from "react";
import { AllData } from "../../Context/db";
import { Box,Grid } from "@chakra-ui/react";
// import '../Styles/Makeup.css';
console.log(AllData);

const Makeup = () => {
  const [data, setData] = useState(AllData);

  console.log(data);

  return (
    <div>
      Makeup

      <Box className='Makeup'>
      <hr style={{ marginTop: "7px" }} />
      {data.Makeup.map((el) => (
        <div key={el.id}>
          <img src={el.image} />
          <h1>{el.selection2}</h1>
          <p>Prize : $ {el.selection4}</p>
        </div>
      ))}
      </Box>
    </div>
  );
};

export default Makeup;
