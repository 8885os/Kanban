const Header = ({ tableheader }) => {

    return (
        <>
            <header className="App-header">
                <h1>{tableheader.header !== '' ? tableheader.header : 'Default Table Name'}</h1>
            </header>
        </>
    )
}

export default Header