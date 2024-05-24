import { BlogModel } from "../models/blog"
import { getBlogPage } from "../services/blog"
export default async function Blog(){
    const blogs:BlogModel[] = await getBlogPage()
    const bannerStyle = {
        backgroundImage: `url(${blogs[0].thumb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div className="bg-slate-100">
            <div style={bannerStyle} className="flex items-center justify-center h-96 pt-10">
                <h1 className="font-black text-4xl text-center text-white">Blog</h1>
            </div>
            <div className="grid gap-8 grid-cols-3 my-8 px-8">
                {
                    blogs.map((blog:BlogModel) => {
                        const divStyle = {
                            backgroundImage: `url(${blog.thumb})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        };
                        return(
                            
                            <div className="bg-white rounded-lg shadow-lg">
                                <div className="w-full rounded-t-lg h-48" style={divStyle}></div>
                                <div className="p-4">
                                    <h3 className="font-bold text-base text-slate-700">{blog.title}</h3>
                                    <p className="text-sm mt-1 text-slate-500 line-clamp-3">{blog.seo.description}</p>
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}