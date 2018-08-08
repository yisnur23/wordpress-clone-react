const Post = (props) =>{
    const handleDelete = ()=>{
        props.fn(props.data._id)
    }
    return(
        <div className="post">
            <button onClick={handleDelete}>Delete</button>
            <h2 className="title">{props.data.title}</h2>
            
            <p className="content">{props.data.post}</p>
            <style jsx>{
                `
                button{
                    color:#fff;
                    background:#d9534f;
                    border:none;
                    border-radius:5px;
                    padding:1em;
                    width:100px;
                    float:right;
                    margin:1em 2em 0 0;
                    cursor:pointer;
                }
                button:hover{
                    background:#c9302c;
                    border-color: #761c19;
                }
                .post{
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    padding:.5em;
                    margin-bottom:1em;
                    width:50%;
                }
                .title{
                    color:#4d4d4d;
                    text-transform:uppercase;
                    text-align:center;
                }
                .content{
                    padding:1em;
                    color:#8c8c8c;
                }
                `
            }</style>
        </div>
    )
} 

export default Post