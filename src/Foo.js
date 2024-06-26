import { Link } from 'react-router-dom';

const Foo = () => {
  return (
    <div>
      <h1>Foo</h1>
      <p>
      <Link to="/index.html">Root</Link> / 
      <Link to="/foo">Foo</Link> / 
      <Link to="/bar">Bar</Link> 
      </p>
    </div>
  );
};
export default Foo;

