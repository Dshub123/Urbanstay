import "./featured.css";

const Featured = () => {
  return (

    <div className="featured">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={"https://images.pexels.com/photos/4907226/pexels-photo-4907226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} class="d-block w-100 " alt="..." />
          </div>
          <div class="carousel-item">
            <img src={"https://images.pexels.com/photos/4907210/pexels-photo-4907210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={"../../images/hostelbanner.jpg"} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      {/*     
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Pune</h1>
        </div>
       </div> */}

    </div>

  );
};

export default Featured;
