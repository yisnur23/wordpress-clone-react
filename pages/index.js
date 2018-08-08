import Link from 'next/link'
import Post from '../components/post'
import Navbar from '../components/navigation'
import axios from 'axios'
class Home extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            posts : []
        }
    }
    componentDidMount(){
        console.log("trying to connect")
        axios.get('http://localhost:8000/posts').then((res)=>{
            this.setState({posts:res.data})

            //console.log(res.data)
        }).catch((e)=>{
            console.log(e)
        })
    }
    handleDelete = (id) =>{
        axios.delete(`http://localhost:8000/posts/${id}`).then((res)=>{
            axios.get('http://localhost:8000/posts').then((res)=>{
                this.setState({posts:res.data})
    
                //console.log(res.data)
            }).catch((e)=>{
                console.log(e)
            })  
        }).catch((e)=>{
            console.log(e)
        })
    }
    render(){
        return(
            <div>
                <Navbar/>
                {this.state.posts.map((postData)=>{
                    console.log({postData})
                    return <Post fn={this.handleDelete} data={postData}/>
                })}
                <style jsx>{
                    `
                    div{
                        margin:0 15px;
                    }
                    `
                }
                </style>
            </div>
        )
    }
}

export default Home;
