import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark'
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 p-4">
        <div className='p-5 bg-gray-200	border-2 border-[#6047EC] rounded'>  
            <h2 className='text-2xl text-[#6047EC] font-bold'>Spent time on read : {readingTime} mins</h2>
        </div>
            <div className='bg-gray-200 p-5 mt-5'>
            <h2 className='text-2xl font-bold'>Bookmarked blog :{bookmarks?.length} </h2>
            {
                bookmarks.map(book => <Bookmark key={book.id} bookmark={book} />)
            }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,

}
export default Bookmarks;