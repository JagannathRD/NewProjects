import PropTypes from 'prop-types'

const Link=({title,content})=>{
    return(
    <>
    <h1>Title:{title}</h1>
    <h2>content:{content}</h2>
    </>
    )
};
Link.propTypes ={
    title: PropTypes.string,
    content: PropTypes.string
}
export default Link;