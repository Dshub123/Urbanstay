import "./featuredProperties.css";

export default function FeaturedProperties() {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="C:\Users\LENOVO\Desktop\hostel C:\Users\LENOVO\Desktop\hostel imagesC:\Users\LENOVO\Desktop\hostel imagesC:\Users\LENOVO\Desktop\hostel imagesC:\Users\LENOVO\Desktop\hostel imagesC:\Users\LENOVO\Desktop\hostel imagesC:\Users\LENOVO\Desktop\hostel imagesC:\Users\LENOVO\Desktop\hostel images"
          alt=""
          className="fpImg"
        />
        <span className="fpName">MGM Hostel</span>
        <span className="fpCity">Pune</span>
        <span className="fpPrice">Starting from 2300</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">GPA Hostel</span>
        <span className="fpCity">Pune</span>
        <span className="fpPrice">Starting from 2500</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Shivaji Hostel</span>
        <span className="fpCity">Pune</span>
        <span className="fpPrice">2700</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Hostel</span>
        <span className="fpCity">Pune</span>
        <span className="fpPrice">2600</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};


