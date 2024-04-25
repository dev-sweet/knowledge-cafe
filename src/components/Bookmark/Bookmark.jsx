import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div className='bg-slate-50 rounded my-3 p-5'>
            <h2 className='text-xl'>{bookmark.title}</h2>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object,
}
export default Bookmark;