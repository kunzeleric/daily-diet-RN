import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Completed } from '@screens/Completed';
import { CreateMeal } from '@screens/CreateMeal';
import { Home } from '@screens/Home';
import { MealDetail } from '@screens/MealDetail';
import { Statistics } from '@screens/Statistics';

const { Screen, Navigator } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={Home}/>
      <Screen name="statistics" component={Statistics}/>
      <Screen name="createMeal" component={CreateMeal}/>
      <Screen name="completed" component={Completed}/>
      <Screen name="mealDetail" component={MealDetail}/>
    </Navigator>
  )
}