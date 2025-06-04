import AsyncStorage from "@react-native-async-storage/async-storage"
import { Event } from "../types/Event"

const EVENTS_STORAGE_KEY = "@PowerOutageApp:events"

// Function to get all events
export const getEvents = async (): Promise<Event[]> => {
	try {
		const jsonValue = await AsyncStorage.getItem(EVENTS_STORAGE_KEY)
		return jsonValue != null ? JSON.parse(jsonValue) : []
	} catch (e) {
		console.error("Failed to fetch events from storage", e)
		return []
	}
}

// Function to save a new event
export const saveEvent = async (newEvent: Event): Promise<void> => {
	try {
		const existingEvents = await getEvents()
		const updatedEvents = [...existingEvents, newEvent]
		const jsonValue = JSON.stringify(updatedEvents)
		await AsyncStorage.setItem(EVENTS_STORAGE_KEY, jsonValue)
	} catch (e) {
		console.error("Failed to save event to storage", e)
		throw e // Re-throw error to be handled by the caller
	}
}

// Function to clear all events (for testing or reset purposes)
export const clearAllEvents = async (): Promise<void> => {
	try {
		await AsyncStorage.removeItem(EVENTS_STORAGE_KEY)
		console.log("All events cleared from storage.")
	} catch (e) {
		console.error("Failed to clear events from storage", e)
	}
}

// Optional: Function to get a single event by ID (if needed later)
export const getEventById = async (id: string): Promise<Event | null> => {
	try {
		const events = await getEvents()
		return events.find((event) => event.id === id) || null
	} catch (e) {
		console.error("Failed to fetch event by ID", e)
		return null
	}
}

// Optional: Function to delete an event by ID (if needed later)
export const deleteEventById = async (id: string): Promise<void> => {
	try {
		let events = await getEvents()
		events = events.filter((event) => event.id !== id)
		const jsonValue = JSON.stringify(events)
		await AsyncStorage.setItem(EVENTS_STORAGE_KEY, jsonValue)
	} catch (e) {
		console.error("Failed to delete event by ID", e)
	}
}
