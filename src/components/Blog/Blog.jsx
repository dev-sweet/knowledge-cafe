import PropTypes from 'prop-types';
import { MdOutlineBookmarkBorder } from 'react-icons/md';
const Blog = ({blog,handleBookmarks,handleMarkAsRead}) => {
const {title,img,author_name,author_img,published_date,read_time,hashtags} = blog;
    return (
        <div className='py-5'>
            <img className='w-full' src={img} alt="cover-img" />
            <div className="flex justify-between items-center">
                <div className="flex py-4">
                    <img className='w-[50px]' src={author_img} alt="" />
                    <div className='ml-4'>
                    <p className='font-bold text-xl'>{author_name}</p>
                    <p className='text-sm'>{published_date}</p>
                    </div>
                </div>
                <span onClick={()=>handleBookmarks(blog)} className='flex justify-between items-center'>{read_time} mins read <MdOutlineBookmarkBorder className='ml-2 text-2xl' /></span>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p className="mt-2">{hashtags.map(hash => <span key ={hash} className='mr-2 text-blue'>#{hash}</span> )}</p>
            <button onClick={()=>handleMarkAsRead(read_time)} className='text-[#0000FF] text-sm'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;