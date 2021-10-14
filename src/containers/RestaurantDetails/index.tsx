import React, { Component, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router"
import { restaurantFetchById } from "../../actions/restaurant";
import AppBarComponent from "../../components/AppBarComponent";
import {Card, Container, Img, Info, Name, OtherInfo, OtherInfoContainer} from "./style"


function RestaurantDetails(props:any):JSX.Element{
    //get login detail
    const history = useHistory()
   /*  useEffect(() => {
        const token = window.localStorage.getItem("token")

         if (token === null) {
            history.push("/login")
        } else
        {console.log('get restaurants')}
    },[])  */


    //get restaurantDetail information
    const restaurantId = props.history.location.state
    const  {data={restaurant:{products:[]}}}  = restaurantFetchById(`/restaurants/${restaurantId}`)
    console.log("restaurantById: ",restaurantId, " : ", data)

    //get all categories from that restaurant
    const allCategories = data.restaurant.products.map(el => {
        return el.category;
      });
    console.log("allCategories: ",allCategories)
    //eliminate the repeated categories
    const uniqueCategories = Array.from(new Set(allCategories));
    console.log(uniqueCategories)


    const  selectRestaurant  = data.restaurant
return(
        <div>
            <AppBarComponent title="Restaurante" imageDisplay={true} />
          {/*   <Container>
            <Card>

            <Img src={selectRestaurant.products.photoUrl} />
            <Info>
              <Name>{selectRestaurant.name}</Name>
              <OtherInfoContainer>
                <OtherInfo>{selectRestaurant.category}</OtherInfo>
              </OtherInfoContainer>
              <OtherInfoContainer>
                <OtherInfo>
                  {selectRestaurant.deliveryTime} - {selectRestaurant.deliveryTime + 10} min
                </OtherInfo>
                <OtherInfo>
                  Frete R$ {Number(selectRestaurant.shipping).toFixed(2)}
                </OtherInfo>
              </OtherInfoContainer>
              <OtherInfoContainer>
                <OtherInfo>{selectRestaurant.address}</OtherInfo>
              </OtherInfoContainer>
            </Info>
          </Card>
            </Container>
 */}
        </div>
    )
}



export default RestaurantDetails
