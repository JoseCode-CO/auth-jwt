import app from './app'
import morgan from 'morgan'
import productRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'

app.use(morgan('dev'))

app.listen(3000, () =>{
    console.log("Corriendo sin problemas")
});

app.use('/products', productRoutes)
app.use('/api/auth', authRoutes)
export default app;