import React from 'react'
import { Link } from 'react-router-dom'

const Movies = ({title,poster_path,vote_average,vote_count,popularity,original_language,release_date,overview,id}) => {
    
    const api_img="https://image.tmdb.org/t/p/w500/"
  
    return (
    <div>        
        <li key={id}>
            <table>
                <tr>
                    <td rowSpan={3}>
                    <img style={{width:150,height:250 }}src={api_img + poster_path}/>
                    </td>
                    <td style={{paddingLeft:20}} width={250} height={250/3}>
                        <Link to={'${id}'} 
                        state={{title,poster_path,vote_average,vote_count,popularity,original_language,release_date,overview,id,api_img}}>
                            {title}
                        </Link>
                        </td>
                </tr>
                <tr>
                    <td style={{paddingLeft:20}}>Release Date: {release_date}</td>
                </tr>
                <tr>
                    <td style={{paddingLeft:20}}>IMDB: {vote_average}</td>
                </tr>



            </table>
        </li>
    </div>
  )
}   

export default Movies