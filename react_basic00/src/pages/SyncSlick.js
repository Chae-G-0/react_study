import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SyncSlick = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const set = {
        vertical: true,
        dots: false,
    }
    return (
        <>
            <Slider asNavFor={nav1} ref={(slider1) => setNav1(slider1)}>
                <div>A</div>
                <div>B</div>
                <div>C</div>
            </Slider>
            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} >
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Slider>
        </>
    );
};

export default SyncSlick;
