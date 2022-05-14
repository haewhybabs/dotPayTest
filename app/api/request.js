import axios from "axios";
export const BASE_URL = "http://localhost:3000/"; 
export const buildHeader = () => {
    var header = {
        // Accept: '*/*',
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
    };
    return header;
};
export async function request(
    onResponse,
    data,
    type,
    featureURL,
) {
    try {
        if (type === "GET") {
            try {
                const response = await axios.get(`${BASE_URL}${featureURL}`, {
                    headers: buildHeader(),
                });
                onResponse.success(response);
            } catch (error) {
                onResponse.error(error);
            }
        } else {
            try {
                const response = await axios({
                    method: type,
                    headers: buildHeader(),
                    url: `${BASE_URL}${featureURL}`,
                    data: data,
                });
                onResponse.success(response);
            } catch (error) {
                onResponse.error(error);
            }
        }
    } catch (error) {
        onResponse.error(error);
    }
}