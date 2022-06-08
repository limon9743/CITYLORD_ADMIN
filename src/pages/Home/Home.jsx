import React from "react";
import Chart from "../../components/chart/Chart";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import "./home.css";
import { userData } from "../../dammyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Calender from "../../components/Calender/Calender";
import AddFormPract from "../../components/AddFormPract/AddFormPract";
import PropertyImageList from "../../components/PropertyImageList/PropertyImageList";
import DialogBoxForAdmin from "../../components/DialogBoxForAdmin/DialogBoxForAdmin";
import ImageGridWithDialog from "../../components/ImageGridWithDialog/ImageGridWithDialog";
import LightBoxImageViewer from "../../components/LightBoxImageViewer/LightBoxImageViewer";
import ImageContainer from "../../components/ImageContainer/ImageContainer";

const Home = () => {
  return (
    <div className="home">
      <Featuredinfo />
      <Calender />
      <Chart data={userData} title="Performance" dataKey="user" grid />
      {/* <AddFormPract /> */}
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
      {/* <PropertyImageList /> */}
      {/* <DialogBoxForAdmin /> */}
      {/* <ImageGridWithDialog /> */}
      {/* <LightBoxImageViewer />
      <ImageContainer /> */}
    </div>
  );
};

export default Home;
