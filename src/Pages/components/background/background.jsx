import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Background = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div className="">
                <img src={require('../Assets/b_img1.png')} alt="" className="" />
                <img src={require('../Assets/b_img1.png')} alt="" className="" />
                <img src={require('../Assets/b_img1.png')} alt="" className="" />
                <img src={require('../Assets/b_img1.png')} alt="" className="" />
                <img src={require('../Assets/b_img1.png')} alt="" className="" />
                <img src={require('../Assets/b_img1.png')} alt="" className="" />
            </div>
        </Slider>
    );
}



export default Background