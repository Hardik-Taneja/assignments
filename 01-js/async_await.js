async function getData(){
    //Simulating getting data from server
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

async function main() {
    console.log('Loding Modules');
    console.log('Do It');
    let data= await getData() //If ye await fn na lgaya hota then niche wale 2 calls pehle ho jati and ye data at last aata //
    console.log(data);
    console.log('task2');
}

main()