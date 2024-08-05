import { Carousel, Image } from 'antd';
import './carouselFile.css';

const carouselStyle = {
    padding: '20px'
};

const CarouselFile = () => {
    return (
        <>
            <Carousel autoplaySpeed={3000} autoplay style={carouselStyle} className='carousal-div'>
                <div>
                    <Image className="carousel-image" src='https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1688556552%2FWebsite%2FCMS-Uploads%2FWeb_Banner_03_Desktop_1_vzb4dj.png&w=1920&q=75'/>
                </div>
                <div>
                    <Image className="carousel-image" src='https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1688556582%2FWebsite%2FCMS-Uploads%2FWeb_Banner_03_Desktop_3_mknpwg.png&w=1920&q=75'/>
                </div>
                <div>
                    <Image className="carousel-image" src='https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1688556616%2FWebsite%2FCMS-Uploads%2FWeb_Banner_Desktop_2_fukrjc.png&w=1920&q=75'/>
                </div>
                <div>
                    <Image className="carousel-image" src='https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1708063441%2FWebsite%2FCMS-Uploads-Test-Servers%2FS21_Desktop_Banner_1_qpksjk.jpg&w=1920&q=75'/>
                </div>
            </Carousel>
        </>
    );
}

export default CarouselFile;
