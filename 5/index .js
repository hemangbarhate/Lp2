const express=require('express')
const mongoose=require('mongoose')
const songdetails=require('./music')


const app=express()

app.use(express.json())


const db="mongodb+srv://sejkhilari2002:sejal@cluster0.kziegwh.mongodb.net/students?retryWrites=true&w=majority"
const PORT=3000


//c.Insert array of 5 docs in collection
app.post('/add',async (req,res)=>{
    const {SongName,FilmName,Music_director,Singer}=req.body
    const songs=await songdetails.create({SongName,FilmName,Music_director,Singer})
    res.send(songs)
})

//d.display totla count and list of all docs in browser
app.get('/displayCountandDocuments',async (req,res)=>{
    const songs=await songdetails.find()
    res.send({'Total count':songs.length,songs})
})


//e.List specified directors song
app.get('/getSongsOfDirector/:directorName',async (req,res)=>{
    const directorName=req.params.directorName
    const songs=await songdetails.find({Music_director:directorName})
    res.send(songs)
})

//f.List specified Music director songs sung by specified singer
app.get('/getSongsOfDirectorAndSinger/:directorName/:singerName',async (req,res)=>{
    const directorName=req.params.directorName
    const singerName=req.params.singerName
    const songs=await songdetails.find({Music_director:directorName},{Singer:singerName})
    res.send(songs)
})

//g.delete the song which you do not like
app.delete('/delete/:songName',async (req,res)=>{
    const songName=req.params.songName
    const songs=await songdetails.deleteOne({songName:songName})
    res.send({message:"song is deleted successfully",songs})
})

// i. List Songs sung by Specified Singer from specified film.
app.get('/getSongsOfSingerAndFilm/:singerName/:filmname',async (req,res)=>{
    const singerName=req.params.singerName
    const filmname=req.params.filmname
    const songs=await songdetails.find({Singer:singerName},{FilmName:filmname})
    res.send(songs)
})

//j.update the doc by adding actor and actress
app.put('/updateActorAndActress',async (req,res)=>{
    const{songID,Actor,Actress}=req.body
    const song=await songdetails.findOneAndUpdate({_id:songID},{
        $set:{
            Actor,Actress
        }
    },{new:true})
    res.send(song);
})

//k.Display data in browser in tabular form
app.get('/displayAllSongsInTable',async (req,res)=>{
    const songs=await songdetails.find()

    let html="<table border=1 style='border-collapse:collapse'>"
    html=html+`<tr>
    <th>SongName</th>
    <th>Film</th>
    <th>Music_director</th>
    <th>Singer</th>
    <th>Actor</th>
    <th>Actress</th>
    </tr>`

    songs.map(function(song){
        html=html+"<tr>"

        html=html+"<td>"+song.SongName+"</td>"
        html=html+"<td>"+song.FilmName+"</td>"
        html=html+"<td>"+song.Music_director+"</td>"
        html=html+"<td>"+song.Singer+"</td>"
        html=html+"<td>"+song.Actor+"</td>"
        html=html+"<td>"+song.Actress+"</td>"

        html=html+"</tr>"
    })
    html=html+"</table>"

    res.send(html)
})



mongoose.connect(db).then(()=>{
    app.listen(PORT,function(){
        console.log("Database connected successfully and server is started");
        console.log('http://localhost:'+PORT)
    })
})
.catch((err)=>{
    console.log("problem to connect with database")
    console.log(err)
})