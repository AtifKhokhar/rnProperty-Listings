// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Card,
  ListItem,
  Button,
  Icon,
  Avatar,
  Tile,
} from "react-native-elements";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "center" }}>
      <Card>
        <Card.Title>House Number 1</Card.Title>
        <Card.Divider style={{ marginBottom: 10 }} />
        <Avatar
          size="xlarge"
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
          }}
        />
        <Text style={{ margin: 10 }}>
          5 bed modern contemporary property with 3 bathrooms and garage.
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
          onPress={() => navigation.navigate("Details")}
        />
      </Card>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
      <Tile
        imageSrc={{
          uri:
            "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
        }}
        title="5 bed modern contemporary property with 3 bathrooms and garage. Freehold property near ameneties."
        titleStyle={{  flex: 0, flexDirection: 'column', flexWrap: 'nowrap' }}
      >
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Contact Agent at : 00000000000</Text>
          <Text>Price: £900,000</Text>
        </View>
      </Tile>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Property Listings",
            headerStyle: {
              backgroundColor: "#707472",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "Property Listings",
            headerStyle: {
              backgroundColor: "#707472",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
