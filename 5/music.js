const mongoose=require('mongoose')

const MusicSchema=new mongoose.Schema({
    SongName:String,
    FilmName:String,
    Music_director:String,
    Singer:String,
    Actor:String,
    Actress:String
})


module.exports=mongoose.model('songdetails',MusicSchema)