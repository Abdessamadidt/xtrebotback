import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogsUrl = 'assets/data/blogs.json';

  constructor(private http: HttpClient) {}

  getAllBlogs(): Observable<any> {
    return this.http.get<any>(this.blogsUrl);
  }

  getBlogBySlug(slug: any): Observable<any> {
    return this.http
      .get<any>(this.blogsUrl)
      .pipe(
        map((blogs) =>
          blogs.find((blog: { slug: string }) => blog.slug === slug),
        ),
      );
  }
}