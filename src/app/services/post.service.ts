import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  createPost = (post) => {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }
}
