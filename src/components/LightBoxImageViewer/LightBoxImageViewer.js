import axios from "axios";
import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import "./LightBoxImageViewer.css";

const LightBoxImageViewer = () => {
  const [imageItem, setImageItem] = useState(imageData);

  // useEffect(() => {
  //   function getImagesData() {
  //     axios
  //       // .get(`https://api.clwapping.co.uk/api/admintocontractor/admintocontractors/${id}`)
  //       .get(
  //         "https://api.clwapping.co.uk/api/admintocontractor/admintocontractors/62646e44dadd79e08ce177ee"
  //       )
  //       .then((res) => {
  //         const data = res.data;
  //         const newData = () => {
  //           return {
  //             image: data.image1,
  //           };
  //         };
  //         setImageItem(newData);
  //       });
  //   }
  //   getImagesData();
  // }, [
  //   "https://api.clwapping.co.uk/api/admintocontractor/admintocontractors/62646e44dadd79e08ce177ee",
  // ]);
  // console.log(imageItem);

  return (
    <SRLWrapper>
      <div>
        {imageItem.map((item, index) => {
          return (
            <a href={item.image} key={index}>
              <img
                src={item.image}
                alt="Umbrella"
                className="image-viewer-each"
              />
            </a>
          );
        })}
      </div>
    </SRLWrapper>
  );
};

const imageData = [
  {
    image:
      "https://www.barchemagazine.com/wp-content/uploads/2021/01/Majesty-175-sea-trial-6-720x600.jpg",
  },
  {
    image:
      "https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtZXN8ZW58MHx8MHx8&w=1000&q=80",
  },
];

export default LightBoxImageViewer;
