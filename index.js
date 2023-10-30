const express=require('express')

const app=express()


app.get('/', (req, res) => {
    res.send('This is your endpoint response');
});

app.listen(5000,()=>{
    console.log(`server running at port 5000`)
})