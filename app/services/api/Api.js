import axios from "axios";
import handleGeneralErrors from "../../utils/helpers/handleGeneralErrors";
import authStorage from "../localStorage/authStorage";

class ApiFech {
  constructor() {
    this.apiUrl = process.env.API_URL;
    this.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      authorization: false
    };
  }

  async get(endpoint, body = null) {
    const requestData = {
      method: "get",
      endpoint,
      body
    };
    try {
      return await this.makeRequest(requestData);
    } catch (error) {
      return error;
    }
  }

  async post(endpoint, body) {
    const requestData = {
      method: "post",
      endpoint,
      body
    };
    try {
      return await this.makeRequest(requestData);
    } catch (error) {
      return error;
    }
  }

  async put(endpoint, body) {
    const requestData = {
      method: "put",
      endpoint,
      body
    };
    try {
      return await this.makeRequest(requestData);
    } catch (error) {
      return error;
    }
  }

  async delete(endpoint, body) {
    const requestData = {
      method: "delete",
      endpoint,
      body
    };
    try {
      return await this.makeRequest(requestData);
    } catch (error) {
      return error;
    }
  }

  withAuth() {
    this.headers.authorization = authStorage.getSession();
    return this;
  }

  makeRequest(requestData, headers = null) {
    return new Promise(async (resolve, reject) => {
      const response = await axios({
        method: requestData.method,
        url: `${this.apiUrl}${requestData.endpoint}`,
        data: requestData.body ? requestData.body : null,
        headers: { ...this.headers, ...headers }
      }).catch(error => {
        reject(error.response);
      });
      resolve(response);
    });
  }
}

export default new ApiFech();
