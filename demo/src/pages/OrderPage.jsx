import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import SidebarComponent from "../components/SidebarComponent";
import Swal from "sweetalert2";

export default function OrderPage() {
  const [commoditys, setCommodity] = useState([]);
  const [order, setOrder] = useState("");
  const [price, setPrice] = useState("");
  const [volume, setVolume] = useState("");
  const [commodityid, setCommodityid] = useState("");
  const member_id = JSON.parse(localStorage.getItem("member_id"));


  const orderinsert = async () => {
    try {
      if (price == "" && volume == "") {
        Swal.fire("Failed", "password", "error");
      } else {
        await axios.post(``, {
          member_id: member_id,
          commodity_id: commodityid,
          order: order,
          price: price,
          volume: volume
        });
      }
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  useEffect(() => {
    getCommodity();
  }, []);

  const getCommodity = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/api/commodity`);
      setCommodity(result.data);
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  return (
    <div className="wrapper">
      <NavbarComponent />
      <SidebarComponent />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Order Page</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Order Form</h3>
                  </div>
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                        Order
                      </label>
                      <div className="col-sm-10">
                        <select
                          type="text"
                          className="form-control"
                          id="inputEmail3"
                          placeholder="Email"
                          onChange={(e) => setOrder(e.target.value)}
                        >
                          <option>Buy</option>
                          <option>Sell</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 col-form-label"
                      >
                        Commodity
                      </label>
                      <div className="col-sm-10">
                        <select
                          type="text"
                          className="form-control"
                          placeholder="Wood"
                          onChange={(e) => setCommodityid(e.target.value)}
                        >
                          {commoditys.map((commodity, i) => (
                            <option key={i} value={commodity.commodity_id}>
                              {commodity.commodity}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 col-form-label"
                      >
                        Price (THB)
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 col-form-label"
                      >
                        Volume (MT)
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          onChange={(e) => setVolume(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                    <button
                      type="submit"
                      className="btn btn-default float-right"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterComponent />
    </div>
  );
}
