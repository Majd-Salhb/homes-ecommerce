import { useState } from "react";
import { data } from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

export default function product() {
  const [index, setIndex] = useState(0);
  const { img, title } = data[index];
  const checkNumber = (number: number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  const nextCard = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevCard = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <ProductWrapper className=" col-10 col-sm-6 mx-auto ">
      <div className="card">
        <div className="img-container ">
          <img src={img} alt="" className="card-img-top" loading="lazy" />
          <div className="cart-btn">
            <button onClick={prevCard}>
              <FaChevronLeft />
            </button>
            <button onClick={nextCard}>
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center font-bold mb-0">{title}</p>
          <button className="btn btn-warning">Get A Quote</button>
        </div>
      </div>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  .card {
    border-color: hsl(22, 32%, 83%);
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-around;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: skyblue;
    border: none;
    color: white;
    font-size: 1.4rem;

    transform: translate(0, 100%);
    transition: all 1s ease-in-out;
  }
  .cart-btn button {
    margin-left: 0.3rem;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn button:hover {
    color: black;
    cursor: pointer;
  }
`;
