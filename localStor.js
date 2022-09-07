const getInputvalueById = id =>{
    const inputField = document.getElementById(id)
    const inputValue = inputField.value
    inputField.value = ''
    return inputValue;
}


document.getElementById('btn-enter').addEventListener('click', function(){
    const name = getInputvalueById('name-field');
    const age = getInputvalueById('age-field')
    saveInfoLocalStorage(name, age)
})


const getInfoFromLocalStorage = () =>{
    let saveInfo = localStorage.getItem('info')
    let info = {}
    if(saveInfo){
        info = JSON.parse(saveInfo)
    }
    return info;
}
const saveInfoLocalStorage = (firstname, lastname) =>{
    const info = getInfoFromLocalStorage()
   
    info['firstname'] = firstname
    info['lastname'] = lastname
  
    const infostringfied = JSON.stringify(info)
    
    
    localStorage.setItem('info', infostringfied)
   

}

document.getElementById('clearLs').addEventListener('click', function(){
    localStorage.clear()
})