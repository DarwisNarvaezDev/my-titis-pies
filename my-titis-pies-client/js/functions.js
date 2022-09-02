let form = document.getElementById('formulario');
const usernameInput = document.getElementById('usernameParent');
const appendUser = document.getElementById('appendUser');
const logger = document.getElementById('log');

const fragment = document.createDocumentFragment();

appendUser.addEventListener('click', (data) => {
    // console.log(data);

    let div = document.createElement('div');
        div.classList.add('form-group')
        let label = document.createElement('label');
            label.textContent = 'Username'
        div.appendChild(label);
            let input = inputChild('idPrueba');
        div.appendChild(input);
    
    fragment.appendChild(div);
    usernameInput.appendChild(fragment);

})

form.addEventListener('submit', (data) => {

    data.preventDefault();
    // console.log(form.elements.idPrueba)
    const ar = form.elements.idPrueba;

    for( let i of ar){
        console.dir(i.value)
    }

    // const form = new FormData(data.target);
    // const formProps = Object.fromEntries(form);
    // console.log(formProps)

})

logger.addEventListener('click', () => {

    
    

})

const inputChild = (id) => {

    let i = document.createElement('input');
        i.classList.add('form-control');
        i.setAttribute('name', id)
    
        return i

}

