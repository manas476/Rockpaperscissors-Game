let user=0,comp=0;
let choices=["Rock","Paper","Scissors"];
let msg=document.querySelector("#msg");
let rock=document.querySelector("#Rock").addEventListener("click",()=>result(1,random(1)));
let paper=document.querySelector("#Paper").addEventListener("click",()=>result(2,random(2)));
let scissors=document.querySelector("#Scissors").addEventListener("click",()=>result(3,random(3)));

const random=(i)=>{
    let a=[1,2,3];
    let p=Math.floor(Math.random() * 3);
    console.log(`Users choice = ${choices[i-1]}`);
    console.log(`Comps choice = ${choices[p]}`);
    return a[p];

}

const result=(m,n)=>
{
    document.querySelector("#comp1").style.border="7px solid rgb(25, 25, 36)";
    document.querySelector("#comp2").style.border="7px solid rgb(25, 25, 36)";
    document.querySelector("#comp3").style.border="7px solid rgb(25, 25, 36)";
    if(n==1){document.querySelector("#comp1").style.border="11px solid rgb(64, 238, 16)"}
    else if(n==2){document.querySelector("#comp2").style.border="11px solid rgb(64, 238, 16)"}
    else if(n==3){document.querySelector("#comp3").style.border="11px solid rgb(64, 238, 16)"}
    if(m==n)
    {   
        document.querySelector("#msg").innerText="Its a draw";
        msg.style.backgroundColor="orange"; 
    }
    else if(m==1&&n==3||m==3&&n==1)
    {
        if(m==1&&n==3)
        {
            user++;
            document.querySelector("#msg").innerText="User wins";
            msg.style.backgroundColor="green";
        }
        else if(m==3&&n==1)
        {
            comp++;
            document.querySelector("#msg").innerText="Computer wins";
            msg.style.backgroundColor="red";
        }
    }
    else
    {
        if(m>n)
        {
            user++;
            document.querySelector("#msg").innerText="User wins";
            msg.style.backgroundColor="green";
        }
        else{
            comp++;
            document.querySelector("#msg").innerText="Comp wins";
            msg.style.backgroundColor="red";
        }
    }
    document.querySelector("#userres").innerText=user;
    document.querySelector("#compres").innerText=comp;
    console.log(document.querySelector('#msg').innerText);
}