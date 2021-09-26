import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { List } from "react-native-paper";
import { RestaurantInfo } from "components/RestaurantInfo";
import { Props } from "./Props";

const RestaurantDetailScreen: React.FC<Props> = ({ route }) => {
  const { restaurant } = route.params;

  const [expandBreakfast, setExpandBreakfast] = useState<boolean>(false);
  const [expandLunch, setExpandLunch] = useState<boolean>(false);
  const [expandDinner, setExpandDinner] = useState<boolean>(false);
  const [expandDrinks, setExpandDrinks] = useState<boolean>(false);

  return (
    <SafeAreaView>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          expanded={expandBreakfast}
          onPress={() => setExpandBreakfast(!expandBreakfast)}
          left={(props) => <List.Icon icon="bread-slice" {...props} />}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="English Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          expanded={expandLunch}
          onPress={() => setExpandLunch(!expandLunch)}
          left={(props) => <List.Icon icon="hamburger" {...props} />}
        >
          <List.Item title="Burger with Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          expanded={expandDinner}
          onPress={() => setExpandDinner(!expandDinner)}
          left={(props) => <List.Icon icon="food-variant" {...props} />}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Fries" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          expanded={expandDrinks}
          onPress={() => setExpandDrinks(!expandDrinks)}
          left={(props) => <List.Icon icon="cup" {...props} />}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
        </List.Accordion>
      </ScrollView>
    </SafeAreaView>
  );
};

export const RestaurantDetail = RestaurantDetailScreen;
export default RestaurantDetail;
