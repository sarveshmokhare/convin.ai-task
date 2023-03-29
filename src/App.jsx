import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import BucketPage from './pages/BucketPage';
import CardPage from './pages/CardPage';

function App() {

  return (
    // implementing routes with react router
    <Router>
      <Routes>
        <Route exact path="/" Component={BucketPage} />
        <Route path="/:bucketId/cards" Component={CardPage} />
      </Routes>
    </Router>
  )
}

export default App
