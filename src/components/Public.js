import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">OneFold. Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Winelands Paarl, OneFold. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    OneFold. Repairs<br />
                    1 Lotus Street<br />
                    Paarl City, WC 7646<br />
                    <a href="tel:+15555555555">(066) 0222-317</a>
                </address>
                <br />
                <p>Owner: Juandre Sabbat</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public