import React, { useEffect } from 'react';

function Nav(props) {

    const {
        tabs,
        setCurrentTab,
        currentTab
    } = props;

    useEffect(() => {
        document.title = currentTab;
    }, [currentTab]);

    return (
        <header>
            <h2>
                <a data-testid='link' href="/">
                    BryantC0der
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {tabs.map(tab => {
                        return(
                            <li key={tab} onClick = {setCurrentTab(tab)}>
                            {tab}    
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Nav