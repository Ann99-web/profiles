import React from 'react'

import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import Menu from './Menu';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Fcomponent />
                <Ccomponent />
                <Menu />
            </header>
        </div>
    )
}

export default App;