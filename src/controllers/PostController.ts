import { Request, Response } from 'express';
import posts from '../Post';

class PostController {
  create(request: Request, response: Response) {
    const { id, name, description, category } = request.body;

    // only for testing, the id usually is created by the database tool
    if (id <= -1) return response.status(400).json("You need an Id to create a post");

    if (!name) return response.status(400).json("You need a name for your post");

    if (!description) return response.status(400).json("you need a description for your post");

    if (!category) return response.status(400).json("You need a category for your post");

    posts.push({ id, name, description, category });

    return response.status(201).json(posts);
  }

  list(request: Request, response: Response) {
    if (posts.length <= 0) return response.status(200).json("You don't have any posts.");

    return response.status(200).json(posts);
  }

  update(request: Request, response: Response) {
    const { name, description, category } = request.body;
    const { postId } = request.params;
    const foundPost = posts.findIndex((obj => obj.id === Number(postId)))

    if (foundPost <= -1) return response.status(400).json("Your post couldn't be find.")

    posts[foundPost].name = name;
    posts[foundPost].description = description;
    posts[foundPost].category = category;

    return response.status(200).json(posts[foundPost]);
  }

  delete(request: Request, response: Response) {
    const { postId } = request.params;
    const foundPost = posts.findIndex((obj => obj.id === Number(postId)))

    posts.splice(foundPost, 1);

    return response.status(200).json(posts);
  }
}

export default PostController;