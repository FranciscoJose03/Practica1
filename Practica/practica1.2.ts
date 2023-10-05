function condiciones(frase: string):number{
    let contador = 0;
    //1
    const arr: (number|string)[] = frase.split("").map(e =>{if(/\d/.test(e)){return Number(e)}else {return e}})
    //2
    if(arr.some(e=>/[a-zA-Z]/.test(e.toString())) && arr.some(e => /[0-9]/.test(e.toString()))){contador = contador + 1}
    //3
    if(arr.some((v, index) => {return typeof arr[index]==='number'&&typeof arr[index+1]==='number'&&typeof arr[index+2]==='number'})){contador = contador - 1}
    //4
    if(arr.some((v, index) => index >= 20)){contador = contador + 2}
    //5
    if(arr.every((v,index) => index < 9)){contador = contador - 1}
    //6
    if(arr.some((e) =>/[!@#$%^&*()_+{}:;<>¿¸?,.~]/.test(e.toString()))){contador = contador + 1}
    
    return contador
}

const constrasena = "!124ab4fqwfqfe56vdsrg)fg"
console.log(condiciones(constrasena))