import { GET } from '@/app/api/geocoding/route';

export class ApiClient {

    async getRequest(location) {
        try {
            const response = await GET(location);
            return response ? response : null;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
