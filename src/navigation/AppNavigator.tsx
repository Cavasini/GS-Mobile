import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import AddEventScreen from "../screens/AddEventScreen"
import EventDetailScreen from "../screens/EventDetailScreen"
import RecommendationsScreen from "../screens/RecommendationsScreen"
import LocationDetailScreen from "../screens/LocationDetailScreen" // ✅ NOVO IMPORT
import { Event } from "../types/Event"

// Define the parameter list for the stack navigator
export type RootStackParamList = {
	Home: undefined
	AddEvent: undefined
	EventDetail: { event: Event }
	LocationDetail: { locationData: Record<string, any> } // ✅ NOVA ROTA
	Recommendations: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const AppNavigator: React.FC = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{ title: "Panorama de Eventos" }}
			/>
			<Stack.Screen
				name="AddEvent"
				component={AddEventScreen}
				options={{ title: "Registrar Novo Evento" }}
			/>
			<Stack.Screen
				name="EventDetail"
				component={EventDetailScreen}
				options={{ title: "Detalhes do Evento" }}
			/>
			<Stack.Screen
				name="LocationDetail"
				component={LocationDetailScreen} // ✅ Adicionada aqui
				options={{ title: "Detalhes da Localização" }}
			/>
			<Stack.Screen
				name="Recommendations"
				component={RecommendationsScreen}
				options={{ title: "Recomendações" }}
			/>
		</Stack.Navigator>
	)
}

export default AppNavigator
