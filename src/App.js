import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Root</h1>
      <p>
      <Link to="/index.html">Root</Link> / 
      <Link to="/foo">Foo</Link> / 
      <Link to="/bar">Bar</Link> 
      </p>
    </div>
  );
}

export default App;
