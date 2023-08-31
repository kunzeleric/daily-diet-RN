import React, { useState } from "react";
import { View, SectionList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "@components/Header";
import { DietStatus } from "@components/DietStatus";
import { ButtonIcon } from "@components/ButtonIcon";
import { MealCard } from "@components/MealCard";
import uuid from "react-native-uuid";
import { Container, HeaderSectionList, MealTitle } from "./styles";



export type MealProps = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  isInDiet: boolean;
};

export type DietArrayProps = {
  title: string;
  data: MealProps[];
};

export const Home = () => {
  const navigation = useNavigation();
  const [mealList, setMealList] = useState<DietArrayProps[]>([
    {
      title: "28.08.2023",
      data: [
        {
          id: uuid.v4() as string,
          name: "Hamburguer",
          description: "Hamburguer com bacon e queijo.",
          date: "2023-08-28",
          time: "16:00",
          isInDiet: false,
        },
        {
          id: uuid.v4() as string,
          name: "Hamburguer",
          description: "Hamburguer com bacon e queijo.",
          date: "2023-08-28",
          time: "16:00",
          isInDiet: false,
        }
      ],
    },
    {
      title: "28.08.2023",
      data: [
        {
          id: uuid.v4() as string,
          name: "Hamburguer",
          description: "Hamburguer com bacon e queijo.",
          date: "2023-08-28",
          time: "16:00",
          isInDiet: false,
        },
      ],
    }
  ]);

  const handleCreateMeal = () => {
    navigation.navigate("createMeal")
  }

  return (
    <Container>
      <Header />
      <DietStatus />
      <View>
        <MealTitle>Refeições</MealTitle>
        <ButtonIcon title="Nova Refeição" icon="add" onPress={() => handleCreateMeal()}/>
      </View>
      <SectionList
        sections={mealList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard
            title={item.name}
            time={item.time}
            type={item.isInDiet ? "GREEN" : "RED"}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <HeaderSectionList>{title}</HeaderSectionList>
        )}
      />
    </Container>
  );
};
