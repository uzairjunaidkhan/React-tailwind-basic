function customeRender(reactElement, mainContainer){
    
    // version 1 (this is not generalised)
    // const domElement1 = document.createElement(reactElement.type);
    // domElement1.innerHTML = reactElement.children;
    // domElement1.setAttribute('href', reactElement.props.herf);
    // domElement1.setAttribute('target', reactElement.props.target);
    // mainContainer.appendChild(domElement1);

    //version 2
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;   
    for (const p in reactElement.props) {
        if (p === 'children') continue; // for safety because somrtime childern is given in props
        domElement.setAttribute( p, reactElement.props[p]);
    } 
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me'
}

const mainContainer = document.getElementById('root');

customeRender(reactElement, mainContainer);