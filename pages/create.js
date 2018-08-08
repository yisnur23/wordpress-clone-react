import axios from 'axios'
import Navbar from '../components/navigation'
class Create extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            title:"",
            post:""

        }
    }
    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
        
    }
    
    handleSubmit = (e) =>{
        const postItem = {
            "title":this.state.title,
            "post":this.state.post
        }
        console.log(postItem)
        axios.post('http://localhost:8000/create',postItem).then((res)=>{
            
            console.log(res)
        }).catch((e)=>{
            console.log(e)
        })
    }
    render(){
        return(
            <div>
                <Navbar/>
                <h3>Add Content</h3>
                <p>Title:
                    <input name="title" onChange={this.handleChange}/>

                </p>
                <p>Post Content:
                    <textarea name="post" onChange={this.handleChange} rows="10" cols="50"></textarea>
                </p>
                <button onClick={this.handleSubmit}> Submit</button>
                <style jsx>{
                `   input{
                    border-color: #66afe9;
                }
                    h3{
                        text-align:center;
                    }
                `}</style>
            </div>
        )
    }
}



export default Create;
