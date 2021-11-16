import ImageGallery from 'react-image-gallery';
import './MyGallery.css';

const MyGallery = ({items}) => {
    
    if(!items) {
        return null;
    }

    return (
        <>
            <ImageGallery items = {items}/>
        </>
    )
}

export default MyGallery;