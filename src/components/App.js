import Footer from "./Footer"
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"

const App = () => {
    return (
        <>
            <Header />
            <main>
                <h2>Home</h2>
                <ItemListContainer test={true} nombre="|Hola soy un mensaje por PROPS|"/>
            </main>
            <Footer />
        </>
    )
}

export default App;