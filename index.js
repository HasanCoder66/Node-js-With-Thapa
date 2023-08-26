// Asynchoronus Way ........

// const fs = require('fs');
// const text = 'Hello Maha Thapa)'
// const bio = 'Hello Maha Thapa Aaj kal tmhara dil nhi lag raha parhanay mai ye tmhay kon bol raha hai muhammad hasan ashraf)'


// fs.writeFileSync('./thapaTechnical/text.txt',text);
// fs.appendFileSync('./thapaTechnical/text.txt',bio)
// const readDataInConsole = fs.readFileSync('./thapaTechnical/text.txt', 'utf-8')
// // console.log(readDataInConsole);

// fs.renameSync('./thapaTechnical/text.txt','./thapaTechnical/MyBio.txt')
// fs.unlinkSync('./MyBio.txt')


// Synchoronus Way .......

// fs.readFile('./thapaTechnical/MyBio.txt',(err)=>{
// console.log("File has beeen created")
// })

// fs.appendFile('./thapaTechnical/MyBio.txt', 'Please hasan ashraf parh lia ker yaar tujhy bohat kuch kerna hai',(err)=>{
// console.log("TAsk has beeen completed")
// })


// fs.readFile('./thapaTechnical/MyBio.txt','utf-8',(err,data)=>{
// console.log(data)
// console.log("File has beeen created")
// })



// Challenge # 2

// fs.writeFile('./thapaTechnical/munna.txt', 'data gaya is mai muhammad hasan ashraf ',(err)=>{
// console.log('File has been Created')
// })

// fs.appendFile('./thapaTechnical/munna.txt' ,'Bhai jaan data append kerwadiya gaya hai okkkkk...... mabrook',(err)=>{
//     console.log('Text has been Append')

// })

//  fs.readFile('./thapaTechnical/munna.txt', 'utf-8',( err , data) =>{
//     // console.log(err)
//     console.log(data)
// });
// console.log('file read successfully');




// const port = process.env.port || 8000;

// app.get('/' , (req , res ) => {
//     res.send('Hello Express js Server i am live here ');
// });

// const func = async () => {
//     try {
//         app.listen(port , (req , res) => {
//             console.log(`${port} pai chal raha hai jany`);
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

// func()



// thapa kai sath working pori jarahi hai 

// 1>>>>>>> vedio

// const start = async  () => {
//     try {
//         app.listen(PORT , () => {
//             console.log(`${PORT} Pai chal raha hai `);
//         });
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()


// import productsRoutes from "./routes/index.js"

// console.log(app) 


// app.use((req, res, next) => {
//     res.send(`I am live on this port ===>>> ${PORT}`)
//     next()
// })

// import ('dotenv').config();
import experss from 'express'
import { connectDb } from './db/database.js'
import authRoutes from './routes/authRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
const app = experss()
const PORT = 8500;
app.use(experss.json())
app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

connectDb()
app.listen(PORT, () => {
    console.log(`I am live on this port ===>>> ${PORT}`)
})
// app.use('/getData', profileRoutes)
// app.use('/profile', profileRoutes)

// app.get('/', (req, res) => {
//     res.send("Hello World");
// });

// const start = async () => {
//     try {
//        await connectDb()
//        app.listen(PORT , ()=> {
//         console.log(`server is live on port ${PORT} `)
//        })
//     } catch (error) {
//         console.log(error)
//     }
// }
// start()

// 2>>>>>> vedio
// app.use('/api/test', productsRoutes)


