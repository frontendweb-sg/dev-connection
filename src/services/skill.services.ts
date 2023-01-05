import { AxiosResponse } from "axios";
import { httpClient } from "../axios_instance";
import { IServices } from "../types";

const APP_BASE_URL = "skill";

export interface ISkill {
  _id?: string;
  title: string;
  active?: string;
}

class SkillServices implements IServices<ISkill> {
  getObject() {
    return {
      title: "",
    };
  }
  getAll(): Promise<AxiosResponse<ISkill[], any>> {
    return httpClient.get(APP_BASE_URL);
  }
  getById(id: string): Promise<AxiosResponse<ISkill, any>> {
    return httpClient.get(APP_BASE_URL);
  }
  create(body: ISkill): Promise<AxiosResponse<ISkill, any>> {
    return httpClient.post(APP_BASE_URL, body);
  }
  update(body: ISkill): Promise<AxiosResponse<ISkill, any>> {
    return httpClient.put(APP_BASE_URL + "/" + body._id, body);
  }
  deleted(id: string): Promise<AxiosResponse<ISkill, any>> {
    return httpClient.delete(APP_BASE_URL + "/" + id);
  }
}

const skillService = new SkillServices();
export { skillService };
