// Asynchoronus Way ........

const fs = require('fs');
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

 fs.readFile('./thapaTechnical/munna.txt', 'utf-8',( err , data) =>{
    // console.log(err)
    console.log(data)
});
console.log('file read successfully');