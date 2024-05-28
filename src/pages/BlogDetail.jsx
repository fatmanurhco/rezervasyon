import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { supabase } from "./Login";
const BlogMain = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*');

      if (error) {
        console.error('Error fetching blogs:', error.message);
      } else {
        setBlogs(data);
        const uniqueCategories = [...new Set(data.map(blog => blog.category))];
        setCategories(uniqueCategories);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="blogmain">
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
                    <span className="mar-right-20"><a href="#" className="tag"><i className="fa fa-tag mar-right-5"></i> {blog.category}</a></span>
                    <span className="mar-right-20"><a href="#"><i className="fa fa-user mar-right-5"></i> {blog.author}</a></span>
                    <span><a href="#"><i className="fa fa-comment"></i> {blog.comments_count}</a></span>
                  </div>
                  <p>{blog.excerpt}</p>
                  <p>{blog.content}</p>
                </div>
                <div className="blog-quote mar-bottom-30">
                  <p className="white">“{blog.quote}”</p>
                  <span className="white">By {blog.quote_author}</span>
                  <i className="fas fa-quote-left"></i>
                </div>
                <div className="blog-imagelist mar-bottom-30">
                  <div className="row">
                    {blog.image_list.map((img, index) => (
                      <div className="col-md-6 col-sm-6 col-xs-12" key={index}>
                        <img src={img} alt="image" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="blog-share display-flex mar-bottom-30">
                  <div className="blog-share-tag">
                    <ul className="inline">
                      <li><strong>Posted In:</strong></li>
                      {blog.tags.map((tag, index) => (
                        <li key={index}><a href="#">{tag}</a></li>
                      ))}
                    </ul>
                  </div>
                  <div className="header-social">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>

                <div className="blog-author mar-bottom-30 bg-grey">
                  <div className="blog-author-item">
                    <div className="row display-flex">
                      <div className="col-md-3 col-sm-3 col-xs-12">
                        <div className="blog-thumb text-center">
                          <img src={blog.author_image} alt="author" />
                        </div>
                      </div>
                      <div className="col-md-9 col-sm-9 col-xs-12">
                        <h3 className="title">
                          <a href="#">About Author <span>{blog.author_role}</span></a>
                        </h3>
                        <p className="mar-0">{blog.author_bio}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-next mar-bottom-30">
                  <a href="#" className="pull-left">
                    <div className="prev">
                      <i className="fa fa-arrow-left white"></i>
                      <p className="white">Previous Post</p>
                      <p className="white">{blog.prev_post_title}</p>
                    </div>
                  </a>
                  <a href="#" className="pull-right">
                    <div className="next">
                      <i className="fa fa-arrow-right white"></i>
                      <p className="white">Next Post</p>
                      <p className="white">{blog.next_post_title}</p>
                    </div>
                  </a>
                </div>

                <div className="single-comments single-box">
                  <h3 className="mar-bottom-30">Showing {blog.comments.length} verified guest comments</h3>
                  {blog.comments.map((comment, index) => (
                    <div className="comment-box" key={index}>
                      <div className="comment-image">
                        <img src={comment.user_image} alt="commenter" />
                      </div>
                      <div className="comment-content">
                        <h4>{comment.user_name}</h4>
                        <p className="comment-date">{comment.date}</p>
                        <div className="comment-rate">
                          <div className="rating mar-right-15">
                            {[...Array(comment.rating)].map((_, i) => (
                              <span key={i} className="fa fa-star checked"></span>
                            ))}
                          </div>
                          <span className="comment-title">{comment.title}</span>
                        </div>
                        <p className="comment">{comment.content}</p>
                        <div className="comment-like">
                          <div className="like-title">
                            <a href="#" className="biz-btn biz-btn1">Reply</a>
                          </div>
                          <div className="like-btn pull-right">
                            <a href="#" className="like"><i className="fa fa-thumbs-up"></i> Like</a>
                            <a href="#" className="dislike"><i className="fa fa-thumbs-down"></i> Dislike</a>
                            <a href="#" className="love"><i className="flaticon-like"></i> Love</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
              </div>
              
            ))}
             <div className="single-add-review pad-top-30">
                  <h3>Write a Review</h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea placeholder="Comment"></textarea>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-btn">
                          <a href="#" className="biz-btn biz-btn1">Submit Review</a>
                        </div></div></div>  </form> </div>
              </div> </div>
           <div className="col-md-4 col-xs-12 pad-left-30">
            <div className="blog-sidebar">
              <div className="blog-search mar-bottom-30">
                <input type="search" name="search" className="search" placeholder="keyword find here" />
                <a href="#" className="biz-btn biz-btn1"><i className=" fa fa-search"></i></a>
              </div>
              <div className="sidebar-item">
                <h3>All Categories</h3>
                <ul className="sidebar-category">
                  <li><a href="#">All</a></li>
                  {categories.map((category, index) => (
                    <li key={index}><a href="#">{category}</a></li>
                  ))}
                </ul>
              </div>
             <li className="active"><a data-toggle="tab" href="#popular"><i className="fa fa-check-circle"></i> Most Popular </a></li>
<li><a data-toggle="tab" href="#recent"><i className="fa fa-check-circle"></i> Recent Post</a></li>
   

<div className="tab-content">
<div id="popular" className="tab-pane fade in active">
<div className="sidebar-image mar-bottom-20 mar-top-20">
<a href="blog-single.html"><img src="images/trending3.jpg" alt="" /></a>
</div>
<article className="post mar-bottom-20">
<div className="content display-flex">
<div className="blog-no">01</div>
<div className="content-list pad-left-15">
<div className="date mar-bottom-5">Jun 28, 2019</div>
<h4 className="mar-0"><a href="blog-single.html">Takes on Baboon, and It Doesn’t Go Well for It</a></h4>
</div>    
</div>     

</article>

<article className="post mar-bottom-20">
<div className="content display-flex">
<div className="blog-no">02</div>
<div className="content-list pad-left-15">
<div className="date mar-bottom-5">Jun 28, 2019</div>
<h4 className="mar-0"><a href="blog-single.html">Zebras Hold New Record for Longest Migration</a></h4>
</div>    
</div> </article>
<article className="post">
<div className="content display-flex">
<div className="blog-no">03</div>
<div className="content-list pad-left-15">
<div className="date mar-bottom-5">Jun 28, 2019</div>
<h4 className="mar-0"><a href="blog-single.html">African Reserve Got Killed by Lions Instead</a></h4>
</div>    
</div></article>
</div>
<div id="recent" className="tab-pane fade">
<div className="sidebar-image mar-bottom-20 mar-top-20">
<a href="blog-single.html"><img src="images/trending4.jpg" alt="" /></a>
</div>
<article className="post mar-bottom-20">
<div className="content display-flex">
<div className="blog-no">01</div>
<div className="content-list pad-left-15">
<div className="date mar-bottom-5">Jun 28, 2019</div>
<h4 className="mar-0"><a href="blog-single.html">Takes on Baboon, and It Doesn’t Go Well for It</a></h4>
</div>    
</div> </article>
<article className="post mar-bottom-20">
<div className="content display-flex">
<div className="blog-no">02</div>
<div className="content-list pad-left-15">
<div className="date mar-bottom-5">Jun 28, 2019</div>
<h4 className="mar-0"><a href="blog-single.html">Zebras Hold New Record for Longest Migration</a></h4>
</div>    
</div></article>

<article className="post">
<div className="content display-flex">
<div className="blog-no">03</div>
<div className="content-list pad-left-15">
<div className="date mar-bottom-5">Jun 28, 2019</div>
<h4 className="mar-0"><a href="blog-single.html">African Reserve Got Killed by Lions Instead</a></h4>
</div>    
</div></article>
</div>
</div>
</div>
<div className="sidebar-item">
<h3>Recent Videos</h3>
<div className="sidebar-videos about-slider">
<article className="post mar-bottom-20">
<div className="content-image">
<a href="blog-single.html"><img src="images/destination1.jpg" alt="" /></a>
</div>
<div className="content-list mar-top-15">
<div className="date mar-bottom-5">Jun 28, 2019</div>
<h4 className="mar-0"><a href="blog-single.html">Takes on Baboon, and It Doesn’t Go Well for It</a></h4>
</div></article>
<article className="post mar-bottom-20">
<div className="content-image">
<a href="blog-single.html"><img src="images/destination2.jpg" alt="" /></a>
</div>
<div className="content-list mar-top-15">
<div className="date mar-bottom-5">Jun 28, 2019</div>
<h4 className="mar-0"><a href="blog-single.html">Favorite Travel Essentials for a Stylish Summer</a></h4>
</div></article>
</div>
</div>

<div className="sidebar-item">
<h3>Tags</h3>
<ul className="sidebar-tags">
<li><a href="#">Tour</a></li>
<li><a href="#">Rental</a></li>
<li><a href="#">City</a></li>
<li><a href="#">Yatch</a></li>
<li><a href="#">Activity</a></li>
<li><a href="#">Museum</a></li>
<li><a href="#">Beauty</a></li>
<li><a href="#">Classic</a></li>
<li><a href="#">Creative</a></li>
<li><a href="#">Designs</a></li>
<li><a href="#">Featured</a></li>
<li><a href="#">Free Style</a></li>
<li><a href="#">Programs</a></li>
<li><a href="#">Travel</a></li>
</ul>
</div>

            </div>
          </div>
        
    </section>
  );
};

export default BlogMain;