import { Status } from "../util/Status";

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
  category: string;
  user: string;
  title: string;
  description: string;
  image: string;
  code?: string;
  status: IPostStatus;
  likes?: ILike[] | null;
  comments?: IComment[] | null;
  active?: boolean;
}

class PostService {
  getObject() {
    return {
      category: "html",
      user: "",
      title: "",
      description: "",
      image: "",
      code: "",
      status: "public",
      likes: null,
      comments: null,
      active: true,
    } as IPost;
  }

  getById(id: string) {}
  getAll() {}
  create(record: IPost) {}
  update(record: IPost) {}
  delete(id: string) {}
}

const postService = new PostService();
export { postService, type ILike, type IComment, type IPost, type IPostStatus };
