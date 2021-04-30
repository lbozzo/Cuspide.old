import { Node } from "./Node";

export interface Author extends Node {
  name: string;
  url?: string;
}
