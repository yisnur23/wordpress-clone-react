import Link from 'next/link'
const Navbar = () =>{
    return(
        <div>
            <nav>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/create"><a>Create</a></Link></li>
                    </ul>
                </nav>
                <style jsx>{
                    `
                    nav{
                        margin-bottom:1em;
                        padding:1em;
                    }
                    li{
                        list-style:none;
                        float:left;
                    }
                    li a{
                        margin-left:3em;
                        text-decoration:none;
                        text-transform:uppercase;
                        font-family:georgia;
                        font-size:.8em;
                        color:#000;
                    }
                    li a:hover{
                        color:#595959;
                    }
                    nav:after{
                        display:table;
                        content:" ";
                        clear:both;
                    }
                    div{
                        margin:0 15px;
                    }
                    `
                }</style>
        </div>
    )
}

export default Navbar;