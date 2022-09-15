const express = require ('express');

const app = express()

app.get('/hello', (req,res)=> {
    console.log("noice")
    res.send('Noice !')
});

app.listen(3000, () => {
console.log('listening on port 3000')
})

'Salut les man'