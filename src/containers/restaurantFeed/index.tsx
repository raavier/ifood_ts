import React, { useContext, useEffect, useState } from "react"
import AppBarComponent from "../../components/AppBarComponent"
import { SearchField, SearchSection } from "../../components/Form/style"
import { ScrollableTabsButtonAuto } from "../ScrollableTab"
import { DivApp, ContainerRestaurantFeed } from './style'
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from "../../images/search.svg"
import  {RestaurantCard}  from "../../components/RestauranteCard"
import { useHistory } from "react-router"
import { useRestaurantFetch } from "../../actions/restaurant"
import RestaurantContext from "../../context/restaurants"



export function RestaurantFeed(props: any): JSX.Element {
    const [search, setSearch] = useState("")

    const handleInputSearch = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setSearch(event.target.value);
      };

    const  {data={restaurants:[]}}  = useRestaurantFetch('/restaurants')


    const history = useHistory()
    useEffect(() => {
    const token = window.localStorage.getItem("token")

    if (token === null) {
        history.push("/login")
    } else
    {console.log('get restaurants')}
},[])
const {state} = useContext(RestaurantContext)
console.log("categoria:",state.category)

const searchRestaurant = () => {
    return data.restaurants.filter(restaurant => {
      if (state.category === "Todos"){
        if (restaurant.name.toLowerCase().includes(search.toLowerCase())){
          return true
        }
      } else {
        if (restaurant.name.toLowerCase().includes(search.toLowerCase()) && restaurant.category === state.category) {
          return true
        }
      }
    })
  }

        const foundRestaurants = searchRestaurant()
        return (

            <div>
                <AppBarComponent title="iFuture" imageDisplay={false} />
                    <DivApp>
                        <SearchSection>
                            <SearchField
                            className="search"
                            variant="outlined"
                            placeholder="Restaurante"
                            onChange={handleInputSearch}
                            value={search}
                            InputProps={{
                                startAdornment:
                                <InputAdornment position="start">
                                    <img src={SearchIcon} alt="Search" />
                                </InputAdornment>
                            }}
                            >
                            </SearchField>
                        </SearchSection>
                        <ScrollableTabsButtonAuto />
                    </DivApp>
                    <ContainerRestaurantFeed >
                          {foundRestaurants.map((restaurant) => (
                            <RestaurantCard
                                key={restaurant.id}
                                id={restaurant.id}
                                restaurantTime={restaurant.deliveryTime}
                                restaurantShipping={restaurant.shipping}
                                restaurantName={restaurant.name}
                                restaurantImg={restaurant.logoUrl}
                            />
                        ))}
                    </ContainerRestaurantFeed>
            </div>
        )
    }

