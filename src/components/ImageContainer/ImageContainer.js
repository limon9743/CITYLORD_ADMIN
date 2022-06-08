import React, { useState } from "react";
import "./ImageContainer.css";
import { List, arrayMove } from "react-movable";

const ImageContainer = () => {
  const [image, setImage] = useState(imageItems);
  //   const handleChange = (name) => {
  //     imageItems.push(name);
  //   };
  return (
    <>
      {/* <input type="file" onChange={handleChange}></input> */}
      <List
        values={image}
        onChange={({ oldIndex, newIndex }) =>
          setImage(arrayMove(image, oldIndex, newIndex))
        }
        renderList={({ children, props }) => <ul {...props}>{children}</ul>}
        renderItem={({ value, props }) => (
          <li {...props}>
            <div className="image-viewer-container">
              <img style={{ width: 100, height: 50 }} src={value} />

              <button
                className="image-delete-button-style"
                onClick={() => setImage(image.filter((item) => item !== value))}
              >
                Delete
              </button>
            </div>
          </li>
        )}
      />
    </>
  );
};

const imageItems = [
  "https://www.barchemagazine.com/wp-content/uploads/2021/01/Majesty-175-sea-trial-6-720x600.jpg",
  "https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtZXN8ZW58MHx8MHx8&w=1000&q=80",
  "https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png",
];

export default ImageContainer;
