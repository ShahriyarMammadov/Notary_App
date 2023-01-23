import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./index.scss";
import { Button, Popconfirm } from "antd";
import { Helmet } from "react-helmet";

const DetailPage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    axios.delete(`http://localhost:3000/users/${id}`);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      nav("/");
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const detailData = async () => {
    let response = await axios.get(`http://localhost:3000/users/${id}`);
    setData(response.data);
  };
  useEffect(() => {
    detailData();
  }, []);

  return (
    <div className="detail">
      <Helmet>
        <meta charSet="utf-8" />
        <title>DetailPage</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <img src={data?.img} alt="" />

      <div className="aboutText">
        <h2>Name: {data?.name}</h2>
        <p>Position: {data?.vezife}</p>
        <p>About: {data?.about}</p>
      </div>
      <Popconfirm
        title="Delete User??"
        description="Open Popconfirm with async logic"
        open={open}
        onConfirm={handleOk}
        okButtonProps={{
          loading: confirmLoading,
        }}
        onCancel={handleCancel}
      >
        <Button type="primary" onClick={showPopconfirm}>
          Delete User
        </Button>
      </Popconfirm>
    </div>
  );
};

export default DetailPage;
