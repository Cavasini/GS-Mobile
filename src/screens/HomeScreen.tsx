import React, { useState, useCallback } from "react"
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, ActivityIndicator } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import { useFocusEffect } from "@react-navigation/native"
import { RootStackParamList } from "../navigation/AppNavigator"
import { Event } from "../types/Event"
import { getEvents } from "../storage/eventStorage" // Import storage function

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">

type Props = {
	navigation: HomeScreenNavigationProp
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
	const [events, setEvents] = useState<Event[]>([])
	const [loading, setLoading] = useState(true)

	// Load events when the screen comes into focus
	useFocusEffect(
		useCallback(() => {
			let isActive = true
			const fetchEvents = async () => {
				setLoading(true)
				try {
					const storedEvents = await getEvents()
					if (isActive) {
						// Sort events by timestamp, newest first
						storedEvents.sort((a, b) => b.timestamp - a.timestamp)
						setEvents(storedEvents)
					}
				} catch (error) {
					console.error("Failed to load events:", error)
					// Optionally show an error message to the user
				} finally {
					if (isActive) {
						setLoading(false)
					}
				}
			}

			fetchEvents()

			return () => {
				isActive = false
			}
		}, [])
	)

	const renderItem = ({ item }: { item: Event }) => (
		<TouchableOpacity onPress={() => navigation.navigate("EventDetail", { event: item })}>
			<View style={styles.itemContainer}>
				<Text style={styles.itemTitle}>Local: {item.location}</Text>
				<Text>Duração: {item.outageDuration}</Text>
				<Text style={styles.itemTimestamp}>
					Registrado em: {new Date(item.timestamp).toLocaleDateString("pt-BR")}
				</Text>
			</View>
		</TouchableOpacity>
	)

	if (loading) {
		return (
			<View style={[styles.container, styles.centerContent]}>
				<ActivityIndicator
					size="large"
					color="#0000ff"
				/>
				<Text>Carregando eventos...</Text>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			{/* Title removed as it's in the navigator header */}
			<FlatList
				data={events}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				ListEmptyComponent={<Text style={styles.emptyText}>Nenhum evento registrado ainda.</Text>}
				contentContainerStyle={events.length === 0 ? styles.centerContent : {}}
			/>
			<View style={styles.buttonContainer}>
				<Button
					title="Registrar Novo Evento"
					onPress={() => navigation.navigate("AddEvent")}
				/>
				<View style={styles.spacer} />
				<Button
					title="Ver Recomendações"
					onPress={() => navigation.navigate("Recommendations")}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#f5f5f5",
	},
	centerContent: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	itemContainer: {
		backgroundColor: "#fff",
		padding: 15,
		marginBottom: 10,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#ddd",
	},
	itemTitle: {
		fontSize: 16,
		fontWeight: "bold",
	},
	itemTimestamp: {
		fontSize: 12,
		color: "#666",
		marginTop: 5,
	},
	emptyText: {
		textAlign: "center",
		fontSize: 16,
		color: "#666",
	},
	buttonContainer: {
		paddingTop: 10, // Add padding above buttons
		borderTopWidth: 1,
		borderTopColor: "#eee",
		backgroundColor: "#f5f5f5", // Match background
		paddingBottom: 10, // Add some margin at the bottom
		flexDirection: "column",
		alignItems: "stretch",
	},
	spacer: {
		height: 10,
	},
})

export default HomeScreen
