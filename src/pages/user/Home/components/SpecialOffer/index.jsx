import { Button, Carousel } from "antd";
import { useEffect, useMemo } from "react";
import qs from "qs";
import { Link, generatePath, useNavigate } from "react-router-dom";
import { PRODUCT_DISCOUNT } from "constants/paging";
import { getDiscountProductListRequest } from "redux/slicers/product.slice";

import * as S from "./style";
import { ROUTES } from "constants/routes";
import { useDispatch, useSelector } from "react-redux";

function SpecialOffer() {
  const { productDiscountList } = useSelector((state) => state.product);
  const { data } = productDiscountList;

  const groupSpecialOffer = [];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getDiscountProductListRequest({
        limit: PRODUCT_DISCOUNT,
        discountOrder: "desc",
      })
    );
  }, []);
  // Giảm giá sốc
  for (let i = 0; i < data.length; i += 4) {
    groupSpecialOffer.push(data.slice(i, i + 4));
  }
  const renderSpecialOffer = useMemo(() => {
    return groupSpecialOffer.map((group, index) => {
      return (
        <S.DiscountList key={index} gutter={[16, 16]}>
          {group.map((item, index) => {
            return (
              <S.ProductDiscountItem md={6} xs={12} key={index}>
                <Link
                  to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}
                >
                  <S.ImageWrapper>
                    <S.Image src={item.image}></S.Image>
                  </S.ImageWrapper>
                  <S.Information>
                    <S.Heading>
                      {item.category.name.toUpperCase()}
                      <S.Decribe> {item.name}</S.Decribe>
                    </S.Heading>
                    <S.Price>
                      <S.Discount discount={item.discount}>
                        Giảm {item.discount}%{" "}
                      </S.Discount>
                    </S.Price>
                  </S.Information>
                </Link>
              </S.ProductDiscountItem>
            );
          })}
        </S.DiscountList>
      );
    });
  }, [data]);
  return (
    <S.DiscountListWrapper>
      <S.HeadingDiscountList>
        <h1>KHUYẾN MÃI ĐẶC BIỆT</h1>
        <Button
          onClick={() =>
            navigate({
              pathname: ROUTES.USER.PRODUCT_LIST,
              search: qs.stringify({
                discountOrder: "desc",
              }),
            })
          }
        >
          TẤT CẢ ƯU ĐÃI
        </Button>
      </S.HeadingDiscountList>
      <Carousel
        style={{ width: "100% " }}
        autoplay
        dots
        dotPosition={"top"}
        autoplaySpeed={3000}
      >
        {renderSpecialOffer}
      </Carousel>
    </S.DiscountListWrapper>
  );
}

export default SpecialOffer;