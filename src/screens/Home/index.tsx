import React, { useState } from "react";
import { View, SectionList, Text } from "react-native";
import { Header } from "@components/Header";
import { DietStatus } from "@components/DietStatus";
import { ButtonIcon } from "@components/ButtonIcon";
import { Container, HeaderSectionList, MealTitle } from "./styles";
import uuid from "react-native-uuid";
import { MealCard } from "@components/MealCard";

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
  const [mealList, setMealList] = useState<DietArrayProps[]>([
    {
      title: "2023-08-28",
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
    },
    {
      title: "2023-08-28",
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

  return (
    <Container>
      <Header />
      <DietStatus />
      <View>
        <MealTitle>Refeições</MealTitle>
        <ButtonIcon title="Nova Refeição" icon="add" />
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
