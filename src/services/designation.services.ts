import { AxiosResponse } from "axios";
import { httpClient } from "../axios_instance";
import { IServices } from "../types";

const APP_BASE_URL = "designation";

export interface IDesignation {
  _id?: string;
  title: string;
  active?: string;
}

class DesignationServices implements IServices<IDesignation> {
  getObject() {
    return {
      title: "",
    };
  }
  getAll(): Promise<AxiosResponse<IDesignation[], any>> {
    return httpClient.get(APP_BASE_URL);
  }
  getById(id: string): Promise<AxiosResponse<IDesignation, any>> {
    return httpClient.get(APP_BASE_URL);
  }
  create(body: IDesignation): Promise<AxiosResponse<IDesignation, any>> {
    return httpClient.post(APP_BASE_URL, body);
  }
  update(body: IDesignation): Promise<AxiosResponse<IDesignation, any>> {
    return httpClient.put(APP_BASE_URL + "/" + body._id, body);
  }
  deleted(id: string): Promise<AxiosResponse<IDesignation, any>> {
    return httpClient.delete(APP_BASE_URL + "/" + id);
  }
}

const designationService = new DesignationServices();
export { designationService };
