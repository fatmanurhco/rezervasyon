// import { useEffect, useState } from "react";
// import { Link, useLoaderData } from "react-router-dom";
// import { supabase } from "../compoments/Login";

// export async function loader() {
//     let { data: posts, error } = await supabase
//         .from('posts')
//         .select('id, title, slug')
//         .order('created_at', { ascending: false })

//     return posts;
// }

// export default function Home() {
//     const [posts, setPosts] = useState(useLoaderData())

//     useEffect(() => { document.title = 'Anasayfa'; }, []);

//     async function handleDelete(id) {
//         const isConfirmed = confirm('Bu içeriği silmek istediğine emin misin?');
//         if(!isConfirmed) {
//             return;
//         }
        
//         const { error } = await supabase
//             .from('posts')
//             .delete()
//             .eq('id', id);

//         setPosts(posts.filter(x => x.id !== id));
//     }

//     return (
//         <>
//             {posts.map(x => 
//                 <h3 key={x.id}>
//                     <Link to={x.slug}>{x.title}</Link> 
//                     <span>(<Link to={x.slug + '/duzenle'}>düzenle</Link> <a href="#" onClick={(e) => { e.preventDefault(); handleDelete(x.id); }}>sil</a>)</span>
//                 </h3>)}
//         </>
//     )
// }
export default function Blog()
{
    <>
    
    </>
}