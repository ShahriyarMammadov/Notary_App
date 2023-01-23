import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAction, usersAction } from "../../../redux/action/user.action";
import { Link } from "react-router-dom";
import { Collapse } from "antd";
const { Panel } = Collapse;
import { Input } from "antd";
import "./index.scss";
import { favAction } from "../../../redux/action/favorite.action";
const { Search } = Input;
import axios from "axios";

const HomePage = () => {
  const [toggle, setToggle] = useState(true);
  const UsersData = useSelector((state) => state.usersReducer);
  const FavData = useSelector((state) => state.favoriteReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersAction());
  }, []);

  const onChange = (key) => {
    console.log(key);
  };
  console.log(FavData);
  const handleWish = (e) => {
    dispatch(favAction(e));
    FavData?.filter((element) => {
      element.name === e.name ? console.log("var") : console.log("yoxdu");
    });
  };

  const onSearch = (value) => {
    console.log(value);
  };

  const handleSearch = async (value) => {
    let response = await axios.get(`http://localhost:3000/users`);
    let search = response?.data?.filter((e) =>
      e.name.toLowerCase().includes(value.target.value.toLowerCase())
    );
    dispatch(searchAction(search));
  };

  const handleSort = () => {
    if (toggle) {
      setToggle(false);
      let sortData = UsersData?.data?.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
      dispatch(searchAction(sortData));
    } else {
      setToggle(true);
      let sortData = UsersData?.data?.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
      );
      dispatch(searchAction(sortData));
    }
  };

  FavData.find((e) => {});

  return (
    <div id="home">
      <section id="section1">
        <div className="text">
          <h1>Notary Public & Legal Solutions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi
            odio aliquid, accusamus.
          </p>
        </div>
      </section>

      <section id="section2">
        <div className="header">
          <h1>
            Practise <span>Areas</span>
          </h1>
          <p>lorem ipsum dolor sit amet consdfasf adipasjda elit..</p>
        </div>

        <div className="cards">
          <div className="top">
            <div className="card">
              <div className="icon">
                <i class="fa-solid fa-building-columns"></i>
              </div>
              <h1>Bankruptey Law</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, quibusdam?
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <i class="fa-solid fa-shield"></i>
              </div>
              <h1>Bankruptey Law</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, quibusdam?
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <i class="fa-solid fa-hand"></i>
              </div>
              <h1>Bankruptey Law</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, quibusdam?
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="card">
              <div className="icon">
                <i class="fa-solid fa-gun"></i>
              </div>
              <h1>Bankruptey Law</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, quibusdam?
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <i class="fa-solid fa-plane"></i>
              </div>
              <h1>Bankruptey Law</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, quibusdam?
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <i class="fa-solid fa-house"></i>
              </div>
              <h1>Bankruptey Law</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, quibusdam?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="section3">
        <div className="left">
          <img
            src="https://preview.colorlib.com/theme/notary/images/atty_1.jpg"
            alt="image"
          />
          <img
            src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg"
            alt="image"
          />
        </div>

        <div className="right">
          <div className="header">
            <h1>We Provide Highly Reliable & Effective Legal Solutions</h1>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium cumque numquam at libero ipsam porro veritatis, vero
              nulla deleniti delectus rerum vel labore dolore. Pariatur eum sed
              eaque laboriosam? Labore laudantium excepturi aperiam ullam animi
              natus rem molestiae a blanditiis suscipit, sed obcaecati.
              Explicabo eaque excepturi labore, perspiciatis quaerat ab.
            </p>
          </div>

          <button>Book an appointment</button>
        </div>
      </section>

      <section id="section4">
        <div className="header">
          <h1>Happy Customers</h1>
        </div>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onChange={handleSearch}
          onSearch={onSearch}
        />
        <button
          onClick={() => {
            handleSort();
          }}
        >
          Sort By Name
        </button>
        <div className="usersCards">
          {UsersData?.data?.map((e) => {
            return (
              <div className="card">
                {FavData?.find((ed) => {
                  ed.state.name === e.name;
                }) ? (
                  <>
                    <i
                      class="fa-solid fa-heart"
                      style={{
                        cursor: "pointer",
                        fontSize: "22px",
                        color: "red",
                      }}
                      onClick={() => {
                        handleWish(e);
                      }}
                    ></i>
                  </>
                ) : (
                  <i
                    class="fa-solid fa-heart"
                    style={{
                      cursor: "pointer",
                      fontSize: "22px",
                    }}
                    onClick={() => {
                      handleWish(e);
                    }}
                  ></i>
                )}
                <div className="header">
                  <img src={e?.img} alt="" />
                  <h3>{e?.name}</h3>
                  <p>{e?.vezife}</p>
                </div>

                <div className="text">
                  <p>{e?.about}</p>
                </div>

                <Link to={`/detailPage/${e._id}`}>MORE</Link>
              </div>
            );
          })}
        </div>
      </section>

      <section id="section5">
        <div className="left">
          <img
            src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg"
            alt=""
          />
        </div>

        <div className="right">
          <div className="flex">
            <div className="rightLeft">
              <div className="header">
                <h1>
                  We Have <span>Legal Solutions</span>
                </h1>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                ratione officiis sequi natus doloremque qui ex fugiat facere
                debitis, error tenetur tempora cupiditate! Tempora eveniet
                maiores adipisci impedit sint ut alias. Maxime quaerat placeat
                impedit id exercitationem. Delectus distinctio molestias
              </p>
              <p className="pTag">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque vero est autem officia enim numquam sit, nam, magni
                sequi consectetur quis. Culpa blanditiis ratione suscipit,
                deserunt soluta error eaque incidunt ullam optio! Consectetur
                nemo enim nostrum, veniam hic non optio.
              </p>

              <div className="text">
                <i class="fa-solid fa-check"></i>
                <span>Aperiam iste nam molestias</span>
                <i class="fa-solid fa-check"></i>
                <span>Modi Perferendis</span>
                <i class="fa-solid fa-check"></i>
                <span>Perspic iste culpa</span>
              </div>
            </div>

            <div className="rightRight">
              <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                <Panel header="How to download and register?" key="1">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt quisquam repellat veritatis deleniti reiciendis
                    porro natus voluptate sapiente rerum quis nostrum modi,
                    optio, ipsum, eos recusandae esse quaerat! Pariatur vel
                    voluptate ut ipsam nisi in architecto? Dignissimos error
                    minus expedita!
                  </p>
                </Panel>
                <Panel header="How to create your paypal account?" key="2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque inventore unde perspiciatis quidem totam asperiores
                    accusantium maiores nemo, sequi labore quos. Exercitationem,
                    eius laborum? Odit impedit fugiat pariatur dignissimos odio
                    neque ut, quo fuga vel ipsam adipisci maxime doloribus est!
                  </p>
                </Panel>
                <Panel
                  header="How to create your paypal and bank account?"
                  key="3"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi porro magni ut autem beatae, tenetur eos aliquid est,
                    quidem voluptatum, obcaecati culpa nemo doloremque illum
                    ipsa quod! Maxime quas possimus dolorum animi molestiae odit
                    commodi in, blanditiis, laboriosam dolores veritatis.
                  </p>
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
