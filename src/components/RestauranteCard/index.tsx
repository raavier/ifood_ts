import React, { ReactElement } from "react";
import { useHistory } from "react-router";
import { Card, Image, Img, Info, Name, OtherInfo, OtherInfoContainer,} from "./style";

interface PropsRestaurant {
    id:string,
    restaurantTime:number,
    restaurantShipping:number,
    restaurantName:string,
    restaurantImg:string
}

export function RestaurantCard(props:PropsRestaurant):ReactElement {
    const history = useHistory()
    const goToRestaurantDetails = (restaurantId:string) => {
        history.push("restaurant",restaurantId)
    }

    return (
      <Card
        onClick={() => {goToRestaurantDetails(props.id)}}
      >
        <Image>
          {/* se tivermos tempo, aprender o canvas */}
          <Img src={props.restaurantImg} />
        </Image>
        <Info>
          <Name>{props.restaurantName}</Name>
          <OtherInfoContainer>
            <OtherInfo>
              {props.restaurantTime} - {props.restaurantTime + 10} min
            </OtherInfo>
            <OtherInfo>Frete R$ {Number(props.restaurantShipping).toFixed(2)}</OtherInfo>
          </OtherInfoContainer>
        </Info>
      </Card>
    );
  }
