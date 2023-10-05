function cambiode12a24 (hora: string):string{
    const arr: string[] = hora.split(/[ :]/)
    
    if(parseInt(arr[0]) > 12 || parseInt(arr[1]) > 59 || arr[2] != "am" && arr[2] != "pm"){
        throw new String("Has puesto mal la hora")
    }
    
    let hora24 = "";
    console.log(arr)
    if(arr.some(e => e == "am")){
        if(parseInt(arr[0]) === 12){
            hora24 = "00" + arr[1]
        }else if(parseInt(arr[0]) < 10){
            hora24 = "0" + arr[0] + arr[1]
        }else{hora24 = arr[0] + arr[1]}
        return hora24        
    }else{
            arr[0] = String(parseInt(arr[0])+ 12)
            hora24 = arr[0] + arr[1]
    }
        return hora24
}


try{
    const reloj1 = "8:00 am"
    console.log(reloj1 + " => " +cambiode12a24(reloj1))

    const reloj2 = "11:46 am"
    console.log(reloj2 + " => " +cambiode12a24(reloj2))

    const reloj3 = "7:59 pm"
    console.log(reloj3 + " => " +cambiode12a24(reloj3))

    const reloj4 = "12:37 pm"
    console.log(reloj4 + " => " +cambiode12a24(reloj4))

    const reloj5 = "12:00 am"
    console.log(reloj5 + " => " +cambiode12a24(reloj5))

    const reloj6 = "17:67 pam"
    console.log(reloj6 + " => " +cambiode12a24(reloj6))
}catch(error){
    console.log(error)
}
