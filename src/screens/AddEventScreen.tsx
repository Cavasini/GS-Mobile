import React, { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../navigation/AppNavigator" // Adjust path as needed
import { Event } from "../types/Event" // Import Event type
import { saveEvent } from "../storage/eventStorage" // Import storage function

type AddEventScreenNavigationProp = StackNavigationProp<RootStackParamList, "AddEvent">

type Props = {
	navigation: AddEventScreenNavigationProp
}

const AddEventScreen: React.FC<Props> = ({ navigation }) => {
	const [location, setLocation] = useState("")
	const [outageDuration, setOutageDuration] = useState("")
	const [damages, setDamages] = useState("")
	const [isSaving, setIsSaving] = useState(false) // State to handle loading

	const handleSaveEvent = async () => {
		if (!location.trim() || !outageDuration.trim() || !damages.trim()) {
			Alert.alert("Erro", "Por favor, preencha todos os campos.")
			return
		}

		const cepMatch = location.match(/\b\d{5}-?\d{3}\b/) // captura o CEP
		const cep = cepMatch ? cepMatch[0].replace("-", "") : null

		if (!cep) {
			Alert.alert("Erro", "Por favor, inclua um CEP válido na localização.")
			return
		}

		setIsSaving(true)

		try {
			const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
			if (!response.ok) throw new Error("Falha na API de CEP")

			const locationData = await response.json()

			const newEvent: Event = {
				id: Date.now().toString(),
				location: location.trim(),
				outageDuration: outageDuration.trim(),
				damages: damages.trim(),
				timestamp: Date.now(),
				locationDetails: locationData, // <-- This line is the $SELECTION_PLACEHOLDER$
			}

			await saveEvent(newEvent)
			Alert.alert("Sucesso", "Evento registrado com sucesso!")
			navigation.goBack()
		} catch (error) {
			console.error("Erro ao salvar evento:", error)
			Alert.alert("Erro", "Não foi possível salvar o evento. Tente novamente.")
		} finally {
			setIsSaving(false)
		}
	}

	return (
		<ScrollView
			style={styles.container}
			keyboardShouldPersistTaps="handled"
		>
			{/* Title removed as it's in the navigator header */}

			<Text style={styles.label}>Localização Atingida - CEP</Text>
			<TextInput
				style={styles.input}
				placeholder="Ex:01000-000"
				value={location}
				onChangeText={setLocation}
				editable={!isSaving} // Disable input while saving
			/>

			<Text style={styles.label}>Tempo de Interrupção (Estimado ou Real)</Text>
			<TextInput
				style={styles.input}
				placeholder="Ex: 3 horas, Indeterminado"
				value={outageDuration}
				onChangeText={setOutageDuration}
				editable={!isSaving}
			/>

			<Text style={styles.label}>Prejuízos Causados</Text>
			<TextInput
				style={[styles.input, styles.textArea]}
				placeholder="Descreva os impactos observados (residências, comércios, etc.)"
				value={damages}
				onChangeText={setDamages}
				multiline
				numberOfLines={4}
				editable={!isSaving}
			/>

			<Button
				title={isSaving ? "Salvando..." : "Salvar Evento"}
				onPress={handleSaveEvent}
				disabled={isSaving} // Disable button while saving
			/>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#f5f5f5",
	},
	label: {
		fontSize: 16,
		marginBottom: 5,
		color: "#333",
		fontWeight: "500",
	},
	input: {
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 12,
		marginBottom: 15,
		fontSize: 16,
	},
	textArea: {
		height: 100,
		textAlignVertical: "top",
	},
})

export default AddEventScreen
