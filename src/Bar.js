import { Link } from 'react-router-dom';

const Bar = () => {
  return (
    <div>
      <h1>Bar</h1>
      <p>
      <Link to="/index.html">Root</Link> / 
      <Link to="/foo">Foo</Link> / 
      <Link to="/bar">Bar</Link> 
      </p>
    </div>
  );
};

export default Bar;
