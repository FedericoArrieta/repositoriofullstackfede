let elem, arr, nro, ocu:
elem:number = Number(prompt('ingrese tamaño'));
arr = new Array(elem);
nro:Number = prompt('Ingrese numero');
ocu = metodo(arr,elem,nro);
console.log("El número "+nro+" ... "+ocu);

function cargar(v,1){
   for (let i:string=0; i<1; i++)
       v[i]=Math.floor(Math.ramdom()*100);

}

function mostrar(v,1):void {
    let c="";
    for (let i:number=0; i<length; i++)
        c+=v[i]+" ";
        console.log(c);
        
}

function metodo(v,l,n): number {
    let oc;
    for (let i=0; i<l; i++)
        if (v[i]=n)
            oc++
}