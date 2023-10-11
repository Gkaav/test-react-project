import './App.css'
import RecentPosts from './components/RecentPosts'
import SearchBar from './components/SearchBar'
import TagList from './components/TagList'



function App() {

  return (
    <div>
      <SearchBar />
      <TagList />
      <RecentPosts/>
    </div>
  )
}

export default App
