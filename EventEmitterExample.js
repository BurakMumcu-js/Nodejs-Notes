const EventEmitter = require('events');
const celebrity = new EventEmitter();

celebrity.on('race', (result) => {
    if(result === 'win'){
        console.log('congrats! you are best')
    }
});
// race beklenen konumda race win geldiği için çalışmaz
celebrity.on('race win', (result) => {
    if(result === 'win'){
        console.log('you are cool! wow')
    }
});

celebrity.on('race', (result) => {
    if(result === 'lost'){
        console.log('Boo it was horrible')
    }
});

process.on('exit',(code)=>{
    console.log(`Process exited with code ${code}`);
})

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');
