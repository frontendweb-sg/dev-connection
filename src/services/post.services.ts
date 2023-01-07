import { AxiosResponse } from "axios";
import { httpClient } from "../axios_instance";
import { IServices } from "../types";
import { Status } from "../util/Status";
import { ICategory } from "./category.services";

const APP_BASE_URL = "post";

type TStatus = Status.approved | Status.pending | Status.rejected;

type IPostStatus = "public" | "private" | "friends";

interface ILike {
  user: string;
  like: boolean;
}

interface IComment {
  _id?: string;
  user: string;
  message: string;
  status: TStatus;
  insertAt?: Date;
}

interface IPost {
  _id?: string | number;
  category: ICategory | null;
  user?: string;
  title: string;
  description: string;
  image: string;
  status: IPostStatus;
  code?: string;
  likes?: ILike[] | null;
  comments?: IComment[] | null;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

class PostService implements IServices<IPost> {
  getObject() {
    return {
      _id: 0,
      category: null,
      user: "",
      title: "Hello world",
      description: "",
      image: "",
      code: "<html>\r\n<body>\r\n<h1>hello world</h1>\r\n</body>\r\n</html>",
      status: "public",
      likes: null,
      comments: null,
      active: true,
    } as IPost;
  }

  getAll(): Promise<AxiosResponse<IPost[], any>> {
    return httpClient.get(APP_BASE_URL);
  }

  getById(id: string): Promise<AxiosResponse<IPost, any>> {
    return httpClient.get(APP_BASE_URL + "/" + id);
  }

  create(body: IPost | FormData): Promise<AxiosResponse<IPost, any>> {
    return httpClient.post(APP_BASE_URL, body);
  }

  update(body: IPost): Promise<AxiosResponse<IPost, any>> {
    return httpClient.put(APP_BASE_URL + "/" + body._id, body);
  }

  deleted(id: string): Promise<AxiosResponse<IPost, any>> {
    return httpClient.delete(APP_BASE_URL + "/" + id);
  }
}

const postService = new PostService();
export { postService, type ILike, type IComment, type IPost, type IPostStatus };
