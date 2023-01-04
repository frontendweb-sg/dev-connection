import { AxiosResponse } from "axios";
import { httpClient } from "../axios_instance";
import { IServices } from "../types";

const APP_BASE_URL = "categories";

export interface ICategory {
  _id?: string;
  title: string;
  description: string;
  active: string;
}

class CategoryServices implements IServices<ICategory> {
  getObject() {
    return {
      title: "",
      description: "",
    };
  }
  getAll(): Promise<AxiosResponse<ICategory[], any>> {
    return httpClient.get(APP_BASE_URL);
  }
  getById(id: string): Promise<AxiosResponse<ICategory, any>> {
    return httpClient.get(APP_BASE_URL);
  }
  create(body: ICategory): Promise<AxiosResponse<ICategory, any>> {
    return httpClient.post(APP_BASE_URL, body);
  }
  update(body: ICategory): Promise<AxiosResponse<ICategory, any>> {
    return httpClient.put(APP_BASE_URL + "/" + body._id, body);
  }
  deleted(id: string): Promise<AxiosResponse<ICategory, any>> {
    return httpClient.delete(APP_BASE_URL + "/" + id);
  }
}

const categoryService = new CategoryServices();
export { categoryService };
