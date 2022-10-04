import useFetch from './hooks/useFetch'
import React from "react";
import {Link} from 'react-router-dom'
import {Row, Col, Image} from 'react-bootstrap'
import RecNode from './recNode';


function App() {
  const chars = useFetch("https://api.disneyapi.dev/characters");
  console.log(chars);
  const { data, error, loading } = chars;
   console.log('data', data);
 
  return (
    <div className="App">
      <Row>
        {data &&
          data.data.map((d) => (
            <Col md={3} key={d._id}>
              <RecNode obj={d} />
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default App;
