import express from 'express';

const app = express();
app.use(express.json());

app.get('/productos', (req,res)=>{

});

app.get('/productos/:id', (req,res)=>{

});

app.post('/productos',(req,res)=>{
    
});

app.put('/productos/:id', (req,res)=>{
    
});

app.delete('/productos/:id', (req,res)=>{
    
});

app.listen(3000, ()=>{
    console.log('Server started on port 3000');
});