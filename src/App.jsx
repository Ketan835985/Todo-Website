
import { Provider } from 'react-redux'
import './App.css'
// import TaskBoard from './Components/TaskBoard'
import Photos from './Components/photos'
import { Store } from './Redux/Storage'
// import Blog from './Components/Blog'

function App() {


  return (
    <>
      <Provider store={Store}>
        <div className="App">
          {/* <TaskBoard /> */}
          <Photos/>
          {/* <Blog/> */}
        </div>
      </Provider>
    </>
  )
}

export default App
