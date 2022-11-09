import app from './app'
import morgan from 'morgan'
import productRoutes from './routes/products.routes'

app.use(morgan('dev'))

app.listen(3000, () =>{
    console.log("Corriendo sin problemas")
});

app.use('/products', productRoutes)
export default app;