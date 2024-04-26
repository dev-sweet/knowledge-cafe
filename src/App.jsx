
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);
  const handleMarkAsRead = (id,time) =>{
    const newReadingTime = readingTime+time;
    const newBookmarks = bookmarks.filter(book => !book.id === id);
    setReadingTime(newReadingTime);
    setBookmarks(newBookmarks)
  }
const handleBookmarks =(blog)=> {
  const newBookmarks = [...bookmarks,blog]
  setBookmarks(newBookmarks)
}

console.log(bookmarks)
  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
     <main className='md:flex'>
     <Blogs handleBookmarks= {handleBookmarks} handleMarkAsRead={handleMarkAsRead} />
     <Bookmarks readingTime={readingTime} bookmarks={bookmarks} />
     </main>
      </div>
  )
}

export default App
