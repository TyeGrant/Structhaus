// run form dialog box action

function runDialog (pathname) 
{
    // update url to root after dialogue close

const dialog = document.querySelector('dialog')

console.log('dialog dialog: ', dialog)

if(dialog !== null)
{
   
    const dialogButton = document.querySelector('dialog button')

    console.log('outside dialog button', dialogButton)

    if(dialogButton !== null){
        dialogButton.addEventListener('click', () => {
        console.log('button dialog')
        location.href = pathname
    })
    }
}
}

function loader()
{
    const container = document.createElement('DIV')
    const containerStyle = document.createAttribute('style')
    containerStyle.value = 'width: 100%; height: 100%; margin: 0 auto; position: absolute'
    container.setAttributeNode(containerStyle)
    const wrapper = document.createElement('DIV')
    const wrapperStyle = document.createAttribute('style')
    wrapperStyle.value = 'width: 100%'
    wrapper.setAttributeNode(wrapperStyle)

    const loader = document.createElement('DIV')
    const loaderClass = document.createAttribute('CLASS')
    loaderClass.value = 'loader'
    loaderStyle = document.createAttribute('STYLE')
    loaderStyle.value = 'width: 50%; height: 50%; border-radius:50%; background: #eee'
    loader.innerHTML = 'LOADING...'
    loader.setAttributeNode(loaderClass)

   console.log('loader', loader)
}

window.addEventListener('load', loader )