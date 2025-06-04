import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { RootStackParamList } from "../navigation/AppNavigator"

type LocationDetailScreenRouteProp = RouteProp<RootStackParamList, "LocationDetail">

type Props = {
	route: LocationDetailScreenRouteProp
}

const LocationDetailScreen: React.FC<Props> = ({ route }) => {
	const { locationData } = route.params

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>Informações da Localização</Text>
			{Object.entries(locationData).map(([key, value]) => (
				<View
					key={key}
					style={styles.detailItem}
				>
					<Text style={styles.label}>{key}:</Text>
					<Text style={styles.value}>{value}</Text>
				</View>
			))}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#f5f5f5",
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 20,
		textAlign: "center",
	},
	detailItem: {
		marginBottom: 15,
	},
	label: {
		fontWeight: "bold",
		color: "#333",
	},
	value: {
		color: "#555",
	},
})

export default LocationDetailScreen
