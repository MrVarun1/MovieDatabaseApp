import {Switch, Route} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import TopRated from './Pages/TopRated'
import Upcoming from './Pages/Upcoming'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/top-rated" component={TopRated} />
        <Route exact path="/upcoming" component={Upcoming} />
      </Switch>
    </>
  )
}

export default App
