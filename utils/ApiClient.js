import { GET } from '@/app/api/geocoding/route';

export class ApiClient {

    async getRequest(searchText) {
        try {
            const response = await GET(searchText);
            return response ? response : null;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
