import { Author } from "./Author";
import { Node } from "./Node";

export interface Quote extends Node {
  text: string;
  url?: string;
  author: Author;
}
