import { httpService } from "./httpService";

const userEndpoint = "users/";

export const userService = {
    getFirstTen: async() => {
        const { data } = await httpService.get(userEndpoint, { params: { _page: 1, _limit: 10 } });
        return data;
    },
    getById: async userId => {
        const { data } = await httpService.get(userEndpoint + userId);
        return data;
    }
};
