import './App.css';
import HeaderSection from './components/header-section/HeaderSection';
import { ItemDTO } from './models/item';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomePage from './components/home_page/HomePage';
import DetailPage from './components/detail_page/DetailPage';

function App() {
  let data: ItemDTO[] = [
    {
      title: "The Hunger Games (The Hunger Games, #1)",
      imageUrl: "https://images.gr-assets.com/books/1447303603m/2767052.jpg",
      authors: "Suzanne Collins",
      publicationYear: 2008
    },
    {
      title: "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)",
      imageUrl: "https://images.gr-assets.com/books/1474154022m/3.jpg",
      authors: "J.K. Rowling, Mary GrandPrÃ©",
      publicationYear: 1997
    },
    {
      title: "Twilight (Twilight, #1)",
      imageUrl: "https://images.gr-assets.com/books/1361039443m/41865.jpg",
      authors: "Stephenie Meyer",
      publicationYear: 2005
    },
    {
      title: "To Kill a Mockingbird",
      imageUrl: "https://images.gr-assets.com/books/1361975680m/2657.jpg",
      authors: "Harper Lee",
      publicationYear: 1960
    },
    {
      title: "The Great Gatsby",
      imageUrl: "https://images.gr-assets.com/books/1490528560m/4671.jpg",
      authors: "F. Scott Fitzgerald",
      publicationYear: 1925
    },
    {
      title: "The Fault in Our Stars",
      imageUrl: "https://images.gr-assets.com/books/1360206420m/11870085.jpg",
      authors: "John Green",
      publicationYear: 2012
    },
    {
      title: "The Hobbit",
      imageUrl: "https://images.gr-assets.com/books/1372847500m/5907.jpg",
      authors: "J.R.R. Tolkien",
      publicationYear: 1937
    },
    {
      title: "The Catcher in the Rye",
      imageUrl: "https://images.gr-assets.com/books/1398034300m/5107.jpg",
      authors: "J.D. Salinger",
      publicationYear: 1951
    },
    {
      title: "Pride and Prejudice",
      imageUrl: "https://images.gr-assets.com/books/1320399351m/1885.jpg",
      authors: "Jane Austen",
      publicationYear: 1813
    },
    {
      title: "Angels & Demons  (Robert Langdon, #1)",
      imageUrl: "https://images.gr-assets.com/books/1303390735m/960.jpg",
      authors: "Dan Brown",
      publicationYear: 2000
    }
  ];
  return (
    <Router>
      <div className="bg-gray-200 h-screen h-full flex flex-col">
        <Link to={"/"}>
          <HeaderSection />
        </Link>
        <Routes>
          <Route path="/" element={<HomePage data={data}/>} />
          <Route path="/details" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
