import { Center } from '@chakra-ui/react';
import React from 'react'

function Error() {
  return (
    <h1>
      <h1 style={{ fontWeight: "bold", marginLeft: 600 }}>Error (404)</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CVzhWD_8V2Und1215vvj0EDskzqVccvUDQ&usqp=CAU"
        alt="ErrorPage"
        style={{
          width: 750,
          marginLeft: 250,
        }}
      />
    </h1>
  );
}

export default Error