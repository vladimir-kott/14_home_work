import httpService from "./http.service";

const qualitieEndpoint = "qualities/";

const qualitieService = {
    fetchAll: async () => {
        const { data } = await httpService.get(qualitieEndpoint);
        return data;
    }
};
export default qualitieService;
