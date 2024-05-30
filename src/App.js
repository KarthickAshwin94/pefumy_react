import Navbar from './components/navbar'
import Searchbar from './components/searchbar'
import Products from './components/Products'
import About from './components/about'
import Footer from './components/footer'

function App()
{
    return(
        <div>
            <Navbar></Navbar>
            <Searchbar></Searchbar>
            <Products></Products>
            <About></About>
            <Footer></Footer>
        </div>
    )
}
export default App