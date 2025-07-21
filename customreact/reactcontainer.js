
function customRender(reactElement, container){
// const domELement= document.createElement
// (reactElement.type)
// domELement.innerHTML = reactElement.children
// domELement.setAttribute('href',reactElement.props.href)
// domELement.setAttribute('target',reactElement.props.target)
//  container.appendChild(domELement)


 const domELement= document.createElement
 (reactElement.type)
 domELement.innerHTML = reactElement.children
 for(const prop in props){
    if(prop === 'children') continue;
    domELement.setAttribute(prop,reactElement.props[props])
 }
 container.appendChild(domELement)


}
const reactElement = {
    type: 'a', // type anthing on tag  div,, p a
    props:{
        href:'https://google.com',
        target:'__blank'

    },
    children: 'Click me to visit google'

}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)
