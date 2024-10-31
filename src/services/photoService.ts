// photoService.ts

import { Photo } from "../models/photo"

const API_URL = 'https://jsonplaceholder.typicode.com/photos'

export const photoService = {
    async getPhotos(): Promise<Photo[]> {
        const response: Response = await fetch(API_URL)
        if (!response.ok) {
            throw new Error('Failed to fetch photos')
        }
        
        return response.json()
    }
};
