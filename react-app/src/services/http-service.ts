import apiClient from './api-client';

interface Entity {
    id: number;
}

class HttpService {
    constructor(protected endpoint: string) {}

    getAll<T>() {
        const controller = new AbortController();

        const request = apiClient.get<T[]>(this.endpoint, {
            signal: controller.signal,
        });

        return { request, cancel: () => controller.abort() };
    }

    delete(id: number) {
        return apiClient.delete(this.endpoint + '/' + id);
    }

    create<T>(entity: T) {
        return apiClient.post<T>(this.endpoint, entity);
    }

    update<T extends Entity>(entity: T) {
        return apiClient.patch<T>(`${this.endpoint}/${entity.id}`, entity);
    }
}

export const create = (endpoint: string) => new HttpService(endpoint);
