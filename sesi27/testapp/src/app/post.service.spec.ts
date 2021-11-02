import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostService } from './post.service';

describe('PostService', () => {
  let postService: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,],
      providers: [PostService]
    });
    postService = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });



  it(`should reach posts success`, () => {
    const postItem = [
      {
        "userId": 1,
        "id": 1,
        "title": "adsasd",
        "body": "asdsadssad"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "adsasd",
        "body": "asdsadssad"
      }
    ]

    postService.getPosts().subscribe((posts: any) => expect(posts.length).toBe(2))

    let req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe("GET");

    req.flush(postItem);
    httpMock.verify();
  })
});
