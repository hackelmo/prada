import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HoverButton } from "../Components/HoverButton";
import { __getCartList, __postCartList } from "../Redux/modules/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cartSlice);
  console.log(cartList);
  useEffect(() => {
    dispatch(__getCartList());
  }, []);
  return (
    <Padding>
      <Box></Box>
      {/* <button
        onClick={() => {
          dispatch(__postCartList());
        }}
      >
        asdfasdfas
      </button> */}
      <h1>쇼핑백</h1>
      <HowMuch>
        <div>
          <div>총액(2 상품) </div>
          <h2>₩ 7,970,000</h2>
        </div>
        <div>
          By proceeding with this payment, you accept the General Terms and
          Conditions of Sale and the Privacy Policy
        </div>
        <button>체크아웃 진행</button>
      </HowMuch>
      {cartList.map((el) => {
        return (
          <Stiv>
            <ImageBox image={`url()`} />
            <div>
              <div>싱글 브레스티드 더블 새틴 재킷</div>
              <div>P516N_393_F0009_S_231</div>
              <div>색상: 화이트</div>
              <div>사이즈: 40</div>
              <button>상품 수정</button>
              <button>삭제</button>
            </div>
            <div>수량 : 1</div>
            <div>₩ 6,000,000</div>
          </Stiv>
        );
      })}

      <Stiv>
        <ImageBox />
        <div>
          <div>싱글 브레스티드 더블 새틴 재킷</div>
          <div>P516N_393_F0009_S_231</div>
          <div>색상: 화이트</div>
          <div>사이즈: 40</div>
          <button>상품 수정</button>
          <button>삭제</button>
        </div>
        <div>수량 : 1</div>
        <div>₩ 6,000,000</div>
      </Stiv>
      <Desc>
        <div>
          모든 주문은 배송 가능한 제품의 재고가 있을 경우에 한해 생성되며 3~5
          영업일 내에 처리 됩니다. 예상 배송완료 기간은 실제 배송일 이후 확인
          가능합니다. 주문 완료 후 고객님께 전달되는 운송장번호를 통해서 배송
          상태를 조회하실 수 있습니다. 제품 수령일로부터 14일 이내에 당사 지정
          배송 업체를 통해서 무상으로 반품하실 수 있습니다. 맞춤 제작된 상품은
          주문 확인 후 30일 이내에 배송됩니다. 맞춤 제작된 제품은 맞춤 설정 시
          선택한 스타일과 수령한 제품이 다른 경우에만 반품할 수 있습니다. 도움이
          필요하세요? 문의처: 080-522-7199 월요일 - 일요일 9:30-18:30 (KST) 쇼핑
          계속하기
        </div>
        <div>도움이 필요하세요?</div>
        <div>문의처: 080-522-7199</div>
        <div>월요일 - 일요일 9:30-18:30 (KST)</div>
        <HoverButton
          onClick={() =>
            navigate("/women/ready_to_wear?category=jackets_and_coats")
          }
        >
          쇼핑 계속하기
        </HoverButton>
      </Desc>
    </Padding>
  );
};

export default Cart;

const Box = styled.div`
  width: 100%;
  height: 50px;
`;

const Padding = styled.div`
  width: 1140px;
  margin: 0 auto;
  padding: 30px;
`;

const Stiv = styled.div`
  width: 815px;
  height: 235px;

  display: flex;
  flex-direction: row;
  & div {
    margin-right: 60px;
  }
`;

const HowMuch = styled.div`
  height: 290px;
  border: 1px solid green;
  width: 320px;
  position: absolute;
  right: 17vw;
`;

const ImageBox = styled.div`
  width: 150px;
  height: 190px;
  background-image: ${(props) => props.image || ""};
  background-size: cover;
`;

const Desc = styled.div`
  margin-top: 40px;
  font-size: 13px;
  line-height: 22px;
  & div {
    margin-bottom: 20px;
  }
`;
