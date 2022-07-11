// let p = new Promise((resolve,reject)=>{
//     let a=1+2;
//     if(a==2){
//         resolve('Success');
//     }
//     else{
//         reject('Failiure');
//     }
// })

// p.then((message)=>{
//     console.log('This is in the then '+ message);
// }).catch((message)=>{
//     console.log('This is in the catch block '+message);
// })


const userleft = false;
const usercat = true;

// function f1(callback, errorcall){
//     if(userleft){
//         errorcall({
//             name: 'User left',
//             message: ':('
//         })
//     }
//     else if(usercat){
//         errorcall({
//             name: 'user watching cat meme',
//             message: 'this is from the youtube channel webdev simp'
//         })
//     }
//     else{
//         callback('Success sub');
//     }
// }
// f1((message)=>{
//     console.log('Success: '+message)
// }, (error)=>{
//     console.log(error.name+" "+error.message);
// })


//inside of nested call back..use promises like given below

function f1(){
    return new Promise((resolve,reject)=>{
        if(userleft){
            reject({
                messagessss: 'the user left'
            })
        }
        else if(usercat){
            reject({
                messagessss: 'user watching memes'
            })
        }
        else{
            resolve('Sub to the channel');
        }
    })
}

// f1().then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error.messagessss);
// })

// const r1 = new Promise((resolve,reject)=>{
//     resolve('1 Done');
// })

// const r2 = new Promise((resolve,reject)=>{
//     resolve('2 Done');
// })

// const r3 = new Promise((resolve,reject)=>{
//     resolve('3 Done');
// })

// Promise.all([//race-whichever comes first
//     r1,r2,r3
// ]).then((messages)=>{
//     console.log(messages);
// })

//ASYNC AND AWAIT




// makereq('google').then(response =>{
//     console.log('response received');
//     return processreq(response)
// }).then(processedres=>{
//     console.log(processedres);
// }).catch(err =>{
//     console.log(err);
// })

doing();

async function doing(){
    try{
        const res = await makereq1('google');
        console.log('Response has been rx');
        const prores = await procreq(res);
        console.log(prores);
    }catch(error){
        console.log(error.message);
    }
}

function makereq1(location){
    return new Promise((resolve,reject)=> {
        console.log(`Making response to ${location}`);
        if(location === 'googl'){
            resolve('Google says hiiii');
        }
        else{
            reject({
                message: "will speak with google only"
            })
        }
    })
}


function procreq(res){
    return new Promise((resolve,reject)=> {
        console.log('Processing the response');
        resolve(`Extra info ===== ${res}`);
    })
}





