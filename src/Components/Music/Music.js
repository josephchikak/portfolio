import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import './music.css';
import song1 from './songs/song1.JPG';
import song2 from './songs/song2.jpg';
import song3 from './songs/song3.jpg';
import song4 from './songs/song4.JPG';
import song5 from './songs/song5.JPG';
import song6 from './songs/song6.jpg';
// import twitter from './icons/1521991_twitter_bird_media_network_online_icon.png';
// import insagram from './icons/1522013_instagram_connection_media_network_share_icon.png';
// import youtube from './icons/1521984_tube_you_research_youtube_media_icon.png';
import spotify from './icons/1521995_spotify_connection_media_network_social_icon.png';
import apple from './icons/1314139_app_apple_display_itunes_music_icon.png';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const Music = () =>{

  const songList =[song1, song2, song3, song4, song5, song6];
  const appleMusicLinks =["https://music.apple.com/ua/album/run-boy-run/1619104886", "https://music.apple.com/ua/album/bahtshit-feat-raytheboffin/1648839631?i=1648839632",'https://music.apple.com/ua/album/a-riverays-two-pack-ep/1592122193','https://music.apple.com/ua/album/one-for-the-books-single/1638715878', "https://music.apple.com/ua/album/fist-up-feat-raytheboffin-single/1611803409","https://music.apple.com/ua/album/dusk-noisy-dusk/1556462341?i=1556462343" ];
  const spotifyLinks =["https://open.spotify.com/album/1wDia3xzNcoGtQofuxPCD0?si=6Sevc4KTR6ib16_1WwfA5w", "https://open.spotify.com/album/75AjNq4pJf8vQCUCRsTh8Q?si=Fc8R-TTATzWMnk39RBo1Hg" ,'https://open.spotify.com/album/5efFYlnHceJBoYW0g67qxH?si=Ju--6bS_SdegNl5Ws9oa_Q', "https://open.spotify.com/album/1JiA9En5SDlnoOgdCO1WpI?si=_B4HHA_oQjOYbf9CWqPvLA", "https://open.spotify.com/album/1LE79BA6v4QVAwdSFM95pc?si=99yBeyzhTDWjDTBaX1iGFA", "https://open.spotify.com/album/7jFrAUYKT2a7nkzMMRlxCB?si=PtEHTe_DSgqaZyZmo-dicg"];
  
  const comp = useRef();
    const tl =useRef();
    useEffect(()=> {
        let ctx = gsap.context(() => { 
            gsap.from('.song', { duration: 1.5, x:'-100vh', ease:'power.out'})  
            tl.current =gsap.timeline({defaults: {duration: 0.5}})
             .from('#manga', {x:'100%', })
             .from('#manga2', {x:'100%',})
             .from('#manga3', {x:'100%',})  
        },comp)
         return () => ctx.revert();
    },[])


 return(
 <div id="music2">
    <div ref={comp} className='cover'>
  <div className="content"  >
    <div className="landing">
    <h2 className="text-2xl font-bold" style={{textAlign:'center', padding:'2em', color:'white'}}>MUSIC</h2>
       
         <div className="songs" id="music2">
          {songList.map((song,i) =>{
            return (<div className="song" key={i}> <img src={song} alt='coverArt'/> 
            <div className="songLink"> 
            <a href={spotifyLinks[i]} target="_blank" rel="noreferrer"> <img className="linkIcon" src={spotify} alt="spotify"/></a>
            <a href={appleMusicLinks[i]} target="_blank" rel="noreferrer"> <img className="linkIcon" src={apple} alt="appleMusic"/></a>
            </div>
            </div>)
          })}
        </div>
      </div>   
   
          
     {/* <footer id='footer'>
        <div className="icons">
          <a href="https://www.instagram.com/raytheboffin/"><img className="social" src={insagram} alt='instagram'/></a>
          <a href="https://twitter.com/raytheboffin/status/1524995541335257089?s=46&t=-wYI8c2vYZsHooEFIBdbaw"><img className="social" src={twitter} alt='twitter'/></a>
          <a href="https://youtu.be/GYnS79-GB24"><img className="social" src={youtube} alt='youtube'/></a> 
        </div>
     </footer> */}
     </div>
    </div>

 </div>
  

 )

}

export default Music;