import React, { useEffect, useState } from "react";
import axios from "axios";

import { Table, Space, Tag, ConfigProvider } from "antd";




export default function Content(){

  const [tableData, setTableData] = useState(null)

  async function getEmployees() {
    try {
      const response = await axios.get('http://54.209.119.45:9000/users/employees',
        {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response);
      setTableData(response.data); // Use response.data to access the data
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  }

  useEffect(() => {
    getEmployees(); // Directly call the function
  }, []); // Empty dependency array to run only once on mount


  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <p >{text}</p>,
    },{
      title: 'firstName',
      dataIndex: 'firstName',
      key: 'firstName',
      render: (text) => <p >{text}</p>,
    },{
      title: 'lastName',
      dataIndex: 'lastName',
      key: 'lastName',
      render: (text) => <p >{text}</p>,
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'password',
      dataIndex: 'password',
      key: 'password',
    },
    
  ];
  const data = tableData;

    return(
        <ConfigProvider theme={{
          components:{
            Table:{
              headerBg:"rgb(92, 131, 116)",
              headerColor:"#ffffff",
              rowHoverBg:"rgb(225, 235, 231)",
              colorBgContainer:"rgb(245, 255, 251)",
              // colorText:"#ffffff",
              linkDecoration:"none",
              borderColor:"rgba(255,255,255,0.3)",
              colorLink:"#fff",
              
            },
        },
        }}>
        <div className="employees">
            
            <h2 className="text1">Employees Table</h2>
            <div className="table" >
                <Table  columns={columns}  dataSource={data} className="center-screen" />;
                
            </div>
                        
        </div>
        </ConfigProvider>
    )
}