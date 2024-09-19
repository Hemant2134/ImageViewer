import React, { useState } from 'react';
import './ImageViewer.css';

const images = [
  'https://wallpaperaccess.com/full/1143632.jpg',
  'https://th.bing.com/th/id/OIP.XaKQlHA8BGsQ9egHrw1b4wHaEo?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.R1kovvxAE93Ze25eLJcBowHaEK?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.y1YRirJHdp7UsbKlD4DpigHaEo?rs=1&pid=ImgDetMain',
  'https://i.icanvas.com/11584?d=2&sh=h&s=s&p=1&bg=g&t=1720578276',
];

const ImageViewer = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="image-viewer">
      <div className="main-preview">
        <img src={selectedImage} alt="Selected" className="main-image" />
      </div>
      <div className="thumbnail-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className="thumbnail"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
