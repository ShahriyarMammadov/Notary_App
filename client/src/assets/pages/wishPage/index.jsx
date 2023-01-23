import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.scss";

const WishPage = () => {
  const FavData = useSelector((state) => state.favoriteReducer);
  const dispatch = useDispatch();
  return (
    <div className="fav">
      {FavData.map((e) => {
        return (
          <div className="fav">
            <div className="card">
              <div className="header">
                <img src={e?.state.img} alt="" />
                <h3>{e?.state.name}</h3>
                <p>{e?.state.vezife}</p>
              </div>

              <div className="text">
                <p>{e?.state.about}</p>
              </div>
              <Link to={`/detailPage/${e?.state._id}`}>MORE</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishPage;
