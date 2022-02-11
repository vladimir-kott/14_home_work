import httpService from "./http.service";

const qualitieEndpoint = "qualities/";

const qualitieService = {
    get: async () => {
        const { data } = await httpService.get(qualitieEndpoint);
        return data;
    }
};
export default qualitieService;
