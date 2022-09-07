document.getElementById('name-send').addEventListener('click', function(){
    const nameString = document.getElementById('name-field')
    const name = nameString.value
    localStorage.setItem('name', name)
})

document.getElementById('name-delete').addEventListener('click',function(){
    localStorage.removeItem('name')
})

document.getElementById('mail-send').addEventListener('click', function(){
    const mailString = document.getElementById('mail-field')
    const mail = mailString.value;
    localStorage.setItem('mail', mail)
})

document.getElementById('mail-delete').addEventListener('click',function(){
    localStorage.removeItem('mail')
})

document.getElementById('mess-send').addEventListener('click', function(){
    const messString = document.getElementById('mess-field')
    const mess = messString.value;
    localStorage.setItem('message', mess)
})

document.getElementById('mess-delete').addEventListener('click',function(){
    localStorage.removeItem('message')
})





const getInputvalueById = id =>{
    const inputField = document.getElementById(id)
    const inputValue = inputField.value
    inputField.value = ''
    return inputValue;
}


document.getElementById('btn-enter').addEventListener('click', function(){
    const name = getInputvalueById('name-field');
    const mail = getInputvalueById('mail-field')
    const mess = getInputvalueById('mess-field')
    saveInfoLocalStorage(name, mail, mess)
})


const getInfoFromLocalStorage = () =>{
    let saveInfo = localStorage.getItem('info')
    let info = {}
    if(saveInfo){
        info = JSON.parse(saveInfo)
    }
    return info;
}
const saveInfoLocalStorage = (name, mail,mess) =>{
    const info = getInfoFromLocalStorage()
   
    info['name'] = name
    info['mail'] = mail
    info['message'] = mess
  
    const infostringfied = JSON.stringify(info)
    
    
    localStorage.setItem('info', infostringfied)
   

}

document.getElementById('btn-clear').addEventListener('click', function(){
    localStorage.clear()
})

