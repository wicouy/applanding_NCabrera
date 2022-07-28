import Footer from "./Footer"
import Header from "./Header"

const App = () => {
    return (
        <>
            <Header />
            <main>
                <h2>Home</h2>
            </main>
            <Footer test={true} nombre="Usuario"/>
        </>
    )
}

export default App;