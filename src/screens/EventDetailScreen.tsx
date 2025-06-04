import React from "react"
import { View, Text, StyleSheet, ScrollView, Alert, Button } from "react-native"
import { RouteProp, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../navigation/AppNavigator"
import { Event } from "../types/Event"

type EventDetailScreenRouteProp = RouteProp<RootStackParamList, "EventDetail">

type Props = {
	route: EventDetailScreenRouteProp
}

const EventDetailScreen: React.FC<Props> = ({ route }) => {
	const { event } = route.params
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

	const handleViewLocationDetails = () => {
		if ((event as any).locationDetails) {
			navigation.navigate("LocationDetail", {
				locationData: (event as any).locationDetails,
			})
		} else {
			Alert.alert("Aviso", "Este evento não possui detalhes da localização.")
		}
	}

	const formatDate = (timestamp: number) => {
		return new Date(timestamp).toLocaleString("pt-BR")
	}

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>Detalhes do Evento</Text>

			<View style={styles.detailItem}>
				<Text style={styles.label}>Localização:</Text>
				<Text style={styles.value}>{event.location}</Text>
			</View>

			<View style={styles.detailItem}>
				<Text style={styles.label}>Tempo de Interrupção:</Text>
				<Text style={styles.value}>{event.outageDuration}</Text>
			</View>

			<View style={styles.detailItem}>
				<Text style={styles.label}>Prejuízos Causados:</Text>
				<Text style={styles.value}>{event.damages}</Text>
			</View>

			<View style={styles.detailItem}>
				<Text style={styles.label}>Registrado em:</Text>
				<Text style={styles.value}>{formatDate(event.timestamp)}</Text>
			</View>

			{/* Botão para ver os detalhes da localização */}
			<View style={styles.buttonContainer}>
				<Button
					title="Ver detalhes da localização"
					onPress={handleViewLocationDetails}
				/>
			</View>
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
		backgroundColor: "#fff",
		padding: 15,
		marginBottom: 10,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#ddd",
	},
	label: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 5,
		color: "#333",
	},
	value: {
		fontSize: 16,
		color: "#555",
	},
	buttonContainer: {
		marginTop: 20,
	},
})

export default EventDetailScreen
