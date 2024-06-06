import { CarouselCards } from "@ussebastian/kitdigital-react/dist/uss-react.es.js";

const Carousel=()=> {
    const GetImage=(key)=>{
        const img=[
          {key:0,img:"https://m.media-amazon.com/images/I/61Hj5BHApPL.jpg"},
            { key:1, img:"https://cdn02.plentymarkets.com/qozbgypaugq8/item/images/1613/full/PSTR-ZELDA005.jpg"},
            {key:2, img: "https://preview.redd.it/new-game-cover-from-larians-website-v0-m2lmw222h0ka1.png?auto=webp&s=ba904ad42906960a96a70ce1c27ee6d3ff5edead"},
            {key:3, img:"https://assets.vg247.com/current//2018/05/red_dead_redemption_2_cover_art_1.jpg"},
            {key:4, img:"https://m.media-amazon.com/images/I/616+j9jEM4L._AC_UF894,1000_QL80_.jpg"},
            {key: 5, img: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"},
            {key: 6, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiFdJaO36WcXq4T0lWMF84EN8YncqvB77xA&s"},
            {key: 7, img:"https://images.saymedia-content.com/.image/t_share/MTc0NDU1NjY0NjQxNzEzNTEy/super-mario-odyssey-review-for-nintendo-switch.jpg"},
            {key:8, img:"https://sm.ign.com/ign_es/game/l/league-of-/league-of-legends_q2kj.png"},
            {key: 9, img:"https://upload.wikimedia.org/wikipedia/en/0/0c/Boxshot_of_video_game_Project_zomboid.jpg"}
        ]

        const imagen=img.filter(imgn=>imgn.key==key);
      
        return imagen[0].img;
    }
  return (
    <section className="container">
      <div className="m-16">
        <CarouselCards visibleItems={5}>
          {Array.from({ length: 10 }, (_, index) => index).map((_, key) => (
            <div key={key}>
              
              <div style={{width:"100%",overscrollBehaviorY:"none",backgroundSize:"100%"}}>
                <img style={{objectFit:"contain",width:"100%",height:500}} src={GetImage(key)} alt="footo" />
              </div>
              <div className="mt-12">
                <a
                  href="#"
                  className="uss-btn uss-btn--tertiary flex align-items-center"
                >
                  Lorem ipsun
                  <i className="uss-icon ri-arrow-right-line"></i>
                </a>
                <p>link</p>
              </div>
            </div>
          ))}
        </CarouselCards>
      </div>
    </section>
  );
}
export default Carousel;