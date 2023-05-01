import React, { useState } from "react";
import "./style.css";
import image1 from "../../images/web33.jpg";
import Table from "../Table";
import Table2 from "../Table/table2";
import DemoLine from "../Graph";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button, DatePicker, Select } from "antd"
import { useNavigate, Route, Routes } from "react-router-dom";

function Index() {
  
const navigate = useNavigate()

  const { RangePicker } = DatePicker;
  // const [selectedItem, setSelectedItem] = useState("Graphic 1");
  const items = [
    {
      label: "Graphic 1",
      key: "1",
    },
    {
      label: "Graphic 2",
      key: "2",
    },
    {
      label: "Graphic 3",
      key: "3",
    },
    {
      label: "Graphic 4",
      key: "4",
    },
  ];
  const onClick = ({ key }) => {
    navigate(`graph/${key}`)
  };

  const mapSrc =
    "https://www.google.com/maps/d/u/0/embed?mid=1ouB6FNk5LHLe2dVlnu4vlwqPHGYuMi0&ehbc=2E312F";

  return (
    <div className="outheader">
      <div>
        <h2 className="bigheader">Municipal Water Supply Company</h2>

        <div className="h1">
          <div className="h1i1">
            <h4 className="header1">Station Location</h4>
            <iframe className="imagein" title="Gmap" src={mapSrc} />
          </div>

          <div className="h1i2">
            <h4 className="header1">Station Photos</h4>
            <img className="imagein" src={image1} alt="" />
            {/* <img className='imagein' id="image" src='' alt=''/> */}
          </div>
        </div>

        <div className="tables">
          <Table />
          <div style={{ marginTop: "30px" }}>
            <Table2 />
          </div>
        </div>
      </div>
      <div className="Graphline">
        <Button style={{ marginBottom: "20px" }}>
          <Dropdown
            menu={{
              items,
              onClick,
            }}
            defaultSelectedKeys={[items[0].key]} // set default selected key to the first item
          > 
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Charts
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Button>

        <RangePicker style={{marginTop : "20px"}} />
        <Button type="primary">Refresh</Button>
        {/* <DemoLine /> */}
           
        <Routes>
                <Route path="/graph/:id" element={<DemoLine/>} />
              </Routes>
        
      </div>
    </div>
  );
}
export default Index;
