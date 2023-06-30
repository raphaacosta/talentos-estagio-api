export default interface IPost {
  id: number;
  name: string;
  description: string;
  category: string;
}

export default interface IPostsArray {
  posts: IPost[];
}