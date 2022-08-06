import '../styles/Header.css'

const Header = ({ tableheader }) => {

    return (
        <div className="AppHeader">
            <header>
                <h1>{tableheader.header !== '' ? tableheader.header : 'Default Table Name'}</h1>
            </header>
        </div>
    )
}

export default Header