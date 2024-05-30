import React, { useEffect, useState } from 'react';
import { supabase } from '../compoments/SupaBase';

const BlogMain = () => {
  const [blogs, setBlog] = useState([]);
 
  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from('blog')
        .select('*')
        .single();

      if (error) {
        console.error('Error fetching blogs:', error.message);
      } else {
        setBlog(data);
        
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blogmain">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-xs-12 pad-right-30">
            {blogs.map(blog => (
              <div className="blog-single" key={blog.id}>
                <div className="blog-image">
                  <img src={blog.image_url} alt="image" />
                </div>
                <div className="blog-content mar-bottom-30">
                  <h3 className="blog-title"><a href="#">{blog.title}</a></h3>
                  <div className="para-content pad-bottom-20">
                    <span className="mar-right-20"><a href="#"><i className="fa fa-user mar-right-5"></i> {blog.authors.ad}</a></span>
                  </div>
                  <p>{blog.content}</p>
                </div>
                <div className="blog-share display-flex mar-bottom-30">
                  <div className="blog-share-tag">
                    <ul className="inline">
                      <li><strong>Posted In:</strong></li>
                      {blog.tags.map(tag => (
                        <li key={tag.id}>{tag.tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="blog-author mar-bottom-30 bg-grey">
                  <div className="blog-author-item">
                    <div className="row display-flex">
                      <div className="col-md-3 col-sm-3 col-xs-12">
                        <div className="blog-thumb text-center">
                          <img src={blog.authors.ad} alt="author" />
                        </div>
                      </div>
                      <div className="col-md-9 col-sm-9 col-xs-12">
                        <h3 className="title">
                          <a href="#">About Author <span>{blog.authors.rol}</span></a>
                        </h3>
                        <p className="mar-0">{blog.authors.biyografi}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="single-comments single-box">
                  <h3 className="mar-bottom-30">Showing {blog.comments.length} verified guest comments</h3>
                  {blog.comments.map((comment, index) => (
                    <div className="comment-box" key={index}>
                      <div className="comment-content">
                        <h4>{comment.yorum_yapan}</h4>
                        <p className="comment-date">{comment.yorum_tarihi}</p>
                        <p className="comment">{comment.yorum}</p>
                      </div>
                      <div className="comment-like">
                        <div className="like-title">
                          <a href="#" className="biz-btn biz-btn1">Reply</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
